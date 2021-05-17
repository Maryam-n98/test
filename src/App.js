import React from 'react';
import Header from './comp/Header';
import HornedBeast1 from './comp/HornedBeasts1';
import HornedBeast2 from './comp/HornedBeast2';
import HornedBeast3 from './comp/HornedBeast3';
import Footer from './comp/Footer';

class App extends React.Component{
  render(){
    return(
     <>
      <Header/>
      <HornedBeast1/>
      <HornedBeast2/>
      <HornedBeast3/>
      <Footer/>
     </>
    )
  }
}
export default App ;