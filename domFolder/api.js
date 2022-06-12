// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {

//     let display = '';
//     data.map((item)=>{
//         display += `
//             <h4>TITLE: ${item.title}</h4>
//             <h4>BODY: ${item.body}</h4>

//         `
//         // Declare variable
//         const fetchApi = document.getElementById('fetchTitle')
//         fetchApi.innerHTML = display
//     })

//   })





// // ASYNC
//  async function showMan(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await response.json()
//     // console.log(data);

//     let display = '';
//     data.map((item)=>{
//         display += `
//             <h2>${item.title}</h2>
//         `
//         // Declare variable
//         const fetchTitle = document.getElementById('fetchTitle')
//         fetchTitle.innerHTML = display
//     })
// }

// showMan()
// https://randomuser.me/api/?results=5000

async function randomPeople(){
    const response = await fetch('https://randomuser.me/api/?results=50')
    const data = await response.json()
    console.log(data);

    let display = '';

    // Map through api
    data.results.map((item)=>{
        display += `
            <img src = ${item.picture.large} alt = ''/><br>
            <h3>${item.email}</h3>
        `

        // Declare variable
        const fetchTitle = document.getElementById('fetchTitle')
        fetchTitle.innerHTML = display
    })
}

randomPeople()
