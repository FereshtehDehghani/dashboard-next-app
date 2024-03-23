import { Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<p>Signed in as {session?.user?.email}</p> <br />
				<p>welcome {session?.user?.name}</p>
				<Button
					className="text-white bg-red-600"
					variant={"contained"}
					color={"error"}
					onClick={() => signOut()}
				>
					Sign out
				</Button>
			</>
		);
	}
	return (
		<>
			<Button
				className="text-white bg-green-600"
				variant={"contained"}
				color={"success"}
				onClick={() => signIn()}
			>
				Sign in
			</Button>
		</>
	);
}
