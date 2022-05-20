function getDate() {
  const d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth()+1;
  let day = d.getDate();
  let dayOfWeek = d.getDay();

  const daysOfWeek = ["x","月","火","水","木","金","土","日"];


  let dayOfWeekName = daysOfWeek[dayOfWeek];

  dateFormatted = year+"年"+month+"月"+day+"日"+"("+dayOfWeekName+")";
  document.getElementById("date").innerHTML = dateFormatted;
}

getDate();