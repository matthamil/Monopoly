'use strict';

monopolyApp.factory("gameState", function() {
    // gameState Service
    //     Maintains the current game state and the current active player.
    //     Used in Controller announcementController.
    //
    // List of Game States:
    // rollDice:
    //     Current player can click the Roll Dice button.
    //
    // purchaseProperty:
    //     Current player has landed on an available property.
    //
    // extraDecisions:
    //     Current player can choose to make additional decisions before ending his or her turn.
    //
    // endOfTurn:
    //     Current player can decide to make additional decisions before ending his or her turn.
    //
    // buyHouses:
    //     Current player can choose to purchase houses on player-owned monopolies.
    //     This game state is available during the rollDice and endOfTurn states.
    //
    // mortgageProperty:
    //     Current player can choose to mortgage a player-owned property.
    //     This game state is available during the rollDice and endOfTurn states.
    //
    // communityChest:
    //     Current player has landed on a Community Chest space on the board.
    //     This game state is only available during the rollDice state.
    //
    // chance:
    //     Current player has landed on a Chance space on the board.
    //     This game state is only available during the rollDice state.

    var gameState = 'Test';
    var activePlayer = {name: 'Test'};

    return {
        gameState: gameState,
        activePlayer: activePlayer
    }

});

monopolyApp.service("boardService", function(gameState, $timeout){
    var board = [
        {
            name: "Go",
            type: "go",
            price: 200,
            players: []
        },
        {
            name: "Mediterranean Avenue",
            type: "property",
            color: "SaddleBrown",
            colorId: 1,
            price: 60,
            owned: false,
            ownedBy: "",
            mortgageValue: 30,
            mortgaged: false,
            rent: 2,
            monopoly: false,
            houses: 0,
            houseRent: [10, 30, 90, 160, 250],
            buildingCost: 50,
            players: [],
        },
        {
            name: "Community Chest",
            type: "communityChest",
            players: []
        },
        {
            name: "Baltic Avenue",
            type: "property",
            color: "SaddleBrown",
            colorId: 1,
            price: 60,
            owned: false,
            ownedBy: "",
            mortgageValue: 30,
            mortgaged: false,
            rent: 4,
            monopoly: false,
            houses: 0,
            houseRent: [20, 60, 180, 320, 450],
            buildingCost: 50,
            players: [],
        },
        {
            name: "Income Tax",
            type: "tax",
            price: 200,
            players: []
        },
        {
            name: "Reading Railroad",
            type: "railroad",
            colorId: 9,
            price: 200,
            rent: 25,
            owned: false,
            ownedBy: "",
            mortgageValue: 100,
            mortgaged: false,
            players: []
        },
        {
            name: "Oriental Avenue",
            type: "property",
            color: "SkyBlue",
            colorId: 2,
            price: 100,
            owned: false,
            ownedBy: "",
            mortgageValue: 50,
            mortgaged: false,
            rent: 6,
            monopoly: false,
            houses: 0,
            houseRent: [30, 90, 270, 400, 550],
            buildingCost: 50,
            players: []
        },
        {
            name: "Chance",
            type: "chance",
            players: []
        },
        {
            name: "Vermont Avenue",
            type: "property",
            color: "SkyBlue",
            colorId: 2,
            price: 100,
            owned: false,
            ownedBy: "",
            mortgageValue: 50,
            mortgaged: false,
            rent: 6,
            monopoly: false,
            houses: 0,
            houseRent: [30, 90, 270, 400, 550],
            buildingCost: 50,
            players: []
        },
        {
            name: "Connecticut Avenue",
            type: "property",
            color: "SkyBlue",
            colorId: 2,
            price: 120,
            owned: false,
            ownedBy: "",
            mortgageValue: 60,
            mortgaged: false,
            rent: 8,
            monopoly: false,
            houses: 0,
            houseRent: [40, 100, 300, 450, 600],
            buildingCost: 50,
            players: []
        },
        {
            name: "Just Visiting",
            type: "justVisiting",
            players: []
        },
        {
            name: "St. Charles Place",
            type: "property",
            color: "DarkOrchid",
            colorId: 3,
            price: 140,
            owned: false,
            ownedBy: "",
            mortgageValue: 70,
            mortgaged: false,
            rent: 10,
            monopoly: false,
            houses: 0,
            houseRent: [50, 150, 450, 625, 750],
            buildingCost: 100,
            players: []
        },
        {
            name: "Electric Company",
            type: "utility",
            colorId: 10,
            price: 150,
            owned: false,
            ownedBy: "",
            mortgageValue: 75,
            mortgaged: false,
            players: []
        },
        {
            name: "States Avenue",
            type: "property",
            color: "DarkOrchid",
            colorId: 3,
            price: 140,
            owned: false,
            ownedBy: "",
            mortgageValue: 70,
            mortgaged: false,
            rent: 10,
            monopoly: false,
            houses: 0,
            houseRent: [50, 150, 450, 625, 750],
            buildingCost: 100,
            players: []
        },
        {
            name: "Virginia Avenue",
            type: "property",
            color: "DarkOrchid",
            colorId: 3,
            price: 160,
            owned: false,
            ownedBy: "",
            mortgageValue: 80,
            mortgaged: false,
            rent: 12,
            monopoly: false,
            houses: 0,
            houseRent: [60, 180, 500, 700, 900],
            buildingCost: 100,
            players: []
        },
        {
            name: "Pennsylvania Railroad",
            type: "railroad",
            colorId: 9,
            price: 200,
            rent: 25,
            owned: false,
            ownedBy: "",
            mortgageValue: 100,
            mortgaged: false,
            players: []
        },
        {
            name: "St. James Place",
            type: "property",
            color: "orange",
            colorId: 4,
            price: 180,
            owned: false,
            ownedBy: "",
            mortgageValue: 90,
            mortgaged: false,
            rent: 14,
            monopoly: false,
            houses: 0,
            houseRent: [70, 200, 550, 750, 950],
            buildingCost: 100,
            players: []
        },
        {
            name: "Community Chest",
            type: "communityChest",
            players: []
        },
        {
            name: "Tennessee Avenue",
            type: "property",
            color: "orange",
            colorId: 4,
            price: 180,
            owned: false,
            ownedBy: "",
            mortgageValue: 90,
            mortgaged: false,
            rent: 14,
            monopoly: false,
            houses: 0,
            houseRent: [70, 200, 550, 750, 950],
            buildingCost: 100,
            players: []
        },
        {
            name: "New York Avenue",
            type: "property",
            color: "orange",
            colorId: 4,
            price: 200,
            owned: false,
            ownedBy: "",
            mortgageValue: 100,
            mortgaged: false,
            rent: 16,
            monopoly: false,
            houses: 0,
            houseRent: [80, 220, 600, 800, 1000],
            buildingCost: 100,
            players: []
        },
        {
            name: "Free Parking",
            type: "freeParking",
            players: []
        },
        {
            name: "Kentucky Avenue",
            type: "property",
            color: "red",
            colorId: 5,
            price: 220,
            owned: false,
            ownedBy: "",
            mortgageValue: 110,
            mortgaged: false,
            rent: 18,
            monopoly: false,
            houses: 0,
            houseRent: [90, 250, 700, 875, 1050],
            buildingCost: 150,
            players: []
        },
        {
            name: "Chance",
            type: "chance",
            players: []
        },
        {
            name: "Indiana Avenue",
            type: "property",
            color: "red",
            colorId: 5,
            price: 220,
            owned: false,
            ownedBy: "",
            mortgageValue: 110,
            mortgaged: false,
            rent: 18,
            monopoly: false,
            houses: 0,
            houseRent: [90, 250, 700, 875, 1050],
            buildingCost: 150,
            players: []
        },
        {
            name: "Illinois Avenue",
            type: "property",
            color: "red",
            colorId: 5,
            price: 240,
            owned: false,
            ownedBy: "",
            mortgageValue: 120,
            mortgaged: false,
            rent: 20,
            monopoly: false,
            houses: 0,
            houseRent: [100, 300, 750, 925, 1100],
            buildingCost: 150,
            players: []
        },
        {
            name: "B. & O. Railroad",
            type: "railroad",
            colorId: 9,
            price: 200,
            rent: 25,
            owned: false,
            ownedBy: "",
            mortgageValue: 100,
            mortgaged: false,
            players: []
        },
        {
            name: "Atlantic Avenue",
            type: "property",
            color: "yellow",
            colorId: 6,
            price: 260,
            owned: false,
            ownedBy: "",
            mortgageValue: 130,
            mortgaged: false,
            rent: 22,
            monopoly: false,
            houses: 0,
            houseRent: [110, 330, 800, 975, 1150],
            buildingCost: 150,
            players: []
        },
        {
            name: "Ventnor Avenue",
            type: "property",
            color: "yellow",
            colorId: 6,
            price: 260,
            owned: false,
            ownedBy: "",
            mortgageValue: 130,
            mortgaged: false,
            rent: 22,
            monopoly: false,
            houses: 0,
            houseRent: [110, 330, 800, 975, 1150],
            buildingCost: 150,
            players: []
        },
        {
            name: "Water Works",
            type: "utility",
            colorId: 10,
            price: 150,
            owned: false,
            ownedBy: "",
            mortgageValue: 75,
            mortgaged: false,
            players: []
        },
        {
            name: "Marvin Gardens",
            type: "property",
            color: "yellow",
            colorId: 6,
            price: 280,
            owned: false,
            ownedBy: "",
            mortgageValue: 140,
            mortgaged: false,
            rent: 24,
            monopoly: false,
            houses: 0,
            houseRent: [120, 360, 850, 1025, 1200],
            buildingCost: 150,
            players: []
        },
        {
            name: "Go to Jail",
            type: "goToJail",
            players: []
        },
        {
            name: "Pacific Avenue",
            type: "property",
            color: "green",
            colorId: 7,
            price: 300,
            owned: false,
            ownedBy: "",
            mortgageValue: 150,
            mortgaged: false,
            rent: 26,
            monopoly: false,
            houses: 0,
            houseRent: [130, 390, 900, 1100, 1275],
            buildingCost: 200,
            players: []
        },
        {
            name: "North Carolina Avenue",
            type: "property",
            color: "green",
            colorId: 7,
            price: 300,
            owned: false,
            ownedBy: "",
            mortgageValue: 150,
            mortgaged: false,
            rent: 26,
            monopoly: false,
            houses: 0,
            houseRent: [130, 390, 900, 1100, 1275],
            buildingCost: 200,
            players: []
        },
        {
            name: "Community Chest",
            type: "communityChest",
            players: []
        },
        {
            name: "Pennsylvania Avenue",
            type: "property",
            color: "green",
            colorId: 7,
            price: 320,
            owned: false,
            ownedBy: "",
            mortgageValue: 160,
            mortgaged: false,
            rent: 28,
            monopoly: false,
            houses: 0,
            houseRent: [150, 450, 1000, 1200, 1400],
            buildingCost: 200,
            players: []
        },
        {
            name: "Short Line Railroad",
            type: "railroad",
            colorId: 9,
            price: 200,
            rent: 25,
            owned: false,
            ownedBy: "",
            mortgageValue: 100,
            mortgaged: false,
            players: []
        },
        {
            name: "Chance",
            type: "chance",
            players: []
        },
        {
            name: "Park Place",
            type: "property",
            color: "blue",
            colorId: 8,
            price: 350,
            owned: false,
            ownedBy: "",
            mortgageValue: 175,
            mortgaged: false,
            rent: 35,
            monopoly: false,
            houses: 0,
            houseRent: [175, 500, 1100, 1300, 1500],
            buildingCost: 200,
            players: []
        },
        {
            name: "Income Tax",
            type: "tax",
            price: 100,
            players: []
        },
        {
            name: "Boardwalk",
            type: "property",
            color: "blue",
            colorId: 8,
            price: 400,
            owned: false,
            ownedBy: "",
            mortgageValue: 200,
            mortgaged: false,
            rent: 50,
            monopoly: false,
            houses: 0,
            houseRent: [200, 600, 1400, 1700, 2000],
            buildingCost: 200,
            players: []
        }
    ];

    function railroadMultiplier(playerName) {
        var rent = [25, 50, 100, 200];
        var railroadsOwned = 0;
        var player = {};
        for (var j = 0; j < Game.players.length; j++) {
            if (Game.players[j].name === playerName) {
                player = Game.players[j];
            }
        }
        for (var i = 0; i < player.properties.length; i++) {
            if (player.properties[i].type === "railroad") {
                railroadsOwned += 1;
            }
        }

        return rent[railroadsOwned - 1];
    }

    var communityChest = [
        {
            text: "Advance to Go (Collect $200).",
            activate: function(player) {
                Game.movePlayer(player, null, 0);
                Game.landOnTile(player);
            }
        },
        {
            text: "Bank error in your favor. Collect $200.",
            activate: function(player) {
                player.money += 200;
            }
        },
        {
            text: "Doctor's fees. Pay $50.",
            activate: function(player) {
                // TO DO: Bankrupt functionality
                Game.detectBankruptcy(player, 50);
            }
        },
        {
            text: "From sale of stock you get $50.",
            activate: function(player) {
                player.money += 50;
            }
        },
        {
            text: "Get out of Jail Free. This card may be kept until needed or sold.",
            activate: function(player) {
                player.inventory.push({type: 'Community Chest', text: 'Get out of Jail Free', id: 'getOutOfJail'})
            }
        },
        {
            text: "Go to Jail. Go directly to jail. Do not pass Go. Do not collect $200.",
            activate: function(player) {
                Game.movePlayer(player, null, 30);
                Game.landOnTile(player);
            }
        },
        {
            text: "Grand Opera Night. Collect $50 from every player for opening night seats.",
            activate: function(player) {
                for (var i = 0; i < Game.players.length; i++) {
                    // Check for self
                    if (Game.players[i] !== player) {
                        Game.detectBankruptcy(Game.players[i], 50);
                        player.money += 50;
                    }
                }
            }
        },
        {
            text: "Holiday Fund matures. Receive $100.",
            activate: function(player) {
                player.money += 100;
            }
        },
        {
            text: "Income tax refund. Collect $20.",
            activate: function(player) {
                player.money += 20;
            }
        },
        {
            text: "It is your birthday. Collect $10 from each player.",
            activate: function(player) {
                for (var i = 0; i < Game.players.length; i++) {
                    // Check for self
                    if (Game.players[i] !== player) {
                        Game.detectBankruptcy(Game.players[i], 10);
                        player.money += 10;
                    }
                }
            }
        },
        {
            text: "Life insurance matures. Collect $100.",
            activate: function(player) {
                player.money += 100;
            }
        },
        {
            text: "Pay hospital fees of $100.",
            activate: function(player) {
                // TO DO: Bankrupt functionality
                Game.detectBankruptcy(player, 100);
            }
        },
        {
            text: "Pay school fees of $150.",
            activate: function(player) {
                // TO DO: Bankrupt functionality
                Game.detectBankruptcy(player, 150);
            }
        },
        {
            text: "Receive $25 consultancy fee.",
            activate: function(player) {
                player.money += 25;
            }
        },
        {
            text: "You are assessed for street repairs. $40 per house. $115 per hotel.",
            activate: function(player) {
                var houseCount = 0;
                var hotelCount = 0;

                for (var i = 0; i < player.properties.length; i++) {
                    if (player.properties[i].houses > 0 && player.properties[i].houses < 5) {
                        houseCount += player.properties[i].houses;
                    }
                    else if (player.properties[i].houses === 5) {
                        hotelCount += 1;
                    }
                }

                var total = (houseCount * 40) + (hotelCount * 115);
                Game.detectBankruptcy(player, total);
            }
        },
        {
            text: "You have won second prize in a beauty contest. Collect $10.",
            activate: function(player) {
                player.money += 10;
            }
        },
        {
            text: "You inherit $100.",
            activate: function(player) {
                player.money += 100;
            }
        }
    ];
    var chance = [
        {
            text: "Advance to Go (Collect $200).",
            activate: function(player) {
                Game.movePlayer(player, null, 0);
                Game.landOnTile(player);
            }
        },
        {
            text: "Advance to Illinois Avenue. If you pass Go, collect $200.",
            activate: function(player) {
                if (player.currentIndex >= 24) {
                    player.money += 200;
                }

                Game.movePlayer(player, null, 24);
                Game.landOnTile(player);
            }
        },
        {
            text: "Advance to St. Charles Place. If you pass Go, collect $200.",
            activate: function(player) {
                if (player.currentIndex >= 11) {
                    player.money += 200;
                }

                Game.movePlayer(player, null, 11);
                Game.landOnTile(player);
            }
        },
        {
            text: "Advance token to nearest Utility. If unowned, you may buy it from the bank." +
                " If owned, throw dice and pay the owner a total ten times the amount thrown.",
            activate: function(player) {
                // Before Electric Company and after or on Water Works
                if (player.currentIndex < 12 || player.currentIndex >= 28) {
                    // If pass Go
                    if (player.currentIndex >= 28) {
                        player.money += 200;
                    }
                    Game.movePlayer(player, null, 12);
                }

                // Before Water Works and after or on Electric Company
                else if (player.currentIndex < 28 && player.currentIndex >= 12) {
                    Game.movePlayer(player, null, 28);
                }

                Game.landOnTile(player);
            }
        },
        {
            text: "Advance token to the nearest Railroad and pay owner twice the rental to which he/she is entitled." +
                " If Railroad is unowned you may buy it from the Bank.",
            activate: function(player) {
                // Between Short Line Railroad and Reading Railroad
                // Moves player to Reading Railroad
                if (player.currentIndex < 5 || player.currentIndex >= 35) {
                    if (player.currentIndex >= 35) {
                        player.money += 200;
                    }
                    Game.movePlayer(player, null, 5);
                    Game.landOnTile(player);
                }

                // Between Reading Railroad and Pennsylvania Railroad
                // Moves player to Pennsylvania Railroad
                if (player.currentIndex < 15 && player.currentIndex >= 5) {
                    Game.movePlayer(player, null, 15);
                    Game.landOnTile(player);
                }

                // Between Pennsylvania Railroad and B.&O. Railroad
                // Moves player to B.&O. Railroad
                if (player.currentIndex < 25 && player.currentIndex >= 15) {
                    Game.movePlayer(player, null, 25);
                    Game.landOnTile(player);
                }

                // Between B.&O. Railroad and Short Line Railroad
                // Moves player to Short Line Railroad
                if (player.currentIndex < 35 && player.currentIndex >= 25) {
                    Game.movePlayer(player, null, 35);
                    Game.landOnTile(player);
                }
            }
        },
        {
            text: "Advance token to the nearest Railroad and pay owner twice the rental to which he/she is entitled." +
            " If Railroad is unowned you may buy it from the Bank.",
            activate: function(player) {
                // Between Short Line Railroad and Reading Railroad
                // Moves player to Reading Railroad
                if (player.currentIndex < 5 || player.currentIndex >= 35) {
                    if (player.currentIndex >= 35) {
                        player.money += 200;
                    }
                    Game.movePlayer(player, null, 5);
                    Game.landOnTile(player, 2);
                }

                // Between Reading Railroad and Pennsylvania Railroad
                // Moves player to Pennsylvania Railroad
                if (player.currentIndex < 15 && player.currentIndex >= 5) {
                    Game.movePlayer(player, null, 15);
                    Game.landOnTile(player, 2);
                }

                // Between Pennsylvania Railroad and B.&O. Railroad
                // Moves player to B.&O. Railroad
                if (player.currentIndex < 25 && player.currentIndex >= 15) {
                    Game.movePlayer(player, null, 25);
                    Game.landOnTile(player, 2);
                }

                // Between B.&O. Railroad and Short Line Railroad
                // Moves player to Short Line Railroad
                if (player.currentIndex < 35 && player.currentIndex >= 25) {
                    Game.movePlayer(player, null, 35);
                    Game.landOnTile(player, 2);
                }
            }
        },
        {
            text: "Bank pays you dividend of $50.",
            activate: function(player) {
                player.money += 50;
            }
        },
        {
            text: "Get out of Jail Free. This card may be kept until needed, or traded/sold.",
            activate: function(player) {
                player.inventory.push({type: 'Chance', text: 'Get out of Jail Free', id: 'getOutOfJail'})
            }
        },
        {
            text: "Go Back 3 Spaces.",
            activate: function(player) {
                var newIndex = player.currentIndex - 3;
                Game.movePlayer(player, null, newIndex);
                Game.landOnTile(player);
            }
        },
        {
            text: "Go to Jail",
            activate: function(player) {
                Game.movePlayer(player, null, 30);
                Game.landOnTile(player);
            }
        },
        {
            text: "Make general repairs on all your property. For each house pay $25. For each hotel $100.",
            activate: function(player) {
                var houseCounter = 0;
                var hotelCounter = 0;
                for (var i = 0; i < player.properties.length; i++) {
                    if (player.properties[i].houses) {
                        if (player.properties[i].houses <= 4) {
                            houseCounter += player.properties[i].houses;
                        }
                        else if (player.properties[i].houses === 5) {
                            hotelCounter += 1;
                        }
                    }
                }

                var total = ((25 * houseCounter) + (100 * hotelCounter));

                Game.gameLog.push(player.name + " owns " + houseCounter + " homes and " + hotelCounter + " hotels. Paying " +
                    ((25 * houseCounter) + (100 * hotelCounter)) + ".");

                Game.detectBankruptcy(player, total);
            }
        },
        {
            text: "Pay poor tax of $15.",
            activate: function(player) {
                Game.detectBankruptcy(player, 15);
            }
        },
        {
            text: "Take a trip to Reading Railroad. If you pass Go, collect $200.",
            activate: function(player) {
                // If pass Go
                if (player.currentIndex >= 5) {
                    player.money += 200;
                }

                Game.movePlayer(player, null, 5);
                Game.landOnTile(player);
            }
        },
        {
            text: "Take a walk on the Boardwalk. Advance token to Boardwalk.",
            activate: function(player) {
                Game.movePlayer(player, null, 39);
                Game.landOnTile(player);
            }
        },
        {
            text: "You have been elected Chairman of the Board. Pay each player $50.",
            activate: function(player) {
                for (var i = 0; Game.players.length; i++) {
                    if (Game.players[i] !== player) {
                        Game.detectBankruptcy(player, 50);
                        Game.players[i].money += 50;
                    }
                }
            }
        },
        {
            text: "Your building loan matures. Collect $150.",
            activate: function(player) {
                player.money += 150;
            }
        },
        {
            text: "You have won a crossword competition. Collect $100.",
            activate: function(player) {
                player.money += 100;
            }
        }
    ];

    // Durstenfeld shuffle
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    // Shuffling the Community Chest and Chance decks
    communityChest = shuffle(communityChest);
    chance = shuffle(chance);

    function drawCard(deck) {
        var card = deck[0];
        deck.push(deck[0]);
        deck.shift();

        return card;
    }

    this.board = board;
    this.communityChest = communityChest;
    this.chance = chance;

    var Player = {
        init: function(name, icon, id) {
            this.name = name;
            this.money = 1500;
            this.icon = icon;
            this.activeTurn = false;
            this.jailed = false;
            this.properties = [];
            this.currentIndex = 0;
            this.currentTile = board[this.currentIndex];
            this.id = id;
            this.inventory = [];
            this.monopoliesOwned = 0;
            this.propertyInfo = [
                {
                    color: 'SaddleBrown',
                    owned: 0,
                    max: 2
                },
                {
                    color: 'SkyBlue',
                    owned: 0,
                    max: 3
                },
                {
                    color: 'DarkOrchid',
                    owned: 0,
                    max: 3
                },
                {
                    color: 'orange',
                    owned: 0,
                    max: 3
                },
                {
                    color: 'red',
                    owned: 0,
                    max: 3
                },
                {
                    color: 'yellow',
                    owned: 0,
                    max: 3
                },
                {
                    color: 'green',
                    owned: 0,
                    max: 3
                },
                {
                    color: 'blue',
                    owned: 0,
                    max: 2
                },
                {
                    type: 'railroad',
                    owned: 0,
                    max: 4
                },
                {
                    type: 'utility',
                    owned: 0,
                    max: 2
                }
            ];
        },
        getName: function() {
            return this.name;
        },
        getMoney: function() {
            return this.money;
        },
        getActiveTurn: function() {
            return this.activeTurn;
        },
        getJailed: function() {
            return this.jailed;
        },
        getProperties: function() {
            return this.properties;
        },
        getCurrentTile: function() {
            return this.currentTile;
        },
        getMortgaged: function() {
            return this.properties.map(function(property) {
                if (property.mortgaged) {
                    return property;
                }
            });
        },
        getPlayerId: function() {
            return this.id;
        },
        getInventory: function() {
            return this.inventory;
        },
        addPropertyRecord: function(property) {
            if (property.type === "property") {
                for (var i = 0; i < this.propertyInfo.length; i++) {
                    if (property.color === this.propertyInfo[i].color) {
                        this.propertyInfo[i].owned++;
                    }
                }
            }
            else if (property.type === "railroad") {
                this.propertyInfo[8].owned++;
            }
            else if (property.type === "utility") {
                this.propertyInfo[9].owned++;
            }

        },
        ownAMonopoly: function() {
            this.getMonopolies();
            return (this.monopoliesOwned > 0);
        },
        getMonopolyColors: function() {
            var monopolies = [];
            for (var i = 0; i < this.propertyInfo.length; i++) {
                if (this.propertyInfo[i].owned === this.propertyInfo.max) {
                    monopolies.push(this.propertyInfo[i].color);
                }
            }
            return monopolies;
        }
    };
    this.Player = Player;

    this.timeOutPromise = "test";

    this.timeOutCall = function() {
        this.timeOutPromise = $timeout(function() {
            console.log("Timeout completed.");
        }, 3000);
    };

    this.timeOutCancel = function() {
        $timeout.cancel(timeOutPromise);
    };

    var Game = {

        gameLog: ['BEGINNING GAME'],

        init: function(players) {
            this.players = [];

            // Initiating the players
            for (var i = 0; i < players.length; i++){
                var player = Object.create(Player);
                player.init(players[i].name, players[i].icon, players[i].id);
                board[0].players.push(player);
                this.players.push(player);
            }

            console.log("Starting players: " + this.players.map(function(player){
                    return player.name;
                }));

            Game.gameLog.push("Starting players: " + this.players.map(function(player){
                    return player.name;
                }));

            gameState.activePlayer = this.players[0];
            gameState.gameState = 'endOfTurn';
        },

        doubleCount: 0,

        // Updates the current player to the
        // player in the front of the this.players queue.
        setCurrentPlayer: function() {
            if (this.players[0].jailed) {
                // MISSING: Pay to get out of jail.
                // MISSING: Roll to get out of jail.
                console.log(this.players[0].name + " failed to get out of jail.");
                Game.gameLog.push(this.players[0].name + " failed to get out of jail.");
                this.players.push(this.players[0]);
                this.players.shift();
            }
            gameState.activePlayer = this.players[0];
            console.log(gameState.activePlayer);
            return this.players[0];
        },

        // Begins the turn for the current player
        takeTurn: function(doubleCount) {
            var currentPlayer = {};

            if (Game.doubleCount === 0) {
                if (gameState.gameState != 'endOfTurn' && doubleCount != 0) {
                    console.error('Wrong game state: ' + gameState.gameState);
                    return;
                }

                currentPlayer = this.setCurrentPlayer();
                console.log("Now " + currentPlayer.name + "'s turn.");
                Game.gameLog.push("Now " + currentPlayer.name + "'s turn.");
                gameState.gameState = 'rollDice';
            } else {
                currentPlayer = Game.players[0];
            }

            var diceRoll = [];

            while (Game.doubleCount < 3) {
                // Rolling two dice
                diceRoll = Game.rollDice();

                console.log(currentPlayer.name + " rolled: ", diceRoll);
                Game.gameLog.push(currentPlayer.name + " rolled: " + diceRoll);

                if (diceRoll[0] === diceRoll[1]) {
                    console.log("Rolled a double!");
                    Game.gameLog.push(currentPlayer.name + " rolled a double!");
                    doubleCount++;
                    Game.doubleCount++;
                }
                else {
                    Game.doubleCount = 0;
                }

                Game.movePlayer(currentPlayer, diceRoll);
                Game.landOnTile(currentPlayer);

                // Check for doubles
                if (diceRoll[0] === diceRoll[1]) {
                    // Check if player was jailed on first double roll
                    if (!currentPlayer.jailed) {
                        diceRoll = [];
                        if (Game.doubleCount === 3) {
                            console.log("Rolled 3 consecutive doubles. Going to jail!");
                            Game.gameLog.push(currentPlayer.name + " rolled 3 consecutive doubles. Going to jail!");
                            doubleCount = 0;
                            Game.doubleCount = 0;
                            currentPlayer.jailed = true;
                            currentPlayer.currentIndex = 10;
                        }
                    }
                }

                else {
                    // End of turn
                    Game.endTurn();
                    diceRoll = [];
                    doubleCount = 0;
                    Game.doubleCount = 0;
                    console.log("\n");
                    break;
                }
            }
        },

        endTurn: function() {
            if (gameState.gameState === 'rollDice') {
                console.error('Player must roll the dice.');
                return;
            }
            gameState.gameState = 'endOfTurn';
            Game.doubleCount = 0;
            Game.gameLog.push("End of " + this.players[0].name + "'s turn.");
            this.players[0].activeTurn = false;
            console.log("End of " + this.players[0].name + "'s turn.");
            console.log(this.players[0].name + "'s money: " + this.players[0].money);
            this.players.push(this.players[0]);
            this.players.shift();
            this.players[0].activeTurn = true;
            gameState.activePlayer = this.players[0];
            console.log(gameState.activePlayer);
            Game.gameLog.push("Begin " + this.players[0].name + "'s turn.");
            this.timeOutCancel();
        },

        landOnTile: function(player, rentMultiplier) {
            // Cache of current tile
            var tile = player.currentTile;
            Game.gameLog.push(player.name + " landed on " + tile.name + ".");

            rentMultiplier = rentMultiplier || 1;

            // Placeholder if a player lands on Community Chest or Chance
            var card = null;

            if (tile.type === "goToJail") {
                gameState.gameState = "endOfTurn";
                console.log("Go to jail!");
                player.jailed = true;
                player.currentIndex = 10;
                console.log(player.name + " went to jail.");
                Game.gameLog.push(player.name + " went to jail.");
                Game.endTurn();
            }

            if (tile.type === "property") {
                if (tile.owned) {
                    if (tile.houses === 0 || tile.houses == undefined && tile.type !== "utility") {
                        console.log(player.name + " landed on " + tile.ownedBy + "'s "
                            + tile.name + ". Paid " + tile.rent + ".");
                        Game.gameLog.push(player.name + " landed on " + tile.ownedBy + "'s "
                            + tile.name + ". Paid " + tile.rent + ".");
                        Game.detectBankruptcy(player, tile.rent * rentMultiplier);
                        Game.rollAgain();
                        this.timeOutCall();
                    }
                    else if (player.currentTile.houses > 0 && player.currentTile.houses < 5) {
                        console.log(player.name + " landed on " + tile.ownedBy + "'s"
                            + tile.name + " with " + tile.houses + " houses!");
                        Game.gameLog.push(player.name + " landed on " + tile.ownedBy + "'s"
                            + tile.name + " with " + tile.houses + " houses!");
                        Game.detectBankruptcy(player, tile.houseRent[tile.houses - 1] * rentMultiplier);
                        Game.rollAgain();
                        this.timeOutCall();
                    }
                }

                else if (tile.type === "utility") {
                    console.log("Missing: Calculate rent owned for utility.");
                    Game.gameLog.push("Missing: Calculate rent owned for utility.");
                    Game.rollAgain(Game.doubleCount);
                    this.timeOutCall();
                }

                else {
                    console.log("Testing: Purchase property options.");
                    gameState.gameState = "purchaseProperty";
                    this.timeOutCall();
                }

                Game.rollAgain();
            }

            else if (tile.type === "tax") {
                player.money -= tile.price;
                console.log(player.name + " paid " + tile.price + " for " + tile.name);
                Game.gameLog.push(player.name + " paid " + tile.price + " for " + tile.name);
                Game.rollAgain();
                this.timeOutCall();
            }

            else if (tile.type === "railroad") {
                if (tile.owned) {
                    Game.gameLog.push(player.name + " paid " + railroadMultiplier(tile.ownedBy) + " to " + tile.ownedBy);
                    Game.detectBankruptcy(player, railroadMultiplier(tile.ownedBy));
                    Game.rollAgain();
                }

                else {
                    console.log("Testing: Purchase property options.");
                    gameState.gameState = "purchaseProperty";
                    this.timeOutCall();
                }
            }

            else if (tile.type === "utility") {
                console.log("Missing: Utility purchase options.");
                Game.gameLog.push("Missing: Utility purchase options.");
                gameState.gameState = "purchaseProperty";
            }

            else if (tile.type === "communityChest") {
                gameState.gameState = "communityChest";
                console.log("Test: Community Chest deck.");
                card = drawCard(communityChest);
                Game.gameLog.push(card.text);
                card.activate(player);
                if (player.jailed === false) {
                    Game.rollAgain(Game.doubleCount);
                    this.timeOutCall();
                }
                this.timeOutCancel();
            }

            else if (tile.type === "chance") {
                gameState.gameState = "chance";
                console.log("Test: Chance deck.");
                card = drawCard(chance);
                Game.gameLog.push(card.text);
                card.activate(player);
                Game.rollAgain();
                this.timeOutCall();
            }

            else if (player.currentTile.type === "go") {
                player.money += 200;
                console.log(player.name + " landed on Go. Collect $200.");
                Game.gameLog.push(player.name + " collected $200.");
                Game.rollAgain();
                this.timeOutCall();
            }

            else if (player.currentTile.type === "justVisiting") {
                Game.rollAgain();
                this.timeOutCall();
            }

            else if (player.currentTile.type === "freeParking") {
                Game.rollAgain();
                this.timeOutCall();
            }

            Game.rollAgain();
        },

        rollAgain: function() {
            if (!Game.players[0].jailed) {
                if (Game.doubleCount > 0) {
                    console.log("Roll again.");
                    gameState.gameState = "rollDice";
                }
                else {
                    Game.doubleCount = 0;
                    gameState.gameState = "extraDecisions";
                }
            } else {
                Game.doubleCount = 0;
            }
        },

        // Moves a piece to the goal square.
        // Removes the piece from the initial square.
        movePlayer: function(player, diceRoll, tileIndex) {
            // Checking for optional parameter
            if (tileIndex) {
                Game.removePlayerFromCurrentTile(player);
                player.currentIndex = tileIndex;
                player.currentTile = board[player.currentIndex];
                // update player to player.currentTile.players
                board[player.currentIndex].players.push(player);
                console.log("Moved " + player.name + " to " + board[player.currentIndex].name);

                console.log(player.name + " is now on " + player.currentTile.name);
            }

            else if (diceRoll === null) {
                diceRoll = [0,0];
            }

            else if (Game.doubleCount === 3) {
                Game.removePlayerFromCurrentTile(player);
                player.currentIndex = 10;
                board[player.currentIndex].players.push(player);
                Game.gameLog(player.name + " rolled 3 doubles! Going to jail!");
            }

            else {
                console.log("Should I be reading this?");
                var total = diceRoll[0] + diceRoll[1];

                // remove player from player.currentTile.players
                Game.removePlayerFromCurrentTile(player);

                // Removed: movePlayer does not invoke property options
                // User landed on Go to Jail
                // if (player.currentIndex + total === 30) {
                //     console.log(player.name + " landed on Go to Jail.");
                //     console.log("Test: Removed " + player.name + " from " + board[player.currentIndex].name);
                //     player.currentIndex = 10;
                // }

                // User did not pass go
                if (player.currentIndex + total < 40) {
                    player.currentIndex += total;
                }

                // User did pass go
                else {
                    player.currentIndex += total - 40;
                    player.money += 200;
                    console.log(player.name + " passed Go! Collect $200!");
                    Game.gameLog.push(player.name + " passed Go! Collect $200!");
                }

                player.currentTile = board[player.currentIndex];
                // update player to player.currentTile.players
                board[player.currentIndex].players.push(player);
                console.log("Moved " + player.name + " to " + board[player.currentIndex].name);

                console.log(player.name + " is now on " + player.currentTile.name);
            }
        },

        removePlayerFromCurrentTile: function(player) {
            var playerIndex = board[player.currentIndex].players.indexOf(player);
            console.log("playerIndex = " + playerIndex);
            board[player.currentIndex].players.forEach(function(item) {
                console.log(item.name);
              });

            if (playerIndex > -1) {
              board[player.currentIndex].players.splice(playerIndex, 1);
              console.log("Test: Removed " + player.name + " from " + board[player.currentIndex].name);
              console.log("Test: Players remaining on tile: ");
              board[player.currentIndex].players.forEach(function(item) {
                  console.log(item.name);
              });
          }
        },

        purchaseProperty: function(player, decision) {
            var property = player.currentTile;

            if (property.owned) {
                console.error(property.name + ' is already owned by ' + property.ownedBy + '.');
                return;
            }

            if (decision) {
                console.log(property);
                if (player.money >= property.price) {
                    player.money -= property.price;
                    property.owned = true;
                    property.ownedBy = player.name;
                    player.properties.push(property);
                    player.addPropertyRecord(property);
                    Game.gameLog.push(player.name + " purchased " + property.name + " for $" + property.price + ".");
                    Game.rollAgain();
                }

                else if (player.money < property.price) {
                    console.log(player.name + " doesn't have enough money to buy " + property.name + ".");
                    Game.gameLog.push(player.name + " doesn't have enough money to buy " + property.name + ".");
                    Game.rollAgain();
                }
            }

            else {
                console.log(player.name + " did not buy " + property.name + ".");
                Game.gameLog.push(player.name + " did not buy " + property.name + ".");
                Game.rollAgain();
            }

            Game.rollAgain();
            this.timeOutCancel();
        },

        buyOutOfJail: function() {
            var jailedPlayer = Game.players[0];
            Game.detectBankruptcy(jailedPlayer, 50);
            Game.gameLog.push(jailedPlayer.name + " paid $50 for their freedom.");
            jailedPlayer.jailed = false;

            Game.movePlayer(jailedPlayer, null, 10);
        },

        rollOutOfJail: function() {
            var jailedPlayer = Game.players[0];
            Game.gameLog.push(jailedPlayer.name + " attempts to roll a double to get out of jail.");
            var attempt = Game.rollDice();

            if (attempt[0] === attempt[1]) {
                Game.gameLog.push(jailedPlayer.name + " rolled a double: " + attempt);
                jailedPlayer.jailed = false;
                Game.movePlayer(jailedPlayer, null, 10 + attempt[0] + attempt[1]);
                Game.landOnTile(jailedPlayer);
            }
            else {
                Game.gameLog.push(jailedPlayer.name + " failed to get out of jail: " + attempt);
            }
        },

        rollDie: function() {
            return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        },

        rollDice: function() {
            var diceRolls = [];
            for (var i = 0; i < 2; i++) {
                diceRolls.push(Game.rollDie());
            }

            return diceRolls;
        },

        // Inputs: player, payment
        // If player would be bankrupt && player has property
        //     Allow player to mortgage property
        // Else
        //     Forces the player to make the payment.
        detectBankruptcy: function(player, payment) {
            if (player.money - payment <= 0) {
                gameState.gameState = 'preventBankruptcy';
                Game.preventBankruptcy(player);
            }
            else {
                player.money -= payment;
            }
        },

        // TODO
        // Prevent Bankruptcy
        // Forces player to mortgage properties and sell houses
        // Otherwise, player loses.
        preventBankruptcy: function(player) {
            console.log("Missing: Prevent Bankruptcy for player " + player.name + ".");
        },

        buyHouse: function(monopolyColor) {
            // input: color of monopoly
            // function will simply return an array of properties of that color
            // from Game.board
            // must check that player owns them.

            var monopoly = board.map(function(property) {
                if (property.color === monopolyColor) {
                    console.log("Test:", property);
                    return property;
                }
            });

            function targetProperty() {
                var target = monopoly[0];
                for (var i = 0; i < monopoly.length; i++) {
                    if (target.houses > monopoly[i].houses) {
                        target = monopoly[i];
                    }
                }
                if (target.houses <= 4) {
                    return target;
                }
                else {
                    return false;
                }
            }

            if (Game.players[0].money <= monopoly[0].buildingCost) {
                Game.gameLog.push(Game.players[0].name + " can't afford to buy a house on that property.");
            }
            else if (!targetProperty()) {
                Game.gameLog.push("This monopoly already has hotels on each space!");
            }
            else {
                targetProperty().houses++;
                Game.gameLog.push(Game.players[0].name + " bought a house for " + targetProperty().name);
            }
        },

        // From Player, To Player, Money, Money Received, Selection, Selection Received
        trade: function (initPlayer, receiver, moneyOffered, moneyOfferedReceiver, selection, selectionReceiver){
            if (receiver == null) {

            }

            else {
                if (moneyOffered || moneyOfferedReceiver) {
                    initPlayer.money -= moneyOffered;
                    receiver.money -= moneyOfferedReceiver;
                    initPlayer.money += moneyOfferedReceiver;
                    receiver.money += moneyOffered;
                }

                // Properties in selection go to receiver
                if (selection.length > 0) {
                    for (var i = 0; i < selection.length; i++) {

                    }
                }
            }
        },

        tradeProperty: function (property, newOwner) {
            var previousOwner = property.ownedBy;
            property.ownedBy = newOwner.name;

        },


    // TODO
        // Currently broken
        gameOver: function() {
            console.log("Missing: gameOver() function not implemented.");
        }
    };
    this.Game = Game;

    this.Game.init([
        {name: 'Player One', icon: '', id: 1},
        {name: 'Player Two', icon: '', id: 2},
        {name: 'Player Three', icon: '', id: 3}
    ]);
});
