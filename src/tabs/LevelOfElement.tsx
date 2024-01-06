import { Text, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"
import { exponentiationBySquaring, getGenerators, inverse, levelOfElement, shiftCypherDecode, shiftCypherEncode } from "../functions/Functions"

interface LevelOfElementProps {
    onResult: (result: any) => void
}





const LevelOfElement = (props: LevelOfElementProps) => {
    const [numA, setNumA] = useState('')
    const [numB, setNumB] = useState('')
    const [numN, setNumN] = useState('')

    return (
        <View style={{ height: '100%' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 20, lineHeight: 30 }}>Tính cấp của a trong Z </Text>
                    <Text style={{ fontSize: 12, lineHeight: 46 }}>n</Text>
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
                    label="Số n"
                    value={numN}
                    onChangeText={setNumN}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                    const result = levelOfElement(Number(numA), Number(numN))
                    
                    
                    props.onResult([
                        {
                            label: 'Số a',
                            value: numA
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

export default LevelOfElement