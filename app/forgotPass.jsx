import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/input';
import BlueButton from '../components/blueButon';
import HeadLogo from '../components/headLogo';

export default function signup() {
    const [user, setUser] = useState({
        email: '',
    });
    var [invalidEmail, setInvalidEmail] = useState(false);

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;

        //validation
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
            <HeadLogo title={"Forgot Password"} />

            <View style={styles.form}>

                <Input label={"Email"} id={"email"} type={"email"} placeholder={"Type your email"}
                    autoComplete={"email"} required value={user.email} onChange={handleInputChange} invalid={invalidEmail} />

                <View>
                    <BlueButton title={"Send"} />
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
    }
});