import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/input';
import BlueButton from '../components/blueButon';
import HeadLogo from '../components/headLogo';

export default function signup() {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    return (
        <View style={styles.container}>
            <HeadLogo title={"Reset Password"} />

            <View style={styles.form}>
                <Input label={"Password"} id={"password"} type={"password"} placeholder={"Type the password"}
                    autoComplete={"current-password"} required value={password} onChange={setPassword} />
                
                <Input label={"New Password"} id={"password"} type={"password"} placeholder={"Type the new password"}
                    autoComplete={""} required value={newPassword} onChange={setNewPassword} />
                
                <Input label={"Confirm Password"} id={"password"} type={"password"} placeholder={"Confirm the new password"}
                    autoComplete={""} required value={password} onChange={setPassword} />

                <View>
                    <BlueButton title={"Reset"} />
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