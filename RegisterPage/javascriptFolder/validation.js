const form = document.getElementById('form');
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const dateInput = document.querySelector("#date-input");
const cpfInput = document.querySelector("#cpf-input");
const telInput = document.querySelector("#tel-input");
const passwordInput = document.querySelector("#pass-input");
const confPassInput = document.querySelector("#confirm-pass");
const enviarButton = document.querySelector(".enviar-button");

const nameErrorLabel = document.querySelector("#name-error")
const emailErrorLabel = document.querySelector("#email-error")

const datelErrorLabel = document.querySelector("#date-error")

const cpfErrorLabel = document.querySelector("#cpf-error")

const telErrorLabel = document.querySelector("#tel-error")

const passErrorLabel = document.querySelector("#pass-error")

const confirmPassErrorLabel = document.querySelector("#confirm-error")
const campoPass = document.getElementById("pass-campo");



enviarButton.addEventListener("click", () => {
   
    let podeEnviar = verifyFunction(); 

    console.log(podeEnviar)






    form.addEventListener('submit', function (evento) {
      if (podeEnviar == false) {
        evento.preventDefault();
      } else {
    
      form.submit();
      }
    });
        
    




})




let verifyFunction = () => {
    let haveError = false
   

    const currentYear = 2024;
    const year = new Date(dateInput.value).getFullYear();


    const inputRequirements = [

        nameRequirements = {
        maxCaracteres : function() { if(nameInput.value.length > 15) { this.maxCaracteres = false; return `O campo nome pode ter no máximo 15 letras `} else {this.maxCaracteres = true;} },
        minCaracteres : function() { if(nameInput.value.length < 5) { this.minCaracteres = false; return `O campo nome precisa ter no mínimo 5 letras `} else {this.minCaracteres = true;}},     
    }, 
        emailRequirements = {
        maxCaracteres : function() { if(emailInput.value.length > 45) { this.maxCaracteres = false; return `O campo email pode ter no máximo 25 letras `} else {this.maxCaracteres = true;} },
        charNeed : function() { if(emailInput.value.includes("@")) { this.charNeed = true}  else {this.charNeed = false; return "Insira um email válido"}   },
        minCaracteres : function() { if(emailInput.value.length < 5) { this.minCaracteres = false; return `O campo email precisa ter no mínimo 10 letras `} else {this.minCaracteres = true;}}, 
   
    },  
        dateRequirements = {
        estaVazio : function() { if(dateInput.value == "") {this.estaVazio = false; return "O campo Data de nascimento não pode ficar vazio"} else {this.estaVazio = true}},
        maiorIdade : function() { if( (currentYear - year) < 18 ) {this.maiorIdade= false; return "É necessário ter mais de 18 anos para criar uma conta"} else {this.maiorIdade = true;} },
        ValidData : function() { if(year < 1924) {this.ValidData = false; return "Insira uma data válida"} else {this.ValidData = true;}}
      
    },
        cpfRequirements = {
        MinCaracteres : function() { if(cpfInput.value.length > 11 || cpfInput.value.length < 11 )  { this.minCaracteres = false; return `Insira um CPF válido `} else {this.minCaracteres = true;} },  
    
    }, 
          
        tellRequirements = {
        MinCaracteres : function() { if(telInput.value.length > 11 || telInput.value.length < 11 )  { this.MinCaracteres = false; return `Insira um telefone válido `} else {this.MinCaracteres = true;} },  
      
    },
    
        passRequirements = {
        maisculoLetter : function() { if(/[A-Z]/.test(passwordInput.value)) { this.maisculoLetter = true} else {this.maisculoLetter = false; return "É necessário uma letra maiuscula"} },
        maxCaracteres : function() { if(passwordInput.value.length > 20) { this.maxCaracteres = false; return `O campo senha pode ter no máximo 20 letras `} else {this.maxCaracteres = true;} },
        minCaracteres : function() { if(passwordInput.value.length < 4) { this.minCaracteres = false; return `O campo senha precisa ter no mínimo 5 letras `} else {this.minCaracteres = true;}},
    
    },
    
        confPassRequirements = {
        
        maxCaracteres : function() { if(confPassInput.value.length > 20) { this.maxCaracteres = false; return `O campo confirmar a senha pode ter no máximo 20 letras `} else {this.maxCaracteres = true;} },
        minCaracteres : function() { if(confPassInput.value.length < 4) { this.minCaracteres = false; return `O campo confirmar a  senha precisa ter no mínimo 5 letras `} else {this.minCaracteres = true;}},
     
    }
    
    
    ]


    let todosVerdadeiros = true; // Variável para rastrear o estado geral

    for (const requirementObj of inputRequirements) {
        for (const key in requirementObj) {
            if (typeof requirementObj[key] === "function") {
                const result = requirementObj[key](); // Executa a função
                if (requirementObj[key] === false) {
                    todosVerdadeiros = false; // Atualiza se algum for falso
                }
                if (result) {          
         
                    ShowMessageLabel(result)
                }
            }
        }
    }

    if (todosVerdadeiros) {
        console.log("Todos os valores deram verdadeiros");
        return true
    } else {
        return false
        console.log("Algum deu o valor false");
    }
  
}

let ShowMessageLabel = (message) => {

    if(message.includes("nome")) {

       nameErrorLabel.textContent = message;
    }

    

    
    

    if(message.includes("email")) {
       emailErrorLabel.textContent = message;
     }

     if(message.includes("data") || message.includes("idade")) {
        datelErrorLabel.textContent = message;
      }
     
      
      if(message.includes("CPF")) {
        cpfErrorLabel.textContent = message;
        campoPass.style.marginTop = "2%"
      }
     
      
      if(message.includes("tel")) {
        telErrorLabel.textContent = message;
        campoPass.style.marginTop = "3%"
      }

      if(message.includes("senha") && !(message.includes("confirmar"))) {
        passErrorLabel.textContent = message;
      }

      if(message.includes("confirmar")) {
        confirmPassErrorLabel.textContent = message;
      }

      console.log("a partir dq" + message)
      
  
    console.log(message)
}







