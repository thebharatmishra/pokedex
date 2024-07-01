

export const numberToThreePlaces=(numeral: number)=> {
    let numb = '';
    if (Number(numeral) >= 100) {
        numb = String(numeral);
    } else if (Number(numeral) >= 10) {
        numb = '0' + numeral;
    } else if (Number(numeral) >= 1) {
        numb = '00' + numeral;
    }
    return numb;
}
