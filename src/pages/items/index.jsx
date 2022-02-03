import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import Notes from "../../molecules/notes/Notes";
import { Button } from "@mui/material";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">Items</title>
				<meta key="description" name="description" content="Items" />
			</Head>

			<Notes />
		</Layout>
	);
};

export default Page;
