let ages = [18, 20, 15, 12, 30];
let adults = ages.filter(validate);
adults.forEach(view);

function validate(age) {
  return age <= 18;
}

function view(age) {
  console.log(age);
}
