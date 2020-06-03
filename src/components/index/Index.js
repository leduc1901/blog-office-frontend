import React, { Component } from 'react'
import Header from "./Header"
import News from "./News"
import Upcoming from './Upcoming'
import About from "./About"
import Footer from "./Footer"


export class Index extends Component {
    

    render() {
        return (
            <>
            <Header/>
            <div className="main-content">
                <News/>
                
            </div>
            <Upcoming/>
            <About/>
            <Footer/>
            </>
        )
    }
}

export default Index
