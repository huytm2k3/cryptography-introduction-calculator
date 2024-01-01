import { Text, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"
import { inverse, shiftCypherDecode, shiftCypherEncode } from "../functions/Functions"

interface InverseProps {
    onResult: (result: any) => void
}





const Inverse = (props: InverseProps) => {
    const [plainText, setPlainText] = useState('')
    const [key, setKey] = useState('')

    const [cipherText, setCipherText] = useState('')
    const [decodeKey, setDecodeKey] = useState('')

    return (
        <View style={{ height: '100%' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 16, lineHeight: 30 }}>Kí hiệu: a</Text>
                    <Text style={{ fontSize: 8, lineHeight: 18 }}>-1</Text>
                    <Text style={{ fontSize: 16, lineHeight: 30 }}>mod n</Text>
                </View>
                <FormLine
                    label="Số a"
                    value={plainText}
                    onChangeText={setPlainText}
                    style={{
                        marginBottom: 8
                    }}
                />
                <FormLine
                    label="Số n"
                    value={key}
                    onChangeText={setKey}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                    const result = inverse(Number(plainText), Number(key))
                    props.onResult([
                        {
                            label: 'Số a',
                            value: plainText
                        },
                        {
                            label: 'Số n',
                            value: key
                        },
                        {
                            label: 'Nghịch đảo',
                            value: result
                        }
                    ])
                }}>
                    <Text style={{ width: '100%', textAlign: 'center', color: 'white' }}>Thực hiện</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Inverse