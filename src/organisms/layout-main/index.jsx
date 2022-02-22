import React from "react";
import Footer from "../footer";
import Header from "../header";
import { StyledBackground } from "./styled";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<StyledBackground>{children}</StyledBackground>
			<Footer />
		</>
	);
};

export default Layout;
