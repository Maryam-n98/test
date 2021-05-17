import React from 'react';
import Header from './comp/Header';
import Main from './comp/Main';
class App extends React.Component{
  render(){
    return(
     <>
      <Header/>
      <Main/>
      <Footer/>
     </>
    )
  }
}
export default App ;