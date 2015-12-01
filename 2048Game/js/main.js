
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
    createRandomTile();
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
    createRandomTile();
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
    createRandomTile();
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
    createRandomTile();
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

createRandomTile();
createRandomTile();
function createRandomTile(){

    var tiles = [[1,1],[1,2],[1,3],[1,4],[2,1],[2,2],[2,3],[2,4],[3,1],[3,2],[3,3],[3,4],[4,1],[4,2],[4,3],[4,4]];
    id = Math.floor(Math.random() * (16)) + 1;
    tile = tiles[id-1];
    if (getTile(tile[0],tile[1]) == 0){
        addTile(tile[0],tile[1],2);
        return;
    } else {
        createRandomTile();
    }

}


function moveTile(rowF, colF, rowT, colT, vertical) {
    if (vertical == true){
        if (rowF != rowT)
            $(".position-" + rowF + "-" + colF + "").switchClass('position-' + rowF + '-' + colF + '', 'position-' + rowT + '-' + colT + '', 100);
    }   else   {
        if (colF != colT)
            $(".position-" + rowF + "-" + colF + "").switchClass('position-' + rowF + '-' + colF + '', 'position-' + rowT + '-' + colT + '', 100);
    }
}


function margeTiles(row1, col1, row2, col2, row, col, value){

    $(".position-"+ row1 +"-"+ col1 +"").remove();
    $(".position-"+ row2 +"-"+ col2 +"").switchClass('position-'+row2+'-'+col2+'', 'position-'+row+'-'+col+'', 100, 'swing', function(){
        $(".position-"+ row +"-"+ col +"").switchClass('tile-'+ value/2 +'','tile-'+value+'',10,"easeInOutQuad" );
        $(".position-"+ row +"-"+ col +" .tile").html(value);
    });
}


