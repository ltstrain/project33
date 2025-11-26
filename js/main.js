const instructorEmail = "london@example.com";

document.addEventListener("DOMContentLoaded", function(){
  const qBtn = document.getElementById("questions-btn");
  if(qBtn){
    qBtn.addEventListener("click", function(){
      alert("If you have questions, contact me at:\n" + instructorEmail);
    });
  }
});

// Map function (if you add map.html later)
function initMap(){
  try{
    const center = {lat:41.8781, lng:-87.6298};
    const map = new google.maps.Map(document.getElementById("map"), {
      center:center,
      zoom:12
    });
  }catch(err){
    console.error("initMap error:", err);
  }
}
window.initMap = initMap;
