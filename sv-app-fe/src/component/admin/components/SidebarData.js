import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "Quản lý khoa",
        // path: "/ql-khoa",
        icon: <AiIcons.AiFillHdd />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Khoa",
                path: "/ql-khoa/khoa",
                icon: <IoIcons.IoIosRadioButtonOn />,
            },
            {
                title: "Chuyên ngành",
                path: "/ql-khoa/chuyen-nganh",
                icon: <IoIcons.IoIosRadioButtonOn />,
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
                icon: <IoIcons.IoIosRadioButtonOn />,
                cName: "sub-nav",
            },
            {
                title: "Học phần",
                path: "/ql-hocphan/hoc-phan",
                icon: <IoIcons.IoIosRadioButtonOn />,
                cName: "sub-nav",
            },
        ],
    },
    {
        title: "Quản lý lớp học phần",
        // path: "/ql-lophocphan",
        icon: <RiIcons.RiBook3Fill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Học kỳ",
                path: "/ql-lophocphan/hoc-ki",
                icon: <IoIcons.IoIosRadioButtonOn />,
                cName: "sub-nav",
            },
            {
                title: "Lớp học phần",
                path: "/ql-lophocphan/lop-hoc-phan",
                icon: <IoIcons.IoIosRadioButtonOn />,
                cName: "sub-nav",
            },
            {
                title: "Phân công",
                path: "/ql-lophocphan/phan-cong",
                icon: <IoIcons.IoIosRadioButtonOn />,
                cName: "sub-nav",
            },
        ],
    },
    {
        title: "Quản lý phòng",
        // path: "/ql-phong",
        icon: <RiIcons.RiLuggageDepositFill />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Loại phòng",
                path: "/ql-phong/loai-phong",
                icon: <IoIcons.IoIosRadioButtonOn />,
            },
            {
                title: "Phòng",
                path: "/ql-phong/phong",
                icon: <IoIcons.IoIosRadioButtonOn />,
            },
        ],
    },
    {
        title: "Quản lý thời khóa biểu",
        // path: "/ql-tkb",
        icon: <IoIcons.IoIosCalendar />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Thời khóa biểu",
                path: "/ql-tkb/tkb",
                icon: <IoIcons.IoIosRadioButtonOn />,
            },
        ],
    },
    {
        title: "Quản lý người dùng",
        // path: "/ql-user",
        icon: <IoIcons.IoIosPerson />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Admin",
                path: "/ql-user/admin",
                icon: <IoIcons.IoIosRadioButtonOn />,
            },
            {
                title: "Giảng viên",
                path: "/ql-user/gv",
                icon: <IoIcons.IoIosRadioButtonOn />,
            },
            {
                title: "Sinh viên",
                path: "/ql-user/sv",
                icon: <IoIcons.IoIosRadioButtonOn />,
            },
        ],
    },
    {
        title: "Quản lý Công nợ",
        // path: "/ql-user",
        icon: <RiIcons.RiMoneyDollarCircleFill />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Công nợ Phiếu thu",
                path: "/ql-congno/ds-cno",
                icon: <IoIcons.IoIosRadioButtonOn />,
            },
        ],
    },
];
