import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {changeFilter} from "../../redux/filterSlice";
import {selectFilter} from "../../redux/selectors";

import {EInput} from "./SearchQuestion.styled";

export const SearchQuestion: FC = (props: any) => {
	const inputValue = useAppSelector(selectFilter);
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		dispatch(changeFilter(e.target.value));
	};

	return (
		<>
			<label htmlFor="filter"></label>
			<EInput type="text" id="filter" value={inputValue} onChange={handleChange} />
		</>
	);
};
