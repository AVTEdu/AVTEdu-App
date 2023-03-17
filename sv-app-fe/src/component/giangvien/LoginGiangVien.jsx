import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import signinAPI from "../../api/signinAPI";
import Cookies from "js-cookie";
import useAuth from "../../services/hooks/useAuth"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LogoIUH from "../../assets/img/logo_img/Logo_IUH.c377b483.png"

export default function LoginGiangVien() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/GiangVienApp";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            // const res = await signinAPI.signInAdmin({
            //     ma: user,
            //     password: pwd,
            // });
            // console.log(res.data);
            // localStorage.setItem("user", JSON.stringify(res.data.admin.ma_admin));
            // const _ma = localStorage.getItem("user");
            // console.log(_ma)
            // Cookies.set("token", res.data.accessToken);
            // Cookies.set("refreshToken", res.data.refreshToken);
            // const accessToken = res?.data?.accessToken;
            // // const roles = res?.data?.roles;
            // const roles = 2001;
            // setAuth({ user, pwd, accessToken, roles });
            // setUser('');
            // setPwd('');
            // //setSuccess(true);
            navigate(from, { replace: true });
        } catch (error) {
            setErrMsg(error.message);
            errRef.current.focus();
        }
    }
    return (
        <>
            <section>
                {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                    {errMsg}
                </p> */}
                <div>

                    <div className="container-xxl">
                        <div className="authentication-wrapper authentication-basic container-p-y">
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <div className="app-brand justify-content-center"
                                        style={{ width: '460px', textAlign: "center", marginBottom: "30px" }}>
                                        <img className="ant-image-img" src={LogoIUH} />

                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                </div>
                                <div className="col-md-4">
                                    <div className="authentication-inner">

                                        <div className="card">
                                            <div className="card-body">

                                                <div className="app-brand justify-content-center">
                                                    <a className="app-brand-link gap-2" href="/">
                                                        <span className="app-brand-text text-body fw-bolder"
                                                            style={{ fontSize: "1.5rem" }}>AVTEdu</span>
                                                    </a>
                                                </div>

                                                <h4 className="mb-2" style={{ textAlign: "center" }}>Trang Giảng Viên</h4>
                                                <p className="mb-4" style={{ textAlign: "center" }}>Đăng nhập để sử dụng nghiệp vụ của giảng viên</p>
                                                <form className="mb-3" id="formAuthentication" onSubmit={handleSubmit}>
                                                    <div className="mb-3">
                                                        <div className="d-flex justify-content-between">
                                                            <label className="form-label" htmlFor="email">Email hoặc Username</label>
                                                        </div>
                                                        <input name="email-username" className="form-control" id="email"
                                                            type="text" placeholder="Nhập email hoặc username"
                                                            ref={userRef}
                                                            autoComplete="off"
                                                            onChange={(e) => setUser(e.target.value)}
                                                            value={user}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="mb-3 form-password-toggle">
                                                        <div className="d-flex justify-content-between">
                                                            <label className="form-label" htmlFor="password">Mật khẩu</label>
                                                            <a href="auth-forgot-password-basic.html">
                                                                <small>Quên mật khẩu?</small>
                                                            </a>
                                                        </div>
                                                        <div className="input-group input-group-merge">
                                                            <input name="password" className="form-control" id="password"
                                                                aria-describedby="password" type="password" placeholder="············"
                                                                onChange={(e) => setPwd(e.target.value)}
                                                                autoComplete="off"
                                                                value={pwd}
                                                                required />

                                                        </div>
                                                    </div>

                                                    <div className="mb-3">
                                                        <button className="btn btn-primary d-grid w-100" type="submit">Đăng nhập</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}