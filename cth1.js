const currency = new Map([
    ["IDR", 14000],
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500],
  ]);
  function calculatePriceInIDR(priceInJPY) {
    return priceInJPY * 14000;
  }
  const priceInIDR = calculatePriceInIDR(1000);
  console.log(priceInIDR);