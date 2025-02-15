const selectors ={
    baseUrl: "/public-game",
    btnGame: "#btn-game",
    backToLoginBtn: "#btn-back-to-login",
    maleIcon: "#male-icon",
    femaleIcon:"#female-icon",
    newGameTab:"#new-game-tab",
    searchGameTab:"#search-tab",
    nickNameInput:"#add_player_field",
    addPlayerBtn:"#add_player_button",
    randomeSettingsCheckBox:"#random-seating",
    createGameBtn: "#create-game-button",
    idGame: "#id-value",
    gameSearchTab:"#search-tab",
    searchGameField: "#search_game_field",
    searchGameButton: "#search_game_button",
    continueGameBtn: "#continue-game-button",
    noGameMessage: "#no-game-message",
    startGameBtn: "#start-game-button",
    resultPhase: "#result-phase",
    resultDate: "#result-date",
    timeLeft: "#time-left",
    musicButton:'#header-menu .content-left #music-btn-muted',
    musicButtonPlaying:'#header-menu .content-left #music-btn-playing',
} 
const expected ={
    initialGameUrl: "/game/initial",
    initialResult: /^initial \d+$/,
    pageTitle: "The Maf Place"
}



const goToPublicGame=()=>{
    cy.get(selectors.btnGame).click();
}
const createGame=()=>{
    for(let i=1;i<=10;i++){
        cy.get(selectors.nickNameInput).type("player"+i);
        cy.get(selectors.addPlayerBtn).click();
    }
    cy.get(selectors.createGameBtn).click();
}

export default{
    goToPublicGame,
    createGame,
    selectors,
    expected
}