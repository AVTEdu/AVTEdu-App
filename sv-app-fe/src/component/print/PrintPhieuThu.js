import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import * as AiIcons from "react-icons/ai";
import adminAPI from "../../api/adminAPI";

export default function PrintPhieuThu() {
    let componentRef = useRef();

    return (
        <>
            <div id="print_component_1">
                {/* button to trigger printing of target component */}
                <ReactToPrint
                    trigger={() => <button
                        type="button" className="btn  btn-primary"
                        style={{
                            display: "inline-block", fontWeight: "400"
                            , lineHeight: "1.53", userSelect: "none"
                            , border: "1px solid transparent", padding: "0.4375rem 1.25rem", fontSize: "0.9375 rme"
                        }}><AiIcons.AiFillPrinter /> Xuất phiếu</button>}
                    content={() => componentRef}
                />

                {/* component to be printed */}
                <div style={{ display: "none" }}>
                    <ComponentToPrint ref={(el) => (componentRef = el)} />
                </div>
            </div>
        </>
    );
}

class ComponentToPrint extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.isComponentMounted = false;
    //     this.state = {
    //         dsChiTietPhieuThu: [],
    //         isLoggedIn: localStorage.getItem('ma_phieu_thu') || 0
    //     }
    //     window.addEventListener('storage', (e) => this.storageChanged(e));
    //     this.storageChanged = this.storageChanged.bind(this);
    // }

    // storageChanged(e) {
    //     if (e.key === 'ma_phieu_thu') {
    //         this.setState({ isLoggedIn: e.newValue })
    //     }
    // }


    // async componentDidMount() {
    //     this.isComponentMounted = true;
    //     try {
    //         // var maSV = window.localStorage.getItem('ma');
    //         var maSV = '19507391';
    //         // const maPThu = windows.localStorage.getItem('ma_phieu_thu');
    //         // const maPThu = JSON.parse(localStorage.getItem('ma_phieu_thu'));
    //         const maPThu = this.state.isLoggedIn;
    //         console.log("Ma phieu thu: " + maPThu);
    //         const res = await adminAPI.getChiTietPhieuThuTongHop('19507391', '2');
    //         const dsChiTietPhieuThu = res.data;
    //         if (this.isComponentMounted) {
    //             this.setState({ dsChiTietPhieuThu });
    //         }
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    //     // const active = async () => {
    //     //     const res = await adminAPI.getChiTietPhieuThuTongHop('19507391', '2');
    //     //     const dsChiTietPhieuThu = res.data;
    //     //     this.setState({ dsChiTietPhieuThu });
    //     //     console.log(this.state.dsChiTietPhieuThu);
    //     // };
    //     // active();
    // }


    // componentWillUnmount() {
    //     this.isComponentMounted = false;
    // }

    state = {
        maSV: '0',
        maPhieuThu: '0',
        dsChiTietPhieuThu: [],
        // isSubmitted: false,
    }
    activeChiTietPhieuThu = async (masv, mapthu) => {
        // this.setState({ isSubmitted: true });
        const res = await adminAPI.getChiTietPhieuThuTongHop(masv, mapthu);
        const dsChiTietPhieuThu = res.data;
        this.setState({ dsChiTietPhieuThu });
        console.log(this.state.dsChiTietPhieuThu);
    }

    activeSetMa = (data) => {
        // this.setState({ maSV: window.localStorage.getItem('ma') });
        // this.setState({ maPhieuThu: window.localStorage.getItem('ma_phieu_thu') });
        console.log(this.state.maPhieuThu);
        console.log(data);
        if (this.state.maPhieuThu !== data) {
            // console.log(window.localStorage.getItem('ma'));
            // console.log(window.localStorage.getItem('ma_phieu_thu'));
            this.setState({ maSV: window.localStorage.getItem('ma') });
            this.setState({ maPhieuThu: window.localStorage.getItem('ma_phieu_thu') });
        }
    }


    // componentDidMount() {
    //     // this.mounted = true;
    //     // this.setState({ maSV: '0' });
    //     // this.setState({ maPhieuThu: '0' });
    //     // this.setState({ maSV: window.localStorage.getItem('ma') });
    //     // this.setState({ maPhieuThu: window.localStorage.getItem('ma_phieu_thu') });
    //     this.activeChiTietPhieuThu(this.state.maSV, this.state.maPhieuThu);
    // }

    // componentWillUnmount() {
    //     this.mounted = false;
    // }

    componentDidUpdate(prevProps, prevState) {
        // this.mounted = true;
        // console.log(window.localStorage.getItem('ma_phieu_thu'));
        this.activeSetMa(window.localStorage.getItem('ma_phieu_thu'));

        console.log("update: " + this.state.maPhieuThu);
        if (this.state.maPhieuThu == window.localStorage.getItem('ma_phieu_thu')) {
            this.activeChiTietPhieuThu(this.state.maSV, this.state.maPhieuThu);
        }
        // if (prevState.maPhieuThu !== this.state.maPhieuThu) {
        //     // console.log("update");
        //     // this.activeSetMa();
        //     // console.log(this.state.maSV);
        //     // console.log(this.state.maPhieuThu);
        //     this.activeChiTietPhieuThu(this.state.maSV, this.state.maPhieuThu);
        //     //this.activeChiTietPhieuThu('19507391', '2');
        // }

    }


    render() {
        return (
            <div>
                <h2 style={{ color: "green" }}>Attendance</h2>
                <table style={{ border: "1px solid black", width: "100%" }}>
                    <thead>
                        <th>ma_hoc_phi</th>
                        <th>ten_mon_hoc</th>
                        <th>so_tien</th>
                    </thead>
                    <tbody>
                        {
                            this.state.dsChiTietPhieuThu?.data?.getChiTietPhieuThu
                                .map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.ma_hoc_phi}</td>
                                        <td>{item.ten_mon_hoc}</td>
                                        <td>{item.so_tien}</td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
                <p style={{ textAlign: "right", color: "red" }}>ky va ghi ro ho ten</p>
            </div>
        );
    }
}