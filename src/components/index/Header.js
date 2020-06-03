import React, { Component } from 'react'
import Logo from "../../images/bovn_logo_white.png"
import Banner from "../../images/shutterstock_586719869.jpg"
import Login from "./Login"
import {connect} from 'react-redux'
import {openArea} from "../../actions/loginActions"

export class Header extends Component {
    constructor(props){
        super(props)
        
    }


    openLoginArea = () => {
        this.props.dispatchOpenArea()
        
    }

    
    render() {
        let area
        if(this.props.area){
            area = <Login/>
        }else{
            
        }
        return (
            <>
            {area}
            <div className="index-header">
                <div className="header-top">
                    <img className="logo" src={Logo}/>
                    <div className="header-menu">
                        <a href="">Trang Chủ</a>
                        <a href="">Fanpage BOVN</a>
                    </div>
                    <div className="login-btn" onClick={this.openLoginArea}>
                        <i class="fas fa-user-alt"></i>
                            LOGIN
                    </div>
                </div>
                <div className="banner">
                    <div className="search">
                            <input type="text" className="search-input" placeholder="Enter Movies or Series Title"></input>
                            <div className="search-btn"><i class="fas fa-search"></i></div>
                        </div>
                </div>
                
            </div>
            
            </>
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
