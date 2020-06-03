import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {closeArea , signupArea} from "../../actions/loginActions"
import axios from "axios"
import {Link , withRouter} from "react-router-dom" 

export class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
          user : "", 
          password : "",
          regUser : "",
          regPassword : ""
        }
        
    }

    handleUserChange(e){
        let str = e.target.value;
        
        this.setState({user: str})
    }
    handlePasswordChange(e){
        let str;
        str = e.target.value;
        
        this.setState({password:str})
    }
    handleRegUserChange(e){
        let str;
        str = e.target.value;
        this.setState({regUser:str})
    }
    handleRegPasswordChange(e){
        let str;
        str = e.target.value;
        
        this.setState({regPassword:str})
    }
    closeButton = () => {
        this.props.dispatchCloseArea()
    }

    signupButton = () => {
        this.props.dispatchSignupArea()
    }

    async signinBtn(){
        const { history } = this.props
        const signIn = await axios.post(`/login` , {name : this.state.user, password : this.state.password})
        console.log(signIn)
                if(signIn.data == "200"){
                    history.push("/admin")
                }else if(signIn.data == "400"){
                    alert("Bạn Nhập Sai Mật Khẩu")
                }else{
                    alert("Tài khoản không tồn tại")
                }
    }

    async signupBtn(){
        const { history } = this.props
        let reg = new RegExp("^[a-zA-Z0-9_.-]*$");
        if(reg.test(this.state.regUser) && reg.test(this.state.regPassword) && this.state.regUser.length >= 8 && this.state.regPassword.length >= 8){
            
                const signUp = await axios.post(`/signup` , {name : this.state.regUser, password : this.state.regPassword})
                if(signUp.data != "400"){
                    alert("Bạn đã đăng kí thành công")
                    history.push("/admin")
                }else{
                    alert("Tài khoản đã có người sử dụng")
                }
                
           
        }else{
            alert("Tên Và Password chỉ được bao gồm chữ và số và dài hơn 8 ký tự !")
        }
    }

    fetchLogin = () => {
        if(this.props.login === true){
            return (
                <>
                    <div className="login-headline">
                        SIGN IN 
                        <i class="fas fa-times" onClick={this.closeButton}></i>
                    </div>
                    
                    <div className="login-content">
                    <form className="login-form" method="POST" onSubmit={(e) => e.preventDefault()}>
                        <p className="username">
                            Tên người dùng hoặc địa chỉ email
                        </p>
                        <input type="text" onChange={this.handleUserChange.bind(this)} className="login-input"></input>
                        <p className="username">
                            Password
                        </p>
                        <input type="password" onChange={this.handlePasswordChange.bind(this)} className="login-input"></input>
                        <p className="remember-me">
                        <input type="checkbox" className="login-checkbox"></input>
                        Tự động đăng nhập
                        </p>
                        <button className="submit-btn" onClick={this.signinBtn.bind(this)} type="submit" >
                            ĐĂNG NHẬP 
                        </button>
                    </form>
                    <div className="bottom-links">
                        <span>
                            Not a member ? 
                        </span>
                        <a className="signup-link" onClick={this.signupButton}> Sign Up</a>
                    </div>
                    </div>
                </>
                )
            }
        if(this.props.signup){
            return (
                <>
                    <div className="login-headline">
                        SIGN UP 
                        <i class="fas fa-times" onClick={this.closeButton}></i>
                    </div>
                    
                    <div className="login-content">
                    <form className="login-form" method="POST" onSubmit={(e) => e.preventDefault()}>
                        <p className="username">
                            Username
                        </p>
                        <input type="text" onChange={this.handleRegUserChange.bind(this)} className="login-input"></input>
                        <p className="username">
                            Password
                        </p>
                        <input type="password" onChange={this.handleRegPasswordChange.bind(this)} className="login-input"></input>        
                        <button className="submit-btn" onClick={this.signupBtn.bind(this)}  >
                            ĐĂNG KÍ 
                        </button>
                    </form>
                    </div>
                </>
                )
        }
                
    }

        render(){
        
        
            return (
                <>
                <div className="login-area">
                   
                    
                </div>
                <div className="login-center">
                    {this.fetchLogin()}
                    
                </div>
                
                
                </>
            )
        }
    }



function mapStateToProps(state){
    return {
        area : state.area,
        login : state.login,
        signup : state.signup
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchCloseArea : () => dispatch(closeArea()),
        dispatchSignupArea : () => dispatch(signupArea())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
