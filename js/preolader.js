window.addEventListener("load",()=>{
    const loader_tag = document.querySelector(".preolader");
    setTimeout(()=>{loader_tag.classList.add("preolader--hidden")},200);
    // loader_tag.addEventListener("transitionend",()=>{document.body.removeChild(loader_tag)});
})

const loading_effect= ()=>{
    const loader_tag = document.querySelector(".preolader");
    loader_tag.classList.remove("preolader--hidden");
    setTimeout(()=>{loader_tag.classList.add("preolader--hidden")},800);
};
