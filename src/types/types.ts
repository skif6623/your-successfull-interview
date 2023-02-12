export interface IQItem {
	id: string;
	question: string;
	answer: string;
	categiry: string;
}

export interface IQState {
	items: IQItem[];
	isLoading: boolean;
	isError: boolean;
}
