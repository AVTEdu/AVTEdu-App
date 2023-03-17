import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "THÔNG BÁO",
        path: "/thong-bao-gv",
        icon: <AiIcons.AiFillBell />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: "HỘP THƯ",
        path: "/hop-thu-gv",
        icon: <AiIcons.AiFillMail />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: "XEM CHẤM CÔNG CÁ NHÂN",
        path: "/cham-cong-gv",
        icon: <RiIcons.RiCalendarCheckFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: "CÔNG TÁC GIẢNG DẠY",
        // path: "/ql-phong",
        icon: <RiIcons.RiBallPenFill />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            // {
            //     title: "Loại phòng",
            //     path: "/ql-phong/loai-phong",
            //     icon: <IoIcons.IoIosRadioButtonOn />,
            // },
            {
                title: "Điểm danh theo lớp học phần",
                path: "/ct-gd/diem-danh-lhp",
                icon: <RiIcons.RiBook2Fill />,
            },
            {
                title: "Xem điểm",
                path: "/ct-gd/xem-diem",
                icon: <RiIcons.RiCalculatorLine />,
            },
            {
                title: "Lịch theo tuần",
                path: "/ct-gd/lich-theo-tuan",
                icon: <RiIcons.RiCalendarEventLine />,
            },
            {
                title: "Lịch theo tiến độ",
                path: "/ct-gd/lich-theo-tien-do",
                icon: <RiIcons.RiCalendar2Line />,
            },
        ],
    },
];
