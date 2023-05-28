import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import "../assets/css/login.css"
import bg from '../assets/img/login_img/bg02.jpg';
import Logo2 from '../assets/img/login_img/logo2.png';
import LoginSV1 from '../assets/img/logo_img/LoginSV1.png';
import signinAPI from "../api/signinAPI";
import Cookies from "js-cookie";
import useAuth from "../services/hooks/useAuth";
import { Link, useNavigate, useLocation } from 'react-router-dom';


// import { AuthContext } from "../services/contexts/AuthContext"



export const Login = () => {
    //const { setAuth } = useContext(AuthContext);
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/trang-chu";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    var sendDate = (new Date()).getTime();
    const [loading, setLoading] = useState(false);
    const [resTime, setResTime] = useState(0);
    const [fakeState, setFakeState] = useState();

    useEffect(() => {
        userRef.current.focus();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, [])
    useEffect(() => {
        if (resTime > 0) {
            console.log(resTime);
            setTimeout(() => {
                setLoading(false);
            }, resTime)
        }
    }, [resTime])


    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(user, pwd);
        try {
            setLoading(true);
            // for (let i = 0; i <= 100000; i += 10) {
            //     await signinAPI.signIn({
            //         ma: user,
            //         password: pwd,
            //     });
            // }
            const res = await signinAPI.signIn({
                ma: user,
                password: pwd,
            });
            //console.log(JSON.stringify(res?.data));
            //localStorage.setItem("user", JSON.stringify(res.data));
            // setLoading(false);

            localStorage.setItem("user", JSON.stringify(res.data.sinh_vien.ma_sinh_vien));
            //console.log(JSON.parse(localStorage.getItem("user")?.email));
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
            var receiveDate = (new Date()).getTime();
            var responseTimeMs = receiveDate - sendDate;
            setResTime(responseTimeMs);
            navigate(from, { replace: true });

        } catch (error) {
            if (!error?.res) {
                setErrMsg('No Server Response');
            } else if (error.res?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (error.res?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login failed');
            }
            errRef.current.focus();
        }
    }

    const fakeRequest = async (e) => {
        e.preventDefault();
        //console.log(user, pwd);
        try {
            setLoading(true);
            for (let i = 0; i <= 100000; i += 1) {
                await signinAPI.signIn({
                    ma: user,
                    password: pwd,
                });
            }
            const res = await signinAPI.signIn({
                ma: user,
                password: pwd,
            });
            //console.log(JSON.stringify(res?.data));
            //localStorage.setItem("user", JSON.stringify(res.data));
            // setLoading(false);

            localStorage.setItem("user", JSON.stringify(res.data.sinh_vien.ma_sinh_vien));
            //console.log(JSON.parse(localStorage.getItem("user")?.email));
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
            var receiveDate = (new Date()).getTime();
            var responseTimeMs = receiveDate - sendDate;
            setResTime(responseTimeMs);
            navigate(from, { replace: true });

        } catch (error) {
            if (!error?.res) {
                setErrMsg('No Server Response');
            } else if (error.res?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (error.res?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login failed');
            }
            errRef.current.focus();
        }
    }
    return (
        <>
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                    {errMsg}
                </p>
                <div className="container-login100">
                    {loading ? (
                        <div className="load-container">
                            <div>
                                <h1 style={{ color: "white", marginBottom: "25px", fontSize: "20px", letterSpacing: "2px" }}>Loading...</h1>
                            </div>
                            <div className="loading">
                                <div className="load-line-box">
                                    <div className="load-line"></div>
                                </div>
                            </div>
                        </div>
                    ) : (<></>)}
                    <div className="wrap-login100">
                        <form className="login100-form validate-form" onSubmit={handleSubmit}>
                            <input type="hidden" defaultValue="" />
                            <img style={{ width: '130px', marginRight: 'auto', marginLeft: 'auto', display: 'block' }} alt="AVTEdu" src={LoginSV1} />
                            <br />
                            <h3 style={{ textAlign: 'center', color: 'rgb(0, 0, 0)', textTransform: 'uppercase', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>Dành cho người học</h3>
                            <div className="wrap-input100 validate-input txtemail" data-validate="MSSV có dạng: 31200000121">
                                <input className="input100" id="username"
                                    type="text" placeholder="Mã số sinh viên"
                                    ref={userRef}
                                    // autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required />
                                <span className="focus-input100" />
                                {/* <span className="label-input100">Mã số sinh viên</span> */}
                            </div>
                            <div className="wrap-input100 validate-input uselocalaccount" data-validate="Mật khẩu không được để trống">
                                <input className="input100" placeholder="Mật khẩu"
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                />
                                <span className="focus-input100" />
                                {/* <span className="label-input100">Mật khẩu</span> */}
                            </div>
                            <div className="flex-sb-m w-full p-t-3 p-b-32">
                                <div>
                                    <a className="txt1" href="#" data-target="#tutorialModal" data-toggle="modal"
                                        onClick={fakeRequest}
                                    >
                                        Fake Request
                                    </a>
                                </div>
                                <div>
                                    <a className="txt1" href="">
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
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="text-center p-t-35 p-b-20 uselocalaccount">
                                        <a className="txt2" id="" href="../AdminLogin">

                                            <span>Trang dành cho giáo vụ</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-center p-t-35 p-b-20 uselocalaccount">
                                        <a className="txt2" id="" href="../GiangVienLogin">

                                            <span>Trang dành cho giảng viên</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>            <div className="login100-more" style={{ backgroundImage: `url(${bg})` }} />
                    </div>
                </div>
            </section>
        </>
    )
}