import React, {FC} from "react";
import {EButton} from "./Button.styled";

interface ButtonProps {
	children: React.ReactNode;
	color: string;
}

export const Button: FC<ButtonProps> = ({children, color}) => {
	return <EButton color={color}>{children}</EButton>;
};
