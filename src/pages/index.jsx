import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout-main";
import { useSession, getSession } from "next-auth/react";
import {
	StyledText,
	StyledHeadline,
	StyledButton,
	StyledAnimationFixer,
} from "../atoms/styled-main/styled";

const Page = () => {
	const { data: session } = useSession();
	console.log(session);
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>

			<StyledHeadline variant="h2" color="white">
				TOY CYCLE
			</StyledHeadline>

			<StyledAnimationFixer>
				<StyledText variant="h4" color="white">
					<div>Give</div>
					<div> your</div>
					<div> Toys</div>
					<div> a new</div>
					<div> Story</div>
				</StyledText>
			</StyledAnimationFixer>
			{session && (
				<StyledButton variant="contained" href="/form">
					Start
				</StyledButton>
			)}
		</Layout>
	);
};

export default Page;

export const getServerSideProps = async context => {
	return {
		props: {
			session: await getSession(context),
		},
	};
};
