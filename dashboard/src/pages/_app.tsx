import { CssBaseline } from "@mui/material";

import { SessionProvider } from "next-auth/react";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: any) {
	return (
		<SessionProvider session={session}>
			<CssBaseline />
			<Component {...pageProps} />
		</SessionProvider>
	);
}
