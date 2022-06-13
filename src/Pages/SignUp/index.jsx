import React, { useState, useEffect, useContext } from "react";

import Colors from "../../constants/Colors";
import AuthContext from "../../contexts/auth";
import { validateEmail } from "../../utils/utils";
import { Content, Header, Title } from "./styles";
import { Container, InputView, TextError } from "../Login/styles";
import { LoadingIndicator } from "../../components/atomes/Loading";
import DefaultInput from "../../components/atomes/DefaultInput";
import DefaultButton from "../../components/atomes/DefaultButton";


export default function SignUp({ navigation }) {
  const { createUser } = useContext(AuthContext);

  const [isSubmiting, setSubmiting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
  });
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    password: "",
    msg: ""
  });

  async function onUpdatePress() {
    setSubmiting(true);
    var name = form.name.trim();
    var email = form.email.trim();
    var password = form.password.trim();

    var hasError = false;
    var validations = [];

    if (!name) {
      hasError = true;
      validations["name"] = "Campo obrigatório";
    };

    if (!password) {
      hasError = true;
      validations["password"] = "Campo obrigatório";
    };

    if (!email) {
      hasError = true;
      validations["email"] = "Campo obrigatório";
    } else {
      if (!validateEmail(email)) {
        hasError = true;
        validations["email"] = "E-mail inválido";
      }
    }

    if (hasError) {
      setSubmiting(false);
      return setValidation(validations);
    }

    const result = await createUser(form);
    if (result) {
      setSubmiting(false);
      setForm({
        name: "",
        password: "",
        email: "",
      })
      navigation.navigate("Home");
    } else {
      setSubmiting(false);
      return setValidation({
        msg: "Erro ao salvar, tente novamente em alguns instantes",
      });
    }

  };
  useEffect(() => {
    setValidation({
      name: "",
      email: "",
      password: "",
    });
  }, [form]);


  return (
    <Container>
      <Header>
        <Title>Criar Conta</Title>
      </Header>

      <Content>
        <InputView erro={!!validation?.name}>
          <DefaultInput
            placeholder="Nome"
            value={form.name}
            getInput={(name) => setForm({ ...form, name })}
          />
        </InputView>

        {!!validation?.name && (
          <TextError>{validation?.name}</TextError>
        )}

        <InputView erro={!!validation?.email}>
          <DefaultInput
            placeholder="E-mail"
            value={form.email}
            getInput={(email) => setForm({ ...form, email })}
          />
        </InputView>

        {!!validation?.email && (
          <TextError>{validation?.email}</TextError>
        )}

        <InputView erro={!!validation?.password}>
          <DefaultInput
            placeholder="Senha"
            secureTextEntry
            value={form.password}
            getInput={(password) => setForm({ ...form, password })}
          />
        </InputView>

        {!!validation?.password && (
          <TextError>{validation?.password}</TextError>
        )}
        <DefaultButton disabled={isSubmiting} handleClick={() => onUpdatePress()} colorText={Colors.theme.white} color={Colors.theme.default}>
          <LoadingIndicator isLoading={isSubmiting} />
          {!isSubmiting && "Cadastrar"}
        </DefaultButton>

        <DefaultButton handleClick={() => navigation.pop()} borderColor={Colors.theme.default} color={Colors.theme.white} colorText={Colors.theme.default}>
          Voltar
        </DefaultButton>
      </Content>
    </Container>
  );
}