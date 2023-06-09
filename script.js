function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 5);
  }
  
  let select = document.querySelector('.cards');
  let input = document.getElementById('jogar');
  let mensagem = document.getElementById('mensagem');
  let hisJogos = document.getElementById('hisJogos');
  let myCash = document.getElementById('aposta');
  let saldo = document.getElementById('saldo');
  
  let arrayAleatorio = [];
  let arrayVitoria = [];
  let arrayDerrota = [];
  let arrayJogos = [];
  let dinheiro = 100; 
  
  function clicar() {
    let numero = gerarNumeroAleatorio();
    arrayAleatorio.push(numero);
    arrayJogos.push(input.value);
    hisJogos.innerHTML = arrayJogos;
  
    if (arrayJogos.length > 20) {
      arrayJogos.shift();
    }
  
    for (let i = 0; i < arrayAleatorio.length; i++) {
      let lp = document.getElementById('numeros');
      lp.innerHTML = arrayAleatorio;
  
      if (arrayAleatorio.length > 20) {
        arrayAleatorio.shift();
      }
    }
  
    select.innerHTML = `<h1>${numero}</h1>`;
  
    if (input.value == numero) {
      
      arrayVitoria.push(numero);
      let vitoria = document.getElementById('placar-vitoria');
      vitoria.innerHTML = arrayVitoria.length;
  
      let valorApostado = parseInt(myCash.value);
      let valorGanho = valorApostado ; 
  
      dinheiro += valorGanho; 
      saldo.innerHTML = dinheiro;
      mensagem.innerHTML = "Você ganhou " + valorGanho + " reais."
    } else {
      
      arrayDerrota.push(numero);
      let derrota = document.getElementById('placar-derrota');
      derrota.innerHTML = arrayDerrota.length;
  
      let valorApostado = parseInt(myCash.value);
      dinheiro -= valorApostado; // Reduz o saldo com o valor apostado
      saldo.innerHTML = dinheiro;
      mensagem.innerHTML = "Você perdeu " + valorApostado + " reais."
    }
  
    if (input.value >= 0) {
      input.value = '';
    }
  }
  