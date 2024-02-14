import './App.css'
import { HomePage } from './pages/HomePage'
import { NextUIProvider } from '@nextui-org/system'

const App = (): JSX.Element => {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <HomePage/>
    </NextUIProvider>
  )
}

export default App
