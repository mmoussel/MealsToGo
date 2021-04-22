import React, { useContext, useState, useCallback, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity, Platform } from "react-native";
import { List, Avatar, Button, Modal } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safeArea";
import { AuthenticationContext } from "../../../services/Authentication/Authentication.context";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setMenu(false);
    if (!result.cancelled) {
      await savePhoto(result.uri, user.uid);
      loadPhoto(user.uid);
      setMenu(false);
    }
  };
  const savePhoto = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@photo-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadPhoto = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@photo-${uid}`);
      if (value !== null) {
        setPhoto(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadPhoto(user.uid);
    }, [user])
  );

  const AvatarContainer = styled.View`
    align-items: center;
  `;
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => setMenu(true)}>
          {!photo ? (
            <Avatar.Icon size={180} icon="human" backgroundColor="#5AADF1" />
          ) : (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#5AADF1"
            />
          )}
        </TouchableOpacity>
        <Modal visible={menu} onDismiss={() => setMenu(false)}>
          <Button
            icon="camera"
            labelStyle={{ fontSize: 24 }}
            color="white"
            onPress={() => {
              navigation.navigate("Camera");
              setMenu(false);
            }}
          >
            Take photo
          </Button>
          <Spacer size="large" />
          <Button
            icon="image-size-select-actual"
            labelStyle={{ fontSize: 24 }}
            color="white"
            onPress={pickImage}
          >
            upload photo
          </Button>
        </Modal>

        <Spacer size="large"></Spacer>
        <Text>{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          onPress={() => navigation.navigate("Favourites")}
          left={(props) => <List.Icon {...props} color="tomato" icon="heart" />}
        />
        <List.Item
          style={{ padding: 16 }}
          title="logout"
          onPress={() => onLogout()}
          left={(props) => (
            <List.Icon {...props} color="tomato" icon="logout" />
          )}
        />
      </List.Section>
    </SafeArea>
  );
};
