const wordLength = document.querySelector('.wordLength');

window.onload = function main(){
  twemoji.parse(document.body);

  textArea.addEventListener('input',()=>{
    wordLength.innerHTML = Array.from(textArea.value).length;
  },false);
}

function reset(){
  if(window.confirm('入力内容がすべて削除されます。\nリセットしますか？')){
    textArea.value = '';
    wordLength.innerHTML = '0';
  }
}