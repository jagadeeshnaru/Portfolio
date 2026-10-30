// Copy email with confirmation
const toast = document.getElementById("toast");
document.getElementById("copy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("naru1962523@gmail.com");
    toast.textContent = "Email copied to clipboard.";
  } catch {
    toast.textContent =
      "Copy failed. Select the email above and copy it manually.";
  }
});

// Highlight the nav link for the section in view
const links = document.querySelectorAll("nav a");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) =>
          l.classList.toggle(
            "on",
            l.getAttribute("href") === "#" + e.target.id,
          ),
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);
document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));

document.getElementById("yr").textContent = new Date().getFullYear();
