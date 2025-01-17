// filepath: /c:/Users/admin/OneDrive/Pulpit/prods/cypress/specs/api/api-public-game.js
import axios from 'axios';

describe('Public Game', () => {
  let status, data;

  const reqBody = {
    "message": "Game saved to /mafia-games",
    "game": {
      "players": [
        {
          "_id": 224669,
          "firstName": "Public",
          "lastName": "Player",
          "nickName": "hhh",
          "sex": "male",
          "role": "",
          "alive": true,
          "fouls": "",
          "muted": false,
          "no": 1
        },
        {
          "_id": 469664,
          "firstName": "Public",
          "lastName": "Player",
          "nickName": "jjj",
          "sex": "male",
          "role": "",
          "alive": true,
          "fouls": "",
          "muted": false,
          "no": 2
        },
        {
          "_id": 62616,
          "firstName": "Public",
          "lastName": "Player",
          "nickName": "kkk",
          "sex": "male",
          "role": "",
          "alive": true,
          "fouls": "",
          "muted": false,
          "no": 3
        },
        {
          "_id": 305652,
          "firstName": "Public",
          "lastName": "Player",
          "nickName": "]",
          "sex": "male",
          "role": "",
          "alive": true,
          "fouls": "",
          "muted": false,
          "no": 4
        },
        {
          "_id": 64642,
          "firstName": "Public",
          "lastName": "Player",
          "nickName": "kkk",
          "sex": "male",
          "role": "",
          "alive": true,
          "fouls": "",
          "muted": false,
          "no": 5
        },
        {
          "_id": 343678,
          "firstName": "Public",
          "lastName": "Player",
          "nickName": "kk",
          "sex": "male",
          "role": "",
          "alive": true,
          "fouls": "",
          "muted": false,
          "no": 6
        },
        {
          "_id": 836365,
          "firstName": "Public",
          "lastName": "Player",
          "nickName": "]",
          "sex": "male",
          "role": "",
          "alive": true,
          "fouls": "",
          "muted": false,
          "no": 7
        },
        {
          "_id": 811086,
          "firstName": "Public",
          "lastName": "Player",
          "nickName": "kkk",
          "sex": "male",
          "role": "",
          "alive": true,
          "fouls": "",
          "muted": false,
          "no": 8
        },
        {
          "_id": 932319,
          "firstName": "Public",
          "lastName": "Player",
          "nickName": "llk",
          "sex": "male",
          "role": "",
          "alive": true,
          "fouls": "",
          "muted": false,
          "no": 9
        },
        {
          "_id": 502810,
          "firstName": "Public",
          "lastName": "Player",
          "nickName": "kk",
          "sex": "male",
          "role": "",
          "alive": true,
          "fouls": "",
          "muted": false,
          "no": 10
        }
      ],
      "deadPlayers": [],
      "disqualified": [],
      "vote": [],
      "voting": [],
      "comments": [],
      "talked": [],
      "bestMove": [],
      "updatedPlayers": [],
      "_id": "678ab6519bf0630ea02738db",
      "type": "public",
      "startDate": "2025/1/17_20:58",
      "rating": false,
      "endDate": "",
      "roles": {
        "Mafia": 2,
        "Don": 1,
        "Sheriff": 1,
        "Citizen": 6
      },
      "whoWon": 0,
      "phase": "/game/initial",
      "cycle": 0,
      "killedLastNight": false,
      "firstWord": 1,
      "activePlayer": 0,
      "currentComment": "",
      "__v": 0
    }
  };

  before(async () => {
    const response = await axios.post('https://maf-place-prod-srv.azurewebsites.net/mafia-games/', reqBody);
    status = response.status;
    data = response.data;
  });

  it('should return status 201', () => {
    expect(status).to.eq(201);
  });

//   it('should return the correct game data', () => {
//     expect(data.game).to.have.property('_id', '678ab6519bf0630ea02738db');
//     expect(data.game.players).to.have.length(10);
//   });
});