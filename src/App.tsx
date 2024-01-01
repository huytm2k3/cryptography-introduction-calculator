import { Dimensions, SafeAreaView, Text, Touchable, TouchableOpacity, View } from "react-native"
import ShiftCypher from "./tabs/ShiftCypher"
import { useState } from "react"

const App = () => {
  const [result, setResult] = useState([
    {
      "label": "Kết quả 1",
      "value": "KETQUA1"
    },
    {
      "label": "Kết quả 2",
      "value": "KETQUA2"
    }
  ])

  return (
    <SafeAreaView style={{ flexDirection: 'column', flex: 1 }}>
      <View style={{ flexDirection: 'row', padding: 16 }}>
        <Text style={{ flex: 1 }}>Mã dịch vòng</Text>
        <TouchableOpacity onPress={() => { }}>
          <Text>Chuyển</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: Dimensions.get('window').height / 2 }}>
        {result.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', padding: 16 }}>
            <Text style={{ flex: 1, fontStyle: 'italic' }}>{item.label}</Text>
            <Text style={{ fontWeight: 'bold' }}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={{ flex: 1, padding: 16 }}>
        <ShiftCypher 
          onResult={(result) => {
            setResult(result)
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default App