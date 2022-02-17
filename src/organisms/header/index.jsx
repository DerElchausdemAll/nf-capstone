import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
	const { data: session } = useSession();
	return (
		<header>
			<div>
				<div>
					{session ? (
						<div>
							<Button
								onClick={() => {
									signOut();
								}}
							>
								Logout
							</Button>{" "}
						</div>
					) : (
						<Button
							startIcon={<GitHubIcon />}
							onClick={() => {
								signIn("github");
							}}
						>
							Login
						</Button>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
