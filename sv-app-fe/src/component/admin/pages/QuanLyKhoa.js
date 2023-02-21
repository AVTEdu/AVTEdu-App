import React from "react";
import Sidebar from "../components/Sidebar";


export const Khoa = () => {
    return (
        <>
            <Sidebar />
            <div className="qlk">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Thêm Khoa</h2>
                    <br />
                    <div className="container">
                        <form>
                            <div className="row">
                                <div className="col-25">
                                    <label>Mã khoa</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="maKhoa" name="maKhoa" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>Tên Khoa</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="tenKh" name="tenKhoa" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="subject">Mô tả</label>
                                </div>
                                <div className="col-75">
                                    <textarea id="subject" name="subject" style={{ height: '200px' }} defaultValue={""} />
                                </div>
                            </div>
                            <div className="row">
                                <input type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </>
    );
};

export const ChuyenNganh = () => {
    return (
        <>
            <Sidebar />
            <div className="qlk">
                <div>
                    <h2 style={{ fontWeight: "bold" }}>Thêm Chuyên ngành</h2>
                    <div className="container">
                        <form>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="fname">Mã chuyên ngành</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Tên chuyên ngành</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="country">Mã khoa</label>
                                </div>
                                <div className="col-75">
                                    <select id="" name="">
                                        <option value="">1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="lname">Số tín chỉ</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="" name="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="subject">Mô tả</label>
                                </div>
                                <div className="col-75">
                                    <textarea id="subject" name="subject" style={{ height: '200px' }} defaultValue={""} />
                                </div>
                            </div>
                            <div className="row">
                                <input type="submit" value="Save" />
                            </div>
                        </form>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
        </>
    );
};
