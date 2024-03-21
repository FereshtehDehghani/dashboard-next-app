import Dashboard from "./dashboard";
import SideMenu from "@/components/sidemenu/SideMenu";

const Home = () => {
	return (
		<>
			<main className="flex justify-center max-w-[85rem] xl:max-w-[92rem]">
				<Dashboard />
				<SideMenu />
			</main>
		</>
	);
};

export default Home;
