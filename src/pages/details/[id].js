import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import dbConnect from "../../ions/database/index";
import Item from "../../ions/models/item.model";
import ImageSlider from "../../molecules/imageslider/ImageSlider";

const Details = ({ item }) => {
	console.log(item);

	// get userid from item
	// find userby userid
	// change email to users email

	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<h1>{item.title}</h1>
			<ImageSlider images={item.images} />

			<Typography variant="h4">Description</Typography>
			<h4>{item.details}</h4>
			<br />
			<br />
			<Typography variant="h4">Contact the User</Typography>
			<br />
			<br />
			<form
				style={{ display: "flex", flexDirection: "column" }}
				action="https://formsubmit.co/peter.jan@mail.de"
				method="POST"
			>
				<TextField required type="email" name="email" placeholder="Enter your Email here" />
				<TextField
					required
					multiline
					type="text"
					name="name"
					rows={6}
					placeholder="Enter your message here"
				/>
				<TextField type="hidden" name="_next" value="/details/" />
				<Button color="primary" variant="contained" type="submit">
					Send
				</Button>
			</form>
		</Layout>
	);
};
export default Details;

export async function getServerSideProps(request) {
	const {
		query: { id },
	} = request;

	await dbConnect();
	try {
		const item = await Item.findById(id);
		console.log(item);

		return {
			props: { item: JSON.parse(JSON.stringify(item)) },
		};
	} catch (err) {
		console.log(err);
		return {
			props: {
				item: [],
			},
		};
	}
}
