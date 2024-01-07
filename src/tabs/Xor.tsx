import { Text, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"
import { exponentiationBySquaring, getGenerators, inverse, shiftCypherDecode, shiftCypherEncode, xor, xtime } from "../functions/Functions"

interface XorProps {
    onResult: (result: any) => void
}


const Xor = (props: XorProps) => {
    const [numA, setNumA] = useState('')
    const [numB, setNumB] = useState('')

    return (
        <View style={{ height: '100%' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 20, lineHeight: 30 }}>Tính: (a) * (b)</Text>
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
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                    const result = xor(String(numA), Number(numB))
                    
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

export default Xor