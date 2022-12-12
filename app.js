let inputEl=document.getElementById("input-el")
let inputBtn=document.getElementById("input-btn")
let ulEl=document.getElementById("ul-el")
let tempArray=[]

localStorage.setItem("vara","Vara is a bad Boy")
console.log(localStorage.getItem("vara"))









inputBtn.addEventListener("click",function(){
  tempArray.push(inputEl.value)
  inputEl.value=""
  renderElements()
})

function renderElements(){
  let tempText=""
  for(let i=0;i<tempArray.length;i++){
    tempText+="<li type=none>"+tempArray[i]+"</li>"
  }
  ulEl.innerHTML=tempText
  
}