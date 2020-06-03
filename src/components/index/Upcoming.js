import React, { Component } from 'react'
import PropTypes from 'prop-types'
import banner from "../../images/shadow-of-the-colossus-listing-thumb-01-ps4-us-17oct17-1524193957161764187365.png"
import main from "../../images/38043101335_db8d53849b_o.jpg"
export class Upcoming extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="parralax">
                <h1>One of the Greatest Videogames</h1>
                <div className="banner-wrapper">
                    <div className="banner-left">
                        <img src={main}/>
                        <div className="title-details">
                            <div className="title-name">
                                Shadow of the Colossus
                            </div>
                            <div className="title-d">
                                World's Finest
                            </div>
                        </div> 
                    </div>
                    <div className="banner-right">
                        <div className="banner-top">
                        <img src={banner}/>
                        <div className="title-details">
                            <div className="title-name">
                                Shadow of the Colossus
                            </div>
                            <div className="title-d">
                                World's Finest
                            </div>
                        </div> 
                        </div>
                        <div className="banner-down">
                        <img src={banner}/>
                        <div className="title-details">
                            <div className="title-name">
                                Shadow of the Colossus
                            </div>
                            <div className="title-d">
                                World's Finest
                            </div>
                        </div> 
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Upcoming
