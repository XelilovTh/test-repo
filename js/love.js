const blk_pitn = {
        block1: [[0, 1], [0, 0], [-1, 0], [-1, -1]],
        block2: [[0, 1], [0, 0], [-1, 0], [0, -1]],
        block3: [[-1, 1], [0, 0], [-1, 0], [-1, -1]],
        block4: [[0, 1], [0, 0], [-1, 0], [-1, -1]], 
        block5: [[-1, 1], [0, 0], [-1, 0], [0, -1]],
        block6: [[0, -1], [0, 0], [-1, 0], [1, -1]],
        block7: [[-1, -1], [0, 0], [-1, 0], [1, 0]],
        block8: [[-1, 1], [0, 0], [-1, 0], [-1, -1]], 
        block9: [[0, -1], [0, 0], [-1, 0], [1, 0]],
        block10: [[-1, 1], [0, 0], [-1, 0], [1, 0]],
        block11: [[2, 0], [0, 0], [-1, 0], [1, 0]], /* — */
        block12: [[0, 1], [0, 0], [-1, 0], [0, -1]], 
        block13: [[0, 1], [0, 0], [-1, 0], [-1, -1]], 
        block14: [[1, 1], [0, 0], [-1, 0], [1, 0]],
        block15: [[1, -1], [0, 0], [-1, 0], [1, 0]],
        block16: [[-1, -1], [0, 0], [-1, 0], [1, 0]], 
        block17: [[0, 1], [0, 0], [-1, 0], [0, -1]], 
        block18: [[0, 1], [0, 0], [-1, 0], [-1, -1]], 
        block19: [[0, -1], [0, 0], [-1, 0], [1, 0]], 
        block20: [[1, -1], [0, 0], [-1, 0], [1, 0]],
        block21: [[0, 1], [0, 0], [-1, 0], [-1, -1]], 
        block22: [[1, 1], [0, 0], [-1, 0], [1, 0]], 
        block23: [[0, 2], [0, 0], [0, -1], [0, 1]]      /* | */
    },
    offset_pitn = {
        block1: [5, 3],
        block2: [5, 1],
        block3: [3, 4],
        block4: [3, 2],
        block5: [3, -1],
        block6: [2, 5],
        block7: [2, 1],
        block8: [1, -1],
        block9: [1, -3],
        block10: [1, 2],
        block11: [0, 3],
        block12: [0, 0], 
        block13: [-1, -4],
        block14: [0, -2],
        block15: [-2, 4],
        block16: [-2, 2],
        block17: [-2, 0],
        block18: [-3, -2],
        block19: [-4, 0],
        block20: [-3, 5],
        block21: [-5, 3],
        block22: [-4, 1],
        block23: [-6, 1]   
    };

let blocks = document.getElementsByClassName("block"),
    block = blocks[0],
    love = document.getElementsByClassName("love")[0],
    timer = null,
    index = 0, 
    clone_block;    

// İlkin mərkəzləşdirmə CSS ilə idarə olunur, transform istifadə edirik.

function Next() {
    if (++index >= 24) {
        clearInterval(timer);
        Rise(); // Ürək formalaşdıqdan sonra yuxarı qalxır
        return;
    }

    block.style.visibility = "visible"; 

    // Blokların mövqeyini təyin edirik
    // CSS-də transform: translate(-50%, -50%) istifadə etdiyimiz üçün,
    // JS-də marjinləri deyil, birbaşa top/left dəyərlərini dəyişirik.
    let loveStyles = window.getComputedStyle(love);
    let loveWidth = parseFloat(loveStyles.width);
    let loveHeight = parseFloat(loveStyles.height);
    
    // Mərkəzdən ofsetləri hesablayırıq
    let centerX = loveWidth / 2;
    let centerY = loveHeight / 2;

    block.style.left = centerX + 40 * offset_pitn["block" + index][0] + "px";
    block.style.top = centerY - 40 * offset_pitn["block" + index][1] + "px";
    
    for (let i = 0; i < block.children.length; i++) {
        block.children[i].style.left = blk_pitn["block" + index][i][0] * -40 + "px";
        block.children[i].style.top = blk_pitn["block" + index][i][1] * -40 + "px";
    }

    clone_block = block.cloneNode(true);
    love.appendChild(clone_block);

    if (love.querySelectorAll('.block').length >= 24) {
        // Sonuncu bloku gizlədirik ki, mərkəzdəki ilkin sarı blok görünməsin
        block.style.display = "none";   
    }
}

// *** Redaktə olunub: Ürəyin yuxarı qalxması animasiyası ***
function Rise() {
    let timer2 = null,
        distance = 0;
    const target = 150, // Nə qədər yuxarı qalxsın (px)
        speed = 2; // Qalxma sürəti

    let love_top = parseFloat(window.getComputedStyle(love, null).top);

    timer2 = setInterval(() => {
        distance += speed;
        if (distance >= target) {
            clearInterval(timer2);
            // *** Qalxma bitdikdən sonra mətni yazmağa başlayırıq ***
            startTyping(); 
        }
        love.style.top = (love_top - distance) + "px";
    }, 20);
}

// *** Yeni Funksiya: "Səni çox sevirəm" yazısının animasiyası ***
function startTyping() {
    const text = "Səni çox sevirəm";
    const textElement = document.getElementById("loveText");
    let charIndex = 0;
    const typeSpeed = 150; // Hər hərf arası milisaniyə

    function type() {
        if (charIndex < text.length) {
            textElement.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, typeSpeed);
        }
    }
    type(); // Animasiyanı başlat
}

window.onload = function () {
    // 12 saniyəlik giriş animasiyasından sonra (footer xəttləri)
    setTimeout(() => {
        timer = setInterval(() => {
            Next();
        }, 300); // Hər blokun görünmə sürəti
    }, 12000); // 12 saniyə gözlə
};
