import { Text, TextInput, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"
import { exponentiationBySquaring, getGenerators, getXorSumArray, hexToBin, inverse, levelOfElement, shiftCypherDecode, shiftCypherEncode, xor, xtime } from "../functions/Functions"

interface MixColumnsProps {
    onResult: (result: any) => void
}





const MixColumns = (props: MixColumnsProps) => {
    const [numA, setNumA] = useState('')
    const [numB, setNumB] = useState('')
    const [numN, setNumN] = useState('')

    const [columns, setColumns] = useState([
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', '']
    ])

    return (
        <View style={{ height: '100%' }}>
            <View style={{ flex: 1 }}>

                {columns.map((row, rowIndex) => {
                    return (
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            {row.map((column, columnIndex) => {
                                return (
                                    <TextInput
                                        value={column}
                                        onChangeText={(text) => {
                                            const newColumns = [...columns]
                                            newColumns[rowIndex][columnIndex] = text
                                            setColumns(newColumns)
                                        }}
                                        style={{
                                            marginBottom: 8,
                                            padding: 16,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            marginRight: 8
                                        }}
                                    />
                                )
                            })}
                        </View>
                    )
                })}
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                    const result = xor('57', 13)
                    console.log(result);

                    props.onResult([
                        {
                            label: 'Số a',
                            value: 'numA\nnumb'
                        }
                    ])
                }}>
                    <Text style={{ width: '100%', textAlign: 'center', color: 'white' }}>Thực hiện</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MixColumns