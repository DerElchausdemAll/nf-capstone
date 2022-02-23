import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../../organisms/layout";
import Items from "../../molecules/items/Items";
import useStore from "../../ions/hooks/storeFormData";
// import LoadingAnimation from "../../molecules/loading-animation/LoadingAnimation";

const Page = () => {
	useEffect(() => {
		useStore.getState().fetchData();
	}, []);

	// const isLoading = useStore(state => state.isLoading);

	return (
		<Layout>
			<Head>
				<title key="title">Items</title>
				<meta key="description" name="description" content="Items" />
			</Head>
			{/* <LoadingAnimation /> */}
			<Items />
		</Layout>
	);
};

export default Page;
