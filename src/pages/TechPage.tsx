import React, {FC, useEffect} from "react";
import {useParams} from "react-router-dom";

import {fetchQuestions} from "../redux/operations";
import {useAppDispatch} from "../hooks/hooks";

import {QuestionsList} from "../components/QuestionsList/QuestionsList";
import {isShowSearch} from "../redux/serviseSlice";
import {Container} from "@mui/system";

export const TechPage: FC = (props: any) => {
	const {id} = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchQuestions());
		dispatch(isShowSearch(true));
	}, [dispatch]);

	return (
		<main style={{marginTop: "80px"}}>
			<Container>
				<QuestionsList title={id} />
			</Container>
		</main>
	);
};
