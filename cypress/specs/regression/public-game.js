import PublicGame from "../pages/public-game";

describe("Public Game Tests", () => {
  let gameId;

  it("Verify base page title", () => {
    cy.visit("/public-game");
    cy.title().should("eq", "The Maf Place");
  });

  it("Url should be /public-game", () => {
    PublicGame.goToPublicGame();
    cy.url().should("include", "/public-game");
  });

  it("Create game", () => {
    PublicGame.createGame();
    cy.get(PublicGame.selectors.idGame)
      .invoke("text")
      .then((text) => {
        gameId = text;
        cy.log(gameId);
        cy.get(PublicGame.selectors.startGameBtn).should("is.enabled");
      });
  });

  it("Verification if the game exists by game id", () => {
    cy.get(PublicGame.selectors.gameSearchTab).click();
    cy.get(PublicGame.selectors.searchGameField).should("be.visible");
    cy.get(PublicGame.selectors.searchGameField).type(gameId);
    cy.get(PublicGame.selectors.searchGameButton).click();
    cy.get(PublicGame.selectors.continueGameBtn).should("exist");
  });

  it("Verification of initial game", () => {
    cy.get(PublicGame.selectors.resultPhase)
      .invoke("text")
      .then((text) => {
        const result = text.trim(); // Trim any extra whitespace
        cy.log("Result phase:", result);
        expect(result).to.match(/^initial \d+$/); // Match "initial" followed by a number
      });
  });

  it("Verification of date of game", () => {
    const currentDate = new Date();
    const formattedCurrentDate = `${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${currentDate.getDate()}`;

    cy.get(PublicGame.selectors.resultDate)
      .invoke("text")
      .then((text) => {
        const dateGame = text.trim(); // Trim any extra whitespace
        cy.log("Date of game:", dateGame);
        cy.log("Current date:", formattedCurrentDate);
        expect(dateGame).to.equal(formattedCurrentDate);
      });
  });
});