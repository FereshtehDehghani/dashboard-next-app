import React from "react";
import { Grid } from "@mui/material";
import style from "./dataRibbon.module.scss";
import DataCard from "../dataCard";

const DataRibbon = () => {
	return (
		<Grid container gap={2} className={style.dataRibbon}>
			<Grid item>
				<DataCard
					title={"Total Sales"}
					value={"462"}
					description={
						"The totals of all DataSoft products in the current financial year"
					}
				/>
			</Grid>
			<Grid item>
				<DataCard
					title={"Total Value"}
					value={"$25,732.53"}
					description={"The total sales of the current financial year"}
				/>
			</Grid>
			<Grid item>
				<DataCard
					title={"Avg. Order Value"}
					value={"$159.30"}
					description={
						"The average order value for all sales this current financial year"
					}
				/>
			</Grid>
			<Grid item>
				<DataCard
					title={"Conversion rate"}
					value={"0.61%"}
					description={"How many pitches become sales"}
				/>
			</Grid>
		</Grid>
	);
};

export default DataRibbon;
