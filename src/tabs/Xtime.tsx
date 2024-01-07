import { Text, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"
import { exponentiationBySquaring, getGenerators, inverse, shiftCypherDecode, shiftCypherEncode, xtime } from "../functions/Functions"

interface XtimeProps {
    onResult: (result: any) => void
}





const Xtime = (props: XtimeProps) => {
    const [numA, setNumA] = useState('')
    const [numB, setNumB] = useState('')

    return (
        <View style={{ height: '100%' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 20, lineHeight: 30 }}>Tính: xtime(a)</Text>
                </View>
                <FormLine
                    label="Số a"
                    value={numA}
                    onChangeText={setNumA}
                    style={{
                        marginBottom: 8
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                    const result = xtime(String(numA))
                    
                    
                    props.onResult([
                        {
                            label: 'Số a',
                            value: numA
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

export default Xtime