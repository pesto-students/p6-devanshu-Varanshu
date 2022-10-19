// Bind Functionality Implementation
function calculateProfit(buyingPrice, sellingPrice) {
    console.log("sellingPrice", sellingPrice);
    return `${((sellingPrice - buyingPrice) * 100 / buyingPrice)}%`
}

// to make sure that the buying price remain same all over and selling price defers
const penProfit = calculateProfit.bind(null, 30)

// different selling price according to the shop keeper
console.log(penProfit(35));

