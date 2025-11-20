const div = document.getElementById("div");
const btn = document.getElementById("btn");
const main = document.getElementById("main");
const btn2 = document.getElementById("btn2");
let postsDate = [];

function nextDate(data, start = 1) {
  div.innerHTML = "";

  for (let i = 25 * (start - 1); 25 * start > i; i++) {
    div.innerHTML += `        
        <div class="bg-slate-600 mb-3 rounded p-2 shadow w-[500px] h-[80px]" id = "btn2">
          <p>${data[i].id}</p>
          <p>${data[i].title}</p>
        </div>`;
  }
}

function add() {
  btn2.className = "px-2 py-1 border-2 border-blue-800 rounded";
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((json) => {
    postsDate = json;
    nextDate(postsDate);
  });

btn.onclick = () => {
  let btnd = Number(btn.textContent);
  let btnd2 = Number(btn2.textContent);
  if (btnd == 2) {
    add();
  }
  nextDate(postsDate, btnd);
  if (postsDate.length / 25 > btnd) {
    btn.innerHTML = btnd + 1;
    btn2.innerHTML = btnd2 + 1;
  }
};

btn2.onclick = () => {
  let btnd = Number(btn2.textContent);
  let btnd2 = Number(btn.textContent);
  nextDate(postsDate, btnd);
  if (btnd != 1) {
    btn2.innerHTML = (btnd - 1);
    btn.innerHTML = (btnd2 - 1);
  }
};
