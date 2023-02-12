import React from "react";
import {EInput} from "./SearchQuestion.styled";

export const SearchQuestion = (props: any) => {
	const handleChange = (e: any) => {
		e.preventDefault();
		console.log(e.target.value);
	};
	return (
		<>
			<label htmlFor="filter"></label>
			<EInput type="text" id="filter" onChange={handleChange} />
		</>
	);
};
