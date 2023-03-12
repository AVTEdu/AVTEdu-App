import React from "react";
import { useState } from "react";
import '../assets/css/main.css'
import '../assets/css/tooltipster.bundle.css'
import '../assets/css/style.css'
import '../assets/css/base.css'
import '../assets/css/responsive.css'
import '../assets/css/jquery-confirm.min.css'
import '../assets/css/components.min.css'
import '../assets/css/profile.min.css'
import '../assets/css/toastr.min.css'
import * as AiIcons from "react-icons/ai";

export default function Sidenavbar() {
    const [active, setActive] = useState(false);
    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <a href="/trang-chu" title="">
                            <img src="https://media.iuh.edu.vn/Media/2_sviuh/Images/iuh7313e0f8-4-e.png" style={{ maxHeight: '40px' }} />
                        </a>
                    </div>

                    <div className="menu-btn">
                        <a href="#" title=""><i className="fa fa-bars"></i></a>
                    </div>

                    {/* <div className={active ? "user-account dropdown open" : "user-account dropdown"}>
                        <div className="user-info" data-toggle="dropdown">
                            <img className="user-account-img" src=""
                                style={{ width: '30px', height: '30px', borderRadius: '50%', objectFit: 'cover' }} />
                            <a className="user-account-name" title=""
                                onClick={setActive(true)}
                            >Phạm Nguyễn Văn Trường </a>
                            <AiIcons.AiFillCaretDown style={{ marginTop: "11px" }} />
                        </div>
                        <div className="user-account-info dropdown-menu pull-right">
                            <ul className="us-links">
                                <li><a href="/thong-tin-sinh-vien.html" title="">Thông tin cá nhân</a></li>
                                <li><a title="" >Đổi mật khẩu</a></li>
                                <li><a href="/SinhVien/Logout" title="">Đăng xuất</a></li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="user-account">
                        <div className="user-info">
                            <a className="user-account-name" href="/logoutSV"
                            >Đăng xuất </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}