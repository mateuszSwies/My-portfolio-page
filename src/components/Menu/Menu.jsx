import { Link } from "react-router-dom";
import {
	DatabaseOutlined,
	HomeOutlined,
	FolderOpenOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
const items = [
	{
		label: <Link to="/">Home</Link>,
		key: "home",
		icon: <HomeOutlined />,
	},
	{
		label: <Link to="/skills">My Skills</Link>,
		key: "skills",
		icon: <DatabaseOutlined />,
	},
	{
		label: <Link to="/projects">My Projects</Link>,
		key: "projects",
		icon: <FolderOpenOutlined />,
	},
	{
		label: <Link to="/contact">Contact</Link>,
		key: "about",
		icon: <UserOutlined />,
	},
];

const MyMenu = () => {
	const [current, setCurrent] = useState("");
	const onClick = (e) => {
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
