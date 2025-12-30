let count = 0;

const text = document.querySelector(".counting-text");
const add = document.querySelector(".counting-add");
const neg = document.querySelector(".counting-neg");
const reset = document.querySelector(".reset-button");

add.addEventListener("click", () => {
    count++;
    text.textContent = count;
});

neg.addEventListener("click", () => {
    if (count<=0){
        count = 0;
        alert("Number Invalid");
    } else {
        count--;
        text.textContent = count;
    }
});

reset.addEventListener("click", () => {
    count = 0;
    text.textContent = count;
});
