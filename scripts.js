function entrar() {
  // “verificación” simple
  localStorage.setItem("acceso", "true");
  window.location.href = "main.html";
}
function openJob(id){
  document.querySelectorAll("#trabajos .card > div.card").forEach(e=>{
    if(e.id) e.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

function openShop(id){
  document.querySelectorAll("#tienda .card > div.card").forEach(e=>{
    if(e.id) e.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}