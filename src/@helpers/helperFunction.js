function nairaFormat(price){
    return (new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN'
      })).format(price)
}

function dollarFormat(price){
    return (new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'USD'
      })).format(price)
}

function euroFormat(price){
    return (new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'EUR'
      })).format(price)
}

function poundFormat(price){
    return (new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'GBP'
      })).format(price)
}

const helperFunctions = {
    nairaFormat,
    dollarFormat,
    euroFormat,
    poundFormat,
}

export default helperFunctions