// adiciona um evento dentro do body do documento, quando realizado a ativação do 'keyup'(quando a tecla sobe), executa o evento que envia como parametro a tecla que foi clicada e subiu
document.body.addEventListener('keyup', (event)=>{

    // executa a função playSound, enviando como parametro o 'code' do parametro enviado pelo evento(tecla clicada) e é aplicado a função toLowercase que coloca a tecla em minusculo
    playSound(event.code.toLowerCase());
});

// adiciona um evento de click no campo selecionado(button), que executa a seguinte arrow function
document.querySelector('.composer button').addEventListener('click', ()=>{

    // define a variavel song como o valor inserido no campo selecionado (#input)
    let song = document.querySelector('#input').value;

    // condicional, se song for diferente de vazio
    if(song !== '') {

        // define a variavel songArray como um array do valor armazenado em song e separa cada letra inserida como 1 item
        let songArray = song.split('');

        // executa a função playComposition enviando como parametro a variavel songArray
        playComposition(songArray); 
    } // finaliza a condicional
}); // finaliza o evento do campo 'button'


// inicia a função playSound recebendo como parametro a variavel sound(.code da tecla pressionada)
function playSound(sound) {

    // define a variavel audioElement como a seleção do elemento com o ID igual a 's_${sound}'(sendo sound o .code da tecla pressionada)
    let audioElement = document.querySelector(`#s_${sound}`);

    //define a variavel keyElement como a seleção do elemento div que contêm a propriedade data-key igual a '${sound}(sendo sound o .code da tecla pressionada)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    //condicional, se audioElement for igual a true, ou seja, for pressionado a tecla
    if(audioElement) {

        //a variavel é definida como currentTime igual a 0, ou seja, reinicia o tempo do audio para 0
        audioElement.currentTime = 0;

        // executa a função play na variavel audioElement que executa o audio
        audioElement.play();
    }// finaliza a condicional

    //condicional, se keyElement for igual a true, ou seja, for pressionado a tecla
    if(keyElement) {

        // é adiconado a classe active na tecla pressionada
        keyElement.classList.add('active');

        // executa a função setTimeout que irá executar o comando, de retirar a classe active da tecla pressionada, em 300ms
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    } // finaliza a condicional
} // finaliza a função playSound


// executa a função playComposition que recebe como parametro a array songArray
function playComposition (songArray) {

    // define a variavel wait como 0
    let wait = 0;

    // inicia um laço de repetição de songItem of songArray, que vai repetir a quantidade de itens dentro de songArray
    for(let songItem of songArray) {

        // executa a função setTimeout que irá executar
        setTimeout(()=>{

            // a função playSound recebendo o parametro 'key${songItem}'(songItem se refere ao item atual na repetição da array songArray)
            playSound(`key${songItem}`);

            // espera waitms para executar a função novamente
        }, wait);

        // a cada repetição, a variavel wait é incrementada em 250ms, o que faz com que os itens sejam executados em ordem 
        wait += 250;

    }
} // finaliza a função playComposition