import React from "react";
import {Route, Routes} from "react-router-dom";

import {Layout} from "./components/Layout/Layout";
import {LoginPage} from "./pages/LoginPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {Home} from "./pages/HomePage";

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<LoginPage />} />
				<Route path="register" element={<RegistrationPage />} />
				<Route path="home" element={<Home />} />
				<Route path="html" element={<div style={{marginTop: "200px"}}>Запитання до html</div>} />
				<Route path="css" element={<div>Запитання до css</div>} />
				<Route path="js" element={<div>Запитання до js</div>} />
				<Route path="react" element={<div>Запитання до react</div>} />
				<Route
					path="*"
					element={
						<div
							style={{
								height: "100vh",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<h1>Такого маршруту не існує</h1>
						</div>
					}
				/>
			</Route>
		</Routes>
	);
};

/* <Route path="/" element={<LoginPage />} />
			<Route path="register" element={<RegistrationPage />} />
			<Route
				path="*"
				element={
					<div
						style={{
							height: "100vh",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<h1>Такого маршруту не існує</h1>
					</div>
				}
			/> */
