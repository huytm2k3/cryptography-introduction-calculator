import { Dimensions, SafeAreaView, Text, Touchable, TouchableOpacity, View } from "react-native"
import ShiftCypher from "./tabs/ShiftCypher"
import { useEffect, useState } from "react"
import Mode from "./panels/Mode"
import Affine from "./tabs/Affine"
import Vigenere from "./tabs/Vigenere"
import RunningKey from "./tabs/RunningKey"
import Hill from "./tabs/Hill"
import Inverse from "./tabs/Inverse"
import { isGenerator, euler, getMultiplicativeGroup, getGenerators, inverse } from "./functions/Functions"
import Generator from "./tabs/Generator"
import Exponentiation from "./tabs/Exponentiation"
import RSA from "./tabs/RSA"
import { SafeAreaProvider } from "react-native-safe-area-context"
import Rabin from "./tabs/Rabin"

const App = () => {
  const [modeVisible, setModeVisible] = useState(false)
  const [mode, setMode] = useState({ label: 'Mã dịch vòng', value: 'shiftCypher' })

  useEffect(() => {
    setResult([
      {
        "label": "Kết quả",
        "value": "0"
      }
    ])
  }, [mode])

  const [result, setResult] = useState([
    {
      "label": "Kết quả",
      "value": "0"
    }
  ])


  return (
    <SafeAreaProvider>
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
          {mode.value == 'vigenere' &&
            <Vigenere
              onResult={(result) => {
                setResult(result)
              }}
            />
          }
          {mode.value == 'running' &&
            <RunningKey
              onResult={(result) => {
                setResult(result)
              }}
            />
          }
          {mode.value == 'hill' &&
            <Hill
              onResult={(result) => {
                setResult(result)
              }}
            />
          }
          {mode.value == 'inverse' &&
            <Inverse
              onResult={(result) => {
                setResult(result)
              }}
            />
          }
          {mode.value == 'generator' &&
            <Generator
              onResult={(result) => {
                setResult(result)
              }}
            />
          }
          {mode.value == 'exponentiation' &&
            <Exponentiation
              onResult={(result) => {
                setResult(result)
              }}
            />
          }
          {mode.value == 'rsa' &&
            <RSA
              onResult={(result) => {
                setResult(result)
              }}
            />
          }
          {mode.value == 'rabin' &&
            <Rabin
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
    </SafeAreaProvider>
  )
}

export default App