import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Animated, 
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Ionicons } from '@expo/vector-icons';
import LeftView from '../../components/LeftView';
import RightView from '../../components/RightView';

// Get the dimensions for responsive circle calculations
const { width, height } = Dimensions.get('window');
const circleSize = Math.min(width, height);
const borderWidth = circleSize * 0.02; // Responsive border width
const contentSize = circleSize - (borderWidth * 2); // Size of inner content area

export default function HomeScreen() {
  // View state management
  const [currentView, setCurrentView] = useState<'welcome' | 'main' | 'left' | 'right'>('welcome');
  
  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const mainScreenAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  
  // Clock state
  const [currentTime, setCurrentTime] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState('');

  // Initialize clock and animations
  useEffect(() => {
    // Start welcome animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Set timeout to switch to main view
    const timer = setTimeout(() => {
      Animated.timing(mainScreenAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
      setCurrentView('main');
      
      // Start pulsing animation for talk icon
      startPulseAnimation();
    }, 1500);

    // Update clock every second
    const clockInterval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // Format date: "Monday, 28 April 2025"
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      setFormattedDate(now.toLocaleDateString(undefined, options));
    }, 1000);

    // Cleanup
    return () => {
      clearTimeout(timer);
      clearInterval(clockInterval);
    };
  }, []);

  // Create subtle pulse animation for talk icon
  const startPulseAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        })
      ])
    ).start();
  };

  // Gesture handlers
  const handleSwipeLeft = () => {
    if (currentView === 'main') setCurrentView('right');
    else if (currentView === 'left') setCurrentView('main');
  };

  const handleSwipeRight = () => {
    if (currentView === 'main') setCurrentView('left');
    else if (currentView === 'right') setCurrentView('main');
  };

  const gestureConfig = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 50,
    gestureIsClickThreshold: 2,
  };

  // Format time in HH:MM:SS
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      
      {currentView === 'welcome' && (
        <Animated.View style={[styles.watchFrame, { opacity: fadeAnim }]}>
          <View style={styles.watchBorder}>
            <View style={styles.welcomeCircle}>
              <Text style={styles.welcomeText}>Smart Watch</Text>
              <Ionicons name="time-outline" size={circleSize * 0.15} color="#1E88E5" style={styles.welcomeIcon} />
            </View>
          </View>
        </Animated.View>
      )}

      {currentView !== 'welcome' && (
        <GestureRecognizer
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
          config={gestureConfig}
          style={styles.gestureContainer}
        >
          {currentView === 'main' && (
            <Animated.View style={[styles.watchFrame, { opacity: mainScreenAnim }]}>
              {/* Watch border */}
              <View style={styles.watchBorder}>
                <View style={styles.watchFace}>
                  {/* Time display */}
                  <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
                  
                  {/* Date display */}
                  <Text style={styles.dateText}>{formattedDate}</Text>
                  
                  {/* Talk button with pulse effect */}
                  <Animated.View 
                    style={[
                      styles.iconButtonContainer,
                      { transform: [{ scale: pulseAnim }] }
                    ]}
                  >
                    <TouchableOpacity style={styles.iconButton}>
                      <Ionicons name="mic" size={circleSize * 0.08} color="#1E88E5" />
                      <Text style={styles.iconText}>Talk</Text>
                    </TouchableOpacity>
                  </Animated.View>
                </View>
              </View>
            </Animated.View>
          )}

          {currentView === 'left' && <LeftView onBack={() => setCurrentView('main')} />}
          {currentView === 'right' && <RightView onBack={() => setCurrentView('main')} />}
        </GestureRecognizer>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  watchFrame: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  watchBorder: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    borderWidth: borderWidth,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    // Add subtle shadow if not on web (shadow doesn't work well on web)
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  welcomeCircle: {
    width: contentSize,
    height: contentSize,
    borderRadius: contentSize / 2,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: circleSize * 0.07,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: circleSize * 0.03,
  },
  welcomeIcon: {
    marginTop: circleSize * 0.02,
  },
  gestureContainer: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    overflow: 'hidden',
  },
  watchFace: {
    width: contentSize,
    height: contentSize,
    borderRadius: contentSize / 2,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingTop: contentSize * 0.18,
  },
  timeText: {
    fontSize: circleSize * 0.1,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: circleSize * 0.02,
    letterSpacing: 1,
  },
  dateText: {
    fontSize: circleSize * 0.035,
    color: '#555',
    marginBottom: circleSize * 0.15,
    textAlign: 'center',
    paddingHorizontal: circleSize * 0.05,
  },
  iconButtonContainer: {
    marginTop: circleSize * 0.05,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: circleSize * 0.22,
    height: circleSize * 0.22,
    borderRadius: circleSize * 0.11,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 1,
    borderColor: '#ddd',
    // Add subtle shadow if not on web
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  iconText: {
    fontSize: circleSize * 0.035,
    color: '#333',
    marginTop: circleSize * 0.01,
    fontWeight: '500',
  }
});