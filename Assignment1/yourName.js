function nameFunction() {
  let username = prompt("Please enter your name:");
  let userSleep = prompt("Hello " + username + "! Did you sleep well last night? (y/n)");

  if (username != null) {
    if (userSleep === "y" || userSleep === "Y") {
      alert("That's great! A good nights sleep promotes good health.")
    }
    if (userSleep === "n" || userSleep === "N") {
      alert("Sorry to hear that. Try doing some of these things to help get a better nights sleep.")
      document.getElementById("name").innerHTML =
        "Exercise, meditation, deep breathing, avoiding alcohol and caffeine, or start a sleep routine.";
    }
  };
}