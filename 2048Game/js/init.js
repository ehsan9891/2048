newGame();
function newGame(){
    $('#message-content').html('');
    $('.game-messages').hide();
    $('.keep-going').hide();
    $('.overlay-tiles').html('');
    $('#score').html(0);

    createRandomTile();
    createRandomTile();
}

