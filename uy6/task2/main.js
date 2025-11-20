const div = document.getElementById("div");
const btn = document.getElementById("btn");
let postsDate = [];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((json) => {
    postsDate = json;
    json.slice(0,25).map((data)=>{
        div.innerHTML += `        
        <div class="bg-slate-600 mb-3 rounded p-2 shadow w-[400px] h-[85px]" id = "btn2">
          <p>${data.id}</p>
          <p>${data.title}</p>
        </div>`;
    })
  });

btn.onclick = () => {
  div.classList.toggle("grid");
  div.classList.toggle("grid-cols-[auto_auto_auto]");
  div.classList.toggle("gap-4");
};

