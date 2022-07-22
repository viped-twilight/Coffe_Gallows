//Definição do tamanho do Canvas e os backgrounds.
var xCanvas = 1080,
    yCanvas = 720,
    FONTEgame, Fontgameplay,
    BackgroundCredits,
    BackgroundInstructionspage01 = [], 
    BackgroundInstructionspage02 = [],
    BackgroundInstructionspage03 = [],
    BackgroundInstructionspage04 = [],
    BackgroundDificulte = [],
    tema = [],
      biology_caracol = [],
        yRightCaracol = -yCanvas/9,
        yLeftCaracol = yCanvas,
    Intructions_SKIP_gif,
    Intructions_EXIT_gif,
    main_frames = [],
    credits_frames = [], Credits_EXIT_gif = [],
    win = [], lose = [], forcaFrames = [], LoseforcaFrames = [], windance;
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

function preload(){
 //Fonte de jogo
  FONTEgame = loadFont('game/interface/OldGameFatty.ttf');
  Fontgameplay = loadFont('game/interface/SourceCodePro-Medium.ttf');
  
//Game FORCA 
  for(let i = 0; i<6; i++){
    if(i !== 1){
      forcaFrames[i] = loadImage("game/interface/imgs_telas/game/status/" + i + ".gif");} else{
        forcaFrames[i] = loadImage("game/interface/imgs_telas/game/status/" + i + ".png");}
  }
  
//Game >> Status
  //WIN
  windance = loadImage("game/interface/imgs_telas/game/status/wins/dancing/Cdancing.gif");
  win[0] = loadImage("game/interface/imgs_telas/game/status/wins/WINS_01.jpg");
  win[1] = loadImage("game/interface/imgs_telas/game/status/wins/WINS_02.jpg");
  win[2] = loadImage("game/interface/imgs_telas/game/status/wins/WINS_03.jpg");
  
  //LOSE
  LoseforcaFrames[0] = loadImage("game/interface/imgs_telas/game/status/lose/forcaframes/crash.gif");
  LoseforcaFrames[1] = loadImage("game/interface/imgs_telas/game/status/lose/forcaframes/LOSE.gif");
  lose[0] = loadImage("game/interface/imgs_telas/game/status/lose/GAMEOVER_01.jpg");
  lose[1] = loadImage("game/interface/imgs_telas/game/status/lose/GAMEOVER_02.jpg");
  
//Game >> Dificuldades
  BackgroundDificulte[0] = loadImage("game/interface/imgs_telas/game/dificulte/Dificulte_main.jpg");
  BackgroundDificulte[1] = loadImage("game/interface/imgs_telas/game/dificulte/Dificulte_EASY.gif");
  BackgroundDificulte[2] = loadImage("game/interface/imgs_telas/game/dificulte/Dificulte_MEDIUM.gif");
  BackgroundDificulte[3] = loadImage("game/interface/imgs_telas/game/dificulte/Dificulte_HARD.gif");
  
//Game >> Dificuldades >> temas
  tema[0] = loadImage("game/interface/imgs_telas/game/tema/choice_orientation.jpg");
  tema[1] = loadImage("game/interface/imgs_telas/game/tema/choice_math.gif");
  tema[2] = loadImage("game/interface/imgs_telas/game/tema/choice_literature.gif");
  tema[3] = loadImage("game/interface/imgs_telas/game/tema/choice_biology.jpg");
  tema[4] = loadImage("game/interface/imgs_telas/game/tema/choice_history.gif");
  tema[5] = loadImage("game/interface/imgs_telas/game/tema/choice_physics.gif");
  tema[6] = loadImage("game/interface/imgs_telas/game/tema/choice_chemistry.gif");
  
  //~~~~> Caracol errante
    biology_caracol[0] = loadImage("game/interface/imgs_telas/game/tema/biology_caracol/caracol_left.gif");
    biology_caracol[1] = loadImage("game/interface/imgs_telas/game/tema/biology_caracol/caracol_right.gif");
  
//Armazenamento de layout das intruções------------------------------------------------------------------------------------------------
  {
  for(
    let frame_number_instructions_indice = 0;
    frame_number_instructions_indice <= 84;
    frame_number_instructions_indice++
    ){
      BackgroundInstructionspage01[frame_number_instructions_indice] = loadImage("game/interface/imgs_telas/instructions/page01/" + frame_number_instructions_indice + ".jpg");
    }
      
    for(
    let frame_number_instructions_indice = 0;
    frame_number_instructions_indice <= 93;
    frame_number_instructions_indice++
    ){
      BackgroundInstructionspage02[frame_number_instructions_indice] = loadImage("game/interface/imgs_telas/instructions/page02/" + frame_number_instructions_indice + ".jpg");
    }
  
    for(
    let frame_number_instructions_indice = 0;
    frame_number_instructions_indice <= 81;
    frame_number_instructions_indice++
    ){
      BackgroundInstructionspage03[frame_number_instructions_indice] = loadImage("game/interface/imgs_telas/instructions/page03/" + frame_number_instructions_indice + ".jpg");
    }
  
    for(
    let frame_number_instructions_indice = 0;
    frame_number_instructions_indice <= 89;
    frame_number_instructions_indice++
    ){
      BackgroundInstructionspage04[frame_number_instructions_indice] = loadImage("game/interface/imgs_telas/instructions/page04/" + frame_number_instructions_indice + ".jpg");
    }
  }
  //Orientação de movimentação de telas
  Intructions_EXIT_gif = loadImage("game/interface/imgs_telas/instructions/instrucoes_exit_page.gif");
  Intructions_SKIP_gif = loadImage("game/interface/imgs_telas/instructions/instrucoes_next_page.gif");
  
  
//Array de frames de créditos:----------------------------------------------------------------------------------
  Credits_EXIT_gif = loadImage("game/interface/imgs_telas/credits/repet/Tela_credits_exit.gif");
  
  for(
  let frame_number_main_indice = 0;
  frame_number_main_indice <= 45;
  frame_number_main_indice++
  ){main_frames[frame_number_main_indice] = loadImage("game/interface/imgs_telas/main/openning/" + frame_number_main_indice + ".jpg");}

//Array de frames de abertura da tela principal:-----------------------------------------------------------------
  for(
  let frame_number_credits_indice = 0;
  frame_number_credits_indice <= 94;
  frame_number_credits_indice++
  ){credits_frames[frame_number_credits_indice] = loadImage("game/interface/imgs_telas/credits/norepet/" + frame_number_credits_indice + ".jpg")}
}


//Posicionamento do usuário
const pages = [
        main = 0,
        game = 1,
          dificuldades = ["easy", "medium", "hard"],
        instructions = 2,
          Subpages_instructions = [
            BackgroundInstructionspage01,
            BackgroundInstructionspage02,
            BackgroundInstructionspage03,
            BackgroundInstructionspage04
          ],
        credits = 3,
        INgame_PLAY = "Gameplay",
        selec = 0
]

/*===================
OPÇÕES DE DIFICULDADE
====================*/
var thisdificulte = 0;

/*=============
OPÇÕES DE TEMA
===============*/

//Tema escolhido atualmente
var thistheme = 0;

/*=============
 STATUS ATUAL
===============*/
var statusnow = 0;