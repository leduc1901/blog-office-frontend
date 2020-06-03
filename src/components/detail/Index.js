import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from "./Header"
import Banner from "./Banner"
import Body from "./Body"
import Footer from "./Footer"
import axios from "axios"

export class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            movie : []
        }
    }

    async getMovie(){
        const id = this.props.match.params.id;
        try {
            const movie = await axios.get(`/movie/${id}`)
            const data = movie.data[0]
            this.setState({
                movie : data
            })
            console.log(this.state.movie)
        } catch (error) {
            
        }
    }

    componentDidMount(){
        this.getMovie()
    }

    render() {
        return (
            <div>
                <Header/>
                <Banner 
                    bannerImg={this.state.movie.avatar}
                    name={this.state.movie.name}
                    date={this.state.movie.date}
                    runtime={this.state.movie.runtime}
                />
                <Body
                    date={this.state.movie.date}
                    sales={this.state.movie.box_office}
                    filled={this.state.movie.filled}
                    director={this.state.movie.director}
                    storyline={this.state.movie.storyline}
                    seat={this.state.movie.seat_number}
                    ticket={this.state.movie.ticket_sold}
                />
                <Footer/>
            </div>
        )
    }
}

export default Index
