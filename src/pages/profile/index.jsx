import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../../organisms/layout";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemsCard from "../../organisms/card/Card";
import Typography from "@mui/material/Typography";

const Profile = () => {
	const { data: session } = useSession();
	const [content, setContent] = useState([]);

	useEffect(() => {
		const fetchItem = async () => {
			const response = await axios.get(`/api/cards/`);
			const result = response.data.filter(test => test.userId === session.user.id);
			setContent(result);
			console.log(result);
		};
		if (session) {
			fetchItem();
		}
	}, [session]);

	return (
		<Layout>
			<Head>
				<title key="title">Items</title>
				<meta key="description" name="description" content="Items" />
			</Head>

			{session ? (
				<Container>
					<Typography variant="h4">{session.user.name}</Typography>
					<img
						style={{ width: "250px" }}
						src={session.user.image}
						alt={session.user.name}
					/>
					<br />
					<br />
					<br />
					<Typography variant="h4">Your stored Items</Typography>

					<Grid container spacing={3}>
						{content?.map(item => (
							<Grid item key={item._id} xs={12} sm={6} md={3}>
								<ItemsCard item={item} />
							</Grid>
						))}
					</Grid>
				</Container>
			) : (
				<Typography variant="h2">pls login</Typography>
			)}
		</Layout>
	);
};

export default Profile;
