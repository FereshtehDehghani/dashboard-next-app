import Grid from "@mui/material/Grid";
import React from "react";
import DataChart from "@/components/dataChart";
import Paper from "@mui/material/Paper";
import { doughnutChartData } from "@/components/mockData";
import style from "./transactionButtomRow.module.scss";

const TransactionBottomRow = () => {
	return (
		<Grid container className={style.bottomRow}>
			<Grid>
				<Paper className={style.dataCard}>
					<p>Transactions per user type</p>
					<DataChart type={"doughnut"} data={doughnutChartData} />
				</Paper>
			</Grid>
			<Grid>
				<Paper className={style.dataCard}>
					<p>Transactions per user type</p>
					<DataChart type={"doughnut"} data={doughnutChartData} />
				</Paper>
			</Grid>
			<Grid>
				<Paper className={style.dataCard}>
					<p>Transactions per user type</p>
					<DataChart type={"doughnut"} data={doughnutChartData} />
				</Paper>
			</Grid>
			<Grid>
				<Paper className={style.dataCard}>
					<p>Transactions per user type</p>
					<DataChart type={"doughnut"} data={doughnutChartData} />
				</Paper>
			</Grid>
		</Grid>
	);
};

export default TransactionBottomRow;
