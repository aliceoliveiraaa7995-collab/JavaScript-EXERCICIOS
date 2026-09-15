// 1. Consumo de Energia
function ex1() {
  const kwh = Number(document.getElementById('ex1_kwh').value); // transforma o valor digitado no input em número
  const res = document.getElementById('res1'); // o "res" é responsável pelo lugar que o resultado aparecerá
  if (!document.getElementById('ex1_kwh').value) { 
    res.textContent = 'Informe o valor.'; 
    return; 
} // se o campo estiver vazio informa ao usuário
  if (kwh < 150) {
    res.innerHTML = "Consumo: " + kwh + " kWh <br> Faixa: Baixo";
    res.style.color = "green";
  } else if (kwh <= 300) {
    res.innerHTML = "Consumo: " + kwh + " kWh <br> Faixa: Médio";
    res.style.color = "orange";
  } else {
    res.innerHTML = "Consumo: " + kwh + " kWh <br> Faixa: Alto";
    res.style.color = "red";
}
}

// 2. Bolsa Acadêmica
function ex2() {
  const media = Number(document.getElementById('ex2_media').value);
  const freq = Number(document.getElementById('ex2_freq').value);
  const renda = Number(document.getElementById('ex2_renda').value);
  const res = document.getElementById('res2');

  if (media >= 8.5 && freq >= 75 && renda <= 2000) {
    res.textContent = 'Elegível para bolsa de estudos (Bolsa Concedida)!';
    res.style.color = "green";
  } else {
    res.textContent = 'Não elegível para bolsa de estudos.';
    res.style.color = "red";
  }
}

// 3. Triagem de Atendimento
function ex3() {
  const idade = Number(document.getElementById('ex3_idade').value);
  const esp = document.getElementById('ex3_prioritario').value.trim().toLowerCase(); // para corrigir as respostas digitadas e não dar erro ao verificar o "sim" ou "não"
  const res = document.getElementById('res3');

  if (idade >= 80) {
    res.textContent = 'Prioridade: ALTA (80+ anos)';
    res.style.color = "red";
  } else if (idade >= 60 || esp === 'sim') {
    res.textContent = 'Prioridade: MÉDIA (Preferencial)';
    res.style.color = "orange";
  } else {
    res.textContent = 'Prioridade: NORMAL';
    res.style.color = "green";
  }
}

// 4. Acesso ao Laboratório
function ex4() {
  const mat = document.getElementById('ex4_matricula').value.trim().toLowerCase(); 
  const tre = document.getElementById('ex4_treino').value.trim().toLowerCase();
  const hora = Number(document.getElementById('ex4_horario').value);
  const res = document.getElementById('res4');

  if (mat === 'sim' && tre === 'sim' && hora >= 8 && hora <= 22) {
    res.textContent = 'Acesso Autorizado ao Laboratório.';
    res.style.color = "green";
  } else {
    res.textContent = 'Acesso Negado.';
    res.style.color = "red";
  }
}

// 5. Tarifa de Estacionamento
function ex5() {
  const horas = Math.ceil(Number(document.getElementById('ex5_horas').value)); // o math ceil arredona números decimais para inteiros
  const res = document.getElementById('res5');
  if (horas <= 0) { 
    res.textContent = 'Tempo inválido.'; 
    res.style.color = "red";
    return; 
}
  let valor = 0;
  if (horas <= 1) {
    valor = 5;
  } else if (horas <= 3) {
    valor = 5 + (horas - 1) * 3;
  } else {
    valor = 11 + (horas - 3) * 2;
    }
    res.innerHTML = "Permanência: " + horas + "\n Total a pagar: R$" + valor.toFixed(2)
    res.style.color = "green";
  }

// 6. Desconto Progressivo
function ex6() {
  const valor = Number(document.getElementById('ex6_valor').value);
  const fid = document.getElementById('ex6_fidelidade').value.trim().toLowerCase();
  const res = document.getElementById('res6');

  let desc = 0;
  if (valor >= 500) {
    desc = 0.15;
  } else if (valor >= 200){
    desc = 0.10;
  } else if (valor >= 100){
    desc = 0.05;
  } 
  if (fid === 'sim'){ 
    desc += 0.05;
    } 
  const vDesc = valor * desc;
  const vFinal = valor - vDesc;

  res.textContent = "Desconto total: " + (desc * 100).toFixed(0) + "%" + 
                    "\nEconomia: R$ " + vDesc.toFixed(2) + 
                    "\nValor Final: R$ " + vFinal.toFixed(2);
}
// 7. Situação Acadêmica
function ex7() {
  const nota = Number(document.getElementById('ex7_nota').value);
  const freq = Number(document.getElementById('ex7_freq').value);
  const res = document.getElementById('res7');

  if (freq < 75) {
    res.textContent = 'Reprovado por Frequência Insuficiente.';
    res.style.color = "red";
  } else if (nota >= 7.0) {
    res.textContent = 'Aprovado Direto!';
    res.style.color = "green";
  } else if (nota >= 5.0) {
    res.textContent = 'Em Recuperação.';
    res.style.color = "orange";
  } else {
    res.textContent = 'Reprovado por Nota.';
    res.style.color = "red";
  }
}

// 8. Plano de Internet
function ex8() {
  const gb = Number(document.getElementById('ex8_gb').value);
  const disp = Number(document.getElementById('ex8_disp').value);
  const res = document.getElementById('res8');

  if (gb > 200 || disp > 8){
    res.textContent = 'Plano Recomendado: Avançado / Fibra 500Mega';
  } else if (gb >= 50 || disp >= 4) {
    res.textContent = 'Plano Recomendado: Intermediário / Fibra 200Mega';
  } else {
    res.textContent = 'Plano Recomendado: Básico / Fibra 50Mega';
  }
}

// 9. Alerta de Estoque
function ex9() {
  const atual = Number(document.getElementById('ex9_atual').value);
  const min = Number(document.getElementById('ex9_min').value);
  const res = document.getElementById('res9');

  if (atual === 0) {
    res.textContent = 'Status: CRÍTICO! Estoque esgotado.';
    res.style.color = "red";
  } else if (atual <= min) {
    res.textContent = "Status: ALERTA! Comprar mais unidades (Atual: " + atual + " )" + " | Mín: " + min;
    res.style.color = "orange";
  } else {
    res.textContent = "Status: OK! Estoque suficiente. (Atual: " + atual + ")";
    res.style.color = "green";
}
}

// 10. Conversor de Temperatura
function ex10() {
  const c = Number(document.getElementById('ex10_celsius').value);
  const res = document.getElementById('res10');
  const f = (c * 9/5) + 32; // Fórmula para converter Celsius em Fahrenheit

  if (!document.getElementById('ex10_celsius').value) {
    res.textContent = 'Informe a temperatura.';
    res.style.color = "red";
    return;
  }
  let clima = '';
  if (c < 15) {
    clima = 'Frio';
    res.style.color = "blue";
  } else if (c <= 28) {
    clima = 'Agradável';
    res.style.color = "green";
  } else {
    clima = 'Quente';
    res.style.color = "red";
  }
  res.innerHTML = "Temperatura: " + c.toFixed(1) + "°C = " + f.toFixed(1) + "°F <br> Sensação: " + clima;
}

// 11. Aprovação de Crédito
function ex11() {
  const renda = Number(document.getElementById('ex11_renda').value);
  const parcela = Number(document.getElementById('ex11_parcela').value);
  const hist = document.getElementById('ex11_historico').value.trim().toLowerCase();
  const res = document.getElementById('res11');

  if (!document.getElementById('ex11_renda').value || !document.getElementById('ex11_parcela').value) {
    res.textContent = 'Informe os valores.';
    res.style.color = "red";
    return;
  }

  const maxParcela = renda * 0.30;
  if (hist === 'sim' && parcela <= maxParcela) {
    res.textContent = 'Crédito APROVADO!';
    res.style.color = "green";
  } else {
    res.innerHTML = "Crédito NEGADO. <br> Parcela máx permitida: R$ " + maxParcela.toFixed(2);
    res.style.color = "red";
  }
}

// 12. Controle de Velocidade
function ex12() {
  const vel = Number(document.getElementById('ex12_vel').value);
  const lim = Number(document.getElementById('ex12_limite').value);
  const res = document.getElementById('res12');

  if (!document.getElementById('ex12_vel').value || !document.getElementById('ex12_limite').value) {
    res.textContent = 'Informe os valores.';
    res.style.color = "red";
    return;
  }

  if (vel <= lim) {
    res.textContent = 'Sem infração. Dentro do limite.';
    res.style.color = "green";
  } else {
    const exc = ((vel - lim) / lim) * 100;
    if (exc <= 20) {
      res.textContent = "Infração LEVE/MÉDIA (Excesso de " + exc.toFixed(1) + "%)";
      res.style.color = "orange";
    } else if (exc <= 50) {
      res.textContent = "Infração GRAVE (Excesso de " + exc.toFixed(1) + "%)";
      res.style.color = "orange";
    } else {
      res.textContent = "Infração GRAVÍSSIMA (Excesso de " + exc.toFixed(1) + "%)";
      res.style.color = "red";
    }
  }
}

// 13. Desempenho de Servidor
function ex13() {
  const cpu = Number(document.getElementById('ex13_cpu').value);
  const ram = Number(document.getElementById('ex13_ram').value);
  const res = document.getElementById('res13');

  if (!document.getElementById('ex13_cpu').value || !document.getElementById('ex13_ram').value) {
    res.textContent = 'Informe os valores.';
    res.style.color = "red";
    return;
  }

  if (cpu > 90 || ram > 90) {
    res.textContent = 'Status: CRÍTICO! Risco de sobrecarga.';
    res.style.color = "red";
  } else if (cpu > 70 || ram > 70) {
    res.textContent = 'Status: ATENÇÃO! Uso elevado de recursos.';
    res.style.color = "orange";
  } else {
    res.textContent = 'Status: NORMAL. Servidor estável.';
    res.style.color = "green";
  }
}

// 14. Validação de Triângulo
function ex14() {
  const a = Number(document.getElementById('ex14_a').value);
  const b = Number(document.getElementById('ex14_b').value);
  const c = Number(document.getElementById('ex14_c').value);
  const res = document.getElementById('res14');

  if (!document.getElementById('ex14_a').value || !document.getElementById('ex14_b').value || !document.getElementById('ex14_c').value) {
    res.textContent = 'Informe os três lados.';
    res.style.color = "red";
    return;
  }

  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      res.textContent = 'Triângulo Válido: Equilátero';
    } else if (a === b || a === c || b === c) {
      res.textContent = 'Triângulo Válido: Isósceles';
    } else {
      res.textContent = 'Triângulo Válido: Escaleno';
    }
    res.style.color = "green";
  } else {
    res.textContent = 'Não forma um triângulo válido.';
    res.style.color = "red";
  }
}

// 15. Imposto por Faixas
function ex15() {
  const renda = Number(document.getElementById('ex15_renda').value);
  const res = document.getElementById('res15');

  if (!document.getElementById('ex15_renda').value) {
    res.textContent = 'Informe o valor da renda.';
    res.style.color = "red";
    return;
  }

  let aliquota = 0;
  if (renda > 4500) aliquota = 0.225;
  else if (renda > 3000) aliquota = 0.15;
  else if (renda > 2000) aliquota = 0.075;

  const imposto = renda * aliquota;
  res.innerHTML = "Alíquota: " + (aliquota * 100).toFixed(1) + "% <br> Imposto devido: R$ " + imposto.toFixed(2);
  res.style.color = "green";
}

// 16. Índice de Qualidade
function ex16() {
  const idx = Number(document.getElementById('ex16_indice').value);
  const res = document.getElementById('res16');

  if (!document.getElementById('ex16_indice').value) {
    res.textContent = 'Informe o índice.';
    res.style.color = "red";
    return;
  }

  if (idx < 0 || idx > 100) {
    res.textContent = 'Índice inválido (deve ser entre 0 e 100).';
    res.style.color = "red";
  } else if (idx >= 90) {
    res.textContent = "Índice " + idx + ": Excelente";
    res.style.color = "green";
  } else if (idx >= 70) {
    res.textContent = "Índice " + idx + ": Bom";
    res.style.color = "green";
  } else if (idx >= 50) {
    res.textContent = "Índice " + idx + ": Regular";
    res.style.color = "orange";
  } else {
    res.textContent = "Índice " + idx + ": Crítico";
    res.style.color = "red";
  }
}

// 17. Regras de Frete
function ex17() {
  const valor = Number(document.getElementById('ex17_valor').value);
  const regiao = document.getElementById('ex17_regiao').value.trim().toLowerCase();
  const vip = document.getElementById('ex17_prime').value.trim().toLowerCase();
  const res = document.getElementById('res17');

  if (!document.getElementById('ex17_valor').value) {
    res.textContent = 'Informe o valor da compra.';
    res.style.color = "red";
    return;
  }

  let frete = 30;
  if (regiao === 'sudeste') frete = 15;
  else if (regiao === 'sul') frete = 20;

  if (vip === 'sim' || valor >= 250) frete = 0;

  res.innerHTML = "Frete: R$ " + frete.toFixed(2) + "<br> Total com Frete: R$ " + (valor + frete).toFixed(2);
  res.style.color = "green";
}


// Função auxiliar para transformar o texto digitado (separado por vírgulas) em uma lista de números
function lerArrayNumeros(idInput) {
  const texto = document.getElementById(idInput).value;
  if (!texto.trim()) return [];
  return texto.split(',').map(n => Number(n.trim())).filter(n => !isNaN(n)); // split divide o texto e map converte em números
}

// 18. Consumo Semanal
function ex18() {
  const arr = lerArrayNumeros('ex18_dados');
  const res = document.getElementById('res18');

  if (arr.length === 0) { 
    res.textContent = 'Insira ao menos um valor.'; 
    res.style.color = "red";
    return; 
  }

  let total = 0;
  for (let i = 0; i < arr.length; i++) { // laço for para percorrer e somar todos os itens da lista
    total += arr[i];
  }
  const media = total / arr.length;

  res.innerHTML = "Total Consumido: " + total.toFixed(2) + "<br> Média Diária: " + media.toFixed(2);
  res.style.color = "green";
}

// 19. Tabuada Personalizada
function ex19() {
  const num = Number(document.getElementById('ex19_num').value);
  const lim = Number(document.getElementById('ex19_lim').value);
  const res = document.getElementById('res19');

  if (!document.getElementById('ex19_num').value || !document.getElementById('ex19_lim').value) {
    res.textContent = 'Preencha os campos.';
    res.style.color = "red";
    return;
  }

  let saida = '';
  for (let i = 1; i <= lim; i++) {
    saida += num + " x " + i + " = " + (num * i) + "<br>";
  }

  res.innerHTML = saida;
  res.style.color = "green";
}

// 20. Contagem Regressiva
function ex20() {
  const ini = Number(document.getElementById('ex20_inicio').value);
  const res = document.getElementById('res20');

  if (!document.getElementById('ex20_inicio').value) {
    res.textContent = 'Informe o número inicial.';
    res.style.color = "red";
    return;
  }

  let sequencia = [];
  for (let i = ini; i >= 0; i--) {
    sequencia.push(i); // push adiciona o número atual no final do array
  }

  res.textContent = sequencia.join(' -> '); // join junta os elementos do array usando a seta como separador
  res.style.color = "green";
}

// 21. Soma até Parar (Sentinela)
function ex21() {
  const arr = lerArrayNumeros('ex21_dados');
  const res = document.getElementById('res21');

  if (arr.length === 0) {
    res.textContent = 'Insira ao menos um valor.';
    res.style.color = "red";
    return;
  }

  let soma = 0;
  let qtd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) break; // break interrompe o laço imediatamente ao encontrar o valor -1
    soma += arr[i];
    qtd++;
  }

  res.innerHTML = "Soma acumulada: " + soma + "<br> Valores somados: " + qtd;
  res.style.color = "green";
}

// 22. Tentativas de Autenticação
function ex22() {
  const input = document.getElementById('ex22_tentativas').value;
  const res = document.getElementById('res22');

  if (!input.trim()) {
    res.textContent = 'Informe as tentativas.';
    res.style.color = "red";
    return;
  }

  const tentativas = input.split(',').map(s => s.trim());
  const senhaCorreta = "1234";

  let sucesso = false;
  let limite = Math.min(tentativas.length, 3);

  for (let i = 0; i < limite; i++) {
    if (tentativas[i] === senhaCorreta) {
      sucesso = true;
      res.textContent = "Acesso concedido na tentativa " + (i + 1) + "!";
      res.style.color = "green";
      break;
    }
  }

  if (!sucesso) {
    res.textContent = 'Conta bloqueada! 3 tentativas incorretas.';
    res.style.color = "red";
  }
}

// 23. Pares e Ímpares no Intervalo
function ex23() {
  const ini = Number(document.getElementById('ex23_inicio').value);
  const fim = Number(document.getElementById('ex23_fim').value);
  const res = document.getElementById('res23');

  if (!document.getElementById('ex23_inicio').value || !document.getElementById('ex23_fim').value) {
    res.textContent = 'Informe os valores inicial e final.';
    res.style.color = "red";
    return;
  }

  let pares = 0, impares = 0;
  for (let i = ini; i <= fim; i++) {
    if (i % 2 === 0) pares++; // operador % pega o resto da divisão para verificar se é par
    else impares++;
  }

  res.innerHTML = "Intervalo [" + ini + ", " + fim + "]:<br> Pares: " + pares + "<br> Ímpares: " + impares;
  res.style.color = "green";
}

// 24. Fatorial com Repetição
function ex24() {
  const num = Number(document.getElementById('ex24_num').value);
  const res = document.getElementById('res24');

  if (!document.getElementById('ex24_num').value || num < 0) {
    res.textContent = 'Número inválido.';
    res.style.color = "red";
    return;
  }

  let fat = 1;
  for (let i = 1; i <= num; i++) fat *= i;

  res.textContent = "Fatorial de " + num + "! = " + fat;
  res.style.color = "green";
}

// 25. Resumo de Notas da Turma
function ex25() {
  const notas = lerArrayNumeros('ex25_notas');
  const res = document.getElementById('res25');

  if (notas.length === 0) {
    res.textContent = 'Insira as notas.';
    res.style.color = "red";
    return;
  }

  let ap = 0, rec = 0, rep = 0, soma = 0;
  for (let n of notas) { // for...of percorre diretamente cada elemento da lista
    soma += n;
    if (n >= 7) ap++;
    else if (n >= 5) rec++;
    else rep++;
  }

  const media = soma / notas.length;
  res.innerHTML = "Média da turma: " + media.toFixed(2) + "<br> Aprovados: " + ap + "<br> Recuperação: " + rec + "<br> Reprovados: " + rep;
  res.style.color = "green";
}

// 26. Crescimento de Investimento
function ex26() {
  let ini = Number(document.getElementById('ex26_ini').value);
  const taxa = Number(document.getElementById('ex26_taxa').value) / 100;
  const alvo = Number(document.getElementById('ex26_alvo').value);
  const res = document.getElementById('res26');

  if (ini <= 0 || taxa <= 0 || alvo <= ini || !document.getElementById('ex26_ini').value) {
    res.textContent = 'Valores inválidos.';
    res.style.color = "red";
    return;
  }

  let meses = 0;
  while (ini < alvo) { // while repete a instrução enquanto a condição for verdadeira
    ini += ini * taxa;
    meses++;
  }

  res.innerHTML = "Tempo necessário: " + meses + " meses <br> Valor final acumulado: R$ " + ini.toFixed(2);
  res.style.color = "green";
}

// 27. Sequência de Fibonacci
function ex27() {
  const n = Number(document.getElementById('ex27_qtd').value);
  const res = document.getElementById('res27');

  if (!document.getElementById('ex27_qtd').value || n <= 0) {
    res.textContent = 'Informe um número maior que 0.';
    res.style.color = "red";
    return;
  }

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  res.innerHTML = "Fibonacci (" + n + " termos):<br> " + fib.slice(0, n).join(', '); // slice pega uma fatia do array da posição inicial até a posição n
  res.style.color = "green";
}

// 28. Verificação de Número Primo
function ex28() {
  const num = Number(document.getElementById('ex28_num').value);
  const res = document.getElementById('res28');

  if (!document.getElementById('ex28_num').value || num <= 1) {
    res.textContent = num + " NÃO é primo.";
    res.style.color = "red";
    return;
  }

  let primo = true;
  for (let i = 2; i <= Math.sqrt(num); i++) { // Math.sqrt calcula a raiz quadrada do número
    if (num % i === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    res.textContent = num + " É um número PRIMO.";
    res.style.color = "green";
  } else {
    res.textContent = num + " NÃO é primo.";
    res.style.color = "red";
  }
}

// 29. Pesquisa de Satisfação
function ex29() {
  const notas = lerArrayNumeros('ex29_notas');
  const res = document.getElementById('res29');

  let soma = 0, qtd = 0;
  for (let n of notas) {
    if (n === 0) break;
    if (n >= 1 && n <= 5) {
      soma += n;
      qtd++;
    }
  }

  if (qtd === 0) {
    res.textContent = 'Nenhuma nota válida processada.';
    res.style.color = "red";
  } else {
    const media = soma / qtd;
    res.innerHTML = "Total de avaliações: " + qtd + "<br> Média de Satisfação: " + media.toFixed(2) + " / 5.0";
    res.style.color = "green";
  }
}

// 30. Controle de Caixa Diário
function ex30() {
  const ops = lerArrayNumeros('ex30_ops');
  const res = document.getElementById('res30');

  if (ops.length === 0) {
    res.textContent = 'Insira as operações de caixa.';
    res.style.color = "red";
    return;
  }

  let saldo = 0;
  for (let val of ops) {
    if (val === 0) break;
    saldo += val;
  }

  res.textContent = "Saldo Final de Caixa: R$ " + saldo.toFixed(2);
  if (saldo >= 0) {
    res.style.color = "green";
  } else {
    res.style.color = "red";
  }
}

// 31. Jogo de Adivinhação
function ex31() {
  const palpites = lerArrayNumeros('ex31_palpites');
  const res = document.getElementById('res31');

  if (palpites.length === 0) {
    res.textContent = 'Informe ao menos um palpite.';
    res.style.color = "red";
    return;
  }

  const segredo = 7;
  let acertou = false;
  let tent = 0;

  for (let p of palpites) {
    tent++;
    if (p === segredo) {
      acertou = true;
      break;
    }
  }

  if (acertou) {
    res.textContent = "Acertou o número " + segredo + " na tentativa " + tent + "!";
    res.style.color = "green";
  } else {
    res.textContent = 'Nenhum palpite estava correto.';
    res.style.color = "red";
  }
}

// 32. Múltiplos no Intervalo
function ex32() {
  const lim = Number(document.getElementById('ex32_lim').value);
  const d1 = Number(document.getElementById('ex32_d1').value);
  const d2 = Number(document.getElementById('ex32_d2').value);
  const res = document.getElementById('res32');

  if (!document.getElementById('ex32_lim').value || !document.getElementById('ex32_d1').value || !document.getElementById('ex32_d2').value) {
    res.textContent = 'Informe todos os valores.';
    res.style.color = "red";
    return;
  }

  let mults = [];
  for (let i = 1; i <= lim; i++) {
    if (i % d1 === 0 && i % d2 === 0) mults.push(i);
  }

  const resultadoTexto = mults.join(', ') || 'Nenhum encontrado';
  res.innerHTML = "Múltiplos de " + d1 + " e " + d2 + " até " + lim + ":<br> " + resultadoTexto;
  res.style.color = mults.length > 0 ? "green" : "orange";
}

// 33. Padrão Textual com Laços
function ex33() {
  const lin = Number(document.getElementById('ex33_linhas').value);
  const char = document.getElementById('ex33_char').value || '*';
  const res = document.getElementById('res33');

  if (!document.getElementById('ex33_linhas').value || lin <= 0) {
    res.textContent = 'Defina a quantidade de linhas.';
    res.style.color = "red";
    return;
  }

  let padrao = '';
  for (let i = 1; i <= lin; i++) {
    padrao += char.repeat(i) + "<br>"; // repeat repete o caractere o número de vezes informado
  }

  res.innerHTML = padrao;
  res.style.color = "green";
}

// 34. Processamento de Sensor
function ex34() {
  const leituras = lerArrayNumeros('ex34_leituras');
  const res = document.getElementById('res34');

  if (leituras.length === 0) {
    res.textContent = 'Insira as leituras do sensor.';
    res.style.color = "red";
    return;
  }

  let validas = [];
  let descartadas = 0;

  for (let l of leituras) {
    if (l >= 10 && l <= 40) validas.push(l);
    else descartadas++;
  }

  const soma = validas.reduce((a, b) => a + b, 0); // reduce reduz o array a um único valor acumulando a soma
  const media = validas.length > 0 ? (soma / validas.length).toFixed(2) : 0;

  res.innerHTML = "Leituras válidas: [" + validas.join(', ') + "] <br> Média: " + media + " <br> Descartadas: " + descartadas;
  res.style.color = "green";
}

// 35. Análise de Notas em Vetor
function ex35() {
  const notas = lerArrayNumeros('ex35_vetor');
  const res = document.getElementById('res35');

  if (notas.length === 0) {
    res.textContent = 'Preencha o vetor.';
    res.style.color = "red";
    return;
  }

  const maior = Math.max(...notas); // o operador ... (spread) espalha os elementos da lista para o Math.max encontrar o maior
  const menor = Math.min(...notas);
  const media = notas.reduce((a, b) => a + b, 0) / notas.length;

  res.innerHTML = "Maior nota: " + maior + "<br> Menor nota: " + menor + "<br> Média: " + media.toFixed(2);
  res.style.color = "green";
}

// 36. Consumo Mensal (12 Meses)
function ex36() {
  const cons = lerArrayNumeros('ex36_meses');
  const res = document.getElementById('res36');

  if (cons.length === 0) {
    res.textContent = 'Informe os consumos.';
    res.style.color = "red";
    return;
  }

  const total = cons.reduce((a, b) => a + b, 0);
  const media = total / cons.length;
  const acimaMedia = cons.filter(c => c > media).length;

  res.innerHTML = "Consumo Total: " + total + "<br> Média Mensal: " + media.toFixed(2) + "<br> Meses acima da média: " + acimaMedia;
  res.style.color = "green";
}

// 37. Busca de Produto por Código
function ex37() {
  const cod = Number(document.getElementById('ex37_cod').value);
  const res = document.getElementById('res37');

  if (!document.getElementById('ex37_cod').value) {
    res.textContent = 'Informe o código do produto.';
    res.style.color = "red";
    return;
  }

  const produtos = [101, 202, 303, 404, 505];
  const pos = produtos.indexOf(cod); // indexOf procura o elemento e retorna a sua posição no vetor (-1 se não achar)

  if (pos !== -1) {
    res.textContent = "Produto " + cod + " ENCONTRADO no índice " + pos + ".";
    res.style.color = "green";
  } else {
    res.textContent = "Produto " + cod + " NÃO cadastrado.";
    res.style.color = "red";
  }
}

// 38. Contagem de Ocorrências
function ex38() {
  const vet = lerArrayNumeros('ex38_vetor');
  const alvo = Number(document.getElementById('ex38_alvo').value);
  const res = document.getElementById('res38');

  if (vet.length === 0 || !document.getElementById('ex38_alvo').value) {
    res.textContent = 'Preencha o vetor e o valor alvo.';
    res.style.color = "red";
    return;
  }

  let count = 0;
  for (let val of vet) {
    if (val === alvo) count++;
  }

  res.textContent = "O valor " + alvo + " aparece " + count + " vez(es) no vetor.";
  res.style.color = "green";
}

// 39. Separação de Pares e Ímpares
function ex39() {
  const vet = lerArrayNumeros('ex39_vetor');
  const res = document.getElementById('res39');

  if (vet.length === 0) {
    res.textContent = 'Informe os números no vetor.';
    res.style.color = "red";
    return;
  }

  const pares = vet.filter(n => n % 2 === 0);
  const impares = vet.filter(n => n % 2 !== 0);

  res.innerHTML = "Pares: [" + pares.join(', ') + "]<br> Ímpares: [" + impares.join(', ') + "]";
  res.style.color = "green";
}

// 40. Remoção Lógica de Duplicados
function ex40() {
  const vet = lerArrayNumeros('ex40_vetor');
  const res = document.getElementById('res40');

  if (vet.length === 0) {
    res.textContent = 'Informe os elementos do vetor.';
    res.style.color = "red";
    return;
  }

  let limpos = [];
  for (let item of vet) {
    if (!limpos.includes(item)) limpos.push(item); // includes verifica se o item já existe dentro do array limpos
  }

  res.innerHTML = "Vetor sem duplicados:<br> [" + limpos.join(', ') + "]";
  res.style.color = "green";
}

// 41. Inversão Manual de Vetor
function ex41() {
  const texto = document.getElementById('ex41_vetor').value;
  const res = document.getElementById('res41');

  if (!texto.trim()) {
    res.textContent = 'Informe os elementos do vetor.';
    res.style.color = "red";
    return;
  }

  const vet = texto.split(',').map(s => s.trim()).filter(s => s !== '');

  let invertido = [];
  for (let i = vet.length - 1; i >= 0; i--) {
    invertido.push(vet[i]);
  }

  res.innerHTML = "Original: [" + vet.join(', ') + "]<br> Invertido: [" + invertido.join(', ') + "]";
  res.style.color = "green";
}

// 42. Ordenação Simples Manual
function ex42() {
  let vet = lerArrayNumeros('ex42_vetor');
  const res = document.getElementById('res42');

  if (vet.length === 0) {
    res.textContent = 'Informe os números do vetor.';
    res.style.color = "red";
    return;
  }

  // Bubble Sort Manual
  for (let i = 0; i < vet.length; i++) {
    for (let j = 0; j < vet.length - 1; j++) {
      if (vet[j] > vet[j + 1]) {
        let temp = vet[j];
        vet[j] = vet[j + 1];
        vet[j + 1] = temp;
      }
    }
  }

  res.innerHTML = "Vetor Ordenado:<br> [" + vet.join(', ') + "]";
  res.style.color = "green";
}

// 43. Ranking de Desempenho
function ex43() {
  const pontos = lerArrayNumeros('ex43_pontos');
  const res = document.getElementById('res43');

  if (pontos.length === 0) {
    res.textContent = 'Informe as pontuações.';
    res.style.color = "red";
    return;
  }

  const ordenados = [...pontos].sort((a, b) => b - a); // sort ordena os elementos numéricos do maior para o menor
  const top3 = ordenados.slice(0, 3);

  const pos1 = top3[0] !== undefined ? top3[0] : '-';
  const pos2 = top3[1] !== undefined ? top3[1] : '-';
  const pos3 = top3[2] !== undefined ? top3[2] : '-';

  res.innerHTML = "Top 3 Pontuações:<br> 1º Lugar: " + pos1 + "<br> 2º Lugar: " + pos2 + "<br> 3º Lugar: " + pos3;
  res.style.color = "green";
}

// 44. Análise de Temperaturas (14 Dias)
function ex44() {
  const temps = lerArrayNumeros('ex44_temps');
  const res = document.getElementById('res44');

  if (temps.length === 0) {
    res.textContent = 'Informe as temperaturas.';
    res.style.color = "red";
    return;
  }

  let conforto = 0;
  for (let t of temps) {
    if (t >= 20 && t <= 25) conforto++;
  }

  res.innerHTML = "Dias analisados: " + temps.length + "<br> Dias na faixa de conforto (20°C a 25°C): " + conforto;
  res.style.color = "green";
}

// 45. Carrinho em Arrays Paralelos
function ex45() {
  const inputProds = document.getElementById('ex45_prods').value;
  const precos = lerArrayNumeros('ex45_precos');
  const res = document.getElementById('res45');

  if (!inputProds.trim() || precos.length === 0) {
    res.textContent = 'Informe os produtos e os preços.';
    res.style.color = "red";
    return;
  }

  const prods = inputProds.split(',').map(s => s.trim());
  let total = 0;
  let detalhe = '';

  const qtd = Math.min(prods.length, precos.length);
  for (let i = 0; i < qtd; i++) {
    detalhe += prods[i] + ": R$ " + precos[i].toFixed(2) + "<br>";
    total += precos[i];
  }

  res.innerHTML = detalhe + "<br> Total da Compra: R$ " + total.toFixed(2);
  res.style.color = "green";
}

// 46. Fila de Atendimento
function ex46() {
  const inputOps = document.getElementById('ex46_ops').value;
  const res = document.getElementById('res46');

  if (!inputOps.trim()) {
    res.textContent = 'Informe as operações.';
    res.style.color = "red";
    return;
  }

  const ops = inputOps.split(',').map(s => s.trim());
  let fila = [];
  let historico = [];

  for (let op of ops) {
    if (op.toUpperCase().startsWith('ENTRAR')) { // toUpperCase transforma em maiúsculo e startsWith verifica se o texto começa com a palavra informada
      const nome = op.substring(6).trim(); // substring extrai os caracteres a partir do índice 6
      if (nome) fila.push(nome);
    } else if (op.toUpperCase() === 'ATENDER') {
      if (fila.length > 0) {
        const atendido = fila.shift(); // shift remove e retorna o primeiro elemento da fila
        historico.push("Atendido: " + atendido);
      } else {
        historico.push('Fila vazia!');
      }
    }
  }

  res.innerHTML = historico.join('<br>') + "<br> Pessoas restantes na fila: [" + fila.join(', ') + "]";
  res.style.color = "green";
}

// 47. Filtrar Dados Acima do Limite
function ex47() {
  const vet = lerArrayNumeros('ex47_vetor');
  const limiteInput = document.getElementById('ex47_limite').value;
  const res = document.getElementById('res47');

  if (vet.length === 0 || !limiteInput) {
    res.textContent = 'Informe o vetor e o limite.';
    res.style.color = "red";
    return;
  }

  const limite = Number(limiteInput);
  const filtrados = vet.filter(val => val > limite);

  res.innerHTML = "Valores acima de " + limite + ":<br> [" + filtrados.join(', ') + "]";
  res.style.color = "green";
}

// 48. Comparação Entre Vetores
function ex48() {
  const t1 = lerArrayNumeros('ex48_t1');
  const t2 = lerArrayNumeros('ex48_t2');
  const res = document.getElementById('res48');

  if (t1.length === 0 || t2.length === 0) {
    res.textContent = 'Informe dados de ambas as turmas.';
    res.style.color = "red";
    return;
  }

  let resultado = '';
  const len = Math.min(t1.length, t2.length);

  for (let i = 0; i < len; i++) {
    if (t1[i] > t2[i]) {
      resultado += "Posição " + (i + 1) + ": Turma 1 venceu (" + t1[i] + " vs " + t2[i] + ")<br>";
    } else if (t2[i] > t1[i]) {
      resultado += "Posição " + (i + 1) + ": Turma 2 venceu (" + t2[i] + " vs " + t1[i] + ")<br>";
    } else {
      resultado += "Posição " + (i + 1) + ": Empate (" + t1[i] + ")<br>";
    }
  }

  res.innerHTML = resultado;
  res.style.color = "green";
}

// 49. Matriz de Consumo (3 Setores x 3 Dias)
function ex49() {
  const s1 = lerArrayNumeros('ex49_s1');
  const s2 = lerArrayNumeros('ex49_s2');
  const s3 = lerArrayNumeros('ex49_s3');
  const res = document.getElementById('res49');

  if (s1.length === 0 && s2.length === 0 && s3.length === 0) {
    res.textContent = 'Informe os dados de pelo menos um setor.';
    res.style.color = "red";
    return;
  }

  const matriz = [s1, s2, s3];
  let totSetores = [0, 0, 0];

  for (let i = 0; i < 3; i++) {
    if (matriz[i]) {
      totSetores[i] = matriz[i].reduce((a, b) => a + b, 0);
    }
  }

  res.innerHTML = "Total Setor 1: " + totSetores[0] + "<br> Total Setor 2: " + totSetores[1] + "<br> Total Setor 3: " + totSetores[2];
  res.style.color = "green";
}

// 50. Painel Integrador de Eficiência
function ex50() {
  const cons = lerArrayNumeros('ex50_dados');
  const res = document.getElementById('res50');

  if (cons.length === 0) {
    res.textContent = 'Informe os consumos.';
    res.style.color = "red";
    return;
  }

  const total = cons.reduce((a, b) => a + b, 0);
  const media = total / cons.length;
  const max = Math.max(...cons);
  const min = Math.min(...cons);
  const ineficientes = cons.filter(c => c > 300).length;

  res.innerHTML = "--- RELATÓRIO GERAL DE EFICIÊNCIA --- <br>" +
    "Residências Analisadas: " + cons.length + "<br>" +
    "Consumo Total: " + total.toFixed(2) + " kWh <br>" +
    "Consumo Médio: " + media.toFixed(2) + " kWh <br>" +
    "Maior Consumo: " + max + " kWh <br>" +
    "Menor Consumo: " + min + " kWh <br>" +
    "Residências Ineficientes (>300 kWh): " + ineficientes;
  res.style.color = "green";
}