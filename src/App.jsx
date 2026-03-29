import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Main from './components/main/Main'
import Navbar from './components/navbar/Navbar'
import Stats from './components/stats/Stats'
import { ToastContainer } from 'react-toastify'


const fetchData = async () => {
  const response = await fetch('/productData.json')
  return response.json();
}

const productData = fetchData();

function App() {

  const [btn, setBtn] = useState('Products')
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar />
      <Banner />
      <Stats />

      <Main
        setCart={setCart}
        cart={cart}
        productData={productData}
        btn={btn}
        setBtn={setBtn} />


      <ToastContainer />

    </>
  )
}

export default App
