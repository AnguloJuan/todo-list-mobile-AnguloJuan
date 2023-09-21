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