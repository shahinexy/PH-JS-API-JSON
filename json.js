function data() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => personData(json))
}

const ul = document.getElementById('person');
function personData(datas){
    for(const data of datas){
        console.log(data.username);
        const li = document.createElement('li');
        li.innerText = data.username;
        ul.appendChild(li)
    }
}