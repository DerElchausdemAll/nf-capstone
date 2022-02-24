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
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

// import axios from "axios";

const Details = ({ item }) => {
	console.log(item);

	const theme = createTheme({
		palette: {
			primary: {
				main: "#1976d2",
			},
			secondary: {
				main: "#ff831a",
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Head>
					<title key="title">About</title>
					<meta key="description" name="description" content="About" />
				</Head>
				<Container>
					<Typography
						variant="h4"
						color="primary"
						sx={{ paddingTop: "5rem", paddingBottom: "1rem" }}
					>
						{item.title}
					</Typography>
					<ImageSlider images={item.images} />
					<Divider>
						<Typography color="primary" variant="h4" sx={{ paddingTop: "1rem" }}>
							Description
						</Typography>
					</Divider>

					<Typography
						variant="h6"
						color="black"
						sx={{ paddingTop: "1rem", paddingBottom: "1rem" }}
					>
						{item.details}
					</Typography>
					<Divider>
						<Typography color="primary" variant="h5">
							Contact
						</Typography>
					</Divider>
					<br />
					{/* funktioniert leider noch nicht */}
					<form
						noValidate
						autoComplete="off"
						style={{ display: "flex", flexDirection: "column" }}
						// action="https://formsubmit.co/peter.jan@mail.de"
						// method="POST"
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
						{/* <input type="hidden" name="_captcha" value="false" /> */}
						<TextField
							required
							variant="outlined"
							color="secondary"
							type="email"
							name="email"
							label="Your Email"
						/>

						<TextField
							required
							multiline
							variant="outlined"
							color="secondary"
							type="text"
							name="name"
							rows={6}
							label="Enter your message here"
							style={{ marginTop: 15 }}
						/>
						{/* <Button
							color="primary"
							variant="contained"
							type="submit"
							style={{ marginTop: 15, marginBottom: 15 }}
						>
							Send
						</Button> */}
						<PopupState variant="popover" popupId="demo-popup-popover">
							{popupState => (
								<div
									style={{
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Button
										variant="contained"
										style={{
											marginTop: 15,
											marginBottom: 15,
										}}
										{...bindTrigger(popupState)}
									>
										Send
									</Button>
									<Popover
										{...bindPopover(popupState)}
										anchorOrigin={{
											vertical: "top",
											horizontal: "center",
										}}
										transformOrigin={{
											vertical: "bottom",
											horizontal: "center",
										}}
									>
										<Typography sx={{ p: 1 }}>
											Thanks for your request.
										</Typography>
									</Popover>
								</div>
							)}
						</PopupState>
					</form>
				</Container>
			</Layout>
		</ThemeProvider>
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
