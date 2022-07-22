/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
VARIÁVEIS GLOBAIS E DE ESCOPO PARA {sketch.js}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//Variável de repetição de animação de main
let contLose = 0,
	Number_for_repetition = 0,
    Number_for_repetition_credits_openning = 0,
    Subpage_repetition_InstructionsIndice = 0,
    Choice_DificulteMode,
    Choice_Subpages_instructions = 0,
    Show_Right_Caracter = "",
    youlose = false;

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

/*~~~~~~~~~~~~~~~~~~~~~~~~
CCONFIGURAÇÕES DE CANVAS
~~~~~~~~~~~~~~~~~~~~~~~~*/
function setup() {
  createCanvas(windowWidth, windowHeight);
}

/*~~~~~~~~~~~~~~~~~~~~~
CONFIGURAÇÕES DE LOOP
~~~~~~~~~~~~~~~~~~~~~*/

function draw() {
  xCanvas = windowWidth; //Armazena a largura da janela do browser do usuário.
  yCanvas = windowHeight; //Armazena a altura da janela do browser do usuário.
  background(0); //Deixa o fundo da tela preto.
  textFont(FONTEgame); //Colocar estilo de fonte retrô 8 bit para todas as páginas.
  
  if(selec == main){
      frameRate(15);
      if(Number_for_repetition <= 45){
        image(main_frames[Number_for_repetition],0,0,xCanvas, yCanvas); 
        Number_for_repetition++} 
      else{
          if(Number_for_repetition > 45){
            image(main_frames[45],0,0,xCanvas, yCanvas);
          }
      }
  } 
    
  
  if(selec == instructions){
    //Configurações de layout
    frameRate(21)
    
    if(Subpage_repetition_InstructionsIndice <= (Subpages_instructions[Choice_Subpages_instructions].length - 1)){
      image(Subpages_instructions[Choice_Subpages_instructions][Subpage_repetition_InstructionsIndice],0,0,xCanvas, yCanvas);
      Subpage_repetition_InstructionsIndice++;
    } else{
      image((Subpages_instructions[Choice_Subpages_instructions][Subpages_instructions[Choice_Subpages_instructions].length - 1]),0,0,xCanvas, yCanvas);
      
      if(Choice_Subpages_instructions !== 1 && Choice_Subpages_instructions !== 2){
          image(Intructions_EXIT_gif,0,(yCanvas*5)/6, xCanvas/6, yCanvas/6);
          image(Intructions_SKIP_gif, (xCanvas*5)/6, (yCanvas*5)/6, xCanvas/6, yCanvas/6);
      }
    }
  }
  
  
  if(selec == game){
    if(thisdificulte < 0){thisdificulte = BackgroundDificulte.length - 1}
    
    if(thisdificulte<BackgroundDificulte.length && thisdificulte >= 0){
      image(BackgroundDificulte[thisdificulte],0,0, xCanvas, yCanvas);
    }
  }    
  
    if(selec == dificuldades){
      fill(255);
      textSize(32);
      if(thistheme < 0){thistheme = tema.length - 1}

      if(thistheme<tema.length && thistheme >= 0){
        image(tema[thistheme],0,0,xCanvas,yCanvas);
      }
      
      if(thistheme === 3){
        image(biology_caracol[0],0,yLeftCaracol, xCanvas/9, yCanvas/9);
        yLeftCaracol--;
          if(yLeftCaracol <= -yCanvas/9){yLeftCaracol = yCanvas;}
        
        image(biology_caracol[1],xCanvas*(8/9),yRightCaracol, xCanvas/9, yCanvas/9);
        yRightCaracol++;
          if(yRightCaracol >= yCanvas*(1+ 1/9)){yRightCaracol = -yCanvas/9;}
      }
  }
  
      if(selec == INgame_PLAY){
        fill(255);
        textSize(40);
        textAlign(CENTER, CENTER);
        text(Mensage_Raffle, xCanvas/2, yCanvas*(4/8))
        
        if(Mensage_Raffle === "" && qta_ERROS() < 6){
            image(forcaFrames[qta_ERROS()],xCanvas*(1/3),50,xCanvas/2, yCanvas/2);
        }
        
        textFont(Fontgameplay);
        text(Show_Right_Caracter, xCanvas/2, yCanvas*(6/8));
        textSize(21);
        textAlign(LEFT);
        text("SCORE: " + Final_score, 0,yCanvas*(7/8));
        text("Letras erradas: " + repository_repeat_WORDS_FALSE, 0, (5/6)*yCanvas);
        
        switch (Your_Status) {
          case "WIN":
            if(statusnow < 0){statusnow = win.length - 1;}
            if(statusnow<win.length && statusnow >= 0){
                image(win[statusnow],0,0,xCanvas, yCanvas);}
            
            textAlign(CENTER, CENTER);
            textSize(30);
            text("Resposta correta: " + Big_Date_of_Words[thistheme - 1][sorteio], xCanvas/2, yCanvas*(6/8));
            
            image(windance,xCanvas*(1/4),yCanvas*(2/8),xCanvas/2, yCanvas/2);
            break;
            
          case "LOSE":   
            if(statusnow < 0){statusnow = lose.length - 1;}
    
            if(statusnow<lose.length && statusnow >= 0){
                image(lose[statusnow],0,0,xCanvas, yCanvas);}
            
            if(youlose === false){
			  frameRate(7);
              image(LoseforcaFrames[contLose],xCanvas*(1/3),80,xCanvas/2, yCanvas/2);
			  if(contLose<6){contLose++;} else {youlose = true;}
            } else {
				contLose = 0;
				image(LoseforcaFrames[7],xCanvas*(1/3),80,xCanvas/2, yCanvas/2);}
            
            textAlign(CENTER, CENTER);
            textSize(30);
            text("Resposta correta: " + Big_Date_of_Words[thistheme - 1][sorteio], xCanvas/2, yCanvas*(5/8));
            text("~> Se você escolher 'Tentar Novamente', o jogo reiniciará \n" + "e você perderá todo seu progresso, inclusive seus pontos.\n" + "Além diso, a dificuldade que você escolheu não será alterada.",xCanvas/2,yCanvas*(6/8));
            break;
        }
       }
  
  if(selec === "WINmensage" || selec === "LOSEmensage"){
        textSize(40);
        textAlign(CENTER, CENTER);
        text("Seu SCORE final: \n" + Final_score + "\n\n\n" + "Obrigado por jogar!", xCanvas/2,yCanvas*(4/8));
      }
  /*
  if(selec == "LOSEmensage"){
        textSize(40);
        textAlign(CENTER, CENTER);
        text("Esta é a sua pontuação final: \n" + Final_score + "\n\n\n" + "Obrigado por jogar!", xCanvas/2,yCanvas*(4/8));
      }
  */
        
       
  
  if(selec == credits){
    //Exibe layout:
    frameRate(30);
    
    if(Number_for_repetition_credits_openning < (credits_frames.length -1)){
        image(credits_frames[Number_for_repetition_credits_openning],0,0,xCanvas, yCanvas);
        Number_for_repetition_credits_openning++;
    } else{
        if(Number_for_repetition_credits_openning >= (credits_frames.length -1)){
          image(credits_frames[(credits_frames.length -1)],0,0,xCanvas, yCanvas);
          image(Credits_EXIT_gif,(xCanvas*5)/6,(yCanvas*5)/6,xCanvas/6,yCanvas/6);
        }
    }
  }
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CONFIGURAÇÕES DE ENTRADA DO TECLADO
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function keyPressed(){
  
/*========================
  GAMEPLAY >> JOGANDO
========================*/   

  if(selec == INgame_PLAY){
    
    switch (Your_Status){
      case "WIN":
        switch(keyCode){
          case RIGHT_ARROW:
            statusnow = (statusnow + 1) % win.length;
          break;
          
          case LEFT_ARROW:
            statusnow = (statusnow - 1) % win.length;
          break;
            
          case ENTER:
            switch(statusnow){
              case 0:
                Raffle_Word(thistheme);
                Your_Status = "";
              break;
              
              case 1:
                thistheme = 0;
                selec = dificuldades;
                repository_repeat_WORDS_FALSE = [];
                statusnow = 0;
              break;
              
              case 2:
                selec = "WINmensage";
              break;
            }
          break;
        }
      break;
        
      case "LOSE":
        switch(keyCode){
          case RIGHT_ARROW:
            statusnow = (statusnow + 1) % lose.length;
          break;
          
          case LEFT_ARROW:
            statusnow = (statusnow - 1) % lose.length;
          break;
            
          case ENTER:
            switch(statusnow){
              case 0:
                thistheme = 0;
                selec = dificuldades;
                Newgame();    
                youlose = false; //Rebobina animação de LOSE
              break;
              
              case 1:
                selec = "LOSEmensage";
                youlose = false; //Rebobina animação de LOSE
              break;
            }
          break;
        }
        
      break;
    }
    
    //O (Your_Status === "") impede que o usuário acesse as funções na tela de WIN ou LOSE.
      if(Choice_DificulteMode === "easy" && Your_Status === ""){
        Show_Right_Caracter = easymode_Select(thistheme);} else {if(Choice_DificulteMode === "easy"){Show_Right_Caracter = "";}}
    
      if(Choice_DificulteMode === "medium" && Your_Status === ""){
        Show_Right_Caracter = mediummode_Select(thistheme);} else {if(Choice_DificulteMode === "medium"){Show_Right_Caracter = "";}}
    
      if(Choice_DificulteMode === "hard" && Your_Status === ""){
        Show_Right_Caracter = hardmode_Select(thistheme);} else {if(Choice_DificulteMode === "hard"){Show_Right_Caracter = "";}}
  }
  
  
  
/*
========================
OPÇÕES DE TEMA DE JOGO
========================
*/
  //for(let i=0; i < dificuldades.length; i++){}
    
  if(selec == dificuldades){
    /*if (keyCode === ESCAPE){
        selec = main;
        console.log(selec);
    }*/ //--> Colocar mensagem de que não se pode sair da dificuldade escolhida.
    
    //Sistema de movimentação com setas do teclado---------
    if (keyCode === DOWN_ARROW){
      thistheme = (thistheme + 1) % tema.length;
      console.log("tema atual:" + thistheme)
    }
    if (keyCode === UP_ARROW){
      thistheme = ((thistheme - 1) % tema.length)
      console.log("tema atual:" + thistheme)
    } 
    //-----------------------------------------------------
    
    if(thistheme > 0 && keyCode === ENTER){
      if(Your_Status === "WIN" || Your_Status === "LOSE"){Your_Status = "";} //Rebobina Status do joagador
      selec = INgame_PLAY;
    }
  }
  
  
/*
=================
OPÇÕES DE JOGO
=================
*/
  
  if (selec == game){
    
    /*if (keyCode >= 49 && keyCode <= 51 || keyCode >= 87 && keyCode <= 99){
      selec = dificuldades[parseInt(key) - 1];
      console.log(selec)
    }*/
      
    //Sistema de movimentação com setas do teclado---------
    if (keyCode === DOWN_ARROW){
      thisdificulte = (thisdificulte + 1) % BackgroundDificulte.length;
    }
    
    if (keyCode === UP_ARROW){
      thisdificulte = ((thisdificulte - 1) % BackgroundDificulte.length)
    }
    //-----------------------------------------------------
    
    if(thisdificulte > 0 && keyCode === ENTER){
        selec = dificuldades;
        Choice_DificulteMode = dificuldades[thisdificulte - 1];
      }
    
    if (keyCode === ESCAPE){
        selec = main;
        console.log(selec);
    }
  } 
  
/*
=====================
OPÇÕES DE INSTRUÇÕES
=====================
*/
  if (selec == instructions){
    
    //Sair de instruções---------------------------------
    if(keyCode === ESCAPE){
      selec = main;
      Subpage_repetition_InstructionsIndice = 0;
      console.log(selec);
    }

    //Movimentação de paginas----------------------------
    if(keyCode === RIGHT_ARROW){ //Avançar páginas
      if(Choice_Subpages_instructions < 3){
        Choice_Subpages_instructions++;
        Subpage_repetition_InstructionsIndice = 0;      
      } else {
          Choice_Subpages_instructions = 0;
          Subpage_repetition_InstructionsIndice = 0;
        }
    }
    
        if(keyCode === LEFT_ARROW){ //Retroceder páginas
      if(Choice_Subpages_instructions > 0){
        Choice_Subpages_instructions--;
        Subpage_repetition_InstructionsIndice = 0;
      } else {
          Choice_Subpages_instructions = 3;
          Subpage_repetition_InstructionsIndice = 0;
        }
    }
  }
  

/*
===========================
OPÇÕES DENTRO DOS CRÉDITOS
===========================
*/  
  if(selec == credits){
    if(keyCode === ESCAPE){
      selec = main;
      console.log(selec);
    }
  }
  
  
  
/*
==========================
OPÇÕES DENTRO DO MENU
==========================
*/  
  
  if (selec == main){
      if (keyCode >= 49 && keyCode <= 51 || keyCode >= 87 && keyCode <= 99){
        selec = key;
        console.log(selec);
        Number_for_repetition_credits_openning = 0; //Rebobina contador de creditos
    }
  }
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

  
