# Coffe-Gallows
> Repositório importado da plataforma p5.js. <br>
> Esse é um simples jogo da forca com tema de café.

## Divisões do Game
O jogo é divido em 3 seções principais: <br>
i. Game; <br>
ii. Instruções; <br>
iii. Créditos. <br>

## Intruções:
Contém as informações básicas do jogo, explicando a mecânica, que se baseia em keyboards (botões do teclado).

### <Botões utilizados>
- **|ESC|** -> Botão de voltar. Depois de selecionada a dificuldade, **não** é mais possível utilizá-lo; 
- **|SPACEBAR|** -> Aciona o sorteio aleatório de uma palavra do tema selecionado; 
- **|ENTER|** -> Confirma a escolha selecionada;
- **|Setas direcionais|** -> Movimentação da seleção de escolhas de menu;
- **|Letras de A a Z (incluindo o "ç")|** -> Letras do teclado que podem ser pressionadas durante o jogo da forca.
  
### <Score>
O **SCORE** é possui três configurações: easy, medium, hard. Cada configuração se adapta a escolha de dificuldade do usuário.
```javascript
                  _________________________
                  | Easy  | Medium | Hard
      -------------------------------------
      |  1 Letra  |  1    |   2    |  3   |
      | 1 Palavra |  10   |   20   |  30  | 
```
  
### <Dificuldade>
**#Easy mode:** uma função pegará o tamanho da palavra sorteada, contará quantas letras possui, dividirá o valor por 5 e aproximará esse valor para cima. O valor resultante desse cálculo será a quantidade de consoantes aleatórias que aparecerão para auxiliar o jogador a advinhar a página;<br>
 <br>
**#Medium mode:** uma vogal aleatória da palavra sorteada será escolhida para aparecer logo de início para auxiliar o jogador;<br>
 <br>
**#Hard mode:** Faça o seu melhor, você, simplesmente, não terá ajuda.<br>
 
### <Gameplay>
Sempre que o usuário acertar uma palavra, ele terá a escolha de continuar tentando acertar as palavras do mesmo tema escolhido anteriormente, finalizar o jogo, ou, ainda, de mudar de tema. Se for escolhido **"finalizar"** o jogo se encerrará e não terá escolha de volta. <br>
  
Sempre que o usuário perder, ele terá duas escolhas: **finalizar** ou **"tentar novamente"**.
- **FINALIZAR:** o jogo se encerrará e não terá escolha de volta, podendo ver apenas o **SCORE FINAL**;
- **TENTAR NOVAMENTE:** todo o progresso de jogo será perdido, incluindo o **SCORE**, e, logo em seguida será possível escolher um tema para recomeçar.
 
## Game:
Não é admitido o uso de acentos ou de letras maiúsculas.
 
## Créditos:
É possível ver informações do desenvolvedor do jogo.