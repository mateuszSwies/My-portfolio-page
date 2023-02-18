import { Row, Col } from "antd";
import {
	CodeOutlined,
	SketchOutlined,
	PieChartOutlined,
} from "@ant-design/icons";

const Skills = () => {
	return (
		<div>
			<h2>My Skills</h2>
			<Row gutter={16}>
				<Col span={8}>
					<div style={{ textAlign: "center" }}>
						<CodeOutlined style={{ fontSize: "48px" }} />
						<h3>Programming</h3>
					</div>
				</Col>
				<Col span={8}>
					<div style={{ textAlign: "center" }}>
						<SketchOutlined style={{ fontSize: "48px" }} />
						<h3>Design</h3>
					</div>
				</Col>
				<Col span={8}>
					<div style={{ textAlign: "center" }}>
						<PieChartOutlined style={{ fontSize: "48px" }} />
						<h3>Data Analysis</h3>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Skills;
