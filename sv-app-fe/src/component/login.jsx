import React from "react";
import "../css/login.css";
import Logo from '../images/Logo.png';
import bg from '../images/bg02.jpg';
import Logo2 from '../images/logo2.png';
import { LoginAdmin } from "../admin_component/login";

export const Login = () => {
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form" role="form" action="" method="post"><input name="__RequestVerificationToken" type="hidden" defaultValue="" />
                        <img style={{ width: '130px', marginRight: 'auto', marginLeft: 'auto', display: 'block' }} alt="AVTEdu" src={Logo2} />
                        <br />
                        <h3 style={{ textAlign: 'center', color: 'rgb(0, 0, 0)', textTransform: 'uppercase', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Dành cho người học</h3>
                        <div className="wrap-input100 validate-input txtemail" data-validate="MSSV có dạng: 31200000121">
                            <input name="username" className="input100" id="txtusername" autofocus="true" required="true" type="text"
                                defaultValue data-val-required="The username field is required." data-val="true" placeholder="Mã số sinh viên" />
                            <span className="focus-input100" />
                            {/* <span className="label-input100">Mã số sinh viên</span> */}
                        </div>
                        <div className="wrap-input100 validate-input uselocalaccount" data-validate="Mật khẩu không được để trống">
                            <input name="password" className="input100" id="password" required="true" type="password"
                                data-val-required="The password field is required." data-val="true" placeholder="Mật khẩu" />
                            <span className="focus-input100" />
                            {/* <span className="label-input100">Mật khẩu</span> */}
                        </div>
                        <div className="flex-sb-m w-full p-t-3 p-b-32">
                            <div>
                                <a className="txt1" href="#" data-target="#tutorialModal" data-toggle="modal">
                                    Xem hướng dẫn
                                </a>
                            </div>
                            <div>
                                <a className="txt1" href="/Account/ForgotPassword">
                                    Quên mật khẩu
                                </a>
                            </div>
                        </div>
                        <input name="grecaptchaResponseToken" id="grecaptchaResponseToken" type="hidden" defaultValue="" />
                        <div className="container-login100-form-btn uselocalaccount">
                            <button className="login100-form-btn" type="submit">
                                Đăng Nhập
                            </button>
                        </div>
                        <div className="text-center p-t-35 p-b-20 uselocalaccount">
                            <a className="txt2" id="GoogleLogin" href="../admin_component/login">

                                <span>Nhấn vào đây để đăng nhập dưới quyền quản trị viên</span>
                            </a>

                        </div>
                    </form>            <div className="login100-more" style={{ backgroundImage: `url(${bg})` }} />
                </div>
            </div>
        </div>
    )
}