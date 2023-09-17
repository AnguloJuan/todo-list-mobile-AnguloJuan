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
                marginTop: "2rem",
                paddingTop: "0.375rem",
                paddingBottom: "0.375rem",
                paddingLeft: "0.75rem",
                paddingRight: "0.75rem",
                justifyContent: "center",
                borderRadius: "0.375rem",
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
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                fontWeight: "600",
                lineHeight: "1.5rem",
                color: "#ffffff",
            }}>
                {title}
            </Text>
        </Pressable>
    );
};

export default BlueButton;
