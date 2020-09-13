import React from 'react';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'
// import CounterExample from './Components/CounterExample'


function App() {
  return (
    <div>
      <Header />

      <HelloWorld name="Dak"/>

      <Footer />
    </div>
  );
}

export default App;
