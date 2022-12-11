let number = 0;
let pos = 0;
let neg = 0;
let zero = 0;
let pair = 0;
let notpair = 0;

for (var i = 0; i < 10; i++) 
{
  number = +prompt("Введіть число");
  
  if (number != NaN) {
    if (number > 0) {
      pos++;
    }
    if (number < 0) {
      neg++;
    }
    if (number == 0) {
      zero++;
    }
    if (number % 2 == 0) {
      pair++;
    }
    if (number % 2 != 0) {
      notpair++;
    }
  }
}
alert(
  `Позитивних ${pos} Негативних ${neg} Нулів ${zero} Парних ${pair} Непарних ${notpair}`
);