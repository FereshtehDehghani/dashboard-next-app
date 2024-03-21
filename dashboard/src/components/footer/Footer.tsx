import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { Paper, useTheme } from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";
import style from "./footer.module.scss";

const Footer = () => {
	const { data: session } = useSession();
	const theme = useTheme();

	const FooterLink = styled(Link)`
		color: ${theme.palette.text.primary};
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	`;

	return (
		<footer className={style.footer}>
			<Paper sx={{ width: "100%" }} color={"#262626"}>
				<ul role="menu">
					<li className="p-4">
						<FooterLink href={"/"}>Home</FooterLink>
					</li>
					<li className="p-4">
						<FooterLink href={"/dashboard/data"}>Data</FooterLink>
					</li>
					<li className="p-4">
						<FooterLink href={"/dashboard/profile"}>Profile</FooterLink>
					</li>
					<li className="p-4">
						<FooterLink href={"/dashboard/settings"}>Settings</FooterLink>
					</li>
					<li className="p-4">
						<FooterLink href={"/#termsandconditions"}>
							Terms & Conditions
						</FooterLink>
					</li>
					<li className="p-4">
						<FooterLink href={"/#accessibilitystatement"}>
							Accessibility statement
						</FooterLink>
					</li>
					<li className="p-4">
						<Button
							variant={"text"}
							color={session ? "error" : "success"}
							onClick={() => (session ? signOut() : signIn())}
						>
							{session ? "Sign Out" : "Sign In"}
						</Button>
					</li>
				</ul>
			</Paper>
		</footer>
	);
};

export default Footer;
