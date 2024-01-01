import { Dimensions, SafeAreaView, Text, Touchable, TouchableOpacity, View } from "react-native"
import ShiftCypher from "./tabs/ShiftCypher"
import { useState } from "react"
import Mode from "./panels/Mode"
import Affine from "./tabs/Affine"

const App = () => {
  const [modeVisible, setModeVisible] = useState(false)
  const [mode, setMode] = useState({ label: 'Mã dịch vòng', value: 'shiftCypher' })

  const [result, setResult] = useState([
    {
      "label": "Kết quả",
      "value": "0"
    }
  ])

  return (
    <SafeAreaView style={{ flexDirection: 'column', flex: 1 }}>
      <View style={{ flexDirection: 'row', padding: 16 }}>
        <Text style={{ flex: 1 }}>{mode.label}</Text>
        <TouchableOpacity onPress={() => { setModeVisible(true) }}>
          <Text>Chuyển</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: Dimensions.get('window').height / 2 }}>
        {result.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', padding: 16 }}>
            <Text style={{ fontStyle: 'italic', width: 100 }}>{item.label}</Text>
            <Text style={{ fontWeight: 'bold', flex: 1 }}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={{ flex: 1, padding: 16 }}>
        {mode.value == 'shiftCypher' &&
          <ShiftCypher
            onResult={(result) => {
              setResult(result)
            }}
          />
        }
        {mode.value == 'affine' &&
          <Affine
            onResult={(result) => {
              setResult(result)
            }}
          />
        }
      </View>

      {modeVisible &&
        <Mode
          visible={modeVisible}
          onSelect={(mode) => { setMode(mode) }}
          onClose={() => {
            setModeVisible(false)
          }}
        />
      }
    </SafeAreaView>
  )
}

export default App