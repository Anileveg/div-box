import React from 'react';
import './App.css';
import Footer from './JSX/Footer.js'
import Header from './JSX/Header.js'
import MainContent from './JSX/MainContent'
import Sidebar from './JSX/Sidebar'


function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* {(Header())}
        {(Sidebar())}
        {(MainContent())}
        {(Footer())} */}

        <Header />
        <div className='div'>
        <Sidebar />
        <MainContent />
        </div>
        <Footer />

      </header>
        
      
    </div>
  );
}

export default App;
