import Header from "@/components/header";
import { Inter } from "next/font/google";
import Dashboard from "./dashboard";
import SideMenu from "@/components/sidemenu/SideMenu";
import Login from "@/components/Login";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
	return (
		<>
			<main className="flex justify-center px-6 py-0 m-auto">
				<Dashboard />
				<SideMenu />
				<Login />
			</main>
		</>
	);
};

export default Home;
