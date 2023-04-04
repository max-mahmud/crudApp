import {Route , Routes} from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Edit from './pages/Edit/Edit'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
