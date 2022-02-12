import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../../organisms/layout";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemsCard from "../../organisms/card/Card";

import useStore from "../../ions/hooks/storeFormData";

export const getStaticProps = async () => {
	const response = await fetch("http://localhost:3000/api/cards");

	const data = await response.json();

	return {
		props: { items: data },
	};
};

const Test = ({ items }) => {
	const fetchData = useStore(state => state.fetchData);
	const updateData = useStore(state => state.updateData);
	const deleteData = useStore(state => state.deleteData);

	useEffect(() => {
		fetchData();
	}, [updateData, deleteData]);

	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<Container>
				<Grid container spacing={3}>
					{items.map(item => (
						<Grid item key={item._id} xs={12} sm={6} md={3}>
							<ItemsCard item={item} />
						</Grid>
					))}
				</Grid>
			</Container>
		</Layout>
	);
};

export default Test;
