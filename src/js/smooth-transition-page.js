// Selectează toate linkurile care au clasa "smooth-transition"
document.querySelectorAll('.smooth-transition').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Oprește navigarea instantanee
  
      // Adaugă clasa fade pentru efectul de dispariție
      document.body.classList.add('fade');
  
      // După 500ms, navighează la pagina țintă
      setTimeout(() => {
        window.location.href = link.href;
      }, 400); // Timpul trebuie să fie egal cu durata tranziției CSS
    });
  });
  