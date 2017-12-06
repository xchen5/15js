var students = ["Xavier", "John", "Sam", "Ethan", "Jacob", "Mason"];
var fibonacci = function(n){
  if (n <= 1){
    return 1;
  }
  else
   {
     return fibonacci(n - 1) + fibonacci(n - 2);
   }
};

console.log(fibonacci(10));

var gcd = function(a, b){
  while(b !== 0) {
    var d = b;
    b = a % b;
    a = d;
  }
  return a;
};

console.log(gcd(100,75));



var randomStudent = function(){
  return (students[Math.floor(Math.random() * students.length)]);
};

console.log(randomStudent());
