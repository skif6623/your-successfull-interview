import React, {FC, useEffect} from "react";

import {fetchQuestions} from "../redux/operations";
import {useAppDispatch} from "../hooks/hooks";

import {SearchQuestion} from "../components/SearchQuestion/SearchQuestion";
import {QuestionList} from "../components/QuestionsList/QuestionList";

import {Container} from "@mui/system";

export const TechPage: FC = (props: any) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchQuestions());
	}, [dispatch]);

	return (
		<main style={{marginTop: "80px"}}>
			<Container>
				<SearchQuestion />
				<QuestionList title="all" />
			</Container>
		</main>
	);
};
