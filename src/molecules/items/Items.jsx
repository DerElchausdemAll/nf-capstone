import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemsCard from "../../organisms/card/Card";
import useStore from "../../ions/hooks/storeFormData";
import Button from "@mui/material/Button";

const Items = () => {
	const itemCards = useStore(state => state.itemCards);
	const [filter, setFilter] = useState(false);

	const handleFilter = () => {
		setFilter(!filter);
	};
	const bookmarked = itemCards.filter(bookmark => bookmark.checked === true);
	const all = itemCards;

	// const handleButton = () => {
	// 	lego = itemCards.filter(card => card.category === lego);
	// 	console.log("huhu");
	// };

	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item>
					<label>
						Show Favorites
						<input type="checkbox" checked={filter} onChange={handleFilter} />
					</label>
					{/* <Button variant="contained" onClick={handleButton}>
						weiterer Filter
					</Button> */}
				</Grid>
				{(filter ? bookmarked : all).map(item => (
					<Grid item key={item.id} xs={12} sm={6} md={3}>
						<ItemsCard item={item} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Items;
