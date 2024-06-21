list = [
{
    topic: "Arena breakout",
    image: "/storage/emulated/0/Pictures/Screenshots/Screenshot_20240617-123351.png",
    detail: "This is a FPS game...",
    link: "",
    id: 0
},{
    topic: "Born winner",
    image: "/storage/emulated/0/Pictures/Wisdom_Quotes/20240616_063216.jpg",
    detail: "How I started programming...",
    link: "Born-winner.html"
},{
    topic: "Web developer",
    image: "/storage/emulated/0/DCIM/Camera/124e92cfb3545b185863bf05464f61ad~2.png",
    detail: "I enjoy exploring new technologies...",
    link: "web-developer.html"
}]

let topicsHTML = ""

list.forEach((topic) => {
       
    topic.onclick = function(){
        alert(790)
    }
    
    
    topicsHTML += `
    <a class="topic" href="${topic.link}">
    
        <div class="topic-image" style="background-image: url(${topic.image})">
          
        </div>
        <div class="details">
          <h3>${topic.topic}</h3>
          <p>${topic.detail}</p>
        </div>
      </a>
    `
    
    
    
    document.querySelector('#topics').innerHTML = topicsHTML;
 
    
})



