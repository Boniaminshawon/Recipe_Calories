

import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Recipes from './components/Recipes'
import Touch from './components/Touch'


function App() {

  return (
    <>

  

      <div className="container mx-auto px-16 font-primary bg">

        <Navbar></Navbar>
        <Banner></Banner>
        <Recipes ></Recipes>
        <Touch></Touch>
        <Footer></Footer>
     
      </div>

    </>
  )
}

export default App
