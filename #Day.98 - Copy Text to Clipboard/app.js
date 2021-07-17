const button = document.getElementById("copy");
const p = document.getElementById("p");
const message = document.getElementById("message");

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  message.classList.add("after_clicked");

  setTimeout(() => {
    message.classList.remove("after_clicked");
  }, 2000);
}

