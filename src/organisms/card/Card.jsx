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

const ItemsCard = ({ item }) => {
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
			<Card>
				<CardHeader
					action={
						<Checkbox
							checked={item.checked}
							color="secondary"
							onChange={handleChange}
							inputProps={{ "aria-label": "controlled" }}
							{...label}
							icon={<FavoriteBorder />}
							checkedIcon={<Favorite />}
						/>
					}
					title={
						<Link key={item._id} href={"/details/" + item._id}>
							<h4>{item.title}</h4>
						</Link>
					}
					subheader={item.category}
				/>
				<CardMedia component="img" height="194" image={item.image} alt={item.title} />

				<CardActions disableSpacing>
					<DeleteIcon color="primary" onClick={handleDelete} />
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
		</div>
	);
};

export default ItemsCard;
