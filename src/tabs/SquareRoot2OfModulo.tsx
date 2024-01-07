import { Text, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"
import { exponentiationBySquaring, getGenerators, inverse, shiftCypherDecode, shiftCypherEncode, squareRoot2OfModulo } from "../functions/Functions"

interface SquareRoot2OfModuloProps {
    onResult: (result: any) => void
}





const SquareRoot2OfModulo = (props: SquareRoot2OfModuloProps) => {
    const [numA, setNumA] = useState('')
    const [numB, setNumB] = useState('')
    const [numN, setNumN] = useState('')

    return (
        <View style={{ height: '100%' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 20, lineHeight: 30 }}>Tìm căn bậc 2 của </Text>
                    <Text style={{ fontSize: 20, lineHeight: 30 }}>a mod n</Text>
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
                    const result = squareRoot2OfModulo(Number(numA), Number(numN))
                    console.log(result);
                    
                    
                    
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
                            value: result.join(', ')
                        }
                    ])
                }}>
                    <Text style={{ width: '100%', textAlign: 'center', color: 'white' }}>Thực hiện</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SquareRoot2OfModulo