import React, {FC, useEffect} from "react";
import {useParams} from "react-router-dom";

import {fetchQuestions} from "../redux/operations";
import {useAppDispatch} from "../hooks/hooks";

import {SearchQuestion} from "../components/SearchQuestion/SearchQuestion";
import {QuestionsList} from "../components/QuestionsList/QuestionsList";

import {Container} from "@mui/system";

export const TechPage: FC = (props: any) => {
	const {id} = useParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchQuestions());
	}, [dispatch]);

	return (
		<main style={{marginTop: "80px"}}>
			<Container>
				<SearchQuestion />
				<QuestionsList title={id} />
			</Container>
		</main>
	);
};
