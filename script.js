document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        accountNumber: document.getElementById("accountNumber").value,
        bank: document.getElementById("bank").value,
        accountHolder: document.getElementById("accountHolder").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
      };

      localStorage.setItem("orderData", JSON.stringify(data));

      window.location.href = "hasil-pemesanan.html";
    });
  }

  const resultContainer = document.getElementById("result");
  if (resultContainer) {
    const data = JSON.parse(localStorage.getItem("orderData"));
    if (data) {
      document.getElementById("resTitle").innerText = data.title;
      document.getElementById("resDescription").innerText = data.description;
      document.getElementById("resAccount").innerText = `${data.bank} - ${data.accountNumber}`;
      document.getElementById("resHolder").innerText = data.accountHolder;
      document.getElementById("resMobile").innerText = data.mobile;
      document.getElementById("resEmail").innerText = data.email;
    }
  }
});
