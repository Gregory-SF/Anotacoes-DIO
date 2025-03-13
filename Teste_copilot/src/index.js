function getCardBandeira(cardNumber) {
    const visaRegex = /^4/;
    const masterCardRegex = /^(5[1-5]|2(2[2-9][1-9]|2[3-9][0-9]|[3-6][0-9]{2}|7[01][0-9]|720))/;
    const eloRegex = /^(4011|4312|4389|4514|4576|5041|5066|5090|6277|6362|6363|6500|6504|6505|6516|6550|6551|6552)/;
    const amexRegex = /^3[47]/;
    const discoverRegex = /^(6011|65|64[4-9])/;
    const hipercardRegex = /^6062/;

    if (visaRegex.test(cardNumber)) {
        return 'Visa';
    } else if (masterCardRegex.test(cardNumber)) {
        return 'MasterCard';
    } else if (eloRegex.test(cardNumber)) {
        return 'Elo';
    } else if (amexRegex.test(cardNumber)) {
        return 'American Express';
    } else if (discoverRegex.test(cardNumber)) {
        return 'Discover';
    } else if (hipercardRegex.test(cardNumber)) {
        return 'Hipercard';
    } else {
        return 'Unknown';
    }
}

// Example usage:
const cardNumber = '4111111111111111';
console.log(getCardBandeira(cardNumber)); // Output: Visa