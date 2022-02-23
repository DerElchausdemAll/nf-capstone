import Head from "next/head";
import Layout from "../../organisms/layout";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useRouter } from "next/router";
import useStore from "../../ions/hooks/storeFormData";
import axios from "axios";
import ImageUploader from "../imageuploader/index";

const Items = () => {
	const setItemCards = useStore(state => state.setItemCards);
	const images = useStore(state => state.images);

	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [category, setCategory] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);
	const [postalCodeError, setPostalCodeError] = useState(false);

	const router = useRouter();

	const handleSubmit = async e => {
		e.preventDefault();

		const formData = new FormData(e.target);

		const formValues = Object.fromEntries(formData);

		setItemCards(formValues);

		setTitleError(false);
		setDetailsError(false);
		setPostalCodeError(false);

		if (title === "") {
			setTitleError(true);
		}

		if (details === "") {
			setDetailsError(true);
		}

		if (postalCode === "") {
			setPostalCodeError(true);
		}

		if (title && details && images) {
			const inputForm = {
				title,
				details,
				postalCode,
				images,
				category,
				checked: false,
			};
			try {
				await axios.post("/api/cards", inputForm).then(response => console.log(response));
				router.push("/items");
			} catch (error) {
				console.error(error);
			}
		}
	};

	return (
		<Layout>
			<Head>
				<title key="title">Form</title>
				<meta key="description" name="description" content="Form" />
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
				<Container>
					<form noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
						<Typography variant="h4" color="primary">
							Add a Toy
						</Typography>
						<TextField
							fullWidth
							required
							sx={{
								marginTop: 5,
								display: "block",
							}}
							variant="outlined"
							color="primary"
							label="Title"
							name="title"
							error={titleError}
							onChange={e => setTitle(e.target.value)}
						/>
						<TextField
							multiline
							fullWidth
							required
							sx={{
								marginTop: 5,
								marginBottom: 5,
								display: "block",
							}}
							variant="outlined"
							color="primary"
							label="Description"
							name="description"
							rows={6}
							error={detailsError}
							onChange={e => setDetails(e.target.value)}
						/>
						<TextField
							fullWidth
							// required
							sx={{
								marginTop: 5,
								marginBottom: 5,
								display: "block",
							}}
							variant="outlined"
							color="primary"
							label="Postal Code"
							name="postalCode"
							error={postalCodeError}
							onChange={e => setPostalCode(e.target.value)}
						/>
						<ImageUploader />
						<RadioGroup
							value={category}
							name="category"
							onChange={e => setCategory(e.target.value)}
						>
							<FormControlLabel
								value="playmobil"
								control={<Radio />}
								label="Playmobil"
							/>
							<FormControlLabel
								value="wood"
								control={<Radio />}
								label="Wooden Toys"
							/>
							<FormControlLabel value="lego" control={<Radio />} label="Lego" />
							<FormControlLabel value="cars" control={<Radio />} label="Cars" />
							<FormControlLabel value="outdoor" control={<Radio />} label="Outdoor" />
							<FormControlLabel value="others" control={<Radio />} label="Others" />
						</RadioGroup>
						<Button type="submit" color="primary" variant="contained">
							Submit
						</Button>
					</form>
				</Container>
			</Box>
		</Layout>
	);
};

export default Items;
