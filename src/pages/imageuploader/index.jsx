import Head from "next/head";
import React, { useState } from "react";
import Layout from "../../organisms/layout";
import axios from "axios";
import { Image } from "cloudinary-react";

const Profile = () => {
	const [imageSelected, setImageSelected] = useState("");
	const [image, setImage] = useState(null);

	const uploadImage = () => {
		const formData = new FormData();
		formData.append("file", imageSelected);
		formData.append("upload_preset", "q81vwnbw");

		axios
			.post("https://api.cloudinary.com/v1_1/dozopgbei/image/upload", formData)
			.then(response => {
				const imageId = response.data.public_id;
				setImage(imageId);
			});
	};

	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<div>
				<input
					type="file"
					onChange={event => {
						setImageSelected(event.target.files[0]);
					}}
				/>
				<button onClick={uploadImage}>Upload Image</button>
				<Image cloudName="dozopgbei" publicId={image} />
			</div>
		</Layout>
	);
};

export default Profile;
