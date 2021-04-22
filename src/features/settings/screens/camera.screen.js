import React, { useContext, useState, useEffect, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, TouchableOpacity, Platform } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/Authentication/Authentication.context";

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = useState(null);

  const savePhoto = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@photo-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await savePhoto(photo.uri, user.uid);
      navigation.goBack();
    }
  };
  const cameraRef = useRef();
  const ProfileCamera = styled(Camera)`
    width: 100%;
    height: 100%;
  `;
  const Snapshoot = styled(AntDesign)`
    position: absolute;
    top: 80%;
    left: 45%;
  `;

  const isAndroid = Platform.OS === "android";

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <TouchableOpacity style={{ backgroundColor: "yellow" }} onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      >
        {isAndroid ? (
          <Snapshoot name="camera" size={60} color="tomato" />
        ) : null}
      </ProfileCamera>
    </TouchableOpacity>
  );
};
