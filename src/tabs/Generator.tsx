import { Text, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"
import { getGenerators, inverse, shiftCypherDecode, shiftCypherEncode } from "../functions/Functions"

interface GeneratorProps {
    onResult: (result: any) => void
}





const Generator = (props: GeneratorProps) => {
    const [plainText, setPlainText] = useState('')
    const [key, setKey] = useState('')

    const [cipherText, setCipherText] = useState('')
    const [decodeKey, setDecodeKey] = useState('')

    return (
        <View style={{ height: '100%' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 20, lineHeight: 30 }}>Tìm phần tử sinh của nhóm nhân: Z</Text>
                    <Text style={{ fontSize: 14, lineHeight: 18 }}>*</Text>
                    <Text style={{ fontSize: 14, lineHeight: 45 }}>n</Text>
                </View>
                <FormLine
                    label="Số n"
                    value={key}
                    onChangeText={setKey}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                    const result = getGenerators(Number(key))
                    
                    
                    props.onResult([
                        {
                            label: 'Số n',
                            value: key
                        },
                        {
                            label: 'Danh sách phần tử sinh',
                            value: result.sort((a: number, b: number) => a - b).join(', ')
                        }
                    ])
                }}>
                    <Text style={{ width: '100%', textAlign: 'center', color: 'white' }}>Thực hiện</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Generator