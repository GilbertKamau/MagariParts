const displayKESCurrency = (num) => {
    const formatter = new Intl.NumberFormat('en-KE', {
        style: "currency",
        currency: 'KES',
        minimumFractionDigits: 3
    });

    return formatter.format(num);
}

export default displayKESCurrency;
