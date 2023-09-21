import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

const BlueButton = (params,) => {
    const { title } = params;
    const [backgroundColor, setBackgroundColor] = useState("#4F46E5");
    const [scale, setScale] = useState("1");
    return (
        <Pressable
            title={title}
            style={{
                marginTop: 32,
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 12,
                paddingRight: 12,
                justifyContent: "center",
                borderRadius: 6,
                width: "100%",
                backgroundColor: backgroundColor,
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                scale: scale,
            }}
            onPressIn={() => { setBackgroundColor("#4F46E5"), setScale("0.95") }}
            onPressOut={() => { setBackgroundColor("#4F46E5"), setScale("1") }}
        >
            <Text style={{
                textAlign: "center",
                fontSize: 14,
                lineHeight: 20,
                fontWeight: "600",
                lineHeight: 24,
                color: "#ffffff",
            }}>
                {title}
            </Text>
        </Pressable>
    );
};

export default BlueButton;
