let age = window.prompt("what is your age");
if (age < 18) {
  console.log("You are minor");
} else if (age >= 18 && age <= 64) {
  console.log("You are an adult");
} else {
  console.log("You are a senior");
}
