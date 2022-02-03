export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json().then((js) => js.slice(0, 100))
  );
}
