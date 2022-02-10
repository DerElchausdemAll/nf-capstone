// import Head from "next/head";
// import React from "react";
// import Layout from "../../organisms/layout";
// import Link from "next/link";

// export const getStaticProps = async () => {
// 	const response = await fetch("http://localhost:3000/api/cards");

// 	const data = await response.json();

// 	return {
// 		props: { items: data },
// 	};
// };

// const Test = ({ items }) => {
// 	return (
// 		<Layout>
// 			<Head>
// 				<title key="title">About</title>
// 				<meta key="description" name="description" content="About" />
// 			</Head>
// 			<h1>Huhu</h1>
// 			{items.map(item => (
// 				<Link key={item.id} href="http://localhost:3000/api/cards/">
// 					<h3>{item.title}</h3>
// 				</Link>
// 			))}
// 		</Layout>
// 	);
// };

// export default Test;
