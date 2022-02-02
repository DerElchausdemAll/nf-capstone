import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";

const Profile = () => {
	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<h1>Profile</h1>
		</Layout>
	);
};

export default Profile;
