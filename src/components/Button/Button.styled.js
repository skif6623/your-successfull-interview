import styled from "@emotion/styled";
import {Link} from "react-router-dom";

export const EButton = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 140px;
	padding-top: 10px;
	padding-bottom: 10px;
	color: #ffffff;
	text-decoration: none;
	background-color: ${({color}) => (color ? color : "#000000")};
	border: ${({color}) => (color ? `2px solid ${color}` : "#000000")};
	border-radius: 10px;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	:hover,
	:focus {
		color: ${({color}) => color};
		background-color: #ffffff;
		-webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
		box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
	}

	@media (min-width: 768px) {
		height: 300px;
	}
`;
