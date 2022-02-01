import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header>
			<nav
				data-test-id="navigation"
				style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "20px" }}
			>
				<Link href="/">Home</Link>
				<Link href="/about">About me</Link>
				<Link href="/profile">Profile</Link>
				<Link href="/items">Items</Link>
			</nav>
		</header>
	);
};

export default Header;
