var moveFlag = false;
function up(){
    var stack = [];
    for (var col = 1; col <= 4; col++ ){
        for(var row = 4; row >= 1; row-- ){
            if(getTile(row,col) != 0){
                var tile = {amount: parseInt(getTile(row,col)), row: row, col: col};
                stack.push( tile );
            }
        }
        var row = 1;
        var flag = false;
        var item1 = 0;
        var item2 = 0;
        while(stack.length > 0)
        {
            item2 = 0;
            item1 = stack.pop();
            //console.log('col:'+ col + ' item1 row:' + item1.row + 'item1 col:' + item1.col);
            if(stack.length > 0){
                item2 = stack.pop();
                //console.log('col:'+ col + ' item2 row:' + item2.row + 'item2 col:' + item2.col);
                flag = true;
            } else {
                moveTile(item1.row, item1.col,row++, col, true);
            }
            if (item1.amount == item2.amount && flag == true)
            {
                margeTiles(item1.row, item1.col, item2.row, item2.col, row++, col, item1.amount + item2.amount);
                flag = false;
            }
            else if (flag == true)
            {
                moveTile(item1.row, item1.col,row++, col, true);
                if (stack.length > 0)
                    stack.push({amount: item2.amount, row: item2.row, col: item2.col} );
                else
                    moveTile(item2.row, item2.col,row++, col, true);
                flag = false;

            }
        }
    }
    if(moveFlag == true)
        createRandomTile();
    moveFlag = false;
}

function down(){
    var stack = [];
    for (var col = 1; col <= 4; col++ ){
        for(var row = 1; row <= 4; row++ ){
            if(getTile(row,col) != 0){
                var tile = {amount: parseInt(getTile(row,col)), row: row, col: col};
                stack.push( tile );
            }
        }
        var row = 4;
        var flag = false;
        var item1 = 0;
        var item2 = 0;
        while(stack.length > 0)
        {
            item2 = 0;
            item1 = stack.pop();
            if(stack.length > 0){
                item2 = stack.pop();
                flag = true;
            } else {
                moveTile(item1.row, item1.col,row--, col, true);
            }
            if (item1.amount == item2.amount && flag == true)
            {
                margeTiles(item1.row, item1.col, item2.row, item2.col, row--, col, item1.amount + item2.amount);
                flag = false;
            }
            else if (flag == true)
            {
                moveTile(item1.row, item1.col,row--, col, true);
                if (stack.length > 0)
                    stack.push({amount: item2.amount, row: item2.row, col: item2.col} );
                else
                    moveTile(item2.row, item2.col,row--, col, true);
                flag = false;

            }
        }
    }
    if(moveFlag == true)
        createRandomTile();
    moveFlag = false;;
}


function left(){
    var stack = [];
    for (var row = 1; row <= 4; row++ ){
        for(var col = 4; col >= 1; col-- ){
            if(getTile(row,col) != 0){
                var tile = {amount: parseInt(getTile(row,col)), row: row, col: col};
                stack.push( tile );
            }
        }
        var col = 1;
        var flag = false;
        var item1 = 0;
        var item2 = 0;
        while(stack.length > 0)
        {
            item2 = 0;
            item1 = stack.pop();
            if(stack.length > 0){
                item2 = stack.pop();
                flag = true;
            } else {
                moveTile(item1.row, item1.col,row, col++, false);
            }
            if (item1.amount == item2.amount && flag == true)
            {
                margeTiles(item1.row, item1.col, item2.row, item2.col, row, col++, item1.amount + item2.amount);
                flag = false;
            }
            else if (flag == true)
            {
                moveTile(item1.row, item1.col,row, col++, false);
                if (stack.length > 0)
                    stack.push({amount: item2.amount, row: item2.row, col: item2.col} );
                else
                    moveTile(item2.row, item2.col,row, col++, false);
                flag = false;

            }
        }
    }
    if(moveFlag == true)
        createRandomTile();
    moveFlag = false;
}

function right(){
    var stack = [];
    for (var row = 1; row <= 4; row++ ){
        for(var col = 1; col <= 4; col++ ){
            if(getTile(row,col) != 0){
                var tile = {amount: parseInt(getTile(row,col)), row: row, col: col};
                stack.push( tile );
            }
        }
        var col = 4;
        var flag = false;
        var item1 = 0;
        var item2 = 0;
        while(stack.length > 0)
        {
            item2 = 0;
            item1 = stack.pop();
            if(stack.length > 0){
                item2 = stack.pop();
                flag = true;
            } else {
                moveTile(item1.row, item1.col,row, col--, false);
            }
            if (item1.amount == item2.amount && flag == true)
            {
                margeTiles(item1.row, item1.col, item2.row, item2.col, row, col--, item1.amount + item2.amount);
                flag = false;
            }
            else if (flag == true)
            {
                moveTile(item1.row, item1.col,row, col--, false);
                if (stack.length > 0)
                    stack.push({amount: item2.amount, row: item2.row, col: item2.col} );
                else
                    moveTile(item2.row, item2.col,row, col--, false);
                flag = false;

            }
        }
    }
    if(moveFlag == true)
        createRandomTile();
    moveFlag = false;
}

adjustTileSize();
function adjustTileSize(){
    var size = $(".tiles").height();
    $(".tile").height(size);
    $(".tile").width(size);
    $(".tile").css("line-height", size+"px");

}

function getTile(row, col){
    var value  = $(".position-"+row +"-"+ col +" .tile").html();
    if (value)
        return value;
    else
        return 0;
}


function addTile(row, col, amount){
    $(".overlay-tiles").append('<div class="tile-container tile-'+ amount +' position-'+ row +'-'+ col +'"><div class="tile">'+ amount +'</div></div>');
}

function createRandomTile(){

    setTimeout(function () {         // delay tiles movement until the last operation is over.

        var availableTiles = getAvailableTiles();
        var randomTileId = Math.floor(Math.random() * (availableTiles.length)) + 1;
        addTile(availableTiles[randomTileId-1][0],availableTiles[randomTileId-1][1], Math.random() < 0.8 ? 2 : 4);

    }, 200);


}


function moveTile(rowF, colF, rowT, colT, vertical) {
    if (vertical == true){
        if (rowF != rowT) {
            $(".position-" + rowF + "-" + colF + "").switchClass('position-' + rowF + '-' + colF + '', 'position-' + rowT + '-' + colT + '', 100);
            moveFlag = true;
        }
    }   else {
        if (colF != colT){
            $(".position-" + rowF + "-" + colF + "").switchClass('position-' + rowF + '-' + colF + '', 'position-' + rowT + '-' + colT + '', 100);
            moveFlag = true;
        }
    }
}


function margeTiles(row1, col1, row2, col2, row, col, value){

    $(".position-"+ row1 +"-"+ col1 +"").remove();
    $(".position-"+ row2 +"-"+ col2 +"").switchClass('position-'+row2+'-'+col2+'', 'position-'+row+'-'+col+'', 100, 'swing', function(){
        $(".position-"+ row +"-"+ col +"").switchClass('tile-'+ value/2 +'','tile-'+value+'', 10 );
        $(".position-"+ row +"-"+ col +" .tile").html(value);
    });
    moveFlag = true;

    var score = parseInt($('#score').html()) + value;
    $('#score').html(score);
    if( score > parseInt($('#best').html()))
        $('#best').html(score);

    if(value == 2048){
        $('#message-content').html('You Won!');
        $('.game-messages').show();
        $('.keep-going').show();
    }
}


