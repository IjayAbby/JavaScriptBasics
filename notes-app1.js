// document.querySelector('h2').addEventListener('click',function(event){
//     event.target.textContent = 'JavaScript is very hard'
// })

document.querySelector('h2').addEventListener('click',function(event){
    const data = document.createElement('p');
    data.textContent = 'Manipulation is fun';
    const data1= document.querySelector('body');
    data1.appendChild(data)
})

 //create an event listener "click" that changes the text content of button when clicked
 document.querySelector('button').addEventListener('click',function(event){
  event.target.textContent = 'Programming is fun';
 })
// create an event listener "input" that consoles on the browser what you type on the "input" element
document.querySelector('#search-text').addEventListener('input',function(event){
    console.log(event.target.value);
})

document.querySelector('#data').addEventListener('input',function(event){
    console.log(event.target.value);
})

