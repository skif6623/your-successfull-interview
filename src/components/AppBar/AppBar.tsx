import {AppBar, Toolbar, Button, Box} from "@mui/material";
import {TbBrandJavascript} from "react-icons/tb";

export const MainAppBar = () => {
	return (
		<>
			<AppBar>
				<Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
					<Box sx={{display: {xs: "block", sm: "none"}}}>
						<TbBrandJavascript size={40} />
					</Box>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</>
	);
};
