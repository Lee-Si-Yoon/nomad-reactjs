import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";

type IParam = {
  coinId: string | undefined;
};

function Chart() {
  const { coinId } = useOutletContext<IParam>();
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <h1> {coinId}</h1>;
}

export default Chart;
