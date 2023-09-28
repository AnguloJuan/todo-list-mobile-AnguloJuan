import { Link } from 'expo-router';
import React, { useState } from 'react';
import BlueButton from '../components/blueButon';
import HeadLogo from '../components/headLogo';
import StyledInput from '../components/input';
import { Box, HStack, Input, InputField, Text, VStack } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

export default function signup() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    var [invalidUsername, setInvalidUsername] = useState(false);

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;

        //validation
        if (id === 'username') {
            if (!value.match(/^[a-zA-Z]+$/)) {
                setInvalidUsername(true);
                return;
            } else {
                setInvalidUsername(false);
            }
        }

        setUser((prevCriteria) => ({ ...prevCriteria, [id]: value }));
    }

    const [borderColor, setBorderColor] = useState('#4B5563');
    function onFocus() {
        setBorderColor('#60A5FA');
    }
    function onBlur() {
        setBorderColor('#4B5563');
    }

    return (
        <VStack px={32} py={48} alignItems='center' minHeight={"$full"}>
            <HeadLogo title={"Log In"} />

            <Box mt={16} width={"$full"} maxWidth={384}>
                <StyledInput label={"Username"} id={"username"} type={"text"} placeholder={"Type your username"}
                    autoComplete={"username"} required value={user.username} onChange={handleInputChange} invalid={invalidUsername} />

                <Box my={6}>
                    <HStack justifyContent='space-between'>
                        <Text fontSize={14} lineHeight={24} fontWeight='$bold' color='$white' >
                            Password
                        </Text>
                        <Link href={"/forgotPass"} style={styles.link}>
                            Forgot Password?
                        </Link>
                    </HStack>
                    <Input
                        isRequired
                        size="sm"
                        my="$2"
                        borderWidth={0}
                        sx={{
                            ":focus": {
                                shadowColor: "$blueGray600",
                                shadowRadius: "$2",
                                elevation: "$2",
                            },
                        }}
                    >
                        <InputField
                            id={"password"}
                            placeholder={"Type your password"}
                            onChange={handleInputChange}
                            color="$white"
                            placeholderTextColor={"#9CA3AF"}
                            autoComplete={"password"}
                            secureTextEntry
                            borderWidth={2}
                            bgColor="$blueGray800"
                            borderColor="$blueGray600"
                            sx={{
                                ":focus": {
                                    borderColor: "$blue500",
                                    ":invalid": {
                                        borderColor: "$error600"
                                    },
                                },
                                ":invalid": {
                                    borderColor: "$error600"
                                }
                            }}
                        />
                    </Input>
                </Box>


                <Link href="/todo">
                    <BlueButton title={"Log In"} />
                </Link>

                <Text mt={24} fontSize={14} lineHeight={20} textAlign='center' color='$white'>
                    or
                </Text>

                <Text mt={12} fontSize={14} lineHeight={20} textAlign='center' color='$white'>
                    <Link href={"/signup"} style={styles.link}>
                        Sign Up
                    </Link>
                </Text>
            </Box>
        </VStack>
    );
}


const styles = StyleSheet.create({
    link: {
        alignSelf: 'center',
        fontWeight: 600,
        lineHeight: 24,
        color: "#60A5FA",
    },
});