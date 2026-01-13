// Typing animation
const text = "Naru Jagadeesh";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}
document.getElementById("typing").innerHTML = "";
typeEffect();


// Skills reveal animation
document.getElementById("skillsLink").addEventListener("click", function() {
    const skillsSection = document.getElementById("skills");
    skillsSection.classList.remove("hidden");

    const skills = document.querySelectorAll(".skill-box");

    skills.forEach((skill, i) => {
        setTimeout(() => {
            skill.classList.add("show");
        }, i * 150);
    });
});