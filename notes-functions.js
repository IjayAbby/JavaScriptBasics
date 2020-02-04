
const getSavedNotes = function(){
    const notesJSON = localStorage.getItem('notes')
    if(notesJSON !== null){
        return JSON.parse(notesJSON)

    }
    else {
        return[]
    }
}
const saveNotes = function(notes){
localStorage.setItem('notes',JSON.stringify(notes))
}
const generateNoteDOM = function(note){
    const noteEl = document.createElement('p');

    if(note.title.length > 0){
        noteEl.textContent=note.title;
    
    }
    else {
        noteEl.textContent = 'unnamed notes'
    }
    return noteEl;
}
 
const RenderNotes=(notes,filters) => {
    const filteredNotes= notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
}


const renderNotes = function (notes,filters) { //creating a function expression,where notes $ filters act as placeholders
    const filteredNotes = notes.filter(function (note){ //creating  a variable
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    }) //the value outputed from the object
       //use a dot notation to include object
    document.querySelector('#notes').innerHTML = ''  //appends the DOM to empty it to avoid repetition

    filteredNotes.forEach(function(note){ //call back function
        const noteEl=generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl) 
           })     
       // noteEl.textContent = note.title; //method used to create an element
        }
