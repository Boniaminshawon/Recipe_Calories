
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Recipes from './components/Recipes'
function App() {


  return (
    <>
      <div className="container  mx-auto border-4 border-black min-h-screen px-16 font-primary bg">

        <Navbar></Navbar>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>

    </>
  )
}

export default App
