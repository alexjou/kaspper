import React, { useContext, useState, useEffect, useCallback } from "react";
import { Container, Header, InputView, TextError } from "./styles";
import { Image } from "react-native";

import Logo from "../../assets/images/logo.png";
import AuthContext from "../../contexts/auth";
import { LoadingIndicator } from "../../components/atomes/Loading";
import { validateEmail } from "../../utils/utils";
import DefaultInput from "../../components/atomes/DefaultInput";
import DefaultButton from "../../components/atomes/DefaultButton";
import Colors from "../../constants/Colors";


export default function Login({ navigation }) {
  const { user, login } = useContext(AuthContext);

  const [isSubmiting, setSubmiting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    email: "",
    password: "",
    msg: ""
  });

  async function onLoginPress() {
    setSubmiting(true);
    var email = form.email.trim();
    var password = form.password.trim();

    var hasError = false;
    var validations = [];


    if (!password) {
      hasError = true;
      validations["password"] = "Campo obrigatório";
    }

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
    await login(form.email, form.password).then((doc) => {
      if (doc) {
        setSubmiting(false);
        setForm({
          email: "",
          password: "",
        })
        navigation.navigate("Home");
      } else {
        setValidation({
          msg: "E-mail ou CPF inválido, tente novamente em alguns instantes",
        });
        setSubmiting(false);
      }
    })
  }

  useEffect(() => {
    setValidation({
      email: "",
      password: "",
    })
  }, [form]);
  return (
    <Container>
      <Header>
        <Image source={Logo} />
      </Header>          

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

      {!!validation.msg && (
        <TextError>{validation?.msg}</TextError>
      )}

      <DefaultButton disabled={isSubmiting} handleClick={() => onLoginPress()} colorText={Colors.theme.white} color={Colors.theme.default}>
        <LoadingIndicator isLoading={isSubmiting} />
        {!isSubmiting && "Entrar"}
      </DefaultButton>

      <DefaultButton handleClick={() => navigation.navigate("SignUp")} borderColor={Colors.theme.default} color={Colors.theme.white} colorText={Colors.theme.default}>
        Cadastrar
      </DefaultButton>

    </Container>
  );
};