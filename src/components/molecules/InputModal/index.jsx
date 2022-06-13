import React, { useEffect, useState } from "react";
import moment from 'moment';
import { Alert, Modal } from "react-native";
import {
  ModalButton,
  ModalContainer,
  ModalView,
  StyledInput,
  ModalAction,
  ModalActionGroup,
  ModalIcon,
  HeaderTitle,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import * as Location from 'expo-location';
import * as Permissions from "expo-permissions";

const InputModal = ({
  modalVisible,
  setModalVisible,
  todoInputValue,
  setTodoInputValue,
  handleAddTodo,
  todoToBeEdited,
  setTodoToBeEdited,
  handleEditTodo,
  todos,
}) => {

  const [location, setLocation] = useState(null);
  const handleCloseModal = () => {
    setModalVisible(false);
    setTodoInputValue("");
    setTodoToBeEdited(null);
  };

  const handleSubmit = () => {
    if (!todoToBeEdited) {
      handleAddTodo({
        title: todoInputValue,
        date: moment(new Date()).format('llll'),
        location: location
      });
      setTodoInputValue("");
      setTodoToBeEdited(null);
    } else {
      handleEditTodo({
        title: todoInputValue,
        date: todoToBeEdited.date,
        id: todoToBeEdited.id,
        location: location
      });
      setTodoInputValue("");
      setTodoToBeEdited(null);
    }
  };
  useEffect(
    () => {
      (async function () {
        const { status, permissions } = await Permissions.askAsync(
          Permissions.LOCATION
        );
        if (status === "granted") {
          let location = await Location.getCurrentPositionAsync({
            enableHighAccuracy: true,
          });
          setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        } else {
          throw new Error("Location permission not granted");
        }
      })();
  }, []);

  return (
    <>
      <ModalButton
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <AntDesign name="plus" size={30} color={Colors.theme.secondary} />
      </ModalButton>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <ModalContainer>
          <ModalView>
            <ModalIcon>
              <HeaderTitle>Tarefa</HeaderTitle>
              <AntDesign name="edit" size={30} color={Colors.theme.tertiary} />
            </ModalIcon>

            <StyledInput
              placeholder="Adicionar tarefa"
              placeholderTextColor={Colors.theme.alternative}
              selectionColor={Colors.theme.secondary}
              autoFocus={true}
              onChangeText={(text) => setTodoInputValue(text)}
              value={todoInputValue}
              onSubmitEditing={handleSubmit}
            />
            <ModalActionGroup>
              <ModalAction color={Colors.theme.default} onPress={handleCloseModal}>
                <AntDesign name="close" size={28} color={Colors.theme.tertiary} />
              </ModalAction>
              <ModalAction color={Colors.theme.tertiary} onPress={handleSubmit}>
                <AntDesign name="check" size={28} color={Colors.theme.secondary} />
              </ModalAction>
            </ModalActionGroup>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default InputModal;
