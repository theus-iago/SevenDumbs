
function chat() {
    let chat = document.querySelector("#chat");
    document.querySelector("#chat").style.cssText = "transition:opacity 2s; opacity:100%;";
}
function exit_chat() {
    let chat = document.querySelector("#chat");
    document.querySelector("#chat").style.cssText = "transition:opacity 2s; opacity:0%;";
}
    function jogar() {
        let jogo = document.querySelector("#jogo");
        jogo.style.opacity = 100; 
        jogo.src = "https://theus-iago.github.io/Projeto-No-Body/";
    }