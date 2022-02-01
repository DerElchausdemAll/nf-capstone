import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { CardMedia, IconButton } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import Typography from "@mui/material/Typography";

const NotesCard = ({ note }) => {
	return (
		<div>
			<Card>
				<CardHeader
					action={
						<IconButton>
							<BookmarkBorderOutlinedIcon />
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardMedia component="img" height="194" image={note.image} alt={note.title} />
				<CardContent>
					<Typography variant="body1">Description:</Typography>
					<br></br>
					<Typography variant="body2" color="primary">
						{note.details}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default NotesCard;
