//Las validaciones no abarcan el 100% buscar soluciones

const titleHelloWorld = document.querySelector('#titleHelloWorld');
const btnProfile = document.querySelector('#btnProfile');
const aboutMe = document.querySelector('#aboutMe');
const aboutMeBorder = document.querySelector('.aboutMe');

const titleSkill = document.querySelector('#titleSkill');
const btnSkills = document.querySelector('#btnSkills');
const skills = document.querySelector('#skills');
const skillsBorder = document.querySelector('.divSkills');
const skillsLink = document.querySelector('#skillsLink');

const titleProject = document.querySelector('#titleProject');
const btnProject = document.querySelector('#btnProject');
const projects = document.querySelector('#project');
const projectsBorder = document.querySelector('.project');
const projectLink = document.querySelector('#projectLink');

const titleContact = document.querySelector('#titleContact');
const btnContact = document.querySelector('#btnContact');
const contacts = document.querySelector('#contact');
const contactsBorder = document.querySelector('.contact');
const contactLink = document.querySelector('#contactLink');

//  Para decir los porcentajes de skill
const js = document.querySelector('.js');
const html = document.querySelector('.html');
const css = document.querySelector('.css');
const bootstrap = document.querySelector('.bootstrap');
const react = document.querySelector('.react');
const intersectionObserver = document.querySelector('.intersectionObserver');

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        aboutMe.classList.toggle("open");
        btnProfile.style.color = 'var(--color-primario)';
        titleHelloWorld.style.top = '70px';
        aboutMeBorder.style.borderBottom = '6px solid var(--color-primario)';
    });
    btnProfile.addEventListener('click', profile);

    btnSkills.addEventListener('click', tagSkills);
    skillsLink.addEventListener('click', tagSkills);

    btnProject.addEventListener('click', project);
    projectLink.addEventListener('click', project);

    btnContact.addEventListener('click', contact);
    contactLink.addEventListener('click', contact);

}
js.addEventListener('mouseenter', () => {
    js.textContent = 'Principiante';
})
js.addEventListener('mouseout', () => {
    js.textContent = 'JS';
})

html.addEventListener('mouseenter', () => {
    html.textContent = 'Avanzado';
})
html.addEventListener('mouseout', () => {
    html.textContent = 'HTML';
})

css.addEventListener('mouseenter', () => {
    css.textContent = 'Intermedio';
})
css.addEventListener('mouseout', () => {
    css.textContent = 'CSS';
})

bootstrap.addEventListener('mouseenter', () => {
    bootstrap.textContent = 'Principiante / Intermedio';
})
bootstrap.addEventListener('mouseout', () => {
    bootstrap.textContent = 'Bootstrap';
})

react.addEventListener('mouseenter', () => {
    react.textContent = 'Iniciante';
})
react.addEventListener('mouseout', () => {
    react.textContent = 'React';
})

intersectionObserver.addEventListener('mouseenter', () => {
    intersectionObserver.textContent = 'Principiante';
})
intersectionObserver.addEventListener('mouseout', () => {
    intersectionObserver.textContent = 'Intersection Observer';
})


function clear (var1, var2, var3) {
    var1.classList.remove('open');
    var1.classList.add('close');
    setTimeout(() => {
        var1.style.borderBottom = 'none';
    }, 1500);
    var2.style.color = 'var(--color-quinto)';
    var3.style.top = '-150px';
}
function profile () {  
    clear(skills, btnSkills, titleSkill);
    clear(projects, btnProject, titleProject);
    clear(contacts, btnContact, titleContact);
    setTimeout(() => {
        aboutMe.classList.toggle("open");
        if(aboutMe.classList.contains('open')){
            btnProfile.style.color = 'var(--color-primario)';
            titleHelloWorld.style.top = '70px';
            aboutMeBorder.style.borderBottom = '6px solid var(--color-primario)';
        } else {
            btnProfile.style.color = 'var(--color-quinto)';
            titleHelloWorld.style.top = '-150px';
            setTimeout(() => {
                aboutMeBorder.style.borderBottom = 'none';
            }, 1500);
        }
    }, 1500);
}
function tagSkills () {
    clear(aboutMe, btnProfile, titleHelloWorld);
    clear(projects, btnProject, titleProject);
    clear(contacts, btnContact, titleContact);
    setTimeout(() => {
        skills.classList.toggle("open");
        if(skills.classList.contains('open')){
            btnSkills.style.color = 'var(--color-primario)';
            titleSkill.style.top = '70px';
            skillsBorder.style.borderBottom = '6px solid var(--color-primario)';
        } else {
            btnSkills.style.color = 'var(--color-quinto)';
            titleSkill.style.top = '-150px';
            setTimeout(() => {
                skillsBorder.style.borderBottom = 'none';
            }, 1500);
        }
    }, 1500);
}
function project () {
//    clear(aboutMe, btnProfile, titleHelloWorld);
//    clear(skills, btnSkills, titleSkill);
//    clear(contacts, btnContact, titleContact);
    alert('No hay proyectos');
//    setTimeout(() => {
//       projects.classList.toggle("open");
//       if(projects.classList.contains('open')){
//            btnProject.style.color = 'var(--color-primario)';
//            titleProject.style.top = '70px';
//            projectsBorder.style.borderBottom = '6px solid var(--color-primario)';
//        } else {
//            btnProject.style.color = 'var(--color-quinto)';
//            titleProject.style.top = '-150px';
//            setTimeout(() => {
//                projectsBorder.style.borderBottom = 'none';
//            }, 1500);
//        }
//    }, 1500);
}

function contact () {
    clear(aboutMe, btnProfile, titleHelloWorld);
    clear(skills, btnSkills, titleSkill);
    clear(projects, btnProject, titleProject);
    setTimeout(() => {
        contacts.classList.toggle("open");
        if(contacts.classList.contains('open')){
            btnContact.style.color = 'var(--color-primario)';
            titleContact.style.top = '70px';
            contactsBorder.style.borderBottom = '6px solid var(--color-primario)';
        } else {
            btnContact.style.color = 'var(--color-quinto)';
            titleContact.style.top = '-150px';
            setTimeout(() => {
                contactsBorder.style.borderBottom = 'none';
            }, 1500);
        }
    }, 1500);
}


// pulir texto
// cambiar imagenes