function toggleDarkMode(){
  const bodyElement = document.getElementById("mainBackground")
  const titleElement = document.getElementById("inspirational-title")
  const buttonLabel = document.getElementById("dark-mode")
  if (bodyElement.style.background == "black") {
    bodyElement.style.background = "white";
    bodyElement.style.color = "black";
    titleElement.style.color = "black";
    buttonLabel.innerText = "Dark Mode";
    buttonLabel.style.background = "white";
    buttonLabel.style.color = "black";

  }
    else{
      bodyElement.style.background = "black";
      bodyElement.style.color = "white";
      titleElement.style.color = "white";
      buttonLabel.innerText = "Light Mode";
      buttonLabel.style.background = "black";
      buttonLabel.style.color = "white";
    }
}
 function changePicture(){
   const imageElement = document.getElementById("portrait")
   imageElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/TechCrunch_Disrupt_NY_2016_-_Day_1_%2826310041414%29.jpg/1200px-TechCrunch_Disrupt_NY_2016_-_Day_1_%2826310041414%29.jpg"
   imageElement.addEventListener("mouseout",function(){
     imageElement.src = "https://miro.medium.com/max/4700/1*0dFbOw_5wpx8P2EEu0k58Q.png"
   })
 }
