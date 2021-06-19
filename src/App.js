import React from 'react'; 
import './App.css';
import Products from './components/Products/Products';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Products/>
    </div>
  );
}

export default App;
