import React, {FC} from "react";
import {Button} from "../components/Button/Button";

// type SectionProps = {};

export const TechPage = (props: any) => {
	return (
		<main>
			<Button link="all" color="orange">
				Всі запитання
			</Button>
			;
			<Button link="emi" color="red">
				Випвдкове запитання
			</Button>
			;
		</main>
	);
};
