// document.getElementById('compare').addEventListener('click',()=>
// {

// var v1=document.getElementById('t1');
// console.log(v1.value);
// var v2= document.getElementById('d1');
// console.log(v2.value);
// let title=v1.value.toLowerCase();
// let descripition=v2.value.toLowerCase();
// console.log(descripition);
// console.log(title);
// v1.value='';
// v2.value='';
// console.log(v2.value);
// let desc=descripition.split(" ");
// let arr=["html","css","js","pyhon","net"];
// var parent=document.querySelector('.alertmessage');
// parent.innerHTML='';
// let matchfound=false;
// desc.forEach(words => {
// if(arr.includes(words)){
//     console.log("Good work");
//     matchfound=true;

// }
//    });
// if(matchfound){
//     let d1=document.createElement('div');
//     //  d1.className="alert alert-success";
//      d1.className = "alert alert-success";
//      d1.textContent="Good resume";
    
//      parent.appendChild(d1);
// } 
// else{
//     let d1=document.createElement('div');
//     //  d1.className="alert alert-success";
//      d1.className = "alert alert-danger";
//      d1.textContent="bad resume";
//      parent.appendChild(d1);
// }

// // for( desc in arr){
// //  console.log("Good work");
// //  let d1=document.createElement('div');
// //  d1.className="alert alert-sucess";
// //  d1.textContent="Good resume";
// //  var parent=document.querySelector('.btn1');
// //  parent.appendChild(d1);
// // }
// });
document.getElementById('compare').addEventListener('click', () => {

    let resumeText = document.getElementById('t1').value.toLowerCase();
    let jdText = document.getElementById('d1').value.toLowerCase();
  
    // Clear inputs
    document.getElementById('t1').value = '';
    document.getElementById('d1').value = '';
  
    // Clean text → remove punctuation, split to words
    let resumeWords = resumeText.replace(/[^\w\s]/gi, '').split(/\s+/);
    let jdWords = jdText.replace(/[^\w\s]/gi, '').split(/\s+/);
  
    // Find words in JD not in resume
    let missingWords = jdWords.filter(word => !resumeWords.includes(word) && word.length > 2);
  
    let outputBox = document.querySelector('.alertmessage');
    outputBox.innerHTML = '';
  
    if (missingWords.length === 0) {
      let successMsg = document.createElement('div');
      successMsg.className = "alert alert-success";
      successMsg.textContent = "✅ Good resume! All keywords are present.";
      outputBox.appendChild(successMsg);
    } else {
      let failMsg = document.createElement('div');
      failMsg.className = "alert alert-danger";
      failMsg.innerHTML = `
        ❌ Resume is missing these important keywords:
        <br> <b>${missingWords.join(', ')}</b>
      `;
      outputBox.appendChild(failMsg);
    }
  });
  