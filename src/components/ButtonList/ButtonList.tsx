import {Button} from "../Button/Button";
import {Container, Typography} from "@mui/material";
import {EButtonList, EbuttonItem} from "./ButtonList.styled";

export const ButtonList = () => {
	const buttonsNames = ["ALL", "HTML", "CSS", "JS", "React"];
	return (
		<Container>
			<Typography mt={15} mb={6} variant="h4" component="h1" textAlign="center">
				Виберіть категорію
			</Typography>
			<EButtonList>
				{buttonsNames.map(button => {
					return (
						<EbuttonItem key={button}>
							<Button color="red">{button}</Button>
						</EbuttonItem>
					);
				})}
			</EButtonList>
		</Container>
	);
};
