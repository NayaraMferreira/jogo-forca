
const elementos = {

    telaInicial: document.getElementById('inicial'),
    telaCadastro: document.getElementById('cadastro'),
    telaJogo: documentElementById('jogo'),
    telaMensagem : document.querySelector('.mensagem'),
    textoMensagem: document.querySelector('.mensagem .texto'),
    teclado : document.querySelector('.teclado'),
    palavra : document.querySelector('.palavra'),
    dica : document.querySelector('.dica'),


botoes: {
    facil: document.querySelector('.botao-facil'),
    medio: document.querySelector('.botao-medio'),
    dificil : document.querySelector('.botao-dificil'),
    cadastrar: document.querySelector('.botao-cadastrar'),
    realizarCadastro: document.querySelector('.botao-realizar-cadastro'),
    voltar: document.querySelector('.botao-voltar'),
    reiniciar: document.querySelector('.reiniciar'),
} ,

campos : {
    dificuldade: {
        facil: document.getElementById('facil'),
        medio: document.getElementById('medio'),
        dificil: document.getElementById('dificil')
    },
    palavra: document.getElementById('palavra'),
    dica: document.getElementById('dica')
},

boneco: [
    document.querySelector('.boneco-cabeca'),
    document.querySelector('.boneco-corpo'),
    document.querySelector('.boneco-braco-esquerdo'),
    document.querySelector('.boneco-braco-direito'),
    document.querySelector('.boneco-perna-direita'),
    document.querySelector('.boneco-perna-esquerda'),

],
};

const palavra = {
    facil:[{
        palavra:'série',
        dica:'game of thrones é a melhor...'
    },
   {
    palavra:'impar',
    dica: 'o que não é par é...'
    },
  ],
};