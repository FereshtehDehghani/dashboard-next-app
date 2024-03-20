import { Grid, Paper } from "@mui/material";
import React from "react";
import scss from "./dashboard.module.scss";

const Dashboard = () => {
	return (
		<>
			<Grid container spacing={2} marginY={3} justify="center">
				<Grid item md={4} xs={12}>
					<Paper>md=4</Paper>
				</Grid>
				<Grid item md={4} xs={12}>
					<Paper>md=4</Paper>
				</Grid>
				<Grid item md={4} xs={12}>
					<Paper>md=4</Paper>
				</Grid>
			</Grid>
			<Grid container xs={12} marginY={5}>
				<Paper>xs=8</Paper>
			</Grid>
		</>
	);
};
export default Dashboard;
