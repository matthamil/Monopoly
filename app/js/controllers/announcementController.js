'use strict';

monopolyApp.controller('announcementController', function ($scope, gameState, boardService) {
    
    // Binds the active player to the $scope.
    $scope.activePlayer = gameState.activePlayer;

    // Manual watch to auto-update the value of activePlayer.
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
});