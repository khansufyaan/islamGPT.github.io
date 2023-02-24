const form = document.querySelector("form");
const inputBox = document.querySelector("#input-box");
const outputBox = document.querySelector("#output-box");
const loader = document.querySelector("#loader");


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputValue = inputBox.value;
  const question = inputValue.endsWith("?") ? inputValue : `${inputValue}?`;
  outputBox.innerHTML += `<div class="chat-message user-message">${question}</div><br><br>`;
  inputBox.value = "";
  loader.style.display = "block";
  const response = await fetch("https://www.chatbase.co/api/v1/chat", {
    method: "POST",
    headers: {
      Authorization: "Bearer 2df25e4b-eea9-4143-8c41-27f804fb0c80",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: [
        { message: "How can I help you?", who: "bot" },
        { message: question, who: "user" },
      ],
      chatId: "quran---tafseer-saadi-pdf-wbgknt7zn",
      stream: false,
    }),
  });
  const data = await response.json();
  outputBox.innerHTML += `<div class="chat-message bot-message">${data.text}</div><br><br>`;
  loader.style.display = "none";
});


