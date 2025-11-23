function search(){
    const btn = document.getElementById('search-btn');
    const bar = document.getElementById('search-bar');

    bar.classList.toggle('show');  // Mostra/nasconde la barra
    if (bar.classList.contains('show')) {
      bar.focus();  // mette il cursore nella barra
    }
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}
