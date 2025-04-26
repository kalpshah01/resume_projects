console.log('this is included');
showNotes();
let addBtn = document.getElementById('addbtn').addEventListener('click',function(e) {

   let addtxt = document.getElementById('addtxt');
   let addtitle = document.getElementById('addtitle');
   
   let notes = localStorage.getItem("notes");
   //let title=document.getElementById('title');
   if (notes == null) {
      notesObj = [];
   }
   else {
      notesObj = JSON.parse(notes);
   }
   let myObj={
      title:addtitle.value,
      text:addtxt.value
   }
   notesObj.push(myObj);
   localStorage.setItem("notes",JSON.stringify(notesObj));
   addtxt.value = "";
   addtitle.value="";
   //console.log(notesObj);
   showNotes();
});

//this is second try we use same name for all like below we use c
// let a=document.getElementById('addbtn').addEventListener('click',function(e){
//    let b=document.getElementById('addtxt');
//    let c=localStorage.getItem('c');
//    if(c== null){
//       d=[];
//    }
//    else{
//       d=JSON.parse(c);

//    }
//    d.push(b.value);
//    localStorage.setItem("c",JSON.stringify(d));
//    b.value="";
//    console.log(d);
// });


// function to show notes
// index + 1 use for because index always start with 0 so we staet 1 
function showNotes() {
   let notes = localStorage.getItem("notes");
   if(notes == null) {
      notesObj = [];
   }
   else {
      notesObj = JSON.parse(notes);
   }
 
  
   let html = "";
   notesObj.forEach(function(element,index) {
    
      html += `
      <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">${element.title}</h5>           
          <p class="card-text" id="mod">${element.text}</p>

          <button id="${index + 1}" onclick="Delete(this.id)" class="btn btn-primary">Delete Nodes</button>
      </div>
  </div>`;
   
   });
   let notesElement=document.getElementById('notes');

   if(notesObj.length != 0){
      notesElement.innerHTML=html;
   }
   else{
      notesElement.innerHTML=`Nothing to show please use "Add Node button" thanks you!`;
   }
};

// function to delete notes
// on click call the function

function Delete(index){
  // console.log('i am deleting this ',index);

   let notes = localStorage.getItem("notes");
   if(notes == null) {
      notesObj = [];
   }
   else {
      notesObj = JSON.parse(notes);
   }
   notesObj.splice(index - 1,1);           // this is must to delete element
   localStorage.setItem("notes",JSON.stringify(notesObj));  // this is statement give again all notes to localstorage
   showNotes();
};

// for the search button

let search=document.getElementById('searchTxt');

search.addEventListener("input",function(){

let inputVal=search.value.toLowerCase();
//console.log("input event fire",inputVal);
let noteCards=document.getElementsByClassName('noteCard');
Array.from(noteCards).forEach(function(element){
   let cardsTxt=element.getElementsByTagName("p")[0].innerText;
   //console.log(cardsTxt);
   if(cardsTxt.includes(inputVal)){
      element.style.display="block";
   }
   else{
      element.style.display="none";
   }
});
   
});

