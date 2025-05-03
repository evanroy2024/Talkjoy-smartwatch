import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, 
         Modal, TextInput, Dimensions, Alert } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import * as Notifications from 'expo-notifications';
import { AppState } from 'react-native';
import { StyleSheet } from 'react-native';

// Get screen dimensions for responsiveness
const { width, height } = Dimensions.get('window');
const SCREEN_SIZE = Math.min(width, height);
const SCALE_FACTOR = SCREEN_SIZE / 466; // Base size is 466x466

// Scale function for responsive sizing
const scale = (size) => Math.round(size * SCALE_FACTOR);

// Configure notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function WatchUI() {
  // States
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [weatherData, setWeatherData] = useState({ temp: '72°F', condition: 'Sunny', icon: 'sunny' });
  const [heartRate, setHeartRate] = useState('75');
  const [steps, setSteps] = useState('6,247');
  const [activeSection, setActiveSection] = useState(null);
  const [alarms, setAlarms] = useState([]);
  const [showAlarmModal, setShowAlarmModal] = useState(false);
  const [newAlarm, setNewAlarm] = useState({
    hour: '08',
    minute: '00',
    ampm: 'AM',
    date: new Date().toISOString().split('T')[0],
    label: 'Alarm',
    reminderMessage: 'Time for your alarm'
  });
  const [appState, setAppState] = useState(AppState.currentState);

  // Initialize time and date
  useEffect(() => {
    // Setup notification listeners and handlers first
    registerForPushNotificationsAsync();
    
    // Load saved alarms when component mounts
    loadAlarms();
    
    updateTimeAndDate();
    const interval = setInterval(updateTimeAndDate, 1000);
    
    // Simulate step counter incrementing
    const stepInterval = setInterval(() => {
      setSteps(prev => {
        const currentSteps = parseInt(prev.replace(',', ''));
        return (currentSteps + Math.floor(Math.random() * 5)).toLocaleString();
      });
    }, 10000);
    
    // Simulate heart rate variations
    const heartInterval = setInterval(() => {
      setHeartRate(prev => {
        const currentRate = parseInt(prev);
        return (currentRate + Math.floor(Math.random() * 5) - 2).toString();
      });
    }, 5000);
    
    // Fetch weather data
    fetchWeatherData();
    
    // Check for due alarms more frequently - every 15 seconds
    const alarmCheckInterval = setInterval(checkAlarmsForTrigger, 15000);
    
    // Schedule a background task to check alarms
    const backgroundCheckInterval = setInterval(() => {
      console.log("Background alarm check");
      checkAlarmsForTrigger();
    }, 30000);
    
    // Listen for app state changes
    const appStateSubscription = AppState.addEventListener(
      'change',
      nextAppState => {
        console.log("App state changed:", nextAppState);
        if (
          appState.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          // App has come to the foreground
          console.log("App came to foreground, checking alarms");
          loadAlarms();
          checkAlarmsForTrigger();
        } else if (nextAppState.match(/inactive|background/)) {
          // App going to background - ensure alarms are scheduled
          console.log("App going to background, scheduling notifications");
          scheduleNotificationsForAlarms();
        }
        setAppState(nextAppState);
      }
    );
    
    // Perform initial check for alarms
    setTimeout(() => {
      checkAlarmsForTrigger();
    }, 1000);
    
    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
      clearInterval(heartInterval);
      clearInterval(alarmCheckInterval);
      clearInterval(backgroundCheckInterval);
      appStateSubscription.remove();
      // Removed the cleanupNotifications call since it's not a function
    };
  }, [appState]);

  // Effect to check and schedule alarms whenever the alarms state changes
  useEffect(() => {
    // Save alarms whenever they change
    saveAlarms();
    
    // Re-schedule notifications for all active alarms
    scheduleNotificationsForAlarms();
  }, [alarms]);

  const updateTimeAndDate = () => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    setCurrentDate(now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' }));
  };

  const fetchWeatherData = () => {
    // Simulating API call for weather
    // In a real app, you would use a weather API
    const weatherConditions = [
      { temp: '72°F', condition: 'Sunny', icon: 'sunny' },
      { temp: '68°F', condition: 'Cloudy', icon: 'cloudy' },
      { temp: '64°F', condition: 'Rainy', icon: 'rainy' },
      { temp: '75°F', condition: 'Partly Cloudy', icon: 'partly-sunny' }
    ];
    
    setWeatherData(weatherConditions[Math.floor(Math.random() * weatherConditions.length)]);
  };

  // Save alarms to AsyncStorage
  const saveAlarms = async () => {
    try {
      await AsyncStorage.setItem('watchui_alarms', JSON.stringify(alarms));
    } catch (error) {
      console.error('Error saving alarms:', error);
    }
  };

  // Load alarms from AsyncStorage
  const loadAlarms = async () => {
    try {
      const storedAlarms = await AsyncStorage.getItem('watchui_alarms');
      if (storedAlarms !== null) {
        setAlarms(JSON.parse(storedAlarms));
      }
    } catch (error) {
      console.error('Error loading alarms:', error);
    }
  };

  // Register for notifications - modified to not return a value
  const registerForPushNotificationsAsync = async () => {
    try {
      await Notifications.requestPermissionsAsync({
        ios: {
          allowAlert: true,
          allowBadge: true,
          allowSound: true,
        },
      });
    } catch (error) {
      console.error('Error requesting notification permissions:', error);
    }
  };

  // Schedule notifications for all active alarms
  const scheduleNotificationsForAlarms = async () => {
    // First cancel all existing notifications
    await Notifications.cancelAllScheduledNotificationsAsync();
    
    // Then schedule new ones for active alarms
    for (const alarm of alarms) {
      if (alarm.active) {
        const alarmTime = new Date(alarm.timestamp);
        // Only schedule if the alarm is in the future
        if (alarmTime > new Date()) {
          await scheduleAlarmNotification(alarm);
        }
      }
    }
  };

  // Schedule a single notification for an alarm
  const scheduleAlarmNotification = async (alarm) => {
    try {
      const trigger = new Date(alarm.timestamp);
      
      await Notifications.scheduleNotificationAsync({
        content: {
          title: alarm.label,
          body: alarm.reminderMessage || 'Time for your alarm',
          sound: true,
          data: { alarmId: alarm.id },
        },
        trigger,
      });
    } catch (error) {
      console.error('Error scheduling notification:', error);
    }
  };

  // Check alarms to see if any should be triggered
  const checkAlarmsForTrigger = () => {
    const now = new Date().getTime();
    let alarmsUpdated = false;
    
    // Check each alarm
    alarms.forEach(alarm => {
      if (alarm.active && alarm.timestamp <= now && alarm.timestamp > now - 60000) {
        // Trigger the alarm if it's due within the last minute
        triggerAlarm(alarm);
        alarmsUpdated = true;
      }
    });
    
    if (alarmsUpdated) {
      saveAlarms();
    }
  };

// Trigger an alarm with speech and vibration
const triggerAlarm = (alarm) => {
  // First stop any ongoing speech
  Speech.stop();
  
  // Speak the message immediately with higher volume and priority
  const message = alarm.reminderMessage || alarm.label || 'Your alarm is ringing';
  console.log("Speaking alarm message:", message);
  
  // Use the built-in Speech API directly
  Speech.speak(message, {
    language: 'en',
    pitch: 1.0,
    rate: 0.9,
    volume: 1.0
  });
  
  // Show alert for UI feedback
  Alert.alert(
    alarm.label,
    alarm.reminderMessage || 'Your alarm is ringing',
    [
      { text: 'Dismiss', onPress: () => {
        Speech.stop();
        toggleAlarm(alarm.id);
      }},
      { text: 'Snooze', onPress: () => {
        Speech.stop();
        snoozeAlarm(alarm.id);
      }}
    ],
    { cancelable: false }
  );
  
  // Repeat the speech a few times with a delay between each
  let speechCount = 0;
  const speechInterval = setInterval(() => {
    if (speechCount < 4) { // Will speak a total of 5 times (initial + 4 repeats)
      speechCount++;
      Speech.speak(message, {
        language: 'en',
        pitch: 1.0,
        rate: 0.9,
        volume: 1.0
      });
    } else {
      clearInterval(speechInterval);
    }
  }, 3000); // Every 3 seconds
};

  // Speak a message using text-to-speech
  const speakReminderMessage = (message) => {
    const options = {
      language: 'en',
      pitch: 1.0,
      rate: 0.9,
    };
    
    Speech.speak(message, options);
  };

  // Force speak a message (added for quick reminders)
// Speak a message using text-to-speech with force priority
const forceSpeakMessage = (message) => {
  // Stop any ongoing speech first
  Speech.stop();
  
  // Then speak with higher priority and volume
  const options = {
    language: 'en',
    pitch: 1.1,      // Slightly higher pitch for urgency
    rate: 0.8,       // Slightly slower rate for clarity
    volume: 1.0,     // Maximum volume
  };
  
  // Try-catch to handle any speech errors gracefully
  try {
    Speech.speak(message, options);
  } catch (error) {
    console.error('Speech error:', error);
    // Fallback to standard speech if enhanced fails
    Speech.speak(message);
  }
};

  // Snooze an alarm for 5 minutes
  const snoozeAlarm = (id) => {
    const updatedAlarms = alarms.map(alarm => {
      if (alarm.id === id) {
        const newTimestamp = new Date().getTime() + 5 * 60 * 1000; // 5 minutes
        return {
          ...alarm,
          timestamp: newTimestamp,
          time: new Date(newTimestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          snoozed: true
        };
      }
      return alarm;
    });
    
    setAlarms(updatedAlarms);
  };

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  const addAlarm = () => {
    // Format the values for validation before saving
    let hourValue = newAlarm.hour ? parseInt(newAlarm.hour) : 12;
    if (hourValue < 1) hourValue = 12;
    if (hourValue > 12) hourValue = hourValue % 12 || 12;
    
    let minuteValue = newAlarm.minute ? parseInt(newAlarm.minute) : 0;
    if (minuteValue > 59) minuteValue = 59;
    
    // Format time for display (with leading zeros for minutes)
    const formattedHour = hourValue.toString();
    const formattedMinute = minuteValue.toString().padStart(2, '0');
    const formattedTime = `${formattedHour}:${formattedMinute} ${newAlarm.ampm}`;
    
    // Calculate timestamp for comparison and countdown
    const alarmDate = new Date(newAlarm.date);
    const isPM = newAlarm.ampm === 'PM';
    const hour24 = isPM && hourValue !== 12 
                   ? hourValue + 12 
                   : (hourValue === 12 && !isPM ? 0 : hourValue);
    
    alarmDate.setHours(hour24, minuteValue, 0, 0);
    
    const newAlarmObj = {
      id: Date.now().toString(),
      time: formattedTime,
      date: newAlarm.date,
      timestamp: alarmDate.getTime(),
      label: newAlarm.label || 'Alarm',
      reminderMessage: newAlarm.reminderMessage || 'Time for your alarm',
      active: true
    };
    
    setAlarms([...alarms, newAlarmObj]);
    setShowAlarmModal(false);
    
    // Speak confirmation
    speakReminderMessage(`Alarm set for ${formattedTime} on ${newAlarm.date}`);
    
    // Reset form
    setNewAlarm({
      hour: '08',
      minute: '00',
      ampm: 'AM',
      date: new Date().toISOString().split('T')[0],
      label: 'Alarm',
      reminderMessage: 'Time for your alarm'
    });
    
    Alert.alert('Alarm Set', `Alarm set for ${formattedTime} on ${newAlarm.date}`);
  };

  const toggleAlarm = (id) => {
    setAlarms(alarms.map(alarm => 
      alarm.id === id ? {...alarm, active: !alarm.active} : alarm
    ));
  };

  const deleteAlarm = (id) => {
    setAlarms(alarms.filter(alarm => alarm.id !== id));
  };

  // Calculate time remaining for each alarm
  const getTimeRemaining = (timestamp) => {
    const now = new Date().getTime();
    const distance = timestamp - now;
    
    if (distance < 0) return 'Passed';
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  // Quick reminders data with speech commands
  const quickReminders = [
    { title: 'Take Pills', icon: 'pills', type: 'font-awesome-5', message: 'Time to take your medicine' },
    { title: 'Drink Water', icon: 'water', type: 'material', message: 'Remember to stay hydrated and drink water' },
    { title: 'Stand Up', icon: 'directions-walk', type: 'material', message: "Let's stand up and stretch for a moment" },
  ];

  // Trigger a quick reminder with speech
  const triggerQuickReminder = (reminder) => {
    // Force speak the reminder message
    forceSpeakMessage(reminder.message);
    
    // Show alert with dismissable options
    Alert.alert(
      reminder.title, 
      reminder.message,
      [
        { text: 'OK', onPress: () => Speech.stop() }
      ],
      { cancelable: false }
    );
    
    // Create a notification to ensure the reminder works
    Notifications.scheduleNotificationAsync({
      content: {
        title: reminder.title,
        body: reminder.message,
        sound: true,
        priority: 'high',
        data: { message: reminder.message }
      },
      trigger: null // Show immediately
    });
  };

  // Forecast data (would come from API in real app)
  const forecastData = [
    { day: 'Fri', icon: 'partly-sunny', temp: '74°' },
    { day: 'Sat', icon: 'rainy', temp: '68°' },
    { day: 'Sun', icon: 'sunny', temp: '76°' },
  ];

  // Handle hour input change
  const handleHourChange = (text) => {
    // Just use the last 2 digits entered if more than 2
    const numericValue = text.replace(/[^0-9]/g, '');
    const limitedDigits = numericValue.slice(-2);
    
    // Always allow typing - just format afterward
    setNewAlarm({...newAlarm, hour: limitedDigits});
  };

  // Handle minute input change
  const handleMinuteChange = (text) => {
    // Just use the last 2 digits entered if more than 2
    const numericValue = text.replace(/[^0-9]/g, '');
    const limitedDigits = numericValue.slice(-2);
    
    // Always allow typing - just enforce format after
    setNewAlarm({...newAlarm, minute: limitedDigits});
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Time and Date */}
        <View style={styles.section}>
          <View style={styles.timeSection}>
            <Text style={styles.time}>{currentTime}</Text>
          </View>
          <Text style={styles.date}>{currentDate}</Text>
        </View>

        {/* Alarm and Reminders */}
        <TouchableOpacity style={styles.sectionHeader} onPress={() => toggleSection('alarms')}>
          <Ionicons name="alarm-outline" size={scale(16)} color="#333" />
          <Text style={styles.sectionTitle}>Alarms & Reminders</Text>
          <MaterialIcons 
            name={activeSection === 'alarms' ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
            size={scale(16)} 
            color="#333" 
          />
        </TouchableOpacity>
        
        {activeSection === 'alarms' && (
          <View style={styles.expandedSection}>
            {/* Alarm List */}
            {alarms.length > 0 ? (
              <View style={styles.alarmList}>
                {alarms.map(alarm => (
                  <View key={alarm.id} style={styles.alarmItem}>
                    <TouchableOpacity 
                      style={[styles.alarmToggle, alarm.active ? styles.alarmActive : styles.alarmInactive]}
                      onPress={() => toggleAlarm(alarm.id)}
                    >
                      <MaterialIcons 
                        name={alarm.active ? "alarm-on" : "alarm-off"} 
                        size={scale(14)} 
                        color={alarm.active ? "#fff" : "#666"} 
                      />
                    </TouchableOpacity>
                    <View style={styles.alarmInfo}>
                      <Text style={styles.alarmTime}>{alarm.time}</Text>
                      <Text style={styles.alarmLabel}>
                        {alarm.label} • {getTimeRemaining(alarm.timestamp)}
                        {alarm.snoozed ? ' • Snoozed' : ''}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={() => deleteAlarm(alarm.id)}>
                      <MaterialIcons name="delete-outline" size={scale(16)} color="#FF6347" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ) : (
              <Text style={styles.noAlarmsText}>No alarms set</Text>
            )}
            
            {/* Add Alarm Button */}
            <TouchableOpacity 
              style={styles.addAlarmButton}
              onPress={() => setShowAlarmModal(true)}
            >
              <MaterialIcons name="add-alarm" size={scale(14)} color="#fff" />
              <Text style={styles.addAlarmText}>Add Alarm</Text>
            </TouchableOpacity>
            
            {/* Quick Reminders */}
            <Text style={styles.subsectionTitle}>Quick Reminders</Text>
            <View style={styles.reminderList}>
              {quickReminders.map((reminder, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.reminderButton}
                  onPress={() => triggerQuickReminder(reminder)}
                >
                  {reminder.type === 'material' ? 
                    <MaterialIcons name={reminder.icon} size={scale(14)} color="#333" /> :
                    <FontAwesome5 name={reminder.icon} size={scale(14)} color="#333" />
                  }
                  <Text style={styles.reminderText}>{reminder.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Weather Forecast */}
        <TouchableOpacity style={styles.sectionHeader} onPress={() => toggleSection('weather')}>
          <Ionicons name="partly-sunny-outline" size={scale(16)} color="#333" />
          <Text style={styles.sectionTitle}>Weather</Text>
          <MaterialIcons 
            name={activeSection === 'weather' ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
            size={scale(16)} 
            color="#333" 
          />
        </TouchableOpacity>
        
        {activeSection === 'weather' && (
          <View style={styles.expandedSection}>
            <View style={styles.weatherDisplay}>
              <Ionicons name={weatherData.icon} size={scale(24)} color="#FFD700" />
              <View style={styles.weatherInfo}>
                <Text style={styles.weatherTemp}>{weatherData.temp}</Text>
                <Text style={styles.weatherCondition}>{weatherData.condition}</Text>
              </View>
            </View>
            <View style={styles.forecastContainer}>
              {forecastData.map((item, index) => (
                <View key={index} style={styles.forecastItem}>
                  <Text style={styles.forecastDay}>{item.day}</Text>
                  <Ionicons name={item.icon} size={scale(14)} color={item.icon.includes('rainy') ? '#4169E1' : '#FFD700'} />
                  <Text style={styles.forecastTemp}>{item.temp}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Heart & Health */}
        <TouchableOpacity style={styles.sectionHeader} onPress={() => toggleSection('health')}>
          <Ionicons name="heart-outline" size={scale(16)} color="#333" />
          <Text style={styles.sectionTitle}>Heart & Health</Text>
          <MaterialIcons 
            name={activeSection === 'health' ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
            size={scale(16)} 
            color="#333" 
          />
        </TouchableOpacity>
        
        {activeSection === 'health' && (
          <View style={styles.expandedSection}>
            <View style={styles.healthMetric}>
              <View style={styles.metricIcon}>
                <Ionicons name="heart" size={scale(18)} color="#FF6347" />
              </View>
              <View style={styles.metricInfo}>
                <Text style={styles.metricValue}>{heartRate} <Text style={styles.metricUnit}>bpm</Text></Text>
                <Text style={styles.metricLabel}>Heart Rate</Text>
              </View>
            </View>
            
            <View style={styles.healthMetric}>
              <View style={styles.metricIcon}>
                <MaterialIcons name="local-fire-department" size={scale(18)} color="#FF8C00" />
              </View>
              <View style={styles.metricInfo}>
                <Text style={styles.metricValue}>347 <Text style={styles.metricUnit}>cal</Text></Text>
                <Text style={styles.metricLabel}>Calories Burned</Text>
              </View>
            </View>
            
            <View style={styles.healthMetric}>
              <View style={styles.metricIcon}>
                <FontAwesome5 name="bed" size={scale(14)} color="#4169E1" />
              </View>
              <View style={styles.metricInfo}>
                <Text style={styles.metricValue}>7.5 <Text style={styles.metricUnit}>hrs</Text></Text>
                <Text style={styles.metricLabel}>Sleep</Text>
              </View>
            </View>
          </View>
        )}

        {/* Steps */}
        <TouchableOpacity style={styles.sectionHeader} onPress={() => toggleSection('steps')}>
          <FontAwesome5 name="shoe-prints" size={scale(14)} color="#333" />
          <Text style={styles.sectionTitle}>Steps</Text>
          <MaterialIcons 
            name={activeSection === 'steps' ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
            size={scale(16)} 
            color="#333" 
          />
        </TouchableOpacity>
        
        {activeSection === 'steps' && (
          <View style={styles.expandedSection}>
            <View style={styles.stepsContainer}>
              <View style={styles.stepsCircle}>
                <Text style={styles.stepsCount}>{steps}</Text>
                <Text style={styles.stepsGoal}>/ 10,000</Text>
              </View>
              <View style={styles.stepsInfo}>
                <Text style={styles.stepsDistance}>3.1 mi</Text>
                <Text style={styles.stepsLabel}>Distance</Text>
              </View>
            </View>
            <View style={styles.stepProgress}>
              <View 
                style={[
                  styles.progressBar, 
                  { width: `${(parseInt(steps.replace(',', '')) / 10000) * 100}%` }
                ]} 
              />
            </View>
          </View>
        )}
      </ScrollView>
      
      {/* Modal for adding alarms */}
      <Modal
        visible={showAlarmModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Set Alarm</Text>
            
            {/* Time picker */}
            <View style={styles.timePickerRow}>
              <TextInput
                style={styles.timeInput}
                value={newAlarm.hour}
                onChangeText={handleHourChange}
                keyboardType="number-pad"
                maxLength={2}
                placeholder="12"
                selectTextOnFocus={true}
              />
              <Text style={styles.timeSeparator}>:</Text>
              <TextInput
                style={styles.timeInput}
                value={newAlarm.minute}
                onChangeText={handleMinuteChange}
                keyboardType="number-pad"
                maxLength={2}
                placeholder="00"
                selectTextOnFocus={true}
              />
              <TouchableOpacity 
                style={[styles.ampmButton, newAlarm.ampm === 'AM' ? styles.ampmActive : null]}
                onPress={() => setNewAlarm({...newAlarm, ampm: 'AM'})}
              >
                <Text style={[styles.ampmText, newAlarm.ampm === 'AM' ? styles.ampmActiveText : null]}>AM</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.ampmButton, newAlarm.ampm === 'PM' ? styles.ampmActive : null]}
                onPress={() => setNewAlarm({...newAlarm, ampm: 'PM'})}
              >
                <Text style={[styles.ampmText, newAlarm.ampm === 'PM' ? styles.ampmActiveText : null]}>PM</Text>
              </TouchableOpacity>
            </View>
            
            {/* Date picker */}
            <View style={styles.datePickerContainer}>
              <Text style={styles.inputLabel}>Date:</Text>
              <TextInput
                style={styles.dateInput}
                value={newAlarm.date}
                onChangeText={(text) => setNewAlarm({...newAlarm, date: text})}
                placeholder="YYYY-MM-DD"
                selectTextOnFocus={true}
              />
            </View>
            
            {/* Label input */}
            <View style={styles.labelContainer}>
              <Text style={styles.inputLabel}>Label:</Text>
              <TextInput
                style={styles.labelInput}
                value={newAlarm.label}
                onChangeText={(text) => setNewAlarm({...newAlarm, label: text})}
                placeholder="Alarm"
                selectTextOnFocus={true}
              />
            </View>
            
            {/* Reminder message */}
            <View style={styles.labelContainer}>
              <Text style={styles.inputLabel}>Voice Reminder:</Text>
              <TextInput
                style={styles.labelInput}
                value={newAlarm.reminderMessage}
                onChangeText={(text) => setNewAlarm({...newAlarm, reminderMessage: text})}
                placeholder="Time for your alarm"
                selectTextOnFocus={true}
              />
            </View>
            
            {/* Test voice button */}
            <TouchableOpacity
              style={styles.testVoiceButton}
              onPress={() => speakReminderMessage(newAlarm.reminderMessage || 'Time for your alarm')}
            >
              <Ionicons name="volume-high" size={scale(14)} color="#fff" />
              <Text style={styles.testVoiceText}>Test Voice</Text>
            </TouchableOpacity>
            
            {/* Buttons */}
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowAlarmModal(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.saveButton]}
                onPress={addAlarm}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',         // Light gray background
    borderRadius: scale(233),
    overflow: 'hidden',
    width: scale(466),
    height: scale(466),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 7,                     // Red border width
    borderColor: '#e0e0e0',             // Red border color
    padding: scale(12),                  // Padding inside the container
  },
  
  
  scrollView: {
    width: '100%',
    height: '100%',
    paddingHorizontal: scale(8), // Reduced horizontal padding for more space
  },
  scrollViewContent: {
    paddingTop: scale(20),
    paddingBottom: scale(40),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    marginBottom: scale(12), // Reduced margin for tighter layout
  },
  timeSection: {
    marginBottom: scale(4),
  },
  time: {
    fontSize: scale(40), // Increased font size for better visibility
    fontWeight: '600', // Made slightly bolder
    color: '#000',
    textAlign: 'center',
    // Add text shadow for more beautiful appearance
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  date: {
    fontSize: scale(16), // Slightly bigger
    color: '#444', // Darker for better readability
    textAlign: 'center',
    marginTop: scale(2),
    fontWeight: '400', // Added slight weight
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(8),
    paddingHorizontal: scale(12),
    backgroundColor: '#fff',
    borderRadius: scale(18),
    marginBottom: scale(8),
    width: '95%', // Wider to use more space
    maxWidth: scale(300), // Increased max width
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: scale(18),
    fontWeight: '600',
    color: '#333333', // Deep gray — not harsh like black, but super readable
    flex: 1,
    marginLeft: scale(8),
  },
  sectionIcon: {
    marginRight: scale(8),
  },  
  expandedSection: {
    backgroundColor: '#fff',
    borderRadius: scale(18),
    paddingVertical: scale(10),
    paddingHorizontal: scale(12),
    marginBottom: scale(12),
    width: '95%', // Wider to use more space
    maxWidth: scale(300), // Increased max width
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  alarmList: {
    width: '100%',
  },
  alarmItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(7), // Slightly increased for better touch targets
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  alarmToggle: {
    width: scale(22), // Slightly smaller to save space
    height: scale(22),
    borderRadius: scale(11),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(8),
  },
  alarmActive: {
    backgroundColor: '#4CAF50',
  },
  alarmInactive: {
    backgroundColor: '#e0e0e0',
  },
  alarmInfo: {
    flex: 1,
  },
  alarmTime: {
    fontSize: scale(13), // Increased from 12
    fontWeight: '600', // Bolder for better visibility
    color: '#222', // Darker for better contrast
  },
  alarmLabel: {
    fontSize: scale(10),
    color: '#666',
  },
  noAlarmsText: {
    fontSize: scale(12),
    color: '#666',
    textAlign: 'center',
    marginVertical: scale(10),
  },
  addAlarmButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: scale(15),
    paddingVertical: scale(7), // Slightly larger for better touch
    paddingHorizontal: scale(12),
    marginVertical: scale(10),
    alignSelf: 'center',
  },
  addAlarmText: {
    fontSize: scale(12), // Increased from 11
    fontWeight: '500', // Added weight
    color: '#fff',
    marginLeft: scale(6),
  },
  subsectionTitle: {
    fontSize: scale(13), // Increased from 12
    fontWeight: '600', // Bolder
    color: '#222', // Darker for contrast
    marginVertical: scale(8),
  },
  reminderList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  reminderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: scale(12),
    paddingVertical: scale(7), // Increased for better touch target
    paddingHorizontal: scale(10),
    marginBottom: scale(6),
    width: '48%',
  },
  reminderText: {
    fontSize: scale(10),
    color: '#333',
    marginLeft: scale(6),
    flexShrink: 1, // Added to ensure text wraps properly
  },
  weatherDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(10),
  },
  weatherInfo: {
    marginLeft: scale(12),
  },
  weatherTemp: {
    fontSize: scale(18), // Increased from 16
    fontWeight: '600', // Bolder
    color: '#222', // Darker for contrast
  },
  weatherCondition: {
    fontSize: scale(12), // Increased from 11
    color: '#555', // Darker for readability
  },
  forecastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: scale(8),
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  forecastItem: {
    alignItems: 'center',
    paddingHorizontal: scale(2), // Added to ensure proper spacing
  },
  forecastDay: {
    fontSize: scale(10),
    color: '#333',
    marginBottom: scale(4),
  },
  forecastTemp: {
    fontSize: scale(10),
    fontWeight: '500',
    color: '#333',
    marginTop: scale(4),
  },
  healthMetric: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(8),
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  metricIcon: {
    width: scale(30), // Slightly smaller
    height: scale(30),
    borderRadius: scale(15),
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(10),
  },
  metricInfo: {
    flex: 1,
  },
  metricValue: {
    fontSize: scale(15), // Increased from 14
    fontWeight: '600', // Bolder
    color: '#222', // Darker for contrast
  },
  metricUnit: {
    fontSize: scale(10),
    color: '#666',
  },
  metricLabel: {
    fontSize: scale(10),
    color: '#666',
  },
  stepsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(10),
  },
  stepsCircle: {
    width: scale(56), // Slightly smaller to save space
    height: scale(56),
    borderRadius: scale(28),
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3, // Increased border width for emphasis
    borderColor: '#4CAF50',
  },
  stepsCount: {
    fontSize: scale(13), // Increased from 12
    fontWeight: '600', // Bolder
    color: '#222', // Darker for contrast
  },
  stepsGoal: {
    fontSize: scale(9),
    color: '#666',
  },
  stepsInfo: {
    marginLeft: scale(12),
    flex: 1, // Added to ensure proper layout
  },
  stepsDistance: {
    fontSize: scale(15), // Increased from 14
    fontWeight: '600', // Bolder
    color: '#222', // Darker for contrast
  },
  stepsLabel: {
    fontSize: scale(10),
    color: '#666',
  },
  stepProgress: {
    width: '100%',
    height: scale(6),
    backgroundColor: '#f0f0f0',
    borderRadius: scale(3),
    overflow: 'hidden',
    marginTop: scale(4), // Added space
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: scale(3),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%', // Increased from 80% for small screens
    maxWidth: scale(270),
    backgroundColor: '#fff',
    borderRadius: scale(20),
    padding: scale(15),
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: scale(16), // Increased from 14
    fontWeight: '600',
    color: '#222', // Darker for contrast
    marginBottom: scale(15),
    textAlign: 'center', // Ensure centered
  },
  timePickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: scale(15),
  },
  timeInput: {
    width: scale(40),
    height: scale(40),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: scale(8),
    textAlign: 'center',
    fontSize: scale(16), // Increased from 14 for better visibility
  },
  timeSeparator: {
    fontSize: scale(18),
    fontWeight: '600',
    color: '#333',
    marginHorizontal: scale(5),
  },
  ampmButton: {
    width: scale(40),
    height: scale(32), // Increased from 30 for better touch target
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: scale(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(5),
  },
  ampmActive: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  ampmText: {
    fontSize: scale(12),
    color: '#333',
  },
  ampmActiveText: {
    color: '#fff',
  },
  datePickerContainer: {
    width: '100%',
    marginBottom: scale(12),
  },
  inputLabel: {
    fontSize: scale(12),
    color: '#333',
    marginBottom: scale(5),
    fontWeight: '500', // Added weight
  },
  dateInput: {
    width: '100%',
    height: scale(38), // Increased from 36 for better touch target
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: scale(8),
    paddingHorizontal: scale(8),
    fontSize: scale(13), // Increased from 12
  },
  labelContainer: {
    width: '100%',
    marginBottom: scale(15),
  },
  labelInput: {
    width: '100%',
    height: scale(38), // Increased from 36
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: scale(8),
    paddingHorizontal: scale(8),
    fontSize: scale(13), // Increased from 12
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    width: '48%',
    height: scale(40), // Increased from 36 for better touch target
    borderRadius: scale(20), // Increased from 18 for better roundness
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  cancelButtonText: {
    fontSize: scale(13), // Increased from 12
    color: '#333',
    fontWeight: '500', // Added weight
  },
  saveButtonText: {
    fontSize: scale(13), // Increased from 12
    color: '#fff',
    fontWeight: '500', // Added weight
  },
});