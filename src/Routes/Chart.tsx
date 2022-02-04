import { useOutletContext } from "react-router-dom";

type IParam = {
  coinId: string | undefined;
};

function Chart() {
  const { coinId } = useOutletContext<IParam>();
  return <h1> {coinId}</h1>;
}

export default Chart;
