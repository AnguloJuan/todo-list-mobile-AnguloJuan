import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import BlueButton from "../components/blueButon";
import HeadLogo from "../components/headLogo";
import { Box, Text, VStack } from "@gluestack-ui/themed";
import StyledInput from "../components/input";

export default function signup() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <VStack px={32} py={48} alignItems="center" minHeight={"$full"}>
      <HeadLogo title={"Reset Password"} />

      <Box mt={16} width={"$full"} maxWidth={384}>
        <StyledInput
          label={"Password"}
          id={"password"}
          type={"password"}
          placeholder={"Type the password"}
          autoComplete={"current-password"}
          required
          value={password}
          onChange={setPassword}
        />

        <StyledInput
          label={"New Password"}
          id={"password"}
          type={"password"}
          placeholder={"Type the new password"}
          autoComplete={""}
          required
          value={newPassword}
          onChange={setNewPassword}
        />

        <StyledInput
          label={"New Password"}
          id={"password"}
          type={"password"}
          placeholder={"Confirm the new password"}
          autoComplete={""}
          required
          value={newPassword}
          onChange={setNewPassword}
        />

        <Box>
          <BlueButton title={"Reset"} />
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
