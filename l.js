function img(){
    var element = document.getElementById("img1");
    element.src="Varlık 3.png";

}

function img1(){
    var element = document.getElementById("img1");
    element.src="Varlık 4.png";

}



  function hide1(){
      var x = document.getElementById("kaya")
       if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      
  }

  function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }