import React from "react";
import Footer from "../footer";
import Header from "../header";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main style={{ background: "white", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
