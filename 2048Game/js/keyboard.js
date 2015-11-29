
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        case 65: // a
            moveLeft();
            break;

        case 38: // up
        case 87: // w
            moveUp();
            break;

        case 39: // right
        case 68: // d
            moveRight();
            break;

        case 40: // down
        case 83: // s
            moveDown();
            break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});