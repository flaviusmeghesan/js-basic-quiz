
      
      const statement = document.getElementById("statement");
      const optionButtons = document.querySelector("#options").children;
    
      const explanation = document.getElementById("explanation");

     
      let fact = {
        statement: "A monkey was the first non-human to go into space.",
        answer: false,
        explanation: "ruit flies were the first to make the trip.",
      };

      statement.textContent = fact.statement;

      const disable = (button)=>{
        button.setAttribute("disabled","");
      }
      const enable = (button)=>{
        button.removeAttribute("disabled");
      }
    
      const isCorrect = (guess) => guess===fact.answer.toString();

      /
      for(let button of optionButtons){
        button.addEventListener("click",(event)=>{

            explanation.textContent = fact.explanation;
            if(isCorrect(button.value)){
                console.log(button.value);
                button.classList.add("correct");
    
             } else{
                console.log(button.value);
                button.classList.add("incorrect");
    
             }

         for(let bttn of optionButtons){
            disable(bttn);
         }
         
        })
      }
     