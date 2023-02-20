import React from "react";
//import "../css/loginAdmin.css"
import "../../assets/css/loginAdmin.css";
import { useState, useEffect, useRef, useContext } from "react";
import signinAPI from "../../api/signinAPI";
import Cookies from "js-cookie";
import useAuth from "../../services/hooks/useAuth"
import { Link, useNavigate, useLocation } from 'react-router-dom';


export const LoginAdmin = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/AdminApp/*";

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
            const res = await signinAPI.signInAdmin({
                ma: user,
                password: pwd,
            });
            console.log(res.data);
            localStorage.setItem("user", JSON.stringify(res.data.admin.ma_admin));
            const _ma = localStorage.getItem("user");
            console.log(_ma)
            Cookies.set("token", res.data.accessToken);
            Cookies.set("refreshToken", res.data.refreshToken);
            const accessToken = res?.data?.accessToken;
            // const roles = res?.data?.roles;
            const roles = 2001;
            setAuth({ user, pwd, accessToken, roles });
            setUser('');
            setPwd('');
            //setSuccess(true);
            navigate(from, { replace: true });
        } catch (error) {
            setErrMsg(error.message);
            errRef.current.focus();
        }
    }



    return (
        <>
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                    {errMsg}
                </p>
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
                                {/* /Register */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}