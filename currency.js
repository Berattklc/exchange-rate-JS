class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=YTdRPoCw5ucu5VvZYetE4wWs99QXelHuTnT2WuES&base_currency="
    }

    async exchange(amount,firstCurrency,secondCurrency){
       const response = await fetch(`${this.url}${firstCurrency}`);
       const result = await response.json();
       const exchangedResult = amount * result.data[secondCurrency];

       return exchangedResult;
    }

}