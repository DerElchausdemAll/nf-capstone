import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../organisms/layout";
import axios from "axios";
import Button from "@mui/material/Button";
import useStore from "../../ions/hooks/storeFormData";
import Input from "@mui/material/Input";

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

	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<div>
				<Input
					multiple
					accept="image/*"
					type="file"
					onChange={event => {
						setImageSelected(event.target.files);
					}}
				/>
				<br />
				<br />

				<Button variant="contained" onClick={uploadImage}>
					Upload Image
				</Button>
			</div>
		</Layout>
	);
};

export default ImageUploader;
