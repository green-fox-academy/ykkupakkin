'use strict';

class TennisGame1 {
    constructor(player1Name, player2Name) {
        this.player1score = 0;
        this.player2score = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    wonPoint(playerName) {
        if (playerName === this.player1Name)
            this.player1score += 1;
        else
            this.player2score += 1;
    }

    player1State() {
        switch (this.player1score) {
            case 0:
                score = ScoresBoth[0];
                break;
            case 1:
                score = ScoresBoth[1];
                break;
            case 2:
                score = ScoresBoth[2];
                break;
            default:
                score = ScoresBoth[3];
                break;
        }
    }

    temporaryScore() {
        switch (tempScore) {
            case 0:
                score += Scores[0];
                break;
            case 1:
                score += Scores[1];
                break;
            case 2:
                score += Scores[2];
                break;
            case 3:
                score += Scores[3];
                break;
        }
    }

    getScore() {
        let score = "";
        let tempScore = 0;
        if (this.player1score === this.player2score) {
            player1State();
        } else if (this.player1score >= 4 || this.player2score >= 4) {
            let minusResult = this.player1score - this.player2score;
            if (minusResult === 1) {
                score = "Advantage Player 1";
            } else if (minusResult === -1)
                score = "Advantage Player 2";
            else if (minusResult >= 2)
                score = "Win for Player 1";
            else
                score = "Win for Player 2"; {
                score += "-";
                tempScore = this.player2score;
            }
            temporaryScore();
        }

        return score;
    }
}

const Scores = ['Love', 'Fifteen', 'Thirty', 'Forty'];
const ScoresBoth = ['Love-All', 'Fifteen-All', 'Thirty-All', 'Deuce'];

if (typeof window === "undefined") {
    module.exports = TennisGame1;
};