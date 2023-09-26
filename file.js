


////Display form /////
let btn = document.querySelector('button');
let form = document.querySelector('form');
let shelfOneDiv = document.getElementById('row1');
let shelfTowDiv = document.getElementById('row2');
let shelfThreeDiv = document.getElementById('row3');
let shelfFourDiv = document.getElementById('row4');


btn.addEventListener("click", (e) => {
    form.style.display="block";
});
/// Get data from the form ///
let row =document.getElementById("alaa");
let send = document.getElementById("formData");
let counterone =0;
// row.classList.add('row');

send.addEventListener("click" , (e) => {
    e.preventDefault();
    let boockimage = document.createElement('img');
    let footerbook =document.createElement("div");
    let spanName = document.createElement('span');
    let spanNauthame = document.createElement('span');
    var bookname = document.getElementById('bookname').value;
    var bookurl = document.getElementById('bookurl').value;
    var bookauth = document.getElementById('bookauth').value;
    var shelfSelect = document.getElementById('sections');
    var selectedshelf= shelfSelect.options[shelfSelect.selectedIndex].value;
    var spanNameText = document.createTextNode(bookname);
    let col =document.createElement('div');
    var spanauthNameText = document.createTextNode(bookauth);
    boockimage.classList.add('imageStyle');
    footerbook.classList.add('footerbook');
    col.classList.add('bookcard');
  
    col.classList.add('col-6');
    boockimage.src = bookurl;
    boockimage.classList.add ("bookImage");
    footerbook.classList.add ("footerbook");

    
    spanName.appendChild(spanNameText);
    spanNauthame.appendChild(spanauthNameText);
    footerbook.appendChild(spanName);
    footerbook.appendChild(spanNauthame);
    col.appendChild(boockimage);
    col.appendChild(footerbook);
    
    if(selectedshelf ==1){
        shelfOneDiv.appendChild(col);
    }
    else if(selectedshelf ==2){
        shelfTowDiv.appendChild(col);
    } 
    else if(selectedshelf ==3){
        shelfThreeDiv.appendChild(col);
    } else{
        shelfFourDiv.appendChild(col);
    }
    form.style.display="none";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
});





