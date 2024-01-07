import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface IMode {
    visible: boolean
    onSelect: (mode: any) => void
    onClose: () => void
}

const Mode = (props: IMode) => {
    const insets = useSafeAreaInsets()
    const mode = [
        {
            label: 'Mã dịch vòng',
            value: 'shiftCypher'
        },
        {
            label: 'Mã Affine',
            value: 'affine'
        },
        {
            label: 'Mã Vigenere',
            value: 'vigenere'
        },
        {
            label: 'Hệ mật khoá chạy',
            value: 'running'
        },
        {
            label: 'Hệ mật Hill',
            value: 'hill'
        },
        {
            label: 'Tính nghịch đảo',
            value: 'inverse'
        },
        {
            label: 'Phần tử sinh',
            value: 'generator'
        },
        {
            label: 'Nhân bình phương có lặp',
            value: 'exponentiation'
        },
        {
            label: 'Hệ mật RSA',
            value: 'rsa'
        },
        {
            label: 'Hệ mật Rabin',
            value: 'rabin'
        },
        {
            label: 'Hệ mật Elgamal',
            value: 'elgamal'
        },
        {
            label: 'Cấp của phần tử',
            value: 'levelOfElement'
        },
        {
            label: 'Mix columns',
            value: 'mixColumns'
        },
        {
            label: 'Xtime',
            value: 'xtime'
        },
        {
            label: 'Nhân xtime',
            value: 'xor'
        },
    ]

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={() => {
                // this.closeButtonFunction()
            }}>
            <TouchableOpacity
                onPress={() => {
                    props.onClose()
                }}
                style={{
                    height: '50%',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }}>

            </TouchableOpacity>
            <View
                style={{
                    width: '100%',
                    height: '50%',
                    marginTop: 'auto',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    paddingBottom: insets.bottom
                }}>
                <View 
                    style={{  
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        height: 4,
                        margin: 'auto',
                        width: 100,
                        borderRadius: 4,
                        marginVertical: 8
                    }}
                />
                <ScrollView style={{ width: '100%' }}>
                    {mode.map((item, index) => (
                        <View style={{
                            backgroundColor: 'white',
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.1,
                            shadowRadius: 3.84,
                            elevation: 1,
                        }}>
                            <TouchableOpacity
                                key={index}
                                style={{
                                    padding: 16,
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    props.onSelect(item)
                                    props.onClose()
                                }}>
                                <Text>{item.label}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </Modal>
    )
}

export default Mode