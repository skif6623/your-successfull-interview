import styled from "@emotion/styled";

export const EButton = styled.button`
	width: 100%;
	height: 300px;
	padding-top: 10px;
	padding-bottom: 10px;
	color: ${({color}) => color};
	background-color: #ffffff;
	border: ${({color}) => (color ? `2px solid ${color}` : "#000000")};
	border-radius: 10px;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	:hover,
	:focus {
		background-color: ${({color}) => (color ? color : "#000000")};
		color: #ffffff;
		-webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
		box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
	}
`;
