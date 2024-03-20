import { Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<p>Signed in as {session?.user?.email}</p> <br />
				<p>welcome {session?.user?.name}</p>
				<Button variant={"containt"} color={"error"} onClick={() => signOut()}>
					Sign out
				</Button>
			</>
		);
	}
	return (
		<>
			<p>Not signed in</p> <br />
			<Button variant={"containt"} color={"success"} onClick={() => signIn()}>
				Sign in
			</Button>
		</>
	);
}
