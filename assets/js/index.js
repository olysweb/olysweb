document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
})

// Menu responsive
function openNav() {
  document.querySelector("#openIcon").style.display = "none";
  document.querySelector("#closeIcon").style.display = "inline-flex";
  document.querySelector("nav").style.display = "flex";
}

function closeNav() {
  document.querySelector("#openIcon").style.display = "inline-flex";
  document.querySelector("#closeIcon").style.display = "none";
  document.querySelector("nav").style.display = "none";
}

// Load projects
function loadProjects(){
  fetch("./assets/data/data.json")
  .then(response => response.json())
  .then(projects => {
    projects.forEach((project) => {
      
      const div = document.createElement('div');

      div.classList.add('item');
      
      div.innerHTML = `
                          <img src="${project.image}" class="screenshot" alt="Screenshot site ${project.title}">
                          <h4>${project.title}</h4>
                          <p>${project.description}</p>
                          <a href="${project.url}" target="_blank">
                              Voir le projet <img src="./assets/images/icon-arrow-right.png" alt="Icone flèche vers la droite">
                          </a>    
      `;

      document.querySelector('#projects').append(div);
    })
  })
}