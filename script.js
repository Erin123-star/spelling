let radical = '氵';  // 偏旁
let score = 0;

// 示例，待引入更多
const dictionary = {
    '氵': ['木', '日', '口'], // 组成字：沐, 汩, 
    // 其他偏旁可以添加到这里
};

// 更新分数显示
function updateScore() {
    document.getElementById('score').innerText = `分数: ${score}`;
}

// 给每个滚动部首添加点击事件（支持触屏设备）
document.querySelectorAll('.character').forEach(char => {
    char.addEventListener('click', () => {
        let selectedChar = char.innerText;

        // 判断是否能组成有效汉字
        if (dictionary[radical].includes(selectedChar)) {
            score++; // 得分
        } else {
            score--; // 扣分
        }
        updateScore(); // 更新分数显示
    });
});

// 让部首滚动
let scroller = document.getElementById('scroller');
function scrollCharacters() {
    scroller.scrollLeft += 2; // 可以根据需要调整速度
    if (scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth) {
        scroller.scrollLeft = 0; // 循环滚动
    }
}

setInterval(scrollCharacters, 30); // 每30ms滚动一次
