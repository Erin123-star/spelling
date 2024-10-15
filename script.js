let radical = '氵';  // 偏旁
let score = 0;

// 示例，待引入更多
const dictionary = {
    '氵': ['木', '日', '口'], // 组成字：水木（水）, 水日（汤）, 水口（河）
    // 其他偏旁可以添加到这里
};

// 给每个滚动部首添加点击事件
document.querySelectorAll('.character').forEach(char => {
    char.addEventListener('click', () => {
        let selectedChar = char.innerText;

        if (dictionary[radical].includes(selectedChar)) {
            score++;
            document.getElementById('score').innerText = `分数: ${score}`;
        } else {
            alert('无法组成有效汉字！');
        }
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
