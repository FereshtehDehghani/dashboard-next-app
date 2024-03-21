import React from "react";
import style from "./transactionsPerDay.module.scss";
import { Card, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import DataChart from "@/components/dataChart";
import { lineChartData } from "@/components/mockData";

export type TransactionCardType = {
	title: string;
	value: string;
	changeValue: string;
};

const TransactionsPerDay = () => {
	const theme = useTheme();

	return (
		<Grid container gap={2} className={style.wrapper}>
			<Paper className={style.transactions}>
				<div className={style.chart}>
					<Typography>TransActions per day</Typography>
					<DataChart type={"line"} data={lineChartData} />
				</div>
				<div className={style.cardWrapper}>
					<Card className={style.card} variant={"outlined"}>
						<div className={style.cardTitle}>
							<Typography>Total Products</Typography>
						</div>
						<div className={style.cardValue}>
							<Typography>1.275</Typography>
							<Typography color={theme.palette.success.main} fontSize={14}>
								428.7%
							</Typography>
						</div>
					</Card>
					<Card className={style.card} variant={"outlined"}>
						<div className={style.cardTitle}>
							<Typography>Buy-to-detail</Typography>
						</div>
						<div className={style.cardValue}>
							<Typography>4.40%</Typography>
							<Typography color={theme.palette.success.main} fontSize={14}>
								899.4%
							</Typography>
						</div>
					</Card>
					<Card className={style.card} variant={"outlined"}>
						<div className={style.cardTitle}>
							<Typography>Refunds</Typography>
						</div>
						<div className={style.cardValue}>
							<Typography>0</Typography>
							<Typography color={theme.palette.success.main} fontSize={14}>
								0
							</Typography>
						</div>
					</Card>
				</div>
			</Paper>
		</Grid>
	);
};

export default TransactionsPerDay;
