import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import NotesCard from "../../organisms/card/Card";

const Notes = () => {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/notes")
			.then(res => res.json())
			.then(data => setNotes(data));
	}, []);

	return (
		<Container>
			<Grid container spacing={3}>
				{notes.map(note => (
					<Grid item key={note.id} xs={12} sm={6} md={3}>
						<NotesCard note={note} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Notes;
