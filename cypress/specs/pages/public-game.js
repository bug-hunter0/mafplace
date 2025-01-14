const selectors ={
    btnGame: "#btn-game",
    backToLoginBtn: "#btn-back-to-login",
    maleIcon: "#male-icon",
    femaleIcon:"#female-icon",
    newGameTab:"#new-game-tab",
    searchGameTab:"#search-tab",
    nickNameInput:"#add_player_field",
    addPlayerBtn:"#add_player_button",
    randomeSettingsCheckBox:"#random-seating",
    createGameBtn: "#create-game-button"
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
    selectors
}