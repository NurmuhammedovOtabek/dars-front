const div = document.getElementById("wrapper");
const user = document.getElementById("wrapper_user");
let isLoading = true;

if (isLoading) {
  div.innerHTML = `
        <tr>
            <td colspan="2" style="text-align: center;">
                <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </td>
        </tr>
    `;
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((json) => {
    div.innerHTML = "";
    isLoading = false;
    json.slice(0, 8).map((posts) => {
      div.innerHTML += `
               <div>
                <p>userId: ${posts.userId}</p>
                <p>title: ${posts.title}</p>
                <p>body: ${posts.body}</p>
            </div>
            `;
    });
  })
  .catch(() => {
    div.innerHTML = `
            <tr>
                <td colspan="2" style="text-align: center;">Error</td>
            </tr>
        `;
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    user.innerHTML = "";
    isLoading = false;
    json.slice(0, 8).map((users) => {
      user.innerHTML += `
               <div>
                <p>name: ${users.name}</p>
                <p>username: ${users.username}</p>
                <p>email: ${users.email}</p>
                <p>street: ${users.street}</p>
                <p>city: ${users.city}</p>
            </div>
            `;
    });
  })
  .catch(() => {
    user.innerHTML = `
            <tr>
                <td colspan="2" style="text-align: center;">Error</td>
            </tr>
        `;
  });
