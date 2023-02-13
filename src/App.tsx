import React from "react";
import {Route, Routes} from "react-router-dom";

// import {Layout} from "./components/Layout/Layout";
// import {LoginPage} from "./pages/LoginPage";
// import {RegistrationPage} from "./pages/RegistrationPage";
import {CategoryPage} from "./pages/CategoryPage";
import {TechPage} from "./pages/TechPage";

export const App = () => {
	return (
		// <Routes>
		// 	<Route path="/" element={<Layout />}>
		// 		<Route index element={<LoginPage />} />
		// 		<Route path="register" element={<RegistrationPage />} />
		// 		<Route path="category" element={<CategoryPage />} />
		// 		<Route path="category/:id" element={<TechPage />} />
		// 		{/* <Route path="html" element={<div style={{marginTop: "200px"}}>Запитання до html</div>} />
		// 		<Route path="css" element={<div>Запитання до css</div>} />
		// 		<Route path="java-script" element={<div>Запитання до js</div>} />
		// 		<Route path="react" element={<div>Запитання до react</div>} /> */}
		// 		<Route
		// 			path="*"
		// 			element={
		// 				<div
		// 					style={{
		// 						height: "100vh",
		// 						display: "flex",
		// 						alignItems: "center",
		// 						justifyContent: "center",
		// 					}}
		// 				>
		// 					<h2>Такого маршруту не існує</h2>
		// 				</div>
		// 			}
		// 		/>
		// 	</Route>
		// </Routes>

		<Routes>
			<Route path="/" element={<CategoryPage />} />
			<Route path="/:id" element={<TechPage />} />
		</Routes>
	);
};
