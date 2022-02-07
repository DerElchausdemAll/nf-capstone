import Head from "next/head";
import React from "react";
import Button from "@mui/material/Button";
import Layout from "../organisms/layout";

// fontsource/roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<div>
				<h1 style={{ display: "flex", justifyContent: "center" }}>Spielzeug-Verleih-App</h1>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Button variant="contained" href="/form">
						Add a Item
					</Button>
				</div>
			</div>
		</Layout>
	);
};

export default Page;
