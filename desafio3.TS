let soma = document.getElementById('soma')! as HTMLInputElement;
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarSaldo(Number(soma.value)); 
    });
}
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});

