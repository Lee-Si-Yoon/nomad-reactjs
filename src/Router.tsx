import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./Routes/Coins";
import Coin from "./Routes/Coin";
import Price from "./Routes/Price";
import Chart from "./Routes/Chart";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/*" element={<Coin isDark={isDark} />}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart isDark={isDark} />} />
        </Route>
        <Route path="/*" element={<Coins toggleDark={toggleDark} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
