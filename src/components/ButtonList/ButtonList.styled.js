import styled from "@emotion/styled";
import {FaHtml5, FaCss3Alt, FaReact} from "react-icons/fa";
import {DiJavascript1} from "react-icons/di";

const breakpoints = [320, 768, 1200];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
console.log(mq[0]);

export const EButtonList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 90px;
`;

export const EbuttonItem = styled.li`
	@media (min-width: 320px) {
		flex-basis: 100%;
	}
	@media (min-width: 768px) {
		flex-basis: calc((100% - 10px) / 2);
	}
`;

export const EJsIcon = styled(DiJavascript1)`
	width: 40px;
	height: 40px;

	@media (min-width: 768px) {
		width: 100px;
		height: 100px;
	}
	@media (min-width: 1200px) {
		width: 150px;
		height: 150px;
	}
`;
export const EReactIcon = styled(FaReact)`
	width: 40px;
	height: 40px;

	@media (min-width: 768px) {
		width: 100px;
		height: 100px;
	}
	@media (min-width: 1200px) {
		width: 150px;
		height: 150px;
	}
`;
export const ECssIcon = styled(FaCss3Alt)`
	width: 40px;
	height: 40px;

	@media (min-width: 768px) {
		width: 100px;
		height: 100px;
	}
	@media (min-width: 1200px) {
		width: 150px;
		height: 150px;
	}
`;
export const EHtmlIcon = styled(FaHtml5)`
	width: 40px;
	height: 40px;

	@media (min-width: 768px) {
		width: 100px;
		height: 100px;
	}
	@media (min-width: 1200px) {
		width: 150px;
		height: 150px;
	}
`;
