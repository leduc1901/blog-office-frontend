import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Logo from "../../images/bovn_logo-1.png"
import {Link} from "react-router-dom"
import Login from "../index/Login"
import {connect} from 'react-redux'
import {openArea} from "../../actions/loginActions"

export class Header extends Component {
    

    openLoginArea = () => {
        this.props.dispatchOpenArea()
        
    }

    render() {
        let area;
        if(this.props.area){
            area = <Login/>
        }
        return (
            
            <div>
                {area}
                <div className="index-header header-detail">
                <div className="header-top">
                    <Link to="/">
                        <img className="logo" src={Logo}/>
                    </Link>
                    <div className="header-menu detail-menu">
                        <Link to="/">Trang Chủ</Link>
                        <a href="">Fanpage BOVN</a>
                    </div>
                    <div className="login-btn" onClick={this.openLoginArea}>
                    <i class="fas fa-user-alt"></i>
                        LOGIN
                    </div>
                </div>
                
                
                
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        area : state.area,
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchOpenArea : () => dispatch(openArea())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);