import Head from "next/head";
import Layout from "../../organisms/layout";
import Notes from "../../molecules/notes/Notes";
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
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);

	const [category, setCategory] = useState();

	const handleSubmit = e => {
		e.preventDefault();
		setTitleError(false);
		setDetailsError(false);

		if (title === "") {
			setTitleError(true);
		}

		if (details === "") {
			setDetailsError(true);
		}

		if (title && details) {
			fetch("http://localhost:8000/notes", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({ title, details, category }),
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
					<Typography variant="h3" color="secondary">
						Form Input
					</Typography>
					<TextField
						onChange={e => setTitle(e.target.value)}
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
					></TextField>
					<TextField
						onChange={e => setDetails(e.target.value)}
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
					></TextField>
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
				<Typography style={{ marginBottom: "30px" }} variant="h3" color="secondary">
					Form Output
				</Typography>
				<Notes></Notes>
			</Container>
		</Layout>
	);
};

export default Items;
