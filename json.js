function data() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => personData(json))
}

const ul = document.getElementById('person');
function personData(datas){
    for(const data of datas){
        const li = document.createElement('li');
        li.innerText = data.username;
        ul.appendChild(li)
    }
}

function post() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => postData(json))
}

function postData(posts){
    const divContaier = document.getElementById('post_container');
    for(const post of posts){
        const div = document.createElement('div')
        div.classList.add('post_style');
        div.innerHTML =    `
        <h1>Person ID: ${post.id}</h1>
        <h2>Post Title: ${post.title}</h2>
        <p>Post Description: ${post.body}</p>
        `
        divContaier.appendChild(div);
    }
}