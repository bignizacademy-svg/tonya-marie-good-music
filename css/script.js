// =====================
// 2. CONTACT FORM HANDLER
// =====================

// If you have a form with id="contactForm"
document.addEventListener("submit", async (e) => {
  if (e.target.matches("#contactForm")) {
    e.preventDefault();

    const form = e.target;
    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();
    const status = document.querySelector("#form-status");

    // basic validation
    if (!name || !email || !message) {
      status.textContent = "Please fill in all fields.";
      status.style.color = "red";
      return;
    }

    // send form via formspree.io (free email forwarding)
    const response = await fetch("https://formspree.io/f/mqagrell", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
      status.textContent = "Message sent successfully!";
      status.style.color = "green";
      form.reset();
    } else {
      status.textContent = "Something went wrong. Try again.";
      status.style.color = "red";
    }
  }
});
