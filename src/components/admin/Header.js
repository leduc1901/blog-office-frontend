import React, { Component } from 'react'


export class Header extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="admin-header">
                
                <div className="admin-logo">
                    {this.props.name}
                </div>
                <div className="admin-logout">
                    Log Out
                </div>
            </div>
        )
    }
}

export default Header
