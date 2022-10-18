import React from 'react';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Content from './Content';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App;
