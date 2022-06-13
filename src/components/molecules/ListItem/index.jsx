import React, { useContext, useState } from "react";

import {
  ListView,
  ListViewHidden,
  TodoText,
  TodoDate,
  HiddenButton,
} from "./styles";

import { SwipeListView } from "react-native-swipe-list-view";
import { Entypo } from "@expo/vector-icons";

import Colors from "../../../constants/Colors";
import AuthContext from "../../../contexts/auth";

const ListItems = ({ todos, handleTriggerEdit, setRefresh, refresh }) => {
  const { deleteTodo } = useContext(AuthContext);
  //para estilizar a lista passada
  const [swipedRow, setSwipedRow] = useState(null);
  const handleDeleteTodo = async (id) => {
    const result = await deleteTodo(id);
    if (result) {
      setRefresh(!refresh);
    }
  };
  return (
    <>
      {todos?.length === 0 ?
        (
          <TodoText>Você não tem tarefa hoje</TodoText>
        ) : (
          <SwipeListView
            data={todos}
            renderItem={(data) => {
              const RowText = TodoText;
              return (
                <ListView
                  underlayColor={Colors.theme.default}
                  onPress={() => {
                    handleTriggerEdit(data.item);
                  }}
                >
                  <>
                    <RowText>{data?.item?.title}</RowText>
                    <TodoDate>{data?.item?.date}</TodoDate>
                    <TodoDate>Lat: {data?.item?.location?.latitude}, Long: {data.item.location?.longitude}</TodoDate>
                  </>
                </ListView>
              );
            }}
            renderHiddenItem={(data) => {
              return (
                <ListViewHidden>
                  <HiddenButton
                    onPress={() => handleDeleteTodo(data.item.id)}
                  >
                    <Entypo name="trash" size={25} colo={Colors.theme.secondary} />
                  </HiddenButton>
                </ListViewHidden>
              );
            }}
            leftOpenValue={80}
            previewRowKey={"1"}
            previewOpenValue={80}
            previewOpenDelay={3000}
            disableLeftSwipe={true}
            showsVerticalScrollIndicator={false}
            style={{
              flex: 1,
              paddingBottom: 30,
              marginBottom: 40,
            }}
            onRowOpen={(rowKey) => {
              setSwipedRow(rowKey);
            }}
            onRowClose={() => {
              setSwipedRow(null);
            }}
          />
        )}
    </>
  );
};

export default ListItems;
