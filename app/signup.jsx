import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/input';
import BlueButton from '../components/blueButon';
import HeadLogo from '../components/headLogo';

export default function signup() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });
    var [invalidEmail, setInvalidEmail] = useState(false);
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

        if ((id === 'email') && !value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
            setInvalidEmail(true);
            return;
        } else {
            setInvalidEmail(false);
        }

        setUser((prevCriteria) => ({ ...prevCriteria, [id]: value }));
    }
    return (
        <View style={styles.container}>
            <HeadLogo title={"Sign Up"} />

            <View style={styles.form}>
                <Input label={"Username"} id={"username"} type={"text"} placeholder={"Type the username to display"}
                    autoComplete={"username"} required value={user.username} onChange={handleInputChange} invalid={invalidUsername} />

                <Input label={"Email"} id={"email"} type={"email"} placeholder={"Type your email to be linked"}
                    autoComplete={"email"} required value={user.email} onChange={handleInputChange} invalid={invalidEmail} />

                <Input label={"Password"} id={"password"} type={"password"} placeholder={"Type the password"}
                    autoComplete={"current-password"} required value={user.password} onChange={handleInputChange} />

                <View>
                    <BlueButton title={"Sign Up"} />
                </View>

                <Text style={{
                    marginTop: "1.5rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    textAlign: "center",
                    color: "#6B7280",
                }}>
                    or
                </Text>

                <Text style={{
                    marginTop: "0.75rem",
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                    textAlign: "center",
                    color: "#6B7280",
                }}>
                    <Link href={"/login"} style={styles.link}>
                        Login
                    </Link>
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        display: "flex",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        flexDirection: "column",
        flex: "1 1 0%",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%"
    },
    form: {
        marginTop: "1rem",
        width: "100%",
        maxWidth: "24rem",
    },
    link: {
        alignSelf: 'center',
        fontWeight: 600,
        lineHeight: "1.5rem",
        color: "#60A5FA",
    }
});