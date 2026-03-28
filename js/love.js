const blk_pitn = {
        block1: [,, [cite: -1, 0], [cite: -1, -1]],
        block2: [,, [cite: -1, 0], [cite: 0, -1]],
        block3: [[cite: -1, 1],, [cite: -1, 0], [cite: -1, -1]],
        block4: [,, [cite: -1, 0], [cite: -1, -1]], /* 1 */
        block5: [[cite: -1, 1],, [cite: -1, 0], [cite: 0, -1]],
        block6: [[cite: 0, -1],, [cite: -1, 0], [cite: 1, -1]],
        block7: [[cite: -1, -1],, [cite: -1, 0],],
        block8: [[cite: -1, 1],, [cite: -1, 0], [cite: -1, -1]], /* 3 */
        block9: [[cite: 0, -1],, [cite: -1, 0],],
        block10: [[cite: -1, 1],, [cite: -1, 0],],
        block11: [,, [cite: -1, 0],], /* — */
        block12: [,, [cite: -1, 0], [cite: 0, -1]], /* 2 */
        block13: [,, [cite: -1, 0], [cite: -1, -1]], /* 1 */
        block14: [,, [cite: -1, 0],],
        block15: [[cite: 1, -1],, [cite: -1, 0],],
        block16: [[cite: -1, -1],, [cite: -1, 0],], /* 7 */
        block17: [,, [cite: -1, 0], [cite: 0, -1]], /* 2 */
        block18: [,, [cite: -1, 0], [cite: -1, -1]], /* 1 */
        block19: [[cite: 0, -1],, [cite: -1, 0],], /* 9 */
        block20: [[cite: 1, -1],, [cite: -1, 0],],
        block21: [,, [cite: -1, 0], [cite: -1, -1]], /* 1 */
        block22: [,, [cite: -1, 0],], /* 14 */
        block23: [,, [cite: 0, -1],]      /* | */
    },
    offset_pitn = {
        block1:,
        block2:,
        block3:,
        block4:,
        block5: [cite: 3, -1],
        block6:,
        block7:,
        block8: [cite: 1, -1],
        block9: [cite: 1, -3],
        block10:,
        block11:,
        block12:, 
        block13: [cite: -1, -4],
        block14: [cite: 0, -2],
        block15: [cite: -2, 4],
        block16: [cite: -2, 2],
        block17: [cite: -2, 0],
        block18: [cite: -3, -2],
        block19: [cite: -4, 0],
        block20: [cite: -3, 5],
        block21: [cite: -5, 3],
        block22: [cite: -4, 1],
        block23: [cite: -6, 1]   
    };

let blocks = document.getElementsByClassName("block"),
    block = blocks,
    love = document.getElementsByClassName("love"),
    timer = null,
    index = 0, 
    clone_block;    

block.style.top = "50%";
block.style.left = "50%";
block.style.margin = "-2
