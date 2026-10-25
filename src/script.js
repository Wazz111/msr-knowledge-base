
const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".content-section");

// Switch to the selected tab
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove active state from all tabs
        tabs.forEach(button => {
            button.classList.remove("active");
            button.setAttribute("aria-pressed", "false");
        });

        // Hide all content sections
        sections.forEach(section => {
            section.hidden = true;
        });

        // Activate the selected tab
        tab.classList.add("active");
        tab.setAttribute("aria-pressed", "true");

        // Display the corresponding content
        const targetId = tab.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.hidden = false;
        }
    });
});

// Set the initial accessibility state
tabs.forEach(tab => {
    tab.setAttribute(
        "aria-pressed",
        String(tab.classList.contains("active"))
    );
});
