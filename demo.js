// We use this code, known as Objects, to control toggling like / unlike status

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};


let articleHearts = document.querySelectorAll(".like-glyph");
//selects all hearts on page

function likeCallback(e) {
  let heart = e.target;
  //heart is event target
  mimicServerCall()
    .then(function(serverMessage){
      //simulation of server communication
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}


for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

//^^ when glyphs clicked, likeCallback runs - changes heart to be filled or
//  empty depending on state.

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
