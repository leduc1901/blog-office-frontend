import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from "react-slick"
import test from "../../images/bloodshot.jpg"
import axios from "axios"
import {Link} from "react-router-dom"

export class News extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies : []
        }
    }
    async getMovies(){
        try{
            const movies = await axios.get("/movie")
            const data = movies.data
            this.setState({
                movies : data
            })
            console.log(this.state.movies)
        }catch(error){
            console.log(error)
        }
    }

    componentDidMount(){
        this.getMovies()
    }

    render() {
        const settings = {
            dots: true,
            infinite : false,
            speed: 500,
            slidesToShow: 4,
            swipe : false,
            slidesToScroll : 5,
            
        }
        const movies = this.state.movies
        return (
            <div>
                <h1 className="new-films">Các phim mới nhất</h1>
                <div className="slider-wrapper">
                <Slider {...settings}>
                    {movies && movies.map((e , i) => {
                        return (
                            <div>
                                <div className="slider-item">
                                    <img src={"/images/" + e.avatar}/>
                                    <div className="movie-rating">
                                        <div className="stars">
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <h5>10 / 10</h5>
                                    </div>
                                    <div className="movie-details">
                                        <h4>
                                            <Link to={`/detail/${e && e.id}`} className="movie-title">
                                                {e.name}
                                            </Link>
                                        </h4>
                                        
                                        <span className="release-date">
                                            {e.date}
                                        </span>
                                    </div>  
                                </div>
                                </div>
                        )
                    })}
                    
                    
                    
                    
                    
                    
                    </Slider>   
                    
                </div>
                    
                
                </div>
                
           
        )
    }
}

export default News
