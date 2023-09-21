import { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const Input = (props) => {
    const { id, type, label, placeholder, required, disabled, autoComplete, onChange } = props;
    var { invalid } = props;
    if (!invalid) { invalid = false; }

    const [borderColor, setBorderColor] = useState('#4B5563');

    function onFocus() {
        setBorderColor('#60A5FA');
    }
    function onBlur() {
        setBorderColor('#4B5563');
    }

    return (
        id !== "" ? (
            <>
                <View style={{ marginVertical: 6, }}>
                    <Text style={styles.label} >
                        {label}
                    </Text>
                    <View style={{ marginTop: 8 }}>
                        <TextInput
                            id={id}
                            type={type}
                            secureTextEntry={type === "password" ? true : false}
                            placeholder={placeholder}
                            placeholderTextColor={"#9CA3AF"}
                            required={required}
                            disabled={disabled}
                            autoComplete={autoComplete}
                            onChange={onChange}
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
                                borderColor: invalid ? "#EF4444" : borderColor,
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
            </>) : <></>
    )
};

export default Input;

const styles = StyleSheet.create({
    label: {
        display: "block",
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 500,
        lineHeight: 24,
        color: "#F3F4F6",
    }
});