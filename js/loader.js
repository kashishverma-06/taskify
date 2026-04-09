["header", "footer"].forEach(id => {
  fetch(`/components/${id}.html`)
    .then(res => res.text())
    .then(html => document.getElementById(id).innerHTML = html);
});
