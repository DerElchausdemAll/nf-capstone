import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton } from "@mui/material";
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
				<CardContent>
					<figure>
						<img src="#" alt="here should be an image" />
					</figure>
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
