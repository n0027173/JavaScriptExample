
createDocumentation.addEventListener("click", () => {

  let policyholderName = document.getElementById("policyholderName").value;
  let policyholderNumber = document.getElementById("policyNumber").value;
  let callReason = document.getElementById("callReason").value;

  document.getElementById("comments").value = policyholderName + " / " + policyholderNumber + " called for a(n) " + callReason + "."

});





