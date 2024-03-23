import style from "./layout.module.scss";
import React from "react";
import Head from "next/head";
import Footer from "@/components/footer";
import SideMenu from "../sidemenu/SideMenu";

const Layout = (props: any) => {
	return (
		<>
			<Head>
				<title>DataSoft - Data Dashboard</title>
				<meta name="description" content="Data Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main
				className={style.layout}
				// style={{ padding: session ? "0 24px 0 80px" : 0 }}
			>
				<SideMenu />
				{props.children}
				<Footer />
			</main>
		</>
	);
};

export default Layout;
