import React from 'react'
import HomeWorld from '../Components/HelloWorld'
import HelloWorld from '../Components/HelloWorld'


function Home(){
    return (
        <div>
            <h1 className="font-bold text-2xl">This is the home page</h1>
            
            <HelloWorld name="Phi"/>
        </div>
    )
}

export default Home