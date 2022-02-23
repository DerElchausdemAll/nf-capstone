import React from "react";
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
import useStore from "../../ions/hooks/storeFormData";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import Box from "@mui/material/Box";

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

const ItemsCard = ({ item, isMine }) => {
	const [expanded, setExpanded] = React.useState(false);
	const updateData = useStore(state => state.updateData);
	const deleteData = useStore(state => state.deleteData);

	const handleChange = () => {
		updateData(item._id, item);
	};

	const handleDelete = () => {
		deleteData(item._id, item);
	};

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div>
			<Box sx={{ boxShadow: 3 }}>
				<Card sx={{ background: "#FDFAFD" }}>
					<CardHeader
						action={
							<Checkbox
								checked={item.checked}
								color="error"
								onChange={handleChange}
								inputProps={{ "aria-label": "controlled" }}
								{...label}
								icon={<FavoriteBorder />}
								checkedIcon={<Favorite />}
							/>
						}
						title={
							<Link key={item._id} href={"/details/" + item._id}>
								<Typography
									variant="h4"
									color="primary"
									sx={{ cursor: "pointer", userSelect: "none" }}
								>
									{item.title}
								</Typography>
							</Link>
						}
						// subheader={item.category}
					/>
					{item.images ? (
						<CardMedia
							sx={{ padding: "0.5rem" }}
							component="img"
							height="194"
							image={item.images[0]}
							alt={item.title}
						/>
					) : null}

					<CardActions disableSpacing>
						{isMine && <DeleteIcon color="primary" onClick={handleDelete} />}
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
								{item.details}
							</Typography>
						</CardContent>
					</Collapse>
				</Card>
			</Box>
		</div>
	);
};

export default ItemsCard;
