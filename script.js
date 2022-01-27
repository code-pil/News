let apikey = "f3cec697d74847a1bcb7cdbe9eeb15cd";
let country = "in";

let container = document.getElementById("container");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=${country}&apikey=${apikey}`,
  true
);

xhr.onload = () => {
  if (xhr.status === 200) {
    let json = JSON.parse(xhr.responseText);
    let articles = json.articles;
    let newsHTML = "";

    Array.from(articles).forEach((element)=>{
          console.log(element);
        newsHTML += `<div class="accordian">
                        <div class="title">
                        <font>${element.title}</font>
                        <ion-icon name="caret-down-outline"></ion-icon>
                        </div>
                        <div class="contant">
                        ${element.content}
                        <br />
                        <a href="${element.url}" target='_blank' class='readmore'>Read more</a>

                        </div>
                    </div>`;
    }) 

    container.innerHTML = newsHTML;
  } else {
    console.log("Error!!!");
  }
};

xhr.send();

setTimeout(() => {
    console.log(container);
    let accordian = document.getElementsByClassName("accordian");
    Array.from(accordian).forEach((element) => {
      element.addEventListener("click", () => {
        element.childNodes[3].classList.toggle("active");
      });
    });
    
}, 2000);


