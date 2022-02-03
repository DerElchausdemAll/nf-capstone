import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { CardMedia, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const ExpandMore = styled(props => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const NotesCard = ({ note }) => {
	const [expanded, setExpanded] = React.useState(false);
	const [checked, setChecked] = useState(note.checked);

	const handleChange = () => {
		const nextChecked = !checked;
		setChecked(nextChecked);

		fetch(`http://localhost:8000/notes/${note.id}`, {
			method: "PUT",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({ ...note, checked: nextChecked }),
		});
	};

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div>
			<Card>
				<CardHeader
					action={
						<Checkbox
							checked={checked}
							color="secondary"
							onChange={handleChange}
							inputProps={{ "aria-label": "controlled" }}
							{...label}
							icon={<FavoriteBorder />}
							checkedIcon={<Favorite />}
						/>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardMedia component="img" height="194" image={note.image} alt={note.title} />

				<CardActions disableSpacing>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography variant="body1">Description:</Typography>
						<br />
						<Typography variant="body2" color="primary">
							{note.details}
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</div>
	);
};

export default NotesCard;
