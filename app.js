"use strict"

const quiz =[
  {
    question:"日本の国技は次の内どれか？",
    answers:[
      "サッカー",
      "野球",
      "相撲",
      "体操"
    ],
    correct:"相撲"
  }, 
  {
    question:"韓国の国技は次の内どれか？",
    answers:[
      "サッカー",
      "テコンドー",
      "野球",
      "卓球"
    ],
    correct:"テコンドー"    
  },
  {
    question:"アメリカの国技は次の内どれか？",
    answers:[
      "サッカー",
      "野球",
      "バレー",
      "フォーミュラーカー"
    ],
    correct:"野球"
  },
  {
    question:"ブラジルの国技は次の内どれか？",
    answers:[
      "柔道",
      "テニス",
      "カポエイラ",
      "バレーボール"
    ],
    correct:"カポエイラ"
  },
  {
    question:"フランスの国技は次の内どれか？",
    answers:[
      "ペタンク",
      "テニス",
      "ボウリング",
      "サッカー"
    ],
    correct:"ペタンク"
  },
  {
    question:"🇮🇹の国技は次の内どれか？",
    answers:[
      "クリケット",
      "テニス",
      "makePizza",
      "サッカー"
    ],
    correct:"サッカー"
  },
  {
    question:"🇦🇷の国技は次の内どれか？",
    answers:[
      "スケボー",
      "野球",
      "ビリヤード",
      "パト"
    ],
    correct:"パト"
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


// const question = "日本の国技は次の内どれか？";

// const answers = [
//   "サッカー",
//   "野球",
//   "相撲",
//   "体操"
// ];

// const correct = "相撲";

const $button = document.getElementsByTagName("button");
const buttonLength =$button.length;
document.getElementsByTagName("h2")[0].textContent = quiz[quizIndex].question;

// クイズの問題文　選択肢を定義
const setupQuiz = () => {
  document.getElementsByTagName("h2")[0].textContent =quiz[quizIndex].question;
  let buttonIndex = 0;
  
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  }else{
    window.alert("不正解！");
  }

  quizIndex++;
  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert("終了!あなたの正解数は"　+ score + "/" + quizLength + "です！");
    window.alert("FND13の皆様本当にありがとうございました！");
  }
}


let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++; 
}
 

// $button[0].addEventListener("click", (e) => {
//     clickHandler(e);
// });

// $button[1].addEventListener("click", (e) => {
//   clickHandler(e);
// });

// $button[2].addEventListener("click", (e) => {
//   clickHandler(e);
// });

// $button[3].addEventListener("click", (e) => {
//   clickHandler(e);
// });
