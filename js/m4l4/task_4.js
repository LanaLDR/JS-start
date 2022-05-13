"use strict";

function calculate (summaryPrice, amountPosition, promo) {
    let priceAfterPromo = summaryPrice;
    if (amountPosition > 10) {
        priceAfterPromo = priceAfterPromo - (summaryPrice*0.03);
    }
    if (summaryPrice > 30000) {
        priceAfterPromo = priceAfterPromo - ((priceAfterPromo - 30000) * 0.15);
    }
    if (promo === "METHED") {
        priceAfterPromo = priceAfterPromo - (priceAfterPromo*0.1);
    }
    if ((promo === "G3H2Z1") && (priceAfterPromo > 2000)) {
        priceAfterPromo = priceAfterPromo - 500;
    }
    return priceAfterPromo;
}

console.log(calculate(50000, 11, "METHED"))