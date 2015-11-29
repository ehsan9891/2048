
function moveUp(){
    $(".position-3-3").addClass('position-2-3',100,'swing',function(){
        $(".position-2-3").removeClass('position-3-3');
    });
}

function moveDown(){
    $(".position-1-3").addClass('position-3-3',100,'swing', function(){
        $(".position-3-3").removeClass('position-1-3');
    });

    $(".position-3-3").addClass('position-4-3',100,'swing',function(){
        $(".position-4-3").removeClass('position-3-3');
    });

}


function moveLeft(){

    $(".position-3-1").remove();
    $(".position-3-3").addClass('position-3-1',100,'swing', function(){
        $(".position-3-1").removeClass('position-3-3');
        $(".position-3-1").removeClass('tile-2');
        $(".position-3-1").addClass('tile-4');
        $(".position-3-1 .tile").html('4');
    });

    $(".position-4-3").addClass('position-4-1',100, 'swing', function(){
        $(".position-4-1").removeClass('position-4-3');
    });

}

function moveRight(){

    $(".position-3-3").addClass('position-3-4',100,'swing', function(){
        $(".position-3-4").removeClass('position-3-3');
    });

    $(".position-4-3").addClass('position-4-4',100, 'swing', function(){
        $(".position-4-4").removeClass('position-4-3');
    });
}

adjustTileSize();
function adjustTileSize(){
    var size = $(".tiles").height();
    $(".tile").height(size);
    $(".tile").width(size);
    $(".tile").css("line-height", size+"px");

}