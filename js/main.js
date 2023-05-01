createDocumentation.addEventListener("click", () => {

  // let policyholderName = document.getElementById("policyholderName").value;
  // let policyholderNumber = document.getElementById("policyNumber").value;
  // let callReason = document.getElementById("callReason").value;

  let policyholderName = document.querySelector("#policyholderName").value;
  let policyholderNumber = document.querySelector("#policyNumber").value;
  let callReason = document.querySelector("#callReason").value;

  document.getElementById("comments").value = policyholderName + " / " + policyholderNumber + " called for a(n) " + callReason + "."

});





