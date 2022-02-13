import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";

export const getStaticPaths = async () => {
	const response = await fetch("http://localhost:3000/api/cards");
	const data = await response.json();

	const paths = data.map(item => {
		return {
			params: { id: item._id },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async context => {
	const id = context.params.id;
	const response = await fetch("http://localhost:3000/api/cards/" + id);

	const data = await response.json();

	return {
		props: { item: data },
	};
};

const Details = ({ item }) => {
	console.log(item);

	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>

			<h1>{item.title}</h1>
			<img src={item.image} alt={item.title} />
			<h4>{item.details}</h4>
		</Layout>
	);
};
export default Details;
