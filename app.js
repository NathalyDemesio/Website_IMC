let caixaPeso = document.getElementById('txt_peso');
    let caixaAltura = document.getElementById('txt_altura');
    let botaoIMC = document.getElementById('btn_calcular_imc'); 
    let resposta = document.getElementById('txt_resposta');
    let emoji = document.getElementById('txt_emoji');
    let resultadoIMC = 0;

    botaoIMC.addEventListener('click', function(evento){
    
        evento.preventDefault();

        let peso = caixaPeso.value;
        let altura = caixaAltura.value;

        resultadoIMC = peso / (altura * altura);

        if(caixaPeso.value && caixaAltura.value != ""){
            if(resultadoIMC < 18.5){

                resposta.textContent = "O seu IMC é: " + resultadoIMC.toFixed(2);
                emoji.textContent = "Você está abaixo do peso! ( • ᴖ • ｡)";

            } else {
                if(resultadoIMC > 25) {

                    resposta.textContent = "O seu IMC é: " + resultadoIMC.toFixed(2);
                    emoji.textContent = "Você está acima do peso! (·•᷄∩•᷅ )";

                } else {

                    resposta.textContent = "O seu IMC é: " + resultadoIMC.toFixed(2);
                    emoji.textContent = "Você está no peso ideal! ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧";

                }
            }
        } else {

            resposta.textContent = "Digite um valor.";
        }

    });
