// Bind Functionality Implementation
function calculateProfit(buyingPrice, sellingPrice) {
    console.log("sellingPrice", sellingPrice);
    return `${((sellingPrice - buyingPrice) * 100 / buyingPrice)}%`
}

// to make sure that the buying price remain same all over and selling price defers
const penProfit = calculateProfit.bind(null, 30)

// different selling price according to the shop keeper
console.log(penProfit(35));


//Call Functionality Implementation
const productDetails = {
    getDetails: function (sellerName) {
        var details = [
            this.productName,
            'costs',
            this.cost,
            'and sold by',
            sellerName
        ].join(' ')

        console.log(details);
    }
}

var book = {
    productName: "Harry Potter Book",
    cost: '20$'
}

var phone = {
    productName: "Mobile",
    cost: "100$"
}

productDetails.getDetails.call(book, 'JK Rowling')
productDetails.getDetails.call(phone, 'OnePlus')


//Apply Functionality Implementation
const capitals = {
    info: function (capital, country) {
        return `According to ${this.name}: ${capital} is the capital of ${country}`
    }
}

const india = ['New Delhi', 'India']
const usa = ['Washington DC', 'USA']
const uk = ['London', 'Great Britain']

console.log(capitals.info.apply({ name: 'Varanshu' }, india));
console.log(capitals.info.apply({ name: 'Rahul' }, usa));
console.log(capitals.info.apply({ name: 'Shyam' }, uk));