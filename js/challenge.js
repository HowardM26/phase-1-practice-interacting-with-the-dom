const counter = document.getElementById("counter");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plud");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const likes = document.querySelector(".likes");
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("list");
let count = 0;
let paused = false;

// Event Listeners //

plusButton.addEventListener("click", incrementcounter);
minusButton.addEventListener("click", decrementCounter);
heartButton.addEventListener("click", addLike);
commentForm.addEventListener("click", addComment);
pauseButton.addEventListener("click", function(){
    paused = !paused;
    if (paused) {
        pauseCounter();
    } else {
        startCounter();
    }
});

// functions //

//starts counter to count state//
function counterValue() {
    counter.innerText = count;
}

//runs counter every second// 
function startCounter() {
    intervalID = setInterval(incrementcounter, 1000);
}

// pauses counter //
function pauseCounter() {
    clearInterval(intervalID);
}

// increases counter by 1 // 
function incrementcounter() {
    count++;
    counterValue;
}

// decreases counter by 1 // 
function decrementCounter() {
    count--;
    counterValue();
}

// like //
function addLike() {
    const li = document.createElement("li");
    li.innerText = `${count} has been liked`;
    likes.appendChild(li);
}

// appends comment // 
function addComment(e) {
    e.preventDefault();
    const p = document.createElement("p");
    p.innerText = commentInput.value;
    commentList.appendChild(p);
}

startCounter();