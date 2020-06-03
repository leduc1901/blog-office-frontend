import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Sidebar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="admin-sidebar">
                <div className="extra-space">

                </div>
                <div className="admin-sidebar-item">
                    Movies
                </div>
                <div className="admin-sidebar-item">
                    Users
                </div>

            </div>
        )
    }
}

export default Sidebar
