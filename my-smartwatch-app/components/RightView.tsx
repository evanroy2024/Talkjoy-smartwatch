import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Dimensions, LinearGradient } from 'react-native';
import { Feather } from '@expo/vector-icons';
import GestureRecognizer from 'react-native-swipe-gestures';
import * as Animatable from 'react-native-animatable';

export default function CallInterface({ onBack }: { onBack?: () => void }) {
  // Get screen dimensions to ensure proper scaling for round display
  const screenWidth = Dimensions.get('window').width;
  const circleSize = screenWidth * 0.95; // 95% of screen width for the circular container
  
  // Function to handle audio call
  const handleAudioCall = () => {
    Linking.openURL('tel:');
  };
  
  // Function to handle video call
  const handleVideoCall = () => {
    Linking.openURL('tel:');
  };
  
  // Function to handle settings (currently does nothing)
  const handleSettings = () => {
    console.log('Settings pressed - no action implemented');
  };

  return (
    <GestureRecognizer
      onSwipeRight={onBack}
      config={{
        velocityThreshold: 0.1,
        directionalOffsetThreshold: 50,
        gestureIsClickThreshold: 2,
      }}
      style={styles.container}
    >
      {/* Circular background to mimic round watch face */}
      <View style={[styles.circleContainer, { width: circleSize, height: circleSize }]}>
        {/* Decorative elements */}
        <View style={styles.decorativeRing} />
        
        {/* Header with animation */}
        <Animatable.Text 
          animation="pulse" 
          iterationCount="infinite" 
          duration={2000}
          style={styles.headerText}>
          Quick Dial
        </Animatable.Text>
        
        {/* Icons container with larger, more visually appealing icons */}
        <View style={styles.iconsContainer}>
          {/* Video Call Button */}
          <Animatable.View animation="fadeIn" delay={100}>
            <TouchableOpacity 
              style={styles.iconButton} 
              onPress={handleVideoCall}
              activeOpacity={0.7}
            >
              <View style={[styles.iconCircle, styles.videoIconBg]}>
                <Feather name="video" size={32} color="#FFFFFF" />
              </View>
              <Text style={styles.iconText}>Video</Text>
            </TouchableOpacity>
          </Animatable.View>
          
          {/* Audio Call Button */}
          <Animatable.View animation="fadeIn" delay={200}>
            <TouchableOpacity 
              style={styles.iconButton} 
              onPress={handleAudioCall}
              activeOpacity={0.7}
            >
              <View style={[styles.iconCircle, styles.callIconBg]}>
                <Feather name="phone" size={32} color="#FFFFFF" />
              </View>
              <Text style={styles.iconText}>Call</Text>
            </TouchableOpacity>
          </Animatable.View>
          
          {/* Settings Button */}
          <Animatable.View animation="fadeIn" delay={300}>
            <TouchableOpacity 
              style={styles.iconButton} 
              onPress={handleSettings}
              activeOpacity={0.7}
            >
              <View style={[styles.iconCircle, styles.settingsIconBg]}>
                <Feather name="settings" size={32} color="#FFFFFF" />
              </View>
              <Text style={styles.iconText}>Settings</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
        
        {/* Decorative dots */}
        <View style={styles.decorativeDots}>
          {[...Array(6)].map((_, i) => (
            <View key={i} style={styles.dot} />
          ))}
        </View>
        
        {/* Subtle swipe hint at bottom */}
        <Animatable.Text 
          animation="fadeIn" 
          delay={500}
          style={styles.swipeHint}>
          Swipe right to go back
        </Animatable.Text>
      </View>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    borderRadius: 1000, // Very large value ensures a perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  decorativeRing: {
    position: 'absolute',
    width: '94%',
    height: '94%',
    borderRadius: 1000,
    borderWidth: 8,
    borderColor: '#F5F5F5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: 15,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  videoIconBg: {
    backgroundColor: '#4CAF50',  // Green
  },
  callIconBg: {
    backgroundColor: '#2196F3',  // Blue
  },
  settingsIconBg: {
    backgroundColor: '#9C27B0',  // Purple
  },
  iconText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginTop: 4,
  },
  decorativeDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#DDDDDD',
    marginHorizontal: 3,
  },
  swipeHint: {
    fontSize: 12,
    color: '#999999',
    marginTop: 10,
    textAlign: 'center',
  },
});