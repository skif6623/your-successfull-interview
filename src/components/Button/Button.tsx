import React, {FC} from "react";
import {EButton} from "./Button.styled";

interface ButtonProps {
	link: string;
	children: React.ReactNode;
	color: string;
}

export const Button: FC<ButtonProps> = ({link, children, color}) => {
	return (
		<EButton to={link} color={color}>
			{children}
		</EButton>
	);
};
