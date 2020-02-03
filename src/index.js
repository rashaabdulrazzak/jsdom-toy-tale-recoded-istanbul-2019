let addToy = false

document.addEventListener("DOMContentLoaded", ()=>{
  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
    } else {
      toyForm.style.display = 'none'
    }
  })

})
function getResponse(){
  let configObj = {
    method: "GET",
    headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
    },
    body: ''
  };
   
  fetch("http://localhost:3000/dogs", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      let div = document.getElementById('toy-collection');
      let divT = document.createElement('div');
      let h = document.createElement(h2);
      let img = document.createElement(img);
      let p= document.createElement('p');
      let btn = document.createElement('button');
      divT.className = 'card';
      btn.classList.add("like-btn");
    
      for(let toy of object)
      {
         h.innerHTML = toy.name;          
         img.src = toy.image ;          
         p.innerHTML= toy.likes;          
         btn.innerHTML= `like + ${toy.likes}`;
         divT.prepend(h);
         h.after(img);
         img.after(p);
         p.after(btn);
         div.appendChild(divT);         
        }
    });

}
getResponse();
