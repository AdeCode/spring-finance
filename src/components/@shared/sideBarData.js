import React from "react";
import { FiLogOut } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { AiOutlineApi } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";




export const SidebarData = [
{
	title: "People",
	path: "/about-us",
	iconClosed: <MdKeyboardArrowDown />,
	iconOpened: <MdKeyboardArrowUp />,

	subNav: [
		{
			title: "Users",
			path: "",
			icon: <FiUsers />,
		},
		{
			title: "Waitlist",
			path: "/dashboard/waitlist",
			icon: <FiFileText />,
		},
		{
			title: "Customers",
			path: "/dashboard/customers",
			icon: <FiUser />,
		},
	],
},
{
	title: "Accounts",
	path: "",
	iconClosed: <MdKeyboardArrowDown />,
	iconOpened: <MdKeyboardArrowUp />,

	subNav: [
		{
			title: "Cards",
			path: "",
			icon: <FiCreditCard />,
			cName: "sub-nav",
		},
		{
			title: "Wallets",
			path: "",
			icon: <IoWalletOutline />,
			cName: "sub-nav",
		},
	],
},
{
	title: "SIS",
	path: "",
	iconClosed: <MdKeyboardArrowDown />,
	iconOpened: <MdKeyboardArrowUp />,

	subNav: [
		{
			title: "Countries",
			path: "",
			icon: <BiWorld />,
			cName: "sub-nav",
		},
		{
			title: "Institutions",
			path: "",
			icon: <IoSchoolOutline />,
			cName: "sub-nav",
		},
	],
},
{
	title: "Web",
	path: "",
	iconClosed: <MdKeyboardArrowDown />,
	iconOpened: <MdKeyboardArrowUp />,

	subNav: [
		{
			title: "Business Requests",
			path: "",
			icon: <FiBriefcase />,
			cName: "sub-nav",
		},
		{
			title: "Institutions Requests",
			path: "",
			icon: <IoSchoolOutline />,
			cName: "sub-nav",
		},
	],
},
{
	title: "Transactions",
	path: "",
	iconClosed: <MdKeyboardArrowDown />,
	iconOpened: <MdKeyboardArrowUp />,

	subNav: [
		{
			title: "Payins",
			path: "/dashboard/payins",
			icon: <FiBriefcase />,
			cName: "sub-nav",
		},
		{
			title: "Payouts",
			path: "/dashboard/payouts",
			icon: <IoSchoolOutline />,
			cName: "sub-nav",
		},
	],
},
{
	title: "Baas",
	path: "",
	iconClosed: <MdKeyboardArrowDown />,
	iconOpened: <MdKeyboardArrowUp />,

	subNav: [
		{
			title: "Businesses",
			path: "",
			icon: <FiBriefcase />,
			cName: "sub-nav",
		},
		{
			title: "API requests",
			path: "",
			icon: <AiOutlineApi />,
			cName: "sub-nav",
		},
	],
},
{
	title: "Settings",
	path: "",
	iconClosed: <MdKeyboardArrowDown />,
	iconOpened: <MdKeyboardArrowUp />,

	subNav: [
		{
			title: "Notification",
			path: "/dashboard/notification",
			icon: <FiBriefcase />,
			cName: "sub-nav",
		},
		{
			title: "Coupons",
			path: "/dashboard/coupon",
			icon: <AiOutlineApi />,
			cName: "sub-nav",
		},
	],
},
{
	title: "Team",
	path: "",
	iconClosed: <MdKeyboardArrowDown />,
	iconOpened: <MdKeyboardArrowUp />,

	subNav: [
		{
			title: "Staff of Spring finance",
			path: "/dashboard/spring-staff",
			icon: <FiBriefcase />,
			cName: "sub-nav",
		},
		{
			title: "Add members",
			path: "/dashboard/add-staff",
			icon: <AiOutlineApi />,
			cName: "sub-nav",
		},
		{
			title: "Roles",
			path: "/dashboard/roles",
			icon: <AiOutlineApi />,
			cName: "sub-nav",
		},
	],
},
// {
// 	title: "Contact",
// 	path: "/contact",
// 	icon: <FaIcons.FaPhone />,
// },

{
	title: "Logout",
	path: "/logout",
	icon: <FiLogOut />,
},
];
