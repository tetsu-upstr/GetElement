// const submitButton = document.getElementById("submitBtn");

const formItemList = document.querySelectorAll(".item");
const formLabelList = document.querySelectorAll("label");

// クラス名を指定。ドット[ .]はつけない HTMLCollection 
const ItemList = document.getElementsByClassName("item"); 
for(let i = 0; i < ItemList.length; i++) {
    // 同じクラスの全ての入力値を取得
    console.log(ItemList.item(i).value);
}

// HTMLCollectionを配列に変換
const ItemArray = Array.prototype.slice.call(ItemList);
ItemArray.forEach(function(array) {
    console.log(array);
});


// console.log(formLabelList[1]);
// formLabelList.forEach(function (element) {
//     console.log(element.innerHTML);
// });

// formItemList.forEach(function (element) {
//     console.log(element.nodeValue);
//     console.log(element.textContent);
//     console.log(element.innerHTML);
// });


// submitButton.addEventListener("click", function() {
//     console.log("btn clicked");
// });

// const inputList = document.querySelectorAll("input");
// const checkBoxList = document.querySelectorAll("input[type='checkbox']");