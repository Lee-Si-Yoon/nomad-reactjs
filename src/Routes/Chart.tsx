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

interface IProps {
  isDark: boolean;
}

function Chart({ isDark }: IProps) {
  const { coinId } = useOutletContext<IParam>();
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <>
          <ApexChart
            type="candlestick"
            series={[
              {
                data: data?.map((price) => {
                  return {
                    x: price.time_close.slice(2, 10),
                    y: [
                      price.open.toFixed(2),
                      price.high.toFixed(2),
                      price.low.toFixed(2),
                      price.close.toFixed(2),
                    ],
                  };
                }),
              },
            ]}
            options={{
              theme: {
                mode: isDark ? "dark" : "light",
              },
              chart: {
                background: "transparent",
                toolbar: {
                  show: false,
                },
              },
              grid: {
                show: false,
              },
              xaxis: {
                axisBorder: { show: false },
                axisTicks: { show: true },
                labels: { show: false },
              },
              yaxis: { show: false },
            }}
          ></ApexChart>
        </>
      )}
    </div>
  );
}

export default Chart;
