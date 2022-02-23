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
import { StyledImage } from "../../atoms/styled-image/styled";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import styled from "@emotion/styled";

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

	const Input = styled("input")({
		display: "none",
	});

	return (
		<Layout>
			<Head>
				<title key="title">Items</title>
				<meta key="description" name="description" content="Items" />
			</Head>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					mt: 9,
					mb: 2,
					mx: 2,
				}}
			>
				{session ? (
					<Container>
						<Typography variant="h4" color="primary">
							{session.user.name}
						</Typography>
						<br />
						<div>
							<StyledImage src={session.user.image} alt={session.user.name} />
							<label
								htmlFor="icon-button-file"
								style={{ marginBottom: "20px", marginLeft: "-30px" }}
							>
								<Input
									multiple
									accept="image/*"
									id="icon-button-file"
									type="file"
									onChange={event => {
										setImageSelected(event.target.files);
									}}
								/>
								<IconButton
									color="primary"
									aria-label="upload picture"
									component="span"
								>
									<PhotoCamera />
								</IconButton>
							</label>
						</div>
						<br />
						<Divider />
						<Typography variant="h6">Stored Toys: {content.length}</Typography>
						<Divider />
						<br />
						<Grid container spacing={0.5}>
							{content?.map(item => (
								<Grid key={item._id} item xs={12} sm={6} md={3}>
									<ItemsCard
										item={item}
										isMine={item.userId === session?.user.id}
									/>
								</Grid>
							))}
						</Grid>
					</Container>
				) : (
					<Typography variant="h6">pls login to see your items</Typography>
				)}
			</Box>
		</Layout>
	);
};

export default Profile;
