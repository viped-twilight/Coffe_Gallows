//Essas variáveis estarem definidas como "let" pode dar um problema.
var palavras_repetidas = [
                          [],
                          [],
                          [],
                          [],
                          [],
                          []
                         ],
    letras_acertadas = "",
    repository_repeat_WORDS_TRUE = ["-"],
    repository_repeat_WORDS_FALSE = [],
    sorteio,
    SCORE = 0,
    Final_score = 0,
    Mensage_Raffle = "PRESS SPACEBAR TO INICIATE",
    Your_Status = "",
    Find_Caracter = false,
    Find_Caracter_FALSE = false,
    Repetition_Caracter = false;

var FunctionVogalRun = false,
    FunctionConsoanteRun = false;
//----------------------------------------------------------------------------

/*~~~~~~~~~~~~~~~~~~//
 FUNÇÕES DE GAMEPLAY
//~~~~~~~~~~~~~~~~~~*/
//NEWGAME
function Newgame(){
    palavras_repetidas = [[],[],[],[],[],[]];
    letras_acertadas = "";
    repository_repeat_WORDS_TRUE = ["-"];
    repository_repeat_WORDS_FALSE = [];
    sorteio = null;
    SCORE = 0;
    Final_score = 0;
    Mensage_Raffle = "PRESS SPACEBAR TO INICIATE";
    Find_Caracter = false;
    Find_Caracter_FALSE = false;
    Repetition_Caracter = false;
}

//Sorteio
function Raffle_Word(theme){
  
  //Rebobina mensagem na tela
  Mensage_Raffle = "";
  
  //Procura se não existe letrada faltando descobrir. 
    if(letras_acertadas.indexOf("_") === -1){
      sorteio = getRandom(Big_Date_of_Words[theme - 1].length)
      

     //repete o sorteio se a palavra for repetida
      for(let i=0; i < palavras_repetidas.length; i++){
        while(sorteio === palavras_repetidas[theme - 1][i]){  

          console.log("num sorteio:" + sorteio)

          sorteio = getRandom(Big_Date_of_Words[theme - 1].length); 

          console.log("num palavras repetidas:" + palavras_repetidas[i])
        }
      }
         //Rebobina valores de busca de caracteres + armazena palavra sorteada
        palavras_repetidas[theme - 1].push(sorteio);
        repository_repeat_WORDS_TRUE = ["-"];
        repository_repeat_WORDS_FALSE = [];
        FunctionConsoanteRun = false;
        FunctionVogalRun = false;
    }
  
}

//SOCRE e armazenamento de letras.
function SCORE_and_STOREGE(theme){
  
  //Verifica primeiro se a KEY não está repetido se for TRUE, verifica se a palavra é verdadeira ou falsa e salva na ARRAY correspondente.
  Repetition_Caracter = false;
  Find_Caracter = false;
  Find_Caracter_FALSE = false;
  SCORE = 0;
  
  for(
      let i = 0;
      i < Big_Date_of_Words[theme - 1][sorteio].length;
      i++  
    ){
    if(key.toLowerCase() == repository_repeat_WORDS_TRUE[i] ||
       key.toLowerCase() == repository_repeat_WORDS_FALSE[i])
    {Repetition_Caracter = true;} }
    
    if(Repetition_Caracter === false){
      for(
          let i = 0;
          i < Big_Date_of_Words[theme - 1][sorteio].length;
          i++  
        ){
          if(key.toLowerCase() == Big_Date_of_Words[theme - 1][sorteio][i] && Find_Caracter === false){
            repository_repeat_WORDS_TRUE.push(key.toLowerCase());
            SCORE++; //Acertou a letra;
            Find_Caracter = true; //Impede repetir caractere verdadeiro em array DE CORRETAS.
          } else {
            if(i === (Big_Date_of_Words[theme - 1][sorteio].length - 1) &&
               Find_Caracter === false && 
               Find_Caracter_FALSE === false
              ){
                repository_repeat_WORDS_FALSE.push(key.toLowerCase());
                Find_Caracter_FALSE = true; //Impede repetir caractere verdadeiro em array DE FALSAS.
                break;
            }
          }
        if(Find_Caracter === true){break}
      }
    }
  return SCORE
}  

//Desenha a palavra que está sendo utilizada atualmente:
function Draw_This_Word(theme){
    
  //Retorna array que aparece a usuário para string vazia.
  letras_acertadas = "";
    
    
  //Transforma array de letras_acertadas na configuração que aparecerá ao usuário
  //Coloca a letra já escolhida no repositório de letras repetidas.
    for(
      let i = 0;
      i < Big_Date_of_Words[theme - 1][sorteio].length;
      i++  
    ){
      if(repository_repeat_WORDS_TRUE.indexOf(Big_Date_of_Words[theme - 1][sorteio][i]) >= 0){
        letras_acertadas = letras_acertadas + Big_Date_of_Words[theme - 1][sorteio][i] + " ";
      } else {letras_acertadas = letras_acertadas + "_" + " ";} 
    }  
  }
  
//Verifica se o usuário perdeu ou ganhou
function Win_or_Lose(){
  if (repository_repeat_WORDS_FALSE.length === 6){
    Your_Status = "LOSE";
  }
  
  if(SCORE > 0 && letras_acertadas.indexOf("_") === -1){
    Your_Status = "WIN";
  }
  
  return;
} 

//Contabiliza a quantidade de erros do usuário:
function qta_ERROS(){
  return repository_repeat_WORDS_FALSE.length;
}  
  
//Busca de consoantes
function SearchConsoante(theme){
  
  //Rebobina valores quando chamada:
  let NAOconsoantes = ["a", 'e','i','o','u','-'],
      ConsoanteIndex = [],
      consoantesPRESENTES = [];
  
  //Busca de consoantes da palavra
  for(
      let i = 0;
      i < Big_Date_of_Words[theme - 1][sorteio].length;
      i++  
    ){
      if(NAOconsoantes.indexOf(Big_Date_of_Words[theme - 1][sorteio][i]) === -1){
        consoantesPRESENTES.push(Big_Date_of_Words[theme - 1][sorteio][i])
        }
  }
    console.log("Consoantes da palavra: " + consoantesPRESENTES);
    
    //Escolher aleatoriamente consoantes "Tamanho_da_palavra/5" inteiros não repetidos:
    let ConsoanteRANDOM;  
    
    while( ConsoanteIndex.length < Math.round((Big_Date_of_Words[theme - 1][sorteio].length)/5) ){
      
      ConsoanteRANDOM = getRandom(consoantesPRESENTES.length); //Sorteio de consoante
      
      if(ConsoanteIndex.indexOf(ConsoanteRANDOM) === -1){
        ConsoanteIndex.push(ConsoanteRANDOM);
        repository_repeat_WORDS_TRUE.push(consoantesPRESENTES[ConsoanteRANDOM]);
      }
    }
    console.log("Consoante sorteada: " + ConsoanteRANDOM);
    console.log("Index de consoantes: " + ConsoanteIndex); 
}
  
//Busca de Vogais
function SearchVogais(theme){
    
  //Rebobina valores quando chamada:
  let vogais = ["a", 'e','i','o','u'],
      vogaisPRESENTES = [];
  
  //Busca de vogais da palavra
  for(
      let i = 0;
      i < Big_Date_of_Words[theme - 1][sorteio].length;
      i++  
    ){
      if(vogais.indexOf(Big_Date_of_Words[theme - 1][sorteio][i]) >= 0){
        vogaisPRESENTES.push(Big_Date_of_Words[theme - 1][sorteio][i]);
        }
  }
    console.log("Consoantes da palavra: " + vogaisPRESENTES);
    
    //Escolher aleatoriamente uma vogal.
    repository_repeat_WORDS_TRUE.push(vogaisPRESENTES[getRandom(vogaisPRESENTES.length)]); 
}
  
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
  
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
 FUNÇÕES DE DIFICULDADE DE JOGO
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  
//O argumento para essa função é a variável %thistheme%
function easymode_Select(theme){
  
  //Sorteia uma palavra quando pressionado "spacebar".
  if(keyCode === 32){
    Raffle_Word(theme);
  }
  
  //Armazena uma quantidade de consoantes para ajudar o usuário
  if(FunctionConsoanteRun === false){
     SearchConsoante(thistheme);
    FunctionConsoanteRun = true;
  }
  
  //Testa se as letras pressionadas estão certas ou não
  if((keyCode >= 65 && keyCode <= 90 || key === 'ç' || key === 'Ç' ) && 
     letras_acertadas.indexOf("_") >= 0){ 
      Final_score += SCORE_and_STOREGE(theme);
  }
  
  //Desenha na tela a palavra
  Draw_This_Word(theme);
  
  
  
  console.log("palavras_repetidas? " + palavras_repetidas);
  console.log("palavra selecioada: " + Big_Date_of_Words[theme - 1][sorteio]);
  console.log("REPOSITORY FALSE " + repository_repeat_WORDS_FALSE);
  console.log("REPOSITORY true " + repository_repeat_WORDS_TRUE);
  

  
  //Retorno de mensagem da função:
      if(SCORE > 0 && letras_acertadas.indexOf("_") === -1){
        Mensage_Raffle = "PRESS SPACEBAR TO CHOICE A NEW WORD";
        Final_score += 10; //Acertou a palavra.
      }
  
    Win_or_Lose();//Vefica se a pessoa perdeu ou ganhou
  
  //Retorna a String de letras acertadas atualmente (sem o espaço no final da string).
  return letras_acertadas.trim();
      
}


function mediummode_Select(theme){
    
  Mensage_Raffle = "";
  
  if(keyCode === 32){
    Raffle_Word(theme);
  }
  
  //Armazena uma quantidade de vogais para ajudar o usuário
  if(FunctionVogalRun === false){
     SearchVogais(thistheme);
    FunctionVogalRun = true;
  }
 
  if((keyCode >= 65 && keyCode <= 90 || key === 'ç' || key === 'Ç' ) && 
     letras_acertadas.indexOf("_") >= 0){ 
      Final_score += SCORE_and_STOREGE(theme)*2;
  }
  
  Draw_This_Word(theme);
  
  
  
  console.log("palavras_repetidas? " + palavras_repetidas);
  console.log("palavra selecioada: " + Big_Date_of_Words[theme - 1][sorteio]);
  console.log("REPOSITORY FALSE " + repository_repeat_WORDS_FALSE);
  console.log("REPOSITORY true " + repository_repeat_WORDS_TRUE);
  

  
  //Retorno de mensagem da função:
      if(SCORE > 0 && letras_acertadas.indexOf("_") === -1){
        Mensage_Raffle = "PRESS SPACEBAR TO CHOICE A NEW WORD";
        Final_score += 20; //Acertou a palavra.
      }
  
  Win_or_Lose() //Vefica se a pessoa perdeu ou ganhou
  
  //Retorna a String de letras acertadas atualmente (sem o espaço no final da string).
  return letras_acertadas.trim();
      

}


function hardmode_Select(theme){
    
  Mensage_Raffle = "";
  
  if(keyCode === 32){
    Raffle_Word(theme);
    //if(SCORE > 0){} 
  }
 
  if((keyCode >= 65 && keyCode <= 90 || key === 'ç' || key === 'Ç' ) && 
     letras_acertadas.indexOf("_") >= 0){ 
      Final_score += SCORE_and_STOREGE(theme)*3;
  }
  
  Draw_This_Word(theme);
  
  
  
  console.log("palavras_repetidas? " + palavras_repetidas);
  console.log("palavra selecioada: " + Big_Date_of_Words[theme - 1][sorteio]);
  console.log("REPOSITORY FALSE " + repository_repeat_WORDS_FALSE);
  console.log("REPOSITORY true " + repository_repeat_WORDS_TRUE);
  

  
  //Retorno de mensagem da função:
      if(SCORE > 0 && letras_acertadas.indexOf("_") === -1){
        Mensage_Raffle = "PRESS SPACEBAR TO CHOICE A NEW WORD";
        Final_score += 30; //Acertou a palavra.
      }
    
  Win_or_Lose() //Vefica se a pessoa perdeu ou ganhou
  
  //Retorna a String de letras acertadas atualmente (sem o espaço no final da string).
  return letras_acertadas.trim();
      

}

