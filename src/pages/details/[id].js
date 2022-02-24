import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import dbConnect from "../../ions/database/index";
import Item from "../../ions/models/item.model";
import ImageSlider from "../../molecules/imageslider/ImageSlider";
import Container from "@mui/material/Container";
// import axios from "axios";

const Details = ({ item }) => {
	console.log(item);

	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<Container>
				<Typography variant="h2" color="primary" sx={{ paddingBottom: "1rem" }}>
					{item.title}
				</Typography>
				<ImageSlider images={item.images} />

				<Typography color="primary" variant="h4">
					Description
				</Typography>
				<Typography variant="h6" color="black" sx={{ paddingBottom: "1rem" }}>
					{item.details}
				</Typography>

				<Typography variant="h5">Contact</Typography>
				<br />
				{/* funktioniert leider noch nicht */}
				<form
					style={{ display: "flex", flexDirection: "column" }}
					action="https://formsubmit.co/peter.jan@mail.de"
					method="POST"
					// onSubmit={async event => {
					// 	event.preventDefault();
					// 	const formData = new FormData(event.target);
					// 	const formValues = Object.fromEntries(formData);
					// 	try {
					// 		const response = await axios.post(`/api/mailer/${item.userId}`, formValues);
					// 		console.log("-------->", response);
					// 	} catch (err) {
					// 		console.error(err);
					// 	}
					// }}
				>
					<input type="hidden" name="_captcha" value="false" />
					<TextField
						required
						type="email"
						name="email"
						placeholder="Enter your Email here"
					/>
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
			</Container>
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
