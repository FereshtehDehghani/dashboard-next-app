import Header from "@/components/header";
import { Inter } from "next/font/google";
import Dashboard from "./dashboard";
import SideMenu from "@/components/sidemenu/SideMenu";
import Login from "@/components/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<Header />
			<Dashboard />
			<SideMenu />
			<Login />
		</main>
	);
}
