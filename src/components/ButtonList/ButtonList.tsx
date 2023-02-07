import {Button} from "../Button/Button";
import {Container, Typography} from "@mui/material";
import {EButtonList, EbuttonItem} from "./ButtonList.styled";
import {FaHtml5, FaCss3Alt, FaReact} from "react-icons/fa";
import {DiJavascript1} from "react-icons/di";

export const ButtonList = () => {
	const buttonsIcons = [
		{
			icon: <FaHtml5 size={40} />,
			id: "html",
			color: "#f46a3b",
		},
		{
			icon: <FaCss3Alt size={40} />,
			id: "css",
			color: "#2196f3",
		},
		{
			icon: <DiJavascript1 size={40} />,
			id: "java script",
			color: "#e6c830",
		},
		{
			icon: <FaReact size={40} />,
			id: "react",
			color: "#00d8ff",
		},
	];
	return (
		<Container>
			<EButtonList>
				{buttonsIcons.map(({icon, id, color}) => {
					return (
						<EbuttonItem key={id}>
							<Button color={color}>
								{icon}
								<Typography textTransform="uppercase">{id}</Typography>
							</Button>
						</EbuttonItem>
					);
				})}
			</EButtonList>
		</Container>
	);
};
