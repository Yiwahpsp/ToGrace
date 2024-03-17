function activeShowPage() {
  let content = setTimeout(loadPage, 3000);
}

function loadPage() {
  document.getElementById("preLoader").style.display = "none";
  document.getElementById("contentLetter").style.display = "block";
}
