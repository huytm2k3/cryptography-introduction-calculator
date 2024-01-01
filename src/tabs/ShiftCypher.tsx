import { Text, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"

interface ShiftCypherProps {
    onResult: (result: any) => void
}

export const shiftCypherEncode = (text: string, key: number) => {
    const result = text.split('').map((char) => {
        const charCode = char.charCodeAt(0)
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode((charCode - 65 + key) % 26 + 65)
        } else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode((charCode - 97 + key) % 26 + 97)
        } else {
            return char
        }
    }).join('')
    return result;
}

export const shiftCypherDecode = (text: string, key: number) => {
    const result = text.split('').map((char) => {
        const charCode = char.charCodeAt(0)
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode((charCode - 65 - key + 26) % 26 + 65)
        } else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode((charCode - 97 - key + 26) % 26 + 97)
        } else {
            return char
        }
    }).join('')
    return result;
}

const ShiftCypher = (props: ShiftCypherProps) => {
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
                            const result = shiftCypherEncode(plainText, Number(key))
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
                            const result = shiftCypherDecode(cipherText, Number(decodeKey))
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

export default ShiftCypher