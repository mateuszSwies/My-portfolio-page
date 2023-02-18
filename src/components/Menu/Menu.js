import React from "react";
import { Link } from "react-router-dom";
import {
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
const items = [
	{
		label: <Link to="/">Home</Link>,
		key: "home",
		icon: <MailOutlined />,
	},
	{
		label: <Link to="/skills">My Skills</Link>,
		key: "skills",
		icon: <AppstoreOutlined />,
	},
	{
		label: <Link to="/projects">My Projects</Link>,
		key: "projects",
		icon: <SettingOutlined />,
	},
	{
		label: <Link to="/about">About Me</Link>,
		key: "about",
	},
];

const MyMenu = () => {
	const [current, setCurrent] = useState("home");
	const onClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};
	return (
		<>
			<Menu
				onClick={onClick}
				selectedKeys={[current]}
				mode="horizontal"
				items={items}
			/>
		</>
	);
};

export default MyMenu;
