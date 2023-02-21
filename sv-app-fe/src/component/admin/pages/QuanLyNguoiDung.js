import React from "react";
import Sidebar from "../components/Sidebar";

export const Admin = () => {
    return (
        <>
            <Sidebar />
            <div className="qluser">
                <h1>Admin page</h1>
            </div>
        </>
    );
};

export const GiangVien = () => {
    return (
        <><Sidebar />
            <div className="qluser">
                <h1>GiangVien page</h1>
            </div>
        </>
    );
};

export const SinhVien = () => {
    return (
        <>
            <Sidebar />
            <div className="qllhp">
                <h1>SinhVien page</h1>
            </div>
        </>
    );
};
