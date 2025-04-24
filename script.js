document.addEventListener('DOMContentLoaded', function() {
  const projects = [
    { 
      title: "YouTube Clone", 
      description: "A youtube clone built only HTML & CSS.",
      link: "https://pjvrjk.csb.app/", // Replace with your actual project URL
      github: "#" // Replace with your GitHub repo link
    },
    { 
      title: "StudyConnect", 
      description: "System developed with django to help students across the globe to study and connect by means of sharing their study content.",
      link: "#",
      github: "#"
    },
    { 
      title: "Tutoring System", 
      description: "2nd year Programming project, Built with Java to help students book tutorials with their tutors.",
      link: "#",
      github: "#"
    },
    { 
      title: "Digital Keyboard", 
      description: "2nd year web development project - developed using react.js, a nice keyboard built to enhance UX.",
      link: "https://glittery-salmiakki-d5a015.netlify.app/",
      github: "https://github.com/qolanimoloi/digital-keyboard"
    },
    { 
      title: "PYS website", 
      description: "A simple website built using only HTML, CSS & JavaScript.",
      link: "https://pusetso.netlify.app/",
      github: "https://github.com/qolanimoloi/PYS"
    },
    { 
      title: "Final year project", 
      description: "Still under construction, stay tuned we are solving a mystery.",
      link: "#", 
      github: "#" 
    }
  ];

  const projectList = document.getElementById("project-list");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-links">
        ${project.link !== '#' ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>` : ''}
        ${project.github !== '#' ? `<a href="${project.github}" class="github-link" target="_blank" rel="noopener noreferrer">View Code →</a>` : ''}
        ${project.link === '#' && project.github === '#' ? '<span class="coming-soon">Coming soon</span>' : ''}
      </div>
    `;
    projectList.appendChild(card);
  });

 
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.project-card, .about-content');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  
  document.querySelectorAll('.project-card, .about-content').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
});