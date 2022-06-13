import React, { useContext, useEffect, useState } from "react";

import Header from "../../components/molecules/Header";
import ListItems from "../../components/molecules/ListItem";
import InputModal from "../../components/molecules/InputModal";
import { Container } from "./styles";
import AuthContext from "../../contexts/auth";

const Home = () => {

  const { getTodos, createTodo, updateTodo } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState();

  const handleAddTodo = async (todo) => {
    const result = await createTodo(todo);
    if (result) {
      setRefresh(!refresh)
      setModalVisible(false);
    } else {
      console.log('erro!')
    }
  };

  const [todoToBeEdited, setTodoToBeEdited] = useState(null);

  const handleTriggerEdit = (item) => {
    setTodoToBeEdited(item);
    setModalVisible(true);
    setTodoInputValue(item.title);
  };

  const handleEditTodo = async (editedTodo) => {
    const result = await updateTodo(editedTodo, editedTodo.id)
    if (result) {
      setRefresh(!refresh)
      setModalVisible(false);
    } else {
      console.log('erro!')
    }
  };

  useEffect(() => {
    getTodos().then((item) => setTodos(item))
  }, [refresh])

  return (
    <Container>
      <Header />
      <ListItems
        todos={todos}
        setTodos={setTodos}
        handleTriggerEdit={handleTriggerEdit}
        setRefresh={setRefresh}
        refresh={refresh}
      />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
        todoToBeEdited={todoToBeEdited}
        setTodoToBeEdited={setTodoToBeEdited}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </Container>
  );
};

export default Home;
