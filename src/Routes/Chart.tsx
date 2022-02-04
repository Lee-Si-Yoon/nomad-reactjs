import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

type IParam = {
  coinId: string | undefined;
};
interface IHistoricalData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart() {
  const { coinId } = useOutletContext<IParam>();
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <>
          <h3>{coinId}</h3>
          <ApexChart
            type="line"
            series={[
              {
                name: "Price",
                data: data?.map((price) => price.close),
              },
            ]}
            options={{
              theme: {
                mode: "dark",
              },
              fill: {
                colors: ["#333"],
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              grid: { show: false },
              stroke: {
                curve: "smooth",
                width: 4,
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                axisBorder: { show: false },
                axisTicks: { show: true },
                labels: { show: false },
              },
            }}
          />
        </>
      )}
    </div>
  );
}

export default Chart;
