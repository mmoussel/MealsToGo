import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";

export const FadeView = ({ duration = 1500, ...props }) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);
  return (
    <Animated.View
      style={{
        ...props.style,
        // Bind opacity to animated value
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};
