input.onButtonPressed(Button.A, function () {
    p1_score += 1
    if (p1_score == 10) {
        basic.showString("S Wins")
        p1_score = 0
        p2_score = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("SS")
    basic.showNumber(p1_score)
    basic.showString("DS")
    basic.showNumber(p2_score)
})
/**
 * Scorer
 * 
 * - 2 players - 2 cups which can store points (variables)
 * 
 * - score increases by 1 - button press
 * 
 * - be able tell microbit who scored a point
 * 
 * - Tell score of both players - A+B pressing both buttons together
 * 
 * - if a player reaches 10 points he/she wins - if condition
 */
input.onButtonPressed(Button.B, function () {
    p2_score += 1
    if (p2_score == 10) {
        basic.showString("D Wins")
        p1_score = 0
        p2_score = 0
    }
})
let p2_score = 0
let p1_score = 0
p1_score = 0
p2_score = 0
basic.forever(function () {
	
})
