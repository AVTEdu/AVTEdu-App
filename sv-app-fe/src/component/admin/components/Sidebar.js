import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Logomini from "../../../assets/img/logo_img/logo-mini.png";

const Nav = styled.div`
background: #343a40;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
margin-left: 12rem;
`;

const NavIcon = styled(Link)`

font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
border-bottom: 1px solid #4b545c;
`;

const SidebarNav = styled.nav`
background: #343a40;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    {/* <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                    <h1
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: "35px"
                        }}
                    >
                        IUH Admin AVT-Edu
                    </h1> */}
                    <a style={{
                        color: "white", height: "2.5rem", position: "relative",
                        paddingRight: "0", paddingLeft: "0", display: "block", marginTop: "15px", fontSize: "1rem",
                        marginLeft: "1150px"
                    }} href="/logoutAd">
                        Đăng xuất
                    </a>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            {/* <AiIcons.AiOutlineHome /> */}
                            <img src={Logomini} style={{ marginLeft: "2rem" }} />
                            <h1
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    fontSize: "35px",
                                    marginLeft: "10px",
                                    marginTop: "15px"
                                }}
                            >
                                AVT-Edu
                            </h1>
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;
