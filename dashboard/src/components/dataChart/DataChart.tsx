import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { darkOptions } from "@/components/dataChart/Themes";
import { months } from "@/helper/Util";
import { ChartConfiguration } from "chart.js/dist/types";

const DataChart = (props: ChartConfiguration) => {
	const { data, options } = props;
	const chartRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (chartRef.current) {
			const chart = new Chart(chartRef.current, {
				...props,
				options: {
					...options,
					...darkOptions,
				},
			});
			return () => {
				chart.destroy();
			};
		}
	}, [data]);
	return <canvas ref={chartRef} />;
};
Chart.register(...registerables);

export default DataChart;
