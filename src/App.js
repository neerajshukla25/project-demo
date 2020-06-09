import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import pic from './Components/images/pic.webp'
import pic4 from './Components/images/pic4.jpg'
import Writecontent from './Components/paragraph/paragraph';
import Aboutus from './Components/Aboutus/Aboutus';

function App() {
  return (
    <div className="App">
      
      <div >
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <a href="#">Login</a>
                <a href="#">Signup</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Home</a>
                <a href="#">Session</a>
                <a href="#">Downlods</a>
                <a href="#">Setting</a>
            </Navigation>
        </Drawer>
    </Layout>
    <img style={{margin:'5%'}}src={pic}></img>
    <Writecontent/>
    <img style={{width:'50%'}}src={pic4}></img>
    <Writecontent/>
    <Aboutus/>
   </div>
     
    </div>
  );
}

export default App;
