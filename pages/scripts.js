console.log('navigator', navigator);
console.log("loaded")

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/service-worker.js', { scope: '/pages/index.html' })
    .then(function (registration) { 
        console.log('Register success',registration)
    })
    .catch(function (error) {
      console.log('Register Failed:', error);
    });
}
else{
    console.log('Service workers are not supported');
}


var a = 1;
const form = document.getElementById('music-add-form');
const messageOutput = document.createElement('div');
form.insertBefore(messageOutput, form.firstChild);

// var Input = document.getElementById("add-button");
// Input.addEventListener("click",displayDetails);

  document.getElementById('add-button').addEventListener('click', () => {
    messageOutput.innerHTML = '';
    var musics = [];
  var title = document.getElementById('music-title').value;
  var artist = document.getElementById('music-artist').value; 
   musics.push(title,artist);
   
  //  console.log(musics,"arrayyyyy")
  var invalidMessages = [];
  if(!title ){
    invalidMessages.push('This title is required');
  }
  if(!artist ){
    invalidMessages.push('This artist is required');
  }
  
  if(invalidMessages.length>0){
    const description = invalidMessages.join('<br>');
    displayFailureMessage("invalid data", description)
    return;
  
  }

  document.getElementById('list-output').innerText = '';

  const musicelement = document.createElement('div');
      musicelement.className = 'music-item';
      document.getElementById('list-output').append(musicelement);
    
      // Includes the title.
      const elemTitle = document.createElement('h3');
      elemTitle.innerText = title;
      musicelement.append(elemTitle);

      // Includes the artist.
      const elemArtist = document.createElement('span');
      elemArtist.innerText = artist;
      musicelement.append(elemArtist);
  // console.log("value",title)
})

function displayFailureMessage(message, description) {
  messageOutput.innerHTML = `
    <div class='music-failure'>
      ${message}
      <span>${description}</span>
    </div>
  `;
}


