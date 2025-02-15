import PublicGame from "../pages/public-game";
import InitialGamePage from "../pages/initial-game-page";

describe("Public Game Tests", () => {
  let gameId;

  it("Verify base page title", () => {
    cy.visit(PublicGame.selectors.baseUrl);
    cy.title().should("eq", PublicGame.expected.pageTitle);
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
        expect(result).to.match(PublicGame.expected.initialResult); // Match "initial" followed by a number
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

  it("Initial game is started", () => {
    cy.get(PublicGame.selectors.continueGameBtn).click();
    cy.url().should("include", "/game/initial");
  });

  it("Time left is visible and 00:00", () => {
    cy.get(PublicGame.selectors.timeLeft).should("be.visible");
    cy.get(PublicGame.selectors.timeLeft).invoke("text").then((text) => {
      expect(text).to.equal("00:00");
    });
  });

  it("Music button is displayed and muted", () => {
    cy.get(InitialGamePage.selectors.musicButton).should("be.visible")
    cy.get(PublicGame.selectors.musicButton).should("have.attr", "alt", "unmute");
  });
  it("After click on the Music button a sound track is turn on and alt has attr muted", () => {
    cy.get(PublicGame.selectors.musicButton).click();
    cy.get(PublicGame.selectors.musicButtonPlaying).should("have.attr", "alt", "mute");
    cy.get(PublicGame.selectors.musicButtonPlaying).click()
  });
  it("Plus btn is visible and enabled", () => {
    cy.get(InitialGamePage.selectors.plusButton).should("be.visible", "enabled");
  });
  it("Minus btn is visible and disabled", () => {
    cy.get(InitialGamePage.selectors.minusButton).should("be.visible", "disabled");
  });
  it("After click on the plus button time-left has value 00:10 and minus button is disabled", () => {
    cy.get(InitialGamePage.selectors.plusButton).click();
    cy.get(PublicGame.selectors.timeLeft).invoke("text").then((text)=>{
      expect(text).to.equal("00:10");
    })
    cy.get(InitialGamePage.selectors.minusButton).should("be.visible","enabled");
  });
  
});