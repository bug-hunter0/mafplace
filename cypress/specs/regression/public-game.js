import publicGame from "../pages/public-game";
describe('Base', () => {
    before(() => {
        cy.visit('/');
        
    });
    it('Page title', () => {
        cy.title().should('eq', 'The Maf Place')
    })
    it('Url should be /public-game', () => {
        publicGame.goToPublicGame();
        cy.url().should('include', '/public-game')
    })
    it('Create game', () => {
        publicGame.createGame();
    })
   });
