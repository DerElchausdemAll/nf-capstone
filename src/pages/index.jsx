import Head from "next/head";
import React from "react";
import Button from "@mui/material/Button";
import Layout from "../organisms/layout";
import { useSession, signIn, signOut } from "next-auth/react";
import GitHubIcon from "@mui/icons-material/GitHub";

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
				{session ? (
					<div>
						<img src={session.user.image} alt={session.user.name} />
						<h2>{session.user.name}</h2>
						<Button
							onClick={() => {
								signOut();
							}}
						>
							Logout
						</Button>{" "}
					</div>
				) : (
					<Button
						startIcon={<GitHubIcon />}
						onClick={() => {
							signIn("github");
						}}
					>
						Login with GitHub
					</Button>
				)}

				<br />
				<br />
				<br />
				<br />
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Button variant="contained" href="/form">
						Add an Item
					</Button>
				</div>
			</div>
		</Layout>
	);
};

export default Page;
