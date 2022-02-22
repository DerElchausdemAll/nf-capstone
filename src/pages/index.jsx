import Head from "next/head";
import React from "react";
import Button from "@mui/material/Button";
import Layout from "../organisms/layout-main";
import { useSession } from "next-auth/react";
import { StyledText, StyledHeadline, StyledButton } from "../atoms/styled-main/styled";

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
				<br />
				<br />
				<div style={{ display: "flex", justifyContent: "center" }}>
					<StyledHeadline variant="h1" color="white">
						TOY CYCLE
					</StyledHeadline>
				</div>
				<StyledText variant="h3" color="white">
					Give
				</StyledText>
				<StyledText variant="h3" color="white">
					your
				</StyledText>
				<StyledText variant="h3" color="white">
					Toys
				</StyledText>
				<StyledText variant="h3" color="white">
					a new
				</StyledText>
				<StyledText variant="h3" color="white">
					Story
				</StyledText>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				{session ? (
					<div>
						<div style={{ display: "flex", justifyContent: "center" }}>
							<StyledButton variant="contained" href="/form">
								Add an Item
							</StyledButton>
						</div>
					</div>
				) : (
					<div />
				)}
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		</Layout>
	);
};

export default Page;
