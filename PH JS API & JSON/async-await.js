// Custon error for json 
function error() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.jon())
        .then(data => console.log(data))
        .catch(error => console.error('custom error happend', error))
}

// best way to link json
const anotherWay = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);

}