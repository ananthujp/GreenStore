import React from 'react';
//import {useSelector,useDispatch} from "react-redux"
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content'
import "tailwindcss/tailwind.css"
import './App.css';

function App() {
  //const dispatch = useDispatch();
  //const user = useSelector(selectUser);

  return (
    <div className="">
       <Navbar/>
       <Content/>
    </div>
  );
}

export default App;
