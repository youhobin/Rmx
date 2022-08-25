const number = parseInt(prompt("몇명이 참가하나요?"));
const yesOrNo = confirm("확인이나 취소를 눌러보세요");

const $order = document.getElementById("order");
const $word = document.getElementById("word");
const textInput = document.getElementById("text");
const $button = document.querySelector("button");
let word;   // 제시어
let newWord;  //새로 입력한 단어

function onClickButton() {
    if (!word || word[word.length -1] === newWord[0]) {//제시어가 비어있으면
        word = newWord;
        $word.textContent = word;
        textInput.value = "";
        const order = Number($order.textContent); //현재순서
        if (order + 1 > number) {
            $order.textContent = 1;
        } else {
            $order.textContent = order + 1;
        }
        textInput.focus();
    } else {    //비어있지 않다면
            alert('올바르지않은 단어입니다.')
        }
    textInput.value = "";
    textInput.focus();
};

function textWrite(event) {
    newWord = event.target.value;

};

$button.addEventListener("click", onClickButton);
textInput.addEventListener("input", textWrite);