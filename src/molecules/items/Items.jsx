import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemsCard from "../../organisms/card/Card";
import useStore from "../../ions/hooks/storeFormData";
import Button from "@mui/material/Button";

const Items = () => {
	const itemCards = useStore(state => state.itemCards);
	const [bookmark, setBookmark] = useState(itemCards);

	const handleButton = () => {
		setBookmark(!bookmark);
	};
	const favorites = itemCards.filter(card => card.checked === true);

	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "15px",
				}}
			>
				<Button variant="contained">Filter</Button>
				<Button variant="contained" onClick={handleButton}>
					{!bookmark ? "Show All" : "Favorites"}
				</Button>
			</div>
			<Container>
				<Grid container spacing={3}>
					{(bookmark ? itemCards : favorites).map(item => (
						<Grid item key={item.id} xs={12} sm={6} md={3}>
							<ItemsCard item={item} />
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Items;
