import React, {FC} from "react";
import {Button} from "../components/Button/Button";

type SectionProps = {};

export const SectionPage: FC<SectionProps> = props => {
	return (
		<>
			<Button color="orange">Всі запитання</Button>;<Button color="red">Випвдкове запитання</Button>;
		</>
	);
};
