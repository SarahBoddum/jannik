import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hej from './components/Hej'
import Home from './components/Home'
import MainContent from './components/MainContent'

function App() {
 

  return (
    <>
    <Home/>
    <Hej navn="Anna" alder="22"/>
    <Header/>
    <MainContent/>
    <Footer/>
    </>
  )
}

export default App
