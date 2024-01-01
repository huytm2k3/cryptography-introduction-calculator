import { Text, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"
import { RSADecode, RSAEncode, exponentiationBySquaring, getGenerators, inverse, shiftCypherDecode, shiftCypherEncode } from "../functions/Functions"

interface RSAProps {
    onResult: (result: any) => void
}





const RSA = (props: RSAProps) => {
    const [numP, setNumP] = useState('')
    const [numQ, setNumQ] = useState('')
    const [numE, setNumE] = useState('')
    const [numD, setNumD] = useState('')
    const [mode, setMode] = useState('encode' as 'encode' | 'decode')
    const [plainText, setPlainText] = useState('')
    const [cipherText, setCipherText] = useState('')

    return (
        <View style={{ height: '100%' }}>
            {mode == 'encode' &&
                <>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        </View>
                        <FormLine
                            label="Số p"
                            value={numP}
                            onChangeText={setNumP}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Số q"
                            value={numQ}
                            onChangeText={setNumQ}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Mũ mã hoá e"
                            value={numE}
                            onChangeText={setNumE}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Bản rõ"
                            value={plainText}
                            onChangeText={setPlainText}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, padding: 8 }} onPress={() => { setMode('decode') }}>
                            <Text style={{ width: '100%', textAlign: 'center', color: Color.primary }}>Giải mã</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                            const result = RSAEncode(Number(plainText), Number(numP), Number(numQ), Number(numE))

                            props.onResult([
                                {
                                    label: 'Mũ giải mã d',
                                    value: inverse(Number(numE), (Number(numP) - 1) * (Number(numQ) - 1))
                                },
                                {
                                    label: 'Kết quả',
                                    value: result
                                }
                            ])
                        }}>
                            <Text style={{ width: '100%', textAlign: 'center', color: 'white' }}>Mã hoá</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }

            {mode == 'decode' &&
                <>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        </View>
                        <FormLine
                            label="Số p"
                            value={numP}
                            onChangeText={setNumP}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Số q"
                            value={numQ}
                            onChangeText={setNumQ}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Mũ giải mã d"
                            value={numD}
                            onChangeText={setNumD}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Bản mã"
                            value={cipherText}
                            onChangeText={setCipherText}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, padding: 8 }} onPress={() => { setMode('encode') }}>
                            <Text style={{ width: '100%', textAlign: 'center', color: Color.primary }}>Mã hoá</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                            const result = RSADecode(Number(cipherText), Number(numP), Number(numQ), Number(numD))

                            props.onResult([
                                {
                                    label: 'Mũ mã hoá e',
                                    value: inverse(Number(numD), (Number(numP) - 1) * (Number(numQ) - 1))
                                },
                                {
                                    label: 'Kết quả',
                                    value: result
                                }
                            ])
                        }}>
                            <Text style={{ width: '100%', textAlign: 'center', color: 'white' }}>Giải mã</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }
        </View>
    )
}

export default RSA