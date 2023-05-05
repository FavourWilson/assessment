
import { Route,Routes } from 'react-router-dom'
import Home from './components/templates/home'
import UserProfile from './components/templates/profile'
function App() {

  return (
    
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<UserProfile/>} />
      </Routes>
    </>
  )
}

export default App
