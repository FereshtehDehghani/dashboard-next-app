import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import {
	List,
	Divider,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemIcon,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Equalizer, ExitToApp, Person2, Settings } from "@mui/icons-material";
import Link from "next/link";
import { SignedIn, UserButton, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/router";

const drawerWidth = 240;

// menu items
const menuRouteList = ["data", "profile", "settings", "logout"];
const menuListTranslations = ["Data", "Profile", "Settings", "Log Out"];
const menuListIcons = [
	<Equalizer key="Equalizer" />,
	<Person2 key="person2" />,
	<Settings key="settings" />,
	<ExitToApp key="exiteToAdd" />,
];

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const SideMenu = () => {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const { signOut } = useClerk();
	const router = useRouter();

	const handleToggleDrawer = () => {
		setOpen(!open);
	};
	const isMobileDevice = useMediaQuery("(min-width:600px)");

	const handleListButtonClick = (text: string) => {
		text === "Log Out" ? signOut(() => router.push("/")) : null;
		setOpen(false);
	};

	return (
		<MuiDrawer
			variant="permanent"
			open={open}
			sx={{
				width: drawerWidth,
				left: 0,
				["& .MuiDrawer-paper"]: {
					top: isMobileDevice ? 64 : 57,
					flexShrink: 0,
					whiteSpace: "nowrap",
					boxSizing: "border-box",
					...(open && {
						...openedMixin(theme),
						"& .MuiDrawer-paper": openedMixin(theme),
					}),
					...(!open && {
						...closedMixin(theme),
						"& .MuiDrawer-paper": closedMixin(theme),
					}),
				},
			}}
		>
			<DrawerHeader>
				<IconButton onClick={handleToggleDrawer}>
					{!open ? <MenuIcon /> : <ChevronLeftIcon />}
				</IconButton>
			</DrawerHeader>

			<Divider />
			<List>
				{menuListTranslations.map((text, index) => (
					<ListItem key={text} disablePadding sx={{ display: "block" }}>
						<Link
							style={{
								color: theme.palette.text.primary,
								textDecoration: "none",
							}}
							href={
								menuRouteList[index] !== "logout"
									? `/dashboard/${menuRouteList[index]}`
									: "/"
							}
						>
							<ListItemButton
								title={text}
								aria-label={text}
								onClick={handleListButtonClick}
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									{menuListIcons[index]}
								</ListItemIcon>
								<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
						</Link>
					</ListItem>
				))}
				<ListItem>
					<SignedIn>
						<UserButton
							afterSignOutUrl="/"
							appearance={{
								elements: {
									avatarBox: "h-10 w-10",
								},
								variables: {
									colorPrimary: "#ff7000",
								},
							}}
						/>
					</SignedIn>
				</ListItem>
			</List>
		</MuiDrawer>
	);
};

export default SideMenu;
