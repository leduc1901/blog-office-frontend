import React, { Component } from 'react'
import PropTypes from 'prop-types'
import img1 from "../../images/signup.png"
import img2 from "../../images/pricing.png"
import img3 from "../../images/enjoy-movify.png"

export class About extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="about-container">
                <div className="about-us">
                    <div className="about-title">
                        <h1>BOVN Là Gì</h1>
                        <p>Box Office Vietnam phân tích dữ liệu doanh thu phòng chiếu trên toàn lãnh thổ Việt Nam để đưa ra bảng xếp hạng doanh thu của các phim đang được trình chiếu. Chúng tôi lấy dữ liệu từ hệ thống bán vé online (được công khai) của các chuỗi rạp chiếu bóng trên cả nước, tổng hợp và phân tích lại thành số liệu. Dữ liệu trên BOVN hiện tại phản ánh doanh thu của các cụm rạp lớn trong cả nước</p>
                    </div>
                </div>
                <div className="timeline-main">
                    
                    <span className="main-line">

                    </span>
                    <div className="step">
                        <span className="step1">
                            Step 1
                        </span>
                        <div className="step-text">
                            <h3>Đăng Kí Tài Khoản</h3>
                            <h4>Đăng ký tài khoản trên hệ thống BOVN để có thể theo dõi dữ liệu phim ảnh từ cơ sở dự liệu của BOVN</h4>
                        </div>
                        <div className="step-img img1">
                            <img src={img1}/>
                        </div>
                    </div>
                    <div className="step">
                    <span className="step1 nbm2">
                            Step 2
                        </span>
                    <div className="step-img">
                            <img src={img2}/>
                        </div>
                        <div className="step-text step-2">
                                <h3>Chọn gói đăng ký</h3>
                                <h4>Hãy chọn gói đăng ký mà bạn muốn. Với gói đăng ký Cao Cấp, bạn có quyền truy cập vào dữ liệu thô của tất cả các phim Việt Nam được BOVN tracking từ trước tới nay.</h4>
                            </div>
                        
                    </div>
                    <div className="step">
                    <span className="step1 nbm3">
                            Step 3
                        </span>
                    <div className="step-text">
                                <h3>Phân tích dữ liệu</h3>
                                <h4>Đào sâu vào hệ thống của BOVN và bắt đầu phân tích dữ liệu nhe các bác</h4>
                            </div>
                        <div className="step-img">
                            <img src={img3}/>
                        </div>
                    </div>
                </div>
                <div className="introduction">
                    <div className="intro1">
                        <h1>964</h1>
                        <h3>Bộ Phim</h3>
                    </div>
                    <div className="intro1">
                        <h1>5</h1>
                        <h3>Cụm Rạp</h3>
                    </div>
                    <div className="intro1">
                        <h1>1027</h1>
                        <h3>Phòng Chiếu</h3>
                    </div>
                </div>
                <div className="final-banner">
                    <h1>Các tin tức mới nhất</h1>
                    <p>Các thông tin về doanh thu phòng vé trong nước sẽ được cập nhật liên tục trên BOVN
</p>
                </div>
                <div className="final-banner join-w-us">
                    <h1>Tham gia BOVN ngay!</h1>
                    <p>Chúng tôi đang trong quá trình hoàn thiện tính năng đăng nhập và các quyền lợi của gói premium của BOVN. Hãy quay lại website thường xuyên.
</p>
                </div>
            </div>
        )
    }
}

export default About
