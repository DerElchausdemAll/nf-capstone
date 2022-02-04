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

const Items = () => {
	// const itemCards = useStore(state => state.itemCards);
	const setItemCards = useStore(state => state.setItemCards);
	// const fetchData = useStore(state => state.fetchData);

	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [image, setImage] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);
	const [imageError, setImageError] = useState(false);
	const [postalCodeError, setPostalCodeError] = useState(false);

	const [category, setCategory] = useState("");

	const router = useRouter();

	const handleSubmit = e => {
		e.preventDefault();

		const formData = new FormData(e.target);

		const formValues = Object.fromEntries(formData);

		setItemCards(formValues);

		setTitleError(false);
		setDetailsError(false);
		setImageError(false);
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

		if (image === "") {
			setImageError(true);
		}

		if (title && details && image) {
			fetch("http://localhost:8000/items", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({
					title,
					details,
					postalCode,
					image,
					category,
					checked: false,
				}),
			});
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
					<TextField
						fullWidth
						required
						sx={{
							marginTop: 5,
							marginBottom: 5,
							display: "block",
						}}
						variant="outlined"
						color="secondary"
						label="Image URL"
						error={imageError}
						onChange={e => setImage(e.target.value)}
					/>
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
