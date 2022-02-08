let parent = document.getElementById('news')
console.log(parent)
var main,title,src,img;
fetch('/news').then(async function(res){
    main = await res.json()
    main.forEach(element => {
        console.log(element.title)
        title = element.title
        img  = element.urlToImage
        src  = element.url
        newsApend(title,img,src)
    });
})
function newsApend(title,img,src){
    let news_section = document.createElement('div')
    news_section.className = "card mx-3 my-3"
    news_section.style = "width: 18rem;"
    news_section.innerHTML = `<img id="img-src" src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 id="news-title" class="card-title">${title}</h5>
    <a id="src" href="${src}" class="btn btn-success">Read More...</a></div>`
    parent.appendChild(news_section)
}