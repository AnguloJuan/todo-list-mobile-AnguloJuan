import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import BlueButton from "../components/blueButon";
import HeadLogo from "../components/headLogo";
import { Box, Text, VStack } from "@gluestack-ui/themed";
import StyledInput from "../components/input";

export default function signup() {
  const [user, setUser] = useState({
    email: "",
  });
  var [invalidEmail, setInvalidEmail] = useState(false);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    //validation
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
      <HeadLogo title={"Forgot Password"} />

      <Box mt={16} width={"$full"} maxWidth={384}>
        <StyledInput
          label={"Email"}
          id={"email"}
          type={"email"}
          placeholder={"Type your email"}
          autoComplete={"email"}
          required
          value={user.email}
          onChange={handleInputChange}
          invalid={invalidEmail}
        />

        <Box>
          <BlueButton title={"Send"} />
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
