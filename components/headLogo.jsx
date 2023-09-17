import React from 'react';
import { Text, View, Image } from 'react-native';

const HeadLogo = (params,) => {
    const { title } = params;
    return (
        <View style={{
            width: "100%",
            maxWidth: "24rem",
            alignItems: "center",
        }}>
            <Image
                style={{
                    width: 'auto',
                    width: "7rem",
                    height: "7rem",
                }}
                source={"./assets/Tech-Background-PNG.png"}
                alt="To-do"
            />
            <Text style={{
                marginTop: "2.5rem",
                fontSize: "1.5rem",
                lineHeight: "2rem",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: "2.25rem",
                textAlign: "center",
                color: "#F3F4F6",
            }}>
                {title}
            </Text>
        </View>
    );
};

export default HeadLogo;
