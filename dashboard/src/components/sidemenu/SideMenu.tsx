import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useMediaQuery } from "@mui/material";
import {
	Equalizer,
	ExitToApp,
	Home,
	Person2,
	Settings,
} from "@mui/icons-material";
import Link from "next/link";
import SideMenuStyle from "./sideMenu.module.css";
import { signOut } from "next-auth/react";

const drawerWidth = 240;

// menu items
const menuRouteList = ["data", "profile", "settings", "logout"];
const menuListTranslations = ["Data", "Profile", "Settings", "Log Out"];
const menuListIcons = [<Equalizer />, <Person2 />, <Settings />, <ExitToApp />];

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

	const handleToggleDrawer = () => {
		setOpen(!open);
	};
	const isMobileDevice = useMediaQuery("(min-width:600px)");

	const handleListButtonClick = (text: string) => {
		text === "Sign Out" ? signOut() : null;
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
						<Link href={`/dashboard/${menuRouteList[index]}`}>
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
			</List>
		</MuiDrawer>
	);
};

export default SideMenu;
