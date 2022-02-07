import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../../organisms/layout";
import Items from "../../molecules/items/Items";
import useStore from "../../ions/hooks/storeFormData";

const Page = () => {
	const fetchData = useStore(state => state.fetchData);
	const updateData = useStore(state => state.updateData);
	useEffect(() => {
		fetchData();
	}, [updateData]);

	return (
		<Layout>
			<Head>
				<title key="title">Items</title>
				<meta key="description" name="description" content="Items" />
			</Head>
			<Items />
		</Layout>
	);
};

export default Page;
