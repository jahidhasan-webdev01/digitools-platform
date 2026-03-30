import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Stats from './components/Stats/Stats';
import Tools from './components/Tools/Tools';
import { toast } from 'react-toastify';

const getToolsData = async () => {
  const response = await fetch("/tools.json");
  return response.json();
}

const toolsPromise = getToolsData();

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (selectedData) => {
    setCart([...cart, selectedData]);
    toast.success("Item added to cart");
  }

  const removeFromCart = (id) => {
    const result = cart.filter((item) => item.id !== id);

    setCart(result);
  }

  const handleProceedToCheckout = () => {
    setCart([]);
  }

  return (
    <>
      <Navbar cart={cart} />
      <Banner />
      <Stats />
      <div className='bg-base-200'>

        <Tools
          toolsPromise={toolsPromise}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          handleProceedToCheckout={handleProceedToCheckout}
        />

      </div>
    </>
  )
}

export default App
