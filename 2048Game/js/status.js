
function getAvailableTiles(){
    var availableTiles = [];
    for (var row = 1; row <= 4; row++ ) {
        for (var col = 1; col <= 4; col++) {
            if (getTile(row,col) == 0){
                availableTiles.push([row,col]);
            }
        }
    }
    return availableTiles;
}


function isGameOver(){

    var moveOptions = 0;
    for (var row = 1; row <= 4; row++ ) {
        for (var col = 1; col <= 4; col++) {
            if(getTile(row,col) ==  getTile(row,col +1) || getTile(row,col) == getTile(row +1,col))
                moveOptions++;
        }
    }

    var availableTiles = getAvailableTiles();
    if( availableTiles.length == 0 && moveOptions == 0){
        $('#message-content').html('GAME OVER!');
        $('.game-messages').show();
    }
}

function keepGoing(){
    $('#message-content').html('');
    $('.game-messages').hide();
    $('.keep-going').hide();
}
