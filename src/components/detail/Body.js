import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Spin , Button, Popconfirm, message} from "antd"


export class Body extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="body-container">
                <div className="dashboard-container">
                    <div className="dashboard box-office">
                        <h7>Doanh Thu</h7>
                        <h3>{Intl.NumberFormat().format(this.props.sales)}₫</h3>
                    </div>
                    <div className="dashboard seat-number">
                        <h7>Suất Chiếu</h7>
                        <h3>{Intl.NumberFormat().format(this.props.seat)}</h3>
                    </div>
                    <div className="dashboard ticket-sold">
                        <h7>Số vé bán ra</h7>
                        <h3>{Intl.NumberFormat().format(this.props.ticket)}</h3>
                    </div>
                    <div className="dashboard fill-space">
                        <h7>Tỉ Lệ Lấp Đầy</h7>
                        <h3>{this.props.filled}%</h3>
                    </div>
                </div>
                <div className="body-detail">
                    <div className="storyline">
                        <h1>Storyline</h1>
                        <p>
                            {this.props.storyline}     
                        </p>
                    </div>
                    <div className="body-info">
                        <h1>Details</h1>
                        <p><strong>Release date: </strong> {this.props.date}</p>
                        <p><strong>Director: </strong> {this.props.director}</p>
                        <p><strong>IMDb: </strong> 8.3</p>
                        <p><strong>Lauguage: </strong> English</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Body
