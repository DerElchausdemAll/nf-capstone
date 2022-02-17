import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";

const Test = () => {
	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<h1>Your request was send to the user!</h1>
		</Layout>
	);
};

export default Test;
