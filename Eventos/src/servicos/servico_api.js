const API_URL = 'https://api.coinbase.com/v2/prices/BTC-BRL/buy';

//Função que busca na API e retorna o preço do bitcoin em reais  
export const getBitcoinPrice = async () => {
    const resposta = await fetch(API_URL, {
        method: "post",
        body: JSON.stringify({ campo1: "teste 1" }),
        headers: { "Content-Type": "application/json" },
      });
    const { data } = await resposta.json();
    const valorBitcoinEmDolar = data.amount;
    return valorBitcoinEmDolar;
}