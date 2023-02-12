export const getCurrentColor = (title?: string) => {
	switch (title) {
		case "html":
			return "#f46a3b";
		case "css":
			return "#2196f3";
		case "java-script":
			return "#e6c830";
		case "react":
			return "#00d8ff";
	}
};
