import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import Notes from "../../molecules/notes/Notes";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<Notes />
		</Layout>
	);
};

export default Page;
