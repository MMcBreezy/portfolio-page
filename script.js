const bioBtn = document.getElementById("bioBtn");
const projectsBtn = document.getElementById("projectsBtn");
const contactBtn = document.getElementById("contactBtn");

const content = document.getElementById("content");

const bioView = `
    <div class="bio-section">   
        <p>
            Hi, my name is Mike! I love technology and learning about new ways
            to elevate the human experience. When I'm not diving into programming,
            I can be found spending time with my family, composing and producing
            music, playing piano or tinkering with electronics. You can checkout
            my projects on the projects tab above!
        </p>
    </div>
`;

const projectsView = `
    <div class="project-section">
        <a href="https://github.com/MMcBreezy/portfolio-page" target="_blank" id="portfolioPage" class="project">
            Portfolio Page
        </a>
        <a href="https://github.com/MMcBreezy/word-guessr-react" target="_blank" id="wordGuessr" class="project">
            Word Guessr
        </a>
        <a href="https://github.com/MMcBreezy/AdvisorAI" target="_blank" id="advisorAI" class="project">
            Advisor_AI
        </a>
        <a href="https://github.com/MMcBreezy/braindose" target="_blank" id="brainDose" class="project">
            BrainDose
        </a>
    </div>
`;

const contactView = `
    <div class="contact-section">
        <p><strong>michaelmcbride85@gmail.com</strong></p>
    </div>
`;

function switchView(btn, view) {
  btn.addEventListener("click", () => {
    content.innerHTML = view;
    [bioBtn, projectsBtn, contactBtn].forEach((button) =>
      button.classList.remove("active")
    );
    btn.classList.add("active");
  });
}

switchView(bioBtn, bioView);
switchView(projectsBtn, projectsView);
switchView(contactBtn, contactView);

window.onload = function () {
  bioBtn.classList.add("active");
  content.innerHTML = bioView;
};
