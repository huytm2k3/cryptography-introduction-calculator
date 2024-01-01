import { Text, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"
import { exponentiationBySquaring, getGenerators, inverse, shiftCypherDecode, shiftCypherEncode } from "../functions/Functions"

interface ExponentiationProps {
    onResult: (result: any) => void
}





const Exponentiation = (props: ExponentiationProps) => {
    const [numA, setNumA] = useState('')
    const [numB, setNumB] = useState('')
    const [numN, setNumN] = useState('')

    return (
        <View style={{ height: '100%' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 20, lineHeight: 30 }}>Tính: a</Text>
                    <Text style={{ fontSize: 14, lineHeight: 18 }}>b</Text>
                    <Text style={{ fontSize: 20, lineHeight: 30 }}> mod n</Text>
                </View>
                <FormLine
                    label="Số a"
                    value={numA}
                    onChangeText={setNumA}
                    style={{
                        marginBottom: 8
                    }}
                />
                <FormLine
                    label="Số b"
                    value={numB}
                    onChangeText={setNumB}
                    style={{
                        marginBottom: 8
                    }}
                />
                <FormLine
                    label="Số n"
                    value={numN}
                    onChangeText={setNumN}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                    const result = exponentiationBySquaring(Number(numA), Number(numB), Number(numN))
                    
                    
                    props.onResult([
                        {
                            label: 'Số a',
                            value: numA
                        },
                        {
                            label: 'Số b',
                            value: numB
                        },
                        {
                            label: 'Số n',
                            value: numN
                        },
                        {
                            label: 'Kết quả',
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

export default Exponentiation