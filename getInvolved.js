console.log("js connected");
document.getElementById("add").addEventListener("click", function() {
    window.open("https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmZwZjkyamFjODl1NGhqaDIyYWxubnU3OW8gc2tpbmZvcnNraW4uc2ZzQG0&tmsrc=skinforskin.sfs%40gmail.com");
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const message = document.getElementById("message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;

    try {
      const res = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        message.textContent = "Sucessfully subscribed!";
        form.reset();
      } else {
        message.textContent = "❌ " + data.error;
      }
    } catch (err) {
      message.textContent = "Server not responding.";
    }
  });
});