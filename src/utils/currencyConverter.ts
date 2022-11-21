export const currencyConverter =(amount:any)=>{
    const rate = 2000
    return ((parseInt(amount)) / rate).toFixed(2)

}
