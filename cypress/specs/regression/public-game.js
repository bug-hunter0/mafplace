import publicGame from "../pages/public-game";

describe('Public Game Tests', () => {
    let gameId;
    it('Base Page title', () => {
        cy.visit('/public-game');
        cy.title().should('eq', 'The Maf Place');
    });

    it('Url should be /public-game', () => {
        publicGame.goToPublicGame();
        cy.url().should('include', '/public-game');
    });

    it('Create game', () => {
        //let gameId;
        publicGame.createGame();
        cy.get(publicGame.selectors.idGame).invoke('text').then((text) => {
            gameId = text;
            cy.log(gameId);
            cy.get(publicGame.selectors.startGameBtn).should('is.enabled');
            //.get(`#${gameId}`).should('exist');
        });
    });

    it('Verification if the game exists by game id', () => {
        //cy.wait(10000);
        cy.get(publicGame.selectors.gameSearchTab).click();
       cy.get(publicGame.selectors.searchGameField).should('be.visible');
       cy.get(publicGame.selectors.searchGameField).type(gameId);

       cy.get(publicGame.selectors.searchGameButton).click();
       //cy.wait(10000);
       cy.get(publicGame.selectors.continueGameBtn).should('exist')
       cy.get(publicGame.selectors.resultPhase).should('have.text', 'initial 0');

    });
});