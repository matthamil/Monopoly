'use strict';

monopolyApp.controller('boardController', function ($scope, boardService, $sce, $timeout, gameState) {

    $scope.board = boardService.board;

    $scope.game = boardService.Game;

    // Dynamic Property Popover:
    //     Using UI-Bootstrap to display a popup when hovering over the name of a property.

    $scope.setPopover = function(propertyIndex) {
        $scope.hoverProperty = $scope.board[propertyIndex];
        $scope.htmlPropertyPopover = $sce.trustAsHtml(
            '<div class="title-deed">' +
                '<div style="background-color:' + $scope.hoverProperty.color + '; padding: 2px 5px 0 5px; min-width: 175px">' +
                    '<p class="title-deed-white" style="font-size: .5em">TITLE DEED</p>' +
                    '<p class="title-deed-white">' + $scope.hoverProperty.name.toUpperCase() + '</p>' +
                '</div>' +
                '<div>RENT $' + $scope.hoverProperty.rent + '.</div>' +
                '<div style="width: 80%; margin: 0 auto">' +
                    '<div style="float:left;">With 1 House</div>' + '<div style="float:right;">$' + $scope.hoverProperty.houseRent[0] + '.</div>' +
                    '<div style="float:left;">With 2 Houses</div>' + '<div style="float:right;">' + $scope.hoverProperty.houseRent[1] + '.</div>' +
                    '<div style="float:left;">With 3 Houses</div>' + '<div style="float:right;">' + $scope.hoverProperty.houseRent[2] + '.</div>' +
                    '<div style="float:left;">With 4 Houses</div>' + '<div style="float:right;">' + $scope.hoverProperty.houseRent[3] + '.</div>' +
                    '<div style="clear: both">' + 'With HOTEL $' + $scope.hoverProperty.houseRent[4] + '.</div>' +
            canBuyProperty($scope.hoverProperty) + '</div>' +
            '</div>'
        );
    };

    // Helper Function for setPopover():
    //     Returns a string containing the availability of the property.
    function canBuyProperty(property) {
        if (property.owned) {
            return '<div style="background-color:Firebrick;padding:2px 0; color: #ffffff;; border-radius:10px;margin-top:10px;"><strong>'+property.ownedBy+'</strong><br/>';
        }

        else {
            return '<div style="background-color:greenyellow;padding:2px 0; color:#353535; border-radius:10px;margin-top:10px;"><strong>FOR SALE</strong><br/>';
        }
    }

    // Binds the active player to the $scope.
    $scope.activePlayer = gameState.activePlayer;

    // Manual watch to auto-update the value of activePlayer.
    // Not sure if need...
    $scope.$watch(
        function() { return gameState.activePlayer; },

        function(newActivePlayer) {
            $scope.activePlayer = newActivePlayer;
        }
    );

    // Binds the active game state to the $scope.
    $scope.gameState = gameState.gameState;

    // Manual watch to auto-update the value of gameState.
    $scope.$watch(
        function() { return gameState.gameState; },

        function(newGameState) {
            $scope.gameState = newGameState;
        }
    );

    $scope.showPurchaseOptions = function() {
        return $scope.gameState === 'purchaseProperty';
    };

    $scope.purchaseProperty = function(gameState) {
        if ($scope.gameState == "purchaseProperty") {
            return $scope.game.purchaseProperty($scope.activePlayer, true);
        }
    };
    
    $scope.passProperty = function(gameState) {
        if ($scope.gameState == "purchaseProperty") {
            $scope.game.purchaseProperty($scope.activePlayer, false);
        }
    };

    // Toggles disabled class on dice roll button
    $scope.diceRollDisabled = function() {
        if (gameState.gameState !== "endOfTurn") {
            return "disabled";
        }
    };

    // Toggles disabled class on End Turn button
    $scope.endTurnDisabled = function() {
        if (gameState.gameState !== "rollDice" && gameState.gameState !== "purchaseProperty" &&
            gameState.gameState !== "extraDecisions" && (gameState.gameState !== "chance"
            || gameState.gameState !== "communityChest")) {
            return "disabled";
        }
    };

    $scope.gameLog = boardService.Game.gameLog;

    // Manual watch to auto-update the value of gameLog.
    // Not sure if need
    // $scope.$watch(
    //     function() { return boardService.Game.gameLog; },
    //
    //     function(newLog) {
    //         $scope.gameLog = newLog;
    //     }
    // );

    $scope.$watch('gameLog', function(newValue, oldValue) {
        if (newValue === oldValue) { return; }
        $scope.gameLog = newValue;
    }, true);

    // doubleCount for debugging purposes
    $scope.doubleCount = boardService.Game.doubleCount;

    // Manual watch to auto-update the value of gameLog.
    $scope.$watch(
        function() { return boardService.Game.doubleCount; },

        function(newDC) {
            $scope.doubleCount = newDC;
        }
    );

    $scope.buyOutOfJail = function() {
        return boardService.Game.buyOutOfJail()
    };

    $scope.rollOutOfJail = function () {
        return boardService.Game.rollOutOfJail();
    };

    $scope.playerMonopolies = function () {
        return boardService.Game.players[0].getMonopolyColors();
    };

    $scope.buyHouse = function(monopolyColor) {
        console.log("monopolyColor variable in controller: " + monopolyColor);
        return $scope.game.buyHouse(monopolyColor);
    };
});

