import { Text, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"
import { ElgamalDecode, ElgamalEncode, RSADecode, RSAEncode, RabinDecode, RabinEncode, exponentiationBySquaring, gcd, getGenerators, inverse, shiftCypherDecode, shiftCypherEncode } from "../functions/Functions"

interface ElgamalProps {
    onResult: (result: any) => void
}

const Elgamal = (props: ElgamalProps) => {
    const [numAlpha, setNumAlpha] = useState('')
    const [numN, setNumN] = useState('')
    const [numA, setNumA] = useState('')
    const [numK, setNumK] = useState('')
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
                            label="Số Alpha"
                            value={numAlpha}
                            onChangeText={setNumAlpha}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Số p"
                            value={numN}
                            onChangeText={setNumN}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Số a"
                            value={numA}
                            onChangeText={setNumA}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Số k"
                            value={numK}
                            onChangeText={setNumK}
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
                            // const result = RabinEncode(Number(plainText), Number(numP), Number(numQ))
                            const result = ElgamalEncode(Number(plainText), Number(numAlpha), Number(numN), Number(numA), Number(numK))

                            props.onResult([
                                {
                                    label: 'Khoá công khai',
                                    value: `(${numAlpha}, ${numN}, ${result.publicKey})`
                                },
                                {
                                    label: 'Bản mã',
                                    value: result.cipher.join(', ')
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
                            label="Số Alpha"
                            value={numAlpha}
                            onChangeText={setNumAlpha}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Số p"
                            value={numN}
                            onChangeText={setNumN}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Số a"
                            value={numA}
                            onChangeText={setNumA}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Số k"
                            value={numK}
                            onChangeText={setNumK}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Bản mã: 'x, y'"
                            value={cipherText}
                            onChangeText={setCipherText}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, padding: 8 }} onPress={() => { setMode('encode') }}>
                            <Text style={{ width: '100%', textAlign: 'center', color: Color.primary }}>Mã hoá</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                            // const result = RabinDecode(Number(cipherText), Number(numP), Number(numQ))
                            const result = ElgamalDecode(cipherText.split(', ').map((e) => Number(e)), Number(numN), Number(numA), Number(numAlpha))

                            props.onResult([
                                {
                                    label: 'Bản rõ',
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

export default Elgamal