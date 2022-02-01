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

const Items = () => {
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const [image, setImage] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);
	const [imageError, setImageError] = useState(false);

	const [category, setCategory] = useState();

	const handleSubmit = e => {
		e.preventDefault();
		setTitleError(false);
		setDetailsError(false);
		setImageError(false);

		if (title === "") {
			setTitleError(true);
		}

		if (details === "") {
			setDetailsError(true);
		}

		if (image === "") {
			setImageError(true);
		}

		if (title && details && image) {
			fetch("http://localhost:8000/notes", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({ title, details, image, category }),
			});
		}
	};

	return (
		<Layout>
			<Head>
				<title key="title">About</title>
				<meta key="description" name="description" content="About" />
			</Head>
			<Container>
				<form noValidate autoComplete="off" onSubmit={handleSubmit}>
					<Typography variant="h3" color="primary">
						Add an Item
					</Typography>
					<TextField
						sx={{
							marginTop: 5,
							display: "block",
						}}
						label="Title"
						variant="outlined"
						color="secondary"
						fullWidth
						required
						error={titleError}
						onChange={e => setTitle(e.target.value)}
					/>
					<TextField
						sx={{
							marginTop: 5,
							marginBottom: 5,
							display: "block",
						}}
						label="Description"
						variant="outlined"
						color="secondary"
						multiline
						rows={4}
						fullWidth
						required
						error={detailsError}
						onChange={e => setDetails(e.target.value)}
					/>
					<TextField
						sx={{
							marginTop: 5,
							marginBottom: 5,
							display: "block",
						}}
						label="Image URL"
						variant="outlined"
						color="secondary"
						fullWidth
						required
						error={imageError}
						onChange={e => setImage(e.target.value)}
					/>
					<RadioGroup value={category} onChange={e => setCategory(e.target.value)}>
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
				<br></br>
				<br></br>
				<br></br>
				<br></br>
			</Container>
		</Layout>
	);
};

export default Items;
