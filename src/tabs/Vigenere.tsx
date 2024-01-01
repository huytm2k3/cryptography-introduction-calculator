import { Text, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"
import { vigenereDecode, vigenereEncode } from "../functions/Functions"

interface VigenereProps {
    onResult: (result: any) => void
}

const Vigenere = (props: VigenereProps) => {
    const [plainText, setPlainText] = useState('')
    const [key, setKey] = useState('')

    const [cipherText, setCipherText] = useState('')
    const [decodeKey, setDecodeKey] = useState('')

    const [mode, setMode] = useState<'encode' | 'decode'>('encode')

    return (
        <View style={{ height: '100%' }}>
            {mode === 'encode' &&
                <>
                    <View style={{ flex: 1 }}>
                        <FormLine
                            label="Bản rõ"
                            value={plainText}
                            onChangeText={setPlainText}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Khoá"
                            value={key}
                            onChangeText={setKey}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, padding: 8 }} onPress={() => {
                            setMode('decode')
                        }}>
                            <Text style={{ width: '100%', textAlign: 'center', color: Color.primary }}>Giải mã</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                            const result = vigenereEncode(plainText, key)
                            props.onResult([
                                {
                                    label: 'Bản rõ',
                                    value: plainText
                                },
                                {
                                    label: 'Khoá',
                                    value: key
                                },
                                {
                                    label: 'Bản mã',
                                    value: result
                                }
                            ])
                        }}>
                            <Text style={{ width: '100%', textAlign: 'center', color: 'white' }}>Mã hoá</Text>
                        </TouchableOpacity>
                    </View>
                </>
            }

            {mode === 'decode' &&
                <>
                    <View style={{ flex: 1 }}>
                        <FormLine
                            label="Bản mã"
                            value={cipherText}
                            onChangeText={setCipherText}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Khoá"
                            value={decodeKey}
                            onChangeText={setDecodeKey}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, padding: 8 }} onPress={() => { 
                            setMode('encode')
                        }}>
                            <Text style={{ width: '100%', textAlign: 'center', color: Color.primary }}>Mã hoá</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                            const result = vigenereDecode(cipherText, decodeKey)
                            props.onResult([
                                {
                                    label: 'Bản mã',
                                    value: cipherText
                                },
                                {
                                    label: 'Khoá',
                                    value: decodeKey
                                },
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

export default Vigenere