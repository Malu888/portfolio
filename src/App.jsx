import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
      <div className={styles.content}>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
