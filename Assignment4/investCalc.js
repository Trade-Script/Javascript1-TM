function Calculate() {
  let a = document.getElementById('amount').value;
  let r = document.getElementById('rate').value;
  let d = document.getElementById('duration').value;

  //validate input
  if (a === "" || r == "" || d === "") {
    alert("Please include valid values for all three fields.");
    return false;
  } else if (a < 1 || r < 1 || d < 1) {
    alert("Please enter a value of 1 or greater.");
    return false;
  }

  //calculate tiv
  let total = a * (r / 100) * (d / 12);

  let IV = parseFloat(total) + parseFloat(a);

  //format tiv to US currency
  IV = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(IV);

  //display the tiv
  document.getElementById('tiv').innerHTML = "The Total Investment Value is: " + IV;
}