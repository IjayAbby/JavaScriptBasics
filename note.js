


 //console.log('Learning JavaScript')
// //Query the paragraph tags 
// /*const ps =  document.querySelectorAll('p')
//  ps.forEach(function(p){
//      p.remove()
//  });

const newParagraph = document.createElement('p');
  newParagraph.textContent = 'Hello';
  document.querySelector('body').appendChild 
  (newParagraph)


//  const notes = [{ //creating arrays
//      title:'my next trip',
//     body:'I would like to go to Spain'
//  },
//  { title:'Habits to work on', 
//  body:'Exercise. Eating a bit better'
//  },{
//   title:'Office modification',
//      body:'Get a new seat'
// }]

let notes = getSavedNotes()

const filters = {
    searchText:'' //creating an object i.e variable called filters
}
renderNotes(notes,filters);
document.querySelector('#create-note').addEventListener('click',function(e){
    notes.push({
        title : '',
        body : ''
    })
    saveNotes(notes)
    renderNotes(notes,filters)
});

document.querySelector('#search-text').addEventListener('input',function (e){
    filters.searchText = e.target.value;
    renderNotes(notes,filters)
})

document.querySelector('#filter-by').addEventListener('change',function (e){
    console.log(e.target.value)
})


