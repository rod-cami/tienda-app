import './App.css'
import { HomePage } from './pages/HomePage'
import { NextUIProvider } from '@nextui-org/system'
import { LoginPage } from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'

const App = (): JSX.Element => {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
    </NextUIProvider>
  )
}

export default App
