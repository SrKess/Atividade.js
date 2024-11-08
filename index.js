function calcularCompra(item, parcelas) {
    if (parcelas === 0) {
      
      const valorFinal = item.preco * 0.9;
      console.log(`Valor à vista com 10% de desconto: R$${valorFinal.toFixed(2)}`);
    } else if (parcelas >= 1 && parcelas <= 10) {
      
      const valorParcela = item.preco / parcelas;
      console.log(`Parcelado em ${parcelas}x sem juros: R$${valorParcela.toFixed(2)} por parcela`);
    } else if (parcelas >= 11 && parcelas <= 12) {
      
      const valorComJuros = item.preco * 1.02;
      const valorParcela = valorComJuros / parcelas;
      console.log(`Parcelado em ${parcelas}x com 2% de juros: R$${valorParcela.toFixed(2)} por parcela`);
    } else {
      console.log("Número de parcelas não permitido.");
    }
  }
  
  const item = { nome: "Notebook", preco: 3000 };
  
  calcularCompra(item, 0);  
  calcularCompra(item, 5); 
  calcularCompra(item, 11); 
  calcularCompra(item, 13); 
  