import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BigBanner from "../../images/aquaman-de-vuong-atlantis-c13-15444120281229.jpg"
import SmallBanner from "../../images/aquaman-de-vuong-atlantis-c13-15444120205494.jpg"

export class Banner extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <>
            <div className="detail-banner" style={{backgroundImage : `url(/images/${this.props.bannerImg})` }}>
                
            </div>
            <div className="detail-section">
                <div className="detail-poster">
                    <img src={SmallBanner}/>
                </div>
                        <div className="detail-specific">
                            <h1>{this.props.name}</h1>
                            <h4>{this.props.runtime} Phút | | {this.props.date}</h4>
                            <div className="detail-btn">
                                <div className="detail-option">
                                    TRAILER
                                </div>
                                <div className="detail-option">
                                    DETAILS
                                </div>
                            </div>
                            <div className="detail-rating">
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                                <span>
                                8 / 10
                                </span>
                                 
                            </div>
                        </div>
            </div>
            
            </>
        )
    }
}

export default Banner
