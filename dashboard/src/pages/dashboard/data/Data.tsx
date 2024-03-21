import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useDemoData } from "@mui/x-data-grid-generator";

const Data = () => {
	const { data } = useDemoData({
		dataSet: "Commodity",
		rowLength: 500,
		maxColumns: 15,
	});

	return (
		<>
			<h1>Data</h1>
			<p>
				Tables, on the other hand, provide a structured format for displaying
				data in a clear and organized manner. They consist of rows and columns,
				where each row represents a distinct record or entity, and each column
				represents a specific attribute or variable.
			</p>
			<div style={{ height: "900px", width: "100%" }}>
				<DataGrid
					slots={{
						loadingOverlay: LinearProgress,
					}}
					loading={!data}
					{...data}
				/>
			</div>
		</>
	);
};

export default Data;
