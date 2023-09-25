import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Input from '../components/input';
import BlueButton from '../components/blueButon';
import HeadLogo from '../components/headLogo';

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
        if ((id === 'username') && !value.match(/^[a-zA-Z]+$/)) {
            setInvalidUsername(true);
            return;
        } else {
            setInvalidUsername(false);
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
        <View style={styles.container}>
            <HeadLogo title={"Log In"} />

            <View style={styles.form}>
                <Input label={"Username"} id={"username"} type={"text"} placeholder={"Type your username"}
                    autoComplete={"username"} required value={user.username} onChange={handleInputChange} invalid={invalidUsername} />

                <View style={{ marginVertical: 6, }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                        <Text style={styles.label} >
                            Password
                        </Text>
                        <Link href={"/forgotPass"} style={styles.link}>
                            Forgot Password?
                        </Link>
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <TextInput
                            id={"password"}
                            type={"password"}
                            secureTextEntry={true}
                            placeholder={"Type your password"}
                            placeholderTextColor={"#9CA3AF"}
                            required
                            autoComplete={"password"}
                            onChange={handleInputChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            style={{
                                display: "block",
                                paddingTop: 6,
                                paddingBottom: 6,
                                paddingLeft: 12,
                                paddingRight: 12,
                                outline: "none",
                                borderRadius: 6,
                                border: "2px solid",
                                borderColor: borderColor,
                                width: "100%",
                                color: "#F3F4F6",
                                backgroundColor: "#1F2937",
                                transitionProperty: "backgroundColor, borderColor, color, fill, stroke, opacity, boxShadow, transform",
                                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                                transitionDuration: "300ms",
                                transitionTimingFunction: "cubic-bezier(0.4, 0, 1, 1)",
                                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                            }} />
                    </View>
                </View>

                <View>
                    <Link href="/todo">
                        <BlueButton title={"Log In"} />
                    </Link>
                </View>

                <Text style={{
                    marginTop: 24,
                    fontSize: 14,
                    lineHeight: 20,
                    textAlign: "center",
                    color: "#6B7280",
                }}>
                    or
                </Text>

                <Text style={{
                    marginTop: 12,
                    fontSize: 14,
                    lineHeight: 20,
                    textAlign: "center",
                    color: "#6B7280",
                }}>
                    <Link href={"/signup"} style={styles.link}>
                        Sign Up
                    </Link>
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 48,
        paddingBottom: 48,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%"
    },
    form: {
        marginTop: 16,
        width: "100%",
        maxWidth: 384,
    },
    link: {
        alignSelf: 'center',
        fontWeight: 600,
        lineHeight: 24,
        color: "#60A5FA",
    },
    label: {
        display: "block",
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 500,
        lineHeight: 24,
        color: "#F3F4F6",
    }
});