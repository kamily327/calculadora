const display = document.getElementById("display");
let currentInput = "";

function atualizarDisplay(){
    display.value = currentInput
};
function limparDisplay(){
    currentInput = ''
    atualizarDisplay();
};
function excluirCaractere(){
    currentInput = currentInput.slice(0, -1);
    atualizarDisplay();
};
function adicionarCaractere(char){
    currentInput += char;
    atualizarDisplay();
};
function calcular(){
    try{
        if(currentInput.trim() === "") return;

            const resultado = eval(currentInput) ;
            currentInput = resultado.toString();
            atualizarDisplay();
        }
          catch{
            display.value = 'Erro na expressão';
            currentInput = '';
    }
};
