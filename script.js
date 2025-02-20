// 获取元素
let questionText = document.getElementById('question');
let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let mainImage = document.getElementById('mainImage');
let confessionContainer = document.getElementById('confessionContainer');
let buttonsContainer = document.querySelector('.buttons');

// 固定名字（比如 "Yuki"）
let username = "Joe 佐伊";  // 你可以改成任何名字

// **跳过输入，直接显示表白内容**
document.addEventListener("DOMContentLoaded", function () {
    confessionContainer.style.display = 'block';  // 直接显示表白页面
    questionText.innerText = `可以成为我的恋人吗？${username}`; // 显示名字
});

// 记录点击 No 的次数
let clickCount = 0; 
const noTexts = [
    "？你认真的吗…",
    "要不再想想？",
    "不许选这个！ ",
    "我会很伤心…",
    "不行:(",
];
// No 按钮点击事件
noButton.addEventListener('click', function () {
    clickCount++;
    let yesSize = 1 + clickCount * 1.2;
    yesButton.style.transform = `scale(${yesSize})`;
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;
    let moveUp = clickCount * 25;
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }
    if (clickCount === 1) mainImage.src = "assets/images/shocked.png";
    if (clickCount === 2) mainImage.src = "assets/images/think.png";
    if (clickCount === 3) mainImage.src = "assets/images/angry.png";
    if (clickCount === 4) mainImage.src = "assets/images/crying.png";
    if (clickCount >= 5) mainImage.src = "assets/images/crying.png";
});

// Yes 按钮点击后，进入表白成功页面
const loveTest = (username) => `!!!喜欢你!! ( >᎑<)♡︎ᐝ  ${username}  ♡︎ᐝ(>᎑< )`;
yesButton.addEventListener('click', function () {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text"></h1>
            <img src="assets/images/hug.png" alt="拥抱" class="yes-image">
        </div>
    `;
    document.querySelector(".yes-text").innerText = loveTest(username);
    document.body.style.overflow = "hidden";
    document.querySelector('.yes-screen').classList.add('fade-in');
});
