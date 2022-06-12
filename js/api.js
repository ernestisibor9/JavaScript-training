// Fetch API

async function fetchText(){
    let response = await fetch('https://randomuser.me/api/?results=50');
    let data = await response.json();
    console.log(data);

    // Declare the variable
    let display = '';
    data.results.map((item)=>{ 
        display += ` 
            <img src = ${item.picture.large} alt='' />
            <h5>FULLNAME: ${item.name.title} ${item.name.last} ${item.name.first}</h5>
            <h5>EMAIL: ${item.email}</h5>
            <h5>GENDER: ${item.gender}</h5>
        `
        // Declare the parent variable
        const fetchData = document.getElementById('fetchData');

        // Append display into the parent div
        fetchData.innerHTML = display
    })
}





fetchText()


// async function fetchText() {
//     let response = await fetch('/readme.txt');
//     let data = await response.text();
//     console.log(data);
// }
