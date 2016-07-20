'use strict';

monopolyApp.controller('tradeController', function ($scope, boardService) {
    
    $scope.game = boardService.Game;

    $scope.selectedTradee = $scope.game.players[1];
    
    $scope.tradeablePlayers = function() {
        var tradeable = [];
        for (var i = 0; i < $scope.game.players.length; i++) {
            if ($scope.game.players[0] != $scope.game.players[i]){
                tradeable.push($scope.game.players[i]);
            }
        }
        return tradeable;
    };

    $scope.properties = $scope.game.players[0].properties;
    
    $scope.showTrade = false;
    $scope.toggleTrade = function() {
        $scope.showTrade = !$scope.showTrade;
    };

    $scope.selection = [];
    $scope.selectionReceiver = [];

    // toggle selection for a given property by name
    $scope.toggleSelection = function toggleSelection(propName) {
        var idx = $scope.selection.indexOf(propName);

        // is currently selected
        if (idx > -1) {
            $scope.selection.splice(idx, 1);
        }

        // is newly selected
        else {
            $scope.selection.push(propName);
            $scope.selection.forEach(function(item) {
                console.log(item.name);
            });
        }
    };

    $scope.trade = {
        init: false,
        receive: false
    };

    $scope.moneyOffered = 0;
    $scope.moneyOfferedReceiver = 0;

    $scope.clearTrade = function() {
        $scope.moneyOffered = 0;
        $scope.moneyOfferedReceiver = 0;
        $scope.selection = [];
        $scope.selectionReceiver = [];
    };

    $scope.acceptTrade = function() {
        console.log($scope.game.players[0].name + " trading with " + $scope.selectedTradee.name);
        console.log("$ " + $scope.moneyOffered);
        console.log("$scope.selection: ");
        $scope.selection.forEach(function(item) {
            console.log(item);
        });
        console.log("$ " + $scope.moneyOfferedReceiver);
        console.log("$scope.selectionReceiver: ");
        $scope.selectionReceiver.forEach(function(item) {
            console.log(item);
        });

        // From Player, To Player, Money, Money Received, Selection, Selection Received
        boardService.trade($scope.game.players[0], $scope.selectedTradee, $scope.moneyOffered, $scope.moneyOfferedReceiver, $scope.selection, $scope.selectionReceiver);

        $scope.clearTrade();
        $scope.toggleTrade();
    };

});