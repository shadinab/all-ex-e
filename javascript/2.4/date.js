function getCurrentDate() {
  const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const dateString = today.toLocaleDateString('en-US', options);

  return "Today is " + dateString;
}

console.log(getCurrentDate());
