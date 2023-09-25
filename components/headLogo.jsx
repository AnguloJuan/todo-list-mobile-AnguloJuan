import React from 'react';
import { Text, View, Image } from 'react-native';

const HeadLogo = (params,) => {
    const { title } = params;
    return (
        <View style={{
            width: "100%",
            maxWidth: 384,
            alignItems: "center",
        }}>
            <Image
                style={{
                    width: 'auto',
                    width: 112,
                    height: 112,
                }}
                source={"./assets/Tech-Background-PNG.png"}
                alt="To-do"
            />
            <Text style={{
                marginTop:40,
                fontSize: 24,
                lineHeight: 32,
                fontWeight: 700,
                lineHeight: 36,
                textAlign: "center",
                color: "#F3F4F6",
            }}>
                {title}
            </Text>
        </View>
    );
};

export default HeadLogo;
