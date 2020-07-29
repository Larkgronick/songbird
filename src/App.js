import React from 'react'; 
import './App.css';
import Header from './components/Header/Header';
import Bird from './components/Bird/Bird';
import Variants from './components/Variants/Variants'

function App() {
  return (
    <body className='App'>
      <Header />
      <Bird />
      <Variants/>
    </body>
  );
}

export default App;

