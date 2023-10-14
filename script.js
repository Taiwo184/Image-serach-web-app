const accessKey = 'xQ6kMVS1j3-WKEHUIORbDbQ8nOt9ZaHfae1qcedX2bk'


const Container = document.getElementById("input1");
const inputArea = document.querySelector("input");
const submitBtn = document.getElementById("btn");
const showBtn = document.querySelector("button")
const imageSearch = document.getElementById("images-search")


inputData = ""
let page = 1;
let api

// const fetchApi = () =>{
//     api =`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&cleint_id=${accessKey}`

//     const response = await fetch(api)
//     const data = await response.json()
//     const results = data.results
//     if (page === 1){
//         searchImage.innerHTML = ""
//     }
//     // fetch (api).then((response) => response.json())
//     // .then((result) => result(result));
// }

async function searchImage(){
    inputData = inputArea.value;
    const url =`https://api.unsplash.com/search/photos/?page=${page}&query=${inputData}client_id=${accessKey}`;

    const response = await fetch(url)
    const data = await response.json()
    const results = data.results
    if (page === 1){
        searchImage.innerHTML = ""
    }
    // inputData = inputArea.value;
    // fetchApi();

    results.map((result) => {
        const imgCont = document.createElement('div');
        imgCont.classList.add("image")
        const picture = document.createElement("img");
        picture.src = result.urls.small
        picture.alt = result.alt_description
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = ".blank";
        imageLink.textContent = result.alt_description


        imgCont.appendChild(picture);
        imgCont.appendChild(imageLink);
        imageSearch.appendChild(picture);

    })

    if(page === 1){ 
        submitBtn.style.display = 'block'
    }
}

submitBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    searchImage();
    inputData = ""
    console.log("it is working")
})

showBtn.addEventListener("click", (e) =>{
    searchImage()
})





















// const Container = document.getElementById("input1")
// const inputArea = document.querySelector(".input");
// const searchBtn = document.getElementById("btn");
// const submitBtn = document.querySelector("button")
// const imageSearch = document.getElementById("images-search")
// searchBtn.addEventListener("click", )

// let inputData = ""
// let page = 1;
//  let api;

// function createImage (){
//     inputData = inputArea.value;
//     fetchApi()

//     result.map((result) =>{ //attaching the generated data from the result to the created image-search existing
//         const imageCont = document.createElement('div')
//         imageCont.classList.add('image');
//         const picture = document.createElement('img')
//         picture.src = result.src.small;
//         picture.alt = result.alt;
//         const imageLink = document.createElement('a');
//         imageLink.href = result.links.html;
//         imageLink.target = "_blank";
//         imageLink.textContent = result.alt
    
//         //appending the generated child div to the parent div
//         imageCont.appendChild(picture);
//         imageCont.appendChild(imageLink);
//         imageSearch.appendChild(imageCont);
    
//     });
// }
// const fetchApi = () => {
//      api = ``
//      fetch(api).then((response) => response.json())
//      .then((data) => result(data));
// }