
import './App.css';
import Component1 from './component1'
import React,{createContext,useState} from 'react';

export const UserContext=createContext()
export default function App() {
 

  const [user]=useState('HelloReact')
  return (
    <div>
      <UserContext.Provider value={user}>
      <h1>App Component</h1>
      <Component1/>
      </UserContext.Provider>
    </div>
  )
}



// ---------------------------------------------------
// import { Component } from 'react';
// import img1 from './ss.jpg'


// class App extends Component{
 
//   render(){
//     const obj=['IronMan','Owner Of Stark Industries',"protecting the people","PlayBoy"]
   
//     return(
//       <div>
//         <h1>Hello Class</h1>

//         <img src={img1} alt='Boom..!' height="500px" width='600px'></img>
//         <ol >
//         {obj.map((obj,index)=>
          
//             <li key={index}>{obj}</li>
          
//        )}
//        

// ---------------------------------class---------------------------------------------

