import { Text, TextInput, TouchableOpacity, View } from "react-native"
import FormLine from "../common/FormLine"
import { useState } from "react"
import { Color } from "../values/Color"
import { hillDecode, hillEncode, vigenereDecode, vigenereEncode } from "../functions/Functions"

interface HillProps {
    onResult: (result: any) => void
}

const Hill = (props: HillProps) => {
    const [plainText, setPlainText] = useState('')
    const [key, setKey] = useState([[0, 0], [0, 0]])

    const [cipherText, setCipherText] = useState('')
    const [decodeKey, setDecodeKey] = useState([[0, 0], [0, 0]])

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
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ flex: 1 }}>Khoá:</Text>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 60 }}>[ </Text>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', marginBottom: 4 }}>
                                        <TextInput
                                            style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 8, marginRight: 4 }}
                                            value={key[0][0].toString()}
                                            onChangeText={text => {
                                                const newKey = [...key]
                                                newKey[0][0] = Number(text)
                                                setKey(newKey)
                                            }}
                                        />
                                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>,</Text>
                                        <TextInput
                                            style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 8 }}
                                            value={key[0][1].toString()}
                                            onChangeText={text => {
                                                const newKey = [...key]
                                                newKey[0][1] = Number(text)
                                                setKey(newKey)
                                            }}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TextInput
                                            style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 8, marginRight: 4 }}
                                            value={key[1][0].toString()}
                                            onChangeText={text => {
                                                const newKey = [...key]
                                                newKey[1][0] = Number(text)
                                                setKey(newKey)
                                            }}
                                        />
                                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>,</Text>
                                        <TextInput
                                            style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 8 }}
                                            value={key[1][1].toString()}
                                            onChangeText={text => {
                                                const newKey = [...key]
                                                newKey[1][1] = Number(text)
                                                setKey(newKey)
                                            }}
                                        />
                                    </View>
                                </View>
                                <Text style={{ fontSize: 60 }}> ]</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, padding: 8 }} onPress={() => {
                            setMode('decode')
                        }}>
                            <Text style={{ width: '100%', textAlign: 'center', color: Color.primary }}>Giải mã</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                            const result = hillEncode(plainText, key)
                            props.onResult([
                                {
                                    label: 'Bản rõ',
                                    value: plainText
                                },
                                {
                                    label: 'Khoá',
                                    value: key.toString()
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
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ flex: 1 }}>Khoá:</Text>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 60 }}>[ </Text>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', marginBottom: 4 }}>
                                        <TextInput
                                            style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 8, marginRight: 4 }}
                                            value={decodeKey[0][0].toString()}
                                            onChangeText={text => {
                                                const newKey = [...decodeKey]
                                                newKey[0][0] = Number(text)
                                                setDecodeKey(newKey)
                                            }}
                                        />
                                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>,</Text>
                                        <TextInput
                                            style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 8 }}
                                            value={decodeKey[0][1].toString()}
                                            onChangeText={text => {
                                                const newKey = [...decodeKey]
                                                newKey[0][1] = Number(text)
                                                setDecodeKey(newKey)
                                            }}
                                        />
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <TextInput
                                            style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 8, marginRight: 4 }}
                                            value={decodeKey[1][0].toString()}
                                            onChangeText={text => {
                                                const newKey = [...decodeKey]
                                                newKey[1][0] = Number(text)
                                                setDecodeKey(newKey)
                                            }}
                                        />
                                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>,</Text>
                                        <TextInput
                                            style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 8 }}
                                            value={decodeKey[1][1].toString()}
                                            onChangeText={text => {
                                                const newKey = [...decodeKey]
                                                newKey[1][1] = Number(text)
                                                setDecodeKey(newKey)
                                            }}
                                        />
                                    </View>
                                </View>
                                <Text style={{ fontSize: 60 }}> ]</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, padding: 8 }} onPress={() => {
                            setMode('encode')
                        }}>
                            <Text style={{ width: '100%', textAlign: 'center', color: Color.primary }}>Mã hoá</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, padding: 8, backgroundColor: Color.primary }} onPress={() => {
                            const result = hillDecode(cipherText, decodeKey)
                            props.onResult([
                                {
                                    label: 'Bản mã',
                                    value: cipherText
                                },
                                {
                                    label: 'Khoá',
                                    value: decodeKey.toString()
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

export default Hill