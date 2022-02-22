const btn = document.getElementById("handle-submit");
const out = document.getElementById("output");
const calc = (CP, SP, qty) => {
  answer = (SP - CP) * qty;
  answer_percent = ((SP - CP) / CP) * 100;
  if (answer > 0)
    output.innerText =
      "Profit:" + answer + " " + "Profit Percent:" + answer_percent + "%";
  else if (answer < 0)
    output.innerText =
      "Loss:" +
      Math.abs(answer) +
      " " +
      "Loss Percent:" +
      Math.abs(answer_percent) +
      "%";
  else output.innerText = "Ye bik gyi hai gormint";
};

const profit_loss = (e) => {
  e.preventDefault();
  console.log("abc");
  const CP = document.getElementById("cost_p").value;
  const SP = document.getElementById("selling_p").value;
  const qty = document.getElementById("quantity").value;
  if (CP === "" || SP === "" || qty === "")
    output.innerText = "No value has been provided";
  else calc(CP, SP, qty);
};
btn.addEventListener("submit", (e) => profit_loss(e));
