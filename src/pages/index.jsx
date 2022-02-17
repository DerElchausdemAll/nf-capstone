import Head from "next/head";
import React from "react";
import Button from "@mui/material/Button";
import Layout from "../organisms/layout";
import { useSession } from "next-auth/react";

const Page = () => {
	const { data: session } = useSession();
	console.log(session);
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
				{session ? (
					<div>
						<div style={{ display: "flex", justifyContent: "center" }}>
							<Button variant="contained" href="/form">
								Add an Item
							</Button>
						</div>
					</div>
				) : (
					<div />
				)}
			</div>
		</Layout>
	);
};

export default Page;
