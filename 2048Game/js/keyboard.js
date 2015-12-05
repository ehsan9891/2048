var busy = false;

$(document).keydown(function(e) {
    if(busy == false) {

        busy = true;  // delay tiles movement until the last operation is over.
        setTimeout(function () {
            busy = false;
        }, 200);

        switch (e.which) {
            case 37: // left
            case 65: // a
                left();
                break;

            case 38: // up
            case 87: // w
                up();
                break;

            case 39: // right
            case 68: // d
                right();
                break;

            case 40: // down
            case 83: // s
                down();
                break;

            default:
                return; // exit this handler for other keys
        }
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
    isGameOver();
});