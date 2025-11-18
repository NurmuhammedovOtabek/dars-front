const tbodyUser = document.getElementById("tbody");
const tbodyPost = document.getElementById("tbodyP");
let isLoading = true;

if (isLoading) {
  tbodyUser.innerHTML = `
        <tr>
            <td colspan="2" style="text-align: center;">
                <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </td>
        </tr>
    `;
  tbodyPost.innerHTML = `
        <tr>
            <td colspan="2" style="text-align: center;">
                <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </td>
        </tr>
    `;
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    tbodyUser.innerHTML = "";
    isLoading = false;
    json.map((user) => {
      tbodyUser.innerHTML += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                </tr>
            `;
    });
  })
  .catch(() => {
    tbody.innerHTML = `
            <tr>
                <td colspan="2" style="text-align: center;">Error</td>
            </tr>
        `;
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((json) => {
    tbodyPost.innerHTML = "";
    isLoading = false;
    json.slice(0, 10).map((posts) => {
      tbodyPost.innerHTML += `
                <tr>
                    <td>${posts.userId}</td>
                    <td>${posts.title}</td>
                    <td>${posts.body}</td>
                </tr>
            `;
    });
  })
  .catch(() => {
    tbodyPost.innerHTML = `
            <tr>
                <td colspan="2" style="text-align: center;">Error</td>
            </tr>
        `;
  });
