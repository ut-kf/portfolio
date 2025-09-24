// ページの読み込み時にコンソールにメッセージを表示
document.addEventListener("DOMContentLoaded", () => {
  console.log("script.jsが正しく読み込まれました！");
})

// ボタンをクリックしたときにメッセージを表示
const showMessage = () => {
  document.getElementById("message").textContent = "こんにちは！JavaScriptが動いています🎉";
}