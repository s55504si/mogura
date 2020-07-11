let cnt = 10;
let sco = 0;
let mogType = "normal";
let flag = true;
let difficulty = prompt("難易度を1~3で入力して下さい。") * 1 + 1;
for (let i = 0; i < 1; ) {
  if (difficulty != 2 && difficulty != 3 && difficulty != 4) {
    difficulty = prompt("正しく入力して下さい。") * 1 + 1;
  } else {
    i = 1;
  }
}

let mog = new Array(4);
for (let i = 0; i < mog.length; i++) {
  mog[i] = new Array(4);
}

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    mog[i][j] = document.getElementById(i + "-" + j);
  }
}
const mogDis1 = mog[0][2].style.display;
const mogDis2 = mog[0][3].style.display;
const mogDis3 = mog[1][2].style.display;
const mogDis4 = mog[1][3].style.display;
const mogDis5 = mog[2][0].style.display;
const mogDis6 = mog[2][1].style.display;
const mogDis7 = mog[2][2].style.display;
const mogDis8 = mog[2][3].style.display;
const mogDis9 = mog[3][0].style.display;
const mogDis10 = mog[3][1].style.display;
const mogDis11 = mog[3][2].style.display;
const mogDis12 = mog[3][3].style.display;

if (difficulty == 2) {
  mog[0][2].style.display = "none";
  mog[0][3].style.display = "none";
  mog[1][2].style.display = "none";
  mog[1][3].style.display = "none";
  mog[2][0].style.display = "none";
  mog[2][1].style.display = "none";
  mog[2][2].style.display = "none";
  mog[2][3].style.display = "none";
  mog[3][0].style.display = "none";
  mog[3][1].style.display = "none";
  mog[3][2].style.display = "none";
  mog[3][3].style.display = "none";
} else if (difficulty == 3) {
  mog[0][2].style.display = "none";

  mog[1][2].style.display = "none";
  mog[2][3].style.display = "none";
  mog[3][0].style.display = "none";
  mog[3][1].style.display = "none";
  mog[3][2].style.display = "none";
  mog[3][3].style.display = "none";
}

let res = document.getElementById("result");
setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "スコア：" + sco + " | 時間：" + cnt + "秒";
  } else {
    flag = false;
    res.style.color = "red";
    res.textContent = "スコア：" + sco + " | 終了";
  }
}, 1000);

let mogX = Math.floor(Math.random() * difficulty);
let mogY = Math.floor(Math.random() * difficulty);
console.log(mogX + "-" + mogY);
for (let i = 0; i < mog.length; i++) {
  for (let j = 0; j < difficulty; j++) {
    mog[i][j].addEventListener("click", () => {
      if (mogX == i && mogY == j && flag) {
        if (mogType == "normal") {
          sco++;
        } else if (mogType == "minus") {
          sco--;
        } else if (mogType == "bonus") {
          sco += 3;
        }
        res.textContent = "スコア：" + sco + " | 時間：" + cnt + "秒";
        console.log(i + "-" + j + "正解!");
        if (mogType == "normal") {
          mog[mogX][mogY].src = "img/mogC.png";
        } else if (mogType == "minus") {
          mog[mogX][mogY].src = "img/minusB.png";
        } else if (mogType == "bonus") {
          mog[mogX][mogY].src = "img/bonusB.png";
        }
        setTimeout(() => {
          mog[mogX][mogY].src = "img/mogA.png";

          let random = Math.floor(Math.random() * 100 + 1);
          if (random <= 50) {
            mogType = "normal";
            mogX = Math.floor(Math.random() * difficulty);
            mogY = Math.floor(Math.random() * difficulty);
            mog[mogX][mogY].src = "img/mogB.png";
          } else if (random <= 60) {
            mogType = "bonus";
            mogX = Math.floor(Math.random() * difficulty);
            mogY = Math.floor(Math.random() * difficulty);
            mog[mogX][mogY].src = "img/bonus.png";
          } else {
            mogType = "minus";
            mogX = Math.floor(Math.random() * difficulty);
            mogY = Math.floor(Math.random() * difficulty);
            mog[mogX][mogY].src = "img/minus.png";
          }
        }, 250);
      }
    });
  }
}
mog[mogX][mogY].src = "img/mogB.png";
