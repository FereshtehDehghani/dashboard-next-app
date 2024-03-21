import Header from "@/components/header";
import { Inter } from "next/font/google";
import Dashboard from "./dashboard";
import SideMenu from "@/components/sidemenu/SideMenu";
import Login from "@/components/Login";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
	return (
		<>
			<main className="flex justify-center max-w-[85rem] xl:max-w-[92rem]">
				<Dashboard />
				<SideMenu />
				<Login />
			</main>
		</>
	);
};

export default Home;
