console.log("js connected");

const add = document.getElementById("add");
if(add){
  document.getElementById("add").addEventListener("click", function() {
      window.open("https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmZwZjkyamFjODl1NGhqaDIyYWxubnU3OW8gc2tpbmZvcnNraW4uc2ZzQG0&tmsrc=skinforskin.sfs%40gmail.com");
  });
}
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
      const container = document.querySelector(".newsletter");

      if (res.ok) {
        // message.textContent = "Sucessfully subscribed!";
        // form.reset();
        container.innerHTML = `
          <div class="success-message">
            <p>Signup successful! Thanks for joining our newsletter :)</p>
          </div>
        `;
      }else if (res.status === 400) {
        message.textContent = "Email already subscribed!"
      } else {
        message.textContent = "❌ " + data.error;
      }
    } catch (err) {
      message.textContent = "Server not responding.";
    }
  });
});