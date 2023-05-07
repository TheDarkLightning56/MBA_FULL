confirm("Calculadora IMC")


let peso = prompt("Digite seu peso (kg): ")
let altura = prompt("Digite sua altura em metros (use .):")
    
    IMC = peso/ (Math.pow(altura,2))
    
    
    if (IMC<=18.5 && IMC>0) {

        confirm("Resultado: "+ IMC.toFixed(2) + "\nVoce esta em estado de Magreza")    
        alert()    
    }
    else{       
        if(IMC<0){
                alert("Digite um numero valido")    
            }
            else{
            if(IMC>=18.5 && IMC<=24.9){
                alert("Resultado: "+  IMC.toFixed(2) +"\n Voce esta em estado de Normal")    
            }
            else{
                if(IMC>=24.9 && IMC<=30.0){
                    alert("Resultado: "+  IMC.toFixed(2)+"\nVoce esta em estado de Sobrepeso")           
                }
                else{
                    alert("Resultado: "+  IMC.toFixed(2) +"\nVoce esta em estado de Obesidade")    
                }
            }
        }
    }

    


