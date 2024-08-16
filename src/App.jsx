import { useState } from 'react';
import './App.css'
// import Home from './components/Home'
import Navigation from './components/Navigation'
import Cart from './components/Cart';
// import RegisterPage from './components/RegisterPage';
// import LoginPage from './components/LoginPage';
import Footer from './components/Footer'

function App() {
  const [token, setToken] = useState(false);

  return (
    <>
      <Navigation token={token} />
      <a className='switchToken' onClick={() => setToken(!token)}>
        {token ? 'Log Out' : 'Log In'}
      </a>
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Cart/>
      <Footer />
    </>
  )
}

export default App
