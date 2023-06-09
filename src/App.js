import React from "react";
import { Navbar,Brand,Cat } from "./components";
import {Features,Footer,Header,Whatgpt,Possibility} from './Containers'
import './App.css'

function App() 
{
    return(
        <div className="App">
            <div className="gradient_bg">
                <Navbar/>
                <Header/>
             </div>
             <Brand/>
             <Whatgpt/>
             <Features/>
             <Possibility/>
             <Cat/>
             <Footer/>
        </div>
    )
}

export default App  