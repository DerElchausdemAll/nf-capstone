import Head from "next/head";
import Layout from "../../organisms/layout";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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

	const handleSubmit = e => {
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
			axios.post("/api/cards", inputForm).then(response => console.log(response));
		}
		router.push("/items");
	};

	return (
		<Layout>
			<Head>
				<title key="title">Form</title>
				<meta key="description" name="description" content="Form" />
			</Head>
			<Container>
				<form noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
					<Typography variant="h3" color="primary">
						Add an Item
					</Typography>
					<TextField
						fullWidth
						required
						sx={{
							marginTop: 5,
							display: "block",
						}}
						variant="outlined"
						color="secondary"
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
						color="secondary"
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
						color="secondary"
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
						<FormControlLabel value="playmobil" control={<Radio />} label="Playmobil" />
						<FormControlLabel value="wood" control={<Radio />} label="Wooden Toys" />
						<FormControlLabel value="lego" control={<Radio />} label="Lego" />
						<FormControlLabel value="cars" control={<Radio />} label="Cars" />
						<FormControlLabel value="outdoor" control={<Radio />} label="Outdoor" />
						<FormControlLabel value="others" control={<Radio />} label="Others" />
					</RadioGroup>
					<Button type="submit" color="secondary" variant="contained">
						Submit
					</Button>
				</form>
			</Container>
		</Layout>
	);
};

export default Items;
