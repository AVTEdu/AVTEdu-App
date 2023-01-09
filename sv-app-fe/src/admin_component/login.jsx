import React from "react";
//import "../css/loginAdmin.css"
import "../assets/css/loginAdmin.css"


export const LoginAdmin = () => {
    return (
        <div>
            {/* Content */}
            <div className="container-xxl">
                <div className="authentication-wrapper authentication-basic container-p-y">
                    <div className="authentication-inner">
                        {/* Register */}
                        <div className="card">
                            <div className="card-body">
                                {/* Logo */}
                                <div className="app-brand justify-content-center">
                                    <a className="app-brand-link gap-2" href="index.html">
                                        <span className="app-brand-text demo text-body fw-bolder">AVTEdu</span>
                                    </a>
                                </div>
                                {/* /Logo */}
                                <h4 className="mb-2">Trang Quản Trị</h4>
                                <p className="mb-4">Đăng nhập để sử dụng quyền quản trị</p>
                                <form className="mb-3" id="formAuthentication" action="index.html" method="POST">
                                    <div className="mb-3">
                                        <div className="d-flex justify-content-between">
                                            <label className="form-label" htmlFor="email">Email hoặc Username</label>
                                        </div>
                                        <input name="email-username" className="form-control" id="email" autofocus type="text" placeholder="Nhập email hoặc username" />
                                    </div>
                                    <div className="mb-3 form-password-toggle">
                                        <div className="d-flex justify-content-between">
                                            <label className="form-label" htmlFor="password">Mật khẩu</label>
                                            <a href="auth-forgot-password-basic.html">
                                                <small>Quên mật khẩu?</small>
                                            </a>
                                        </div>
                                        <div className="input-group input-group-merge">
                                            <input name="password" className="form-control" id="password" aria-describedby="password" type="password" placeholder="············" />

                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <button className="btn btn-primary d-grid w-100" type="submit">Đăng nhập</button>
                                    </div>
                                </form>
                                <p className="text-center">
                                    <a href="auth-register-basic.html">
                                        <span>Tạo tài khoản quản trị</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                        {/* /Register */}
                    </div>
                </div>
            </div>
        </div>

    )
}