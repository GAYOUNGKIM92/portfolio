
function OpenMenu(){
    document.getElementById("mySidebar").style.height = "100%";
    document.querySelector('nav>ul').style.display = "block";
}

function CloseMenu() {
    document.querySelector('nav>ul').style.display = "none";
    document.getElementById("mySidebar").style.height = "0";
}

function ShowSpecific(work){
  document.getElementById('modal').style.display = "block";
  var image = document.getElementById('modalImage');

  switch(work){
    case "work1":
      image.src = "images/MaliciousUAV.JPG";
      break;
    case "work2":
      image.src = "images/DogsJourney.JPG";
      break;
    case "work3":
      image.src = "images/portfolio.JPG";
      break;
    case "work4":
      image.src = "images/projectManager.JPG";
      break;    
    case "work5":
      image.src = "images/3Dmodeling.JPG";
      break;
    default:
      image.src = "images/g6.jpg";
      
  }
}

window.onclick = windowOnclick;
function windowOnclick(event) {
  if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = "none";
  }
}


$('.education-title').click(function(){
  $(this).addClass('active');
  $(this).next().addClass('active');
  
  $(this).siblings('.education-title').removeClass('active');
  $(this).next().siblings('education-desc').removeClass('active');
  
  $(this).siblings('.education-desc').stop().slideUp();
  $(this).next().stop().slideDown();
})