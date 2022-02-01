import Head from "next/head";
import React from "react";
import Button from "@mui/material/Button";
import Layout from "../organisms/layout";
import Link from "next/link";

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
			<h1>Home</h1>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Button variant="outlined">
					<Link href="/form">Add a Item</Link>
				</Button>
			</div>
		</Layout>
	);
};

export default Page;
