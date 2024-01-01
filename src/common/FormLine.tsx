import { StyleProp, Text, TextInput, View } from "react-native"

interface FormLineProps {
    label: string
    value: string
    onChangeText: (text: string) => void
    style?: StyleProp<any>
}

const FormLine = (props: FormLineProps) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', ...props.style }}>
            <Text style={{ flex: 1 }}>{props.label}:</Text>
            <TextInput 
                style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 8 }}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    )
}

export default FormLine