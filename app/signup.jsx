import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import StyledInput from "../components/input";
import BlueButton from "../components/blueButon";
import HeadLogo from "../components/headLogo";
import { Box, Text, VStack } from "@gluestack-ui/themed";

export default function signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  var [invalidEmail, setInvalidEmail] = useState(false);
  var [invalidUsername, setInvalidUsername] = useState(false);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    //validation
    if (id === "username" && !value.match(/^[a-zA-Z]+$/)) {
      setInvalidUsername(true);
      return;
    } else {
      setInvalidUsername(false);
    }

    if (
      id === "email" &&
      !value.match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
    ) {
      setInvalidEmail(true);
      return;
    } else {
      setInvalidEmail(false);
    }

    setUser((prevCriteria) => ({ ...prevCriteria, [id]: value }));
  };
  return (
    <VStack px={32} py={48} alignItems="center" minHeight={"$full"}>
      <HeadLogo title={"Sign Up"} />

      <Box mt={16} width={"$full"} maxWidth={384}>
        <StyledInput
          label={"Username"}
          id={"username"}
          type={"text"}
          placeholder={"Type the username to display"}
          autoComplete={"username"}
          required
          value={user.username}
          onChange={handleInputChange}
          invalid={invalidUsername}
        />

        <StyledInput
          label={"Email"}
          id={"email"}
          type={"email"}
          placeholder={"Type your email to be linked"}
          autoComplete={"email"}
          required
          value={user.email}
          onChange={handleInputChange}
          invalid={invalidEmail}
        />

        <StyledInput
          label={"Password"}
          id={"password"}
          type={"password"}
          placeholder={"Type the password"}
          autoComplete={"current-password"}
          required
          value={user.password}
          onChange={handleInputChange}
        />

        <Box>
          <BlueButton title={"Sign Up"} />
        </Box>

        <Text
          mt={24}
          fontSize={14}
          lineHeight={20}
          textAlign="center"
          color="$white"
        >
          or
        </Text>

        <Text
          mt={12}
          fontSize={14}
          lineHeight={20}
          textAlign="center"
          color="$white"
        >
          <Link href={"/login"} style={styles.link}>
            Login
          </Link>
        </Text>
      </Box>
    </VStack>
  );
}

const styles = StyleSheet.create({
  link: {
    alignSelf: "center",
    fontWeight: 600,
    lineHeight: 24,
    color: "#60A5FA",
  },
});
