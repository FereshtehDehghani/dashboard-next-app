import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import DataRibbon from "@/components/dashboard/dataRibbon";
import TransactionsPerDay from "@/components/dashboard/transactionsPerDay";
import TransactionBottomRow from "@/components/dashboard/transactionButtomRow/TransactionBottomRow";

const Dashboard = () => {
	return (
		<Box>
			<Grid container gap={4} marginLeft={5} marginTop={10}>
				<DataRibbon />
				<TransactionsPerDay />
			</Grid>
			<TransactionBottomRow />
		</Box>
	);
};
export default Dashboard;
