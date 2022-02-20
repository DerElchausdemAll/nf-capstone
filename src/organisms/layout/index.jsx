import React from "react";
import Footer from "../footer";
import Header from "../header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main style={{ background: "white", margin: "2.5em" }}>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
