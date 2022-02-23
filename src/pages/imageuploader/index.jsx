import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../organisms/layout";
import axios from "axios";
import Button from "@mui/material/Button";
import useStore from "../../ions/hooks/storeFormData";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const ImageUploader = () => {
	const [imageSelected, setImageSelected] = useState([]);

	const url = "https://api.cloudinary.com/v1_1/dozopgbei/image/upload";

	const setImages = useStore(state => state.setImages);

	const preset = "q81vwnbw";

	const uploadImage = async () => {
		const files = Array.from(imageSelected);

		console.log(imageSelected);
		const imageResponses = await Promise.all(
			files.map(image => {
				const formData = new FormData();
				formData.append("file", image);
				formData.append("upload_preset", preset);

				return axios.post(url, formData);
			})
		);
		const uploadedImages = imageResponses.map(response => {
			return response.data.url;
		});

		setImages(uploadedImages);
	};

	const Input = styled("input")({
		display: "none",
	});

	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<div>
				<Stack spacing={2}>
					<label
						htmlFor="icon-button-file"
						style={{ display: "flex", justifyContent: "center" }}
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
							fontSize="large"
							color="primary"
							aria-label="upload picture"
							component="span"
						>
							<PhotoCamera fontSize="large" />
						</IconButton>
					</label>
					{/* <input multiple type="file" accept="image/*" /> */}
					<Button variant="contained" onClick={uploadImage}>
						Upload Image
					</Button>
				</Stack>
			</div>
		</Layout>
	);
};

export default ImageUploader;
