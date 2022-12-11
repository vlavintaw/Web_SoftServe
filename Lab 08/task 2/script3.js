let day = +prompt("Введіть день");
let month = +prompt("Введіть місяць");
let year = +prompt("Введіть рік");

let date = new Date(`${year}-${month}-${day}`);

if (date != NaN) 
{
  date.setDate(date.getDate() + 1);
  alert(`Наступна дата: ${date.toLocaleDateString()}`);
} else
 {
  alert("Невірна дата");
}