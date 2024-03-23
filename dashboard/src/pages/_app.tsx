import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import Header from "@/components/header";
import Sidemenu from "@/components/sidemenu";
import Layout from "@/components/layout";

const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
	const [mode, setMode] = React.useState<"light" | "dark">("dark");
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const darkThemeChosen = React.useMemo(
		() =>
			createTheme({
				...darkTheme,
			}),
		[mode]
	);
	const lightThemeChosen = React.useMemo(
		() =>
			createTheme({
				...lightTheme,
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider
				theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}
			>
				<ClerkProvider {...pageProps}>
					<CssBaseline />
					<Header ColorModeContext={ColorModeContext} />
					<Sidemenu />
					<Component {...pageProps} />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ClerkProvider>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
export default App;
