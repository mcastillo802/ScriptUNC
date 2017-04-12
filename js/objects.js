// Defining Rameses object
var rameses = {
    name: "Rameses",
    thought: "What a GDTBATH...",
    direction: "E",
    isColliding: false,
    isMoving: false,
    onScreen: true,
    speed: 250,
    pX: 2600,
    pY: 1650,
    bX: 52,
    bY: 33,
    move: function(x,y) {
        if(isNaN(x) || isNaN(x)) {
            throw new TypeError("move() only accepts legal numbers");
        }

        var moveX = x;
        var moveY = y;
        
        var speed = this.speed;
        
        $("#rameses").stop(true,false);
        $("#rameses").css("left", blockToPx(rameses.bX));
        $("#rameses").css("top", blockToPx(rameses.bY));

        if( moveX > 0 ) {
            $("#rameses").css("transform", "rotate(-90deg) scale(1.5)");
            rameses.direction = "E";
        } else if( moveX < 0 ) {
            $("#rameses").css("transform", "rotate(90deg) scale(1.5)");
            rameses.direction = "W";
        }

        $("#rameses_sprite").addClass("running");

        $("#rameses").animate({
            left: "+=" + (moveX * 50),
        }, speed * Math.abs(moveX), function() {

            if( moveY > 0 ) {
                $("#rameses").css("transform", "rotate(0deg) scale(1.5)");
                rameses.direction = "S";
            } else if( moveY < 0 ) {
                $("#rameses").css("transform", "rotate(180deg) scale(1.5)");
                rameses.direction = "N";
            }

            $("#rameses").animate({
                top: "+=" + (moveY * 50),
            }, speed * Math.abs(moveY), function() {
                $("#rameses_sprite").removeClass("running");
            })
        })
        return null;
    },
    moveRight: function(amount) {
        this.move(amount);
    },
    moveLeft: function(amount) {
        this.move(-1*amount);
    },
    moveUp: function(amount) {
        this.move(0,-1*amount);
    },
    moveDown: function(amount) {
        this.move(0,amount);
    },
}