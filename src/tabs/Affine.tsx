import { Text, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"
import { inverse } from "../functions/Functions"

interface ShiftCypherProps {
    onResult: (result: any) => void
}

export const affineEncode = (text: string, a: number, b: number) => {
    const result = text.split('').map((char) => {
        const charCode = char.charCodeAt(0)
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(((charCode - 65) * a + b) % 26 + 65)
        } else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(((charCode - 97) * a + b) % 26 + 97)
        } else {
            return char
        }
    }).join('')
    return result;
}

export const affineDecode = (text: string, a: number, b: number) => {
    const result = text.split('').map((char) => {
        const charCode = char.charCodeAt(0)


        if (charCode >= 65 && charCode <= 90) {
            if (charCode - 65 - b < 0) {
                return String.fromCharCode((inverse(a, 26) * (charCode - 65 - b + 26)) % 26 + 65)
            } else
                return String.fromCharCode((inverse(a, 26) * (charCode - 65 - b)) % 26 + 65)
        } else if (charCode >= 97 && charCode <= 122) {
            console.log(charCode - 97 - b);
            if (charCode - 97 - b < 0) {
                return String.fromCharCode((inverse(a, 26) * (charCode - 97 - b + 26)) % 26 + 97)
            } else
                return String.fromCharCode((inverse(a, 26) * (charCode - 97 - b)) % 26 + 97)
        } else {
            return char
        }
    }).join('')
    return result;
}

const Affine = (props: ShiftCypherProps) => {
    const [plainText, setPlainText] = useState('')
    const [keyA, setKeyA] = useState('')
    const [keyB, setKeyB] = useState('')

    const [cipherText, setCipherText] = useState('')
    const [decodeKeyA, setDecodeKeyA] = useState('')
    const [decodeKeyB, setDecodeKeyB] = useState('')

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
                            label="Khoá A"
                            value={keyA}
                            onChangeText={setKeyA}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Khoá B"
                            value={keyB}
                            onChangeText={setKeyB}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, padding: 8 }} onPress={() => {
                            setMode('decode')
                        }}>
                            <Text style={{ width: '100%', textAlign: 'center', color: Color.primary }}>Giải mã</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                            const result = affineEncode(plainText, Number(keyA), Number(keyB))
                            props.onResult([
                                {
                                    label: 'Bản rõ',
                                    value: plainText
                                },
                                {
                                    label: 'Khoá A',
                                    value: keyA
                                },
                                {
                                    label: 'Khoá B',
                                    value: keyB
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
                            label="Khoá A"
                            value={decodeKeyA}
                            onChangeText={setDecodeKeyA}
                            style={{
                                marginBottom: 8
                            }}
                        />
                        <FormLine
                            label="Khoá B"
                            value={decodeKeyB}
                            onChangeText={setDecodeKeyB}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, padding: 8 }} onPress={() => {
                            setMode('encode')
                        }}>
                            <Text style={{ width: '100%', textAlign: 'center', color: Color.primary }}>Mã hoá</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                            const result = affineDecode(cipherText, Number(decodeKeyA), Number(decodeKeyB))
                            props.onResult([
                                {
                                    label: 'Bản mã',
                                    value: cipherText
                                },
                                {
                                    label: 'Khoá A',
                                    value: decodeKeyA
                                },
                                {
                                    label: 'Khoá B',
                                    value: decodeKeyB
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

export default Affine