import {Button} from "../Button/Button";
import {Container, Typography} from "@mui/material";
import {EButtonList, EbuttonItem} from "./ButtonList.styled";
import {EJsIcon, EReactIcon, ECssIcon, EHtmlIcon} from "./ButtonList.styled";

export const ButtonList = () => {
	const buttonsIcons = [
		{
			icon: <EHtmlIcon />,
			id: "html",
			color: "#f46a3b",
		},
		{
			icon: <ECssIcon />,
			id: "css",
			color: "#2196f3",
		},
		{
			icon: <EJsIcon />,
			id: "java script",
			color: "#e6c830",
		},
		{
			icon: <EReactIcon />,
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