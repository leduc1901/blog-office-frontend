import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from "axios"
import Header from "./Header"
import "./styles.css"
import Sidebar from './Sidebar'
export class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            logged : false
        }
    }

    async testMiddle(){
        try{
            const logged = await axios.get("/middle")
            if(logged.data != "400"){
                this.setState({
                    logged : true,
                    name : logged.data
                })
                console.log(logged)
            }
        }catch(error){

        }
    }

    fetchData = () => {
        if(this.state.logged){
            return (
                <>
                <Header name={this.state.name}/>
                <div className="admin-container">
                    <Sidebar/>
                </div>
                
                </>
            )
        }else{
            return (
                <div>
                    404 Not Found !
                </div>
            )
        }
    }

    componentDidMount(){
        this.testMiddle()
    }

    render() {
        return (
           <>
           {this.fetchData()}
           </>
        )
    }
}

export default Index
