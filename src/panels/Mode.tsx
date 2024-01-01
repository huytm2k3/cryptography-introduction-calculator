import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native"

interface IMode {
    visible: boolean
    onSelect: (mode: any) => void
    onClose: () => void
}

const Mode = (props: IMode) => {
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
            label: 'Mã Vingenere',
            value: 'vingenere'
        },
        {
            label: 'Hệ mật khoá chạy',
            value: 'running'
        },
        {
            label: 'Hệ mật Hill',
            value: 'hill'
        }
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
                    backgroundColor: 'white'
                }}>
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