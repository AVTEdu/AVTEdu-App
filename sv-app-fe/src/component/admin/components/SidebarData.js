import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "Quản lý khoa",
        // path: "/ql-khoa",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Khoa",
                path: "/ql-khoa/khoa",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Chuyên ngành",
                path: "/ql-khoa/chuyen-nganh",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Quản lý học phần",
        // path: "/ql-hocphan",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Môn học",
                path: "/ql-hocphan/mon-hoc",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Học phần",
                path: "/ql-hocphan/hoc-phan",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
        ],
    },
    {
        title: "Quản lý lớp học phần",
        // path: "/ql-lophocphan",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Học kỳ",
                path: "/ql-lophocphan/hoc-ki",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Lớp học phần",
                path: "/ql-lophocphan/lop-hoc-phan",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Phân công",
                path: "/ql-lophocphan/phan-cong",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
        ],
    },
    {
        title: "Quản lý phòng",
        // path: "/ql-phong",
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Loại phòng",
                path: "/ql-phong/loai-phong",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Phòng",
                path: "/ql-phong/phong",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Quản lý thời khóa biểu",
        // path: "/ql-tkb",
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Thời khóa biểu",
                path: "/ql-tkb/tkb",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Quản lý người dùng",
        // path: "/ql-user",
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Admin",
                path: "/ql-user/admin",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Giảng viên",
                path: "/ql-user/gv",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Sinh viên",
                path: "/ql-user/sv",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
];
