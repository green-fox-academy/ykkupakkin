'use strict';

let TennisGame2 = function(player1Name, player2Name) {
    this.Player1Point = 0;
    this.Player2Point = 0;

    this.Player1Current = "";
    this.Player2Current = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.getScore = function() {
    let score = "";

    if (this.Player1Point === this.Player2Point && this.Player1Point < 3) {
        if (this.Player1Point === 0)
            score = "Love";
        if (this.Player1Point === 1)
            score = "Fifteen";
        if (this.Player1Point === 2)
            score = "Thirty";
        score += "-All";
    }
    if (this.Player1Point === this.Player2Point && this.Player1Point > 2)
        score = "Deuce";

    if (this.Player1Point > 0 && this.Player2Point === 0) {
        if (this.Player1Point === 1)
            this.Player1Current = "Fifteen";
        if (this.Player1Point === 2)
            this.Player1Current = "Thirty";
        if (this.Player1Point === 3)
            this.Player1Current = "Forty";

        this.Player2Current = "Love";
        score = this.Player1Current + "-" + this.Player2Current;
    }
    if (this.Player2Point > 0 && this.Player1Point === 0) {
        if (this.Player2Point === 1)
            this.Player2Current = "Fifteen";
        if (this.Player2Point === 2)
            this.Player2Current = "Thirty";
        if (this.Player2Point === 3)
            this.Player2Current = "Forty";

        this.Player1Current = "Love";
        score = this.Player1Current + "-" + this.Player2Current;
    }

    if (this.Player1Point > this.Player2Point && this.Player1Point < 4) {
        if (this.Player1Point === 2)
            this.Player1Current = "Thirty";
        if (this.Player1Point === 3)
            this.Player1Current = "Forty";
        if (this.Player2Point === 1)
            this.Player2Current = "Fifteen";
        if (this.Player2Point === 2)
            this.Player2Current = "Thirty";
        score = this.Player1Current + "-" + this.Player2Current;
    }
    if (this.Player2Point > this.Player1Point && this.Player2Point < 4) {
        if (this.Player2Point === 2)
            this.Player2Current = "Thirty";
        if (this.Player2Point === 3)
            this.Player2Current = "Forty";
        if (this.Player1Point === 1)
            this.Player1Current = "Fifteen";
        if (this.Player1Point === 2)
            this.Player1Current = "Thirty";
        score = this.Player1Current + "-" + this.Player2Current;
    }

    if (this.Player1Point > this.Player2Point && this.Player2Point >= 3) {
        score = "Advantage Player 1";
    }

    if (this.Player2Point > this.Player1Point && this.Player1Point >= 3) {
        score = "Advantage Player 2";
    }

    if (this.Player1Point >= 4 && this.Player2Point >= 0 && (this.P1point - this.Player2Point) >= 2) {
        score = "Win for Player 1";
    }
    if (this.Player2Point >= 4 && this.P1point >= 0 && (this.Player2Point - this.P1point) >= 2) {
        score = "Win for Player 2";
    }
    return score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    let i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    let i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.P1point++;
};

TennisGame2.prototype.P2Score = function() {
    this.Player2Point++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "Player 1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}