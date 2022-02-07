import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ItemsCard from "../../organisms/card/Card";
import useStore from "../../ions/hooks/storeFormData";

const Items = () => {
	const itemCards = useStore(state => state.itemCards);

	return (
		<Container>
			<Grid container spacing={3}>
				{itemCards.map(item => (
					<Grid item key={item.id} xs={12} sm={6} md={3}>
						<ItemsCard item={item} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Items;
