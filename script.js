const bioBtn = document.getElementById("bioBtn");
const projectsBtn = document.getElementById("projectsBtn");
const contactBtn = document.getElementById("contactBtn");

const content = document.getElementById('content');

const bioView = `
    <p>
        Hello, my name is "Mike"! I am a lover of
        technology and learning about new ways to enhance the human
        experience. When I'm not learning about programming, I can be found
        spending time with my family, composing and producing music, playing
        piano or tinkering with electronics. You can checkout my projects
        here!
    </p>
`;

const projectsView = `
    <div class="project-section">
        <div class="container">
            <div class="project word-guessr">Word Guessr</div>
            <div class="project advisor-ai">Advisor_AI</div>
            <div class="project braindose">BrainDose</div>
        </div>
    </div>
`;

const contactView = `
    <div>
        <p>Email: michaelmcbride85@gmail.com</p>
        <p>Phone: 828.817.9493</p>
    </div>
`;

bioBtn.addEventListener('click', () => {
    content.innerHTML = bioView;
});

projectsBtn.addEventListener('click', () => {
    content.innerHTML = projectsView;
});

contactBtn.addEventListener('click', () => {
    content.innerHTML = contactView;
});

bioBtn.addEventListener('click', () => {
    content.innerHTML = bioView;
    bioBtn.classList.add('active');
    projectsBtn.classList.remove('active');
    contactBtn.classList.remove('active');
});

projectsBtn.addEventListener('click', () => {
    content.innerHTML = projectsView;
    projectsBtn.classList.add('active');
    bioBtn.classList.remove('active');
    contactBtn.classList.remove('active');
});

contactBtn.addEventListener('click', () => {
    content.innerHTML = contactView;
    contactBtn.classList.add('active');
    bioBtn.classList.remove('active');
    projectsBtn.classList.remove('active');
});

