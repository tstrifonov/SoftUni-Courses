function previousDay(year, month, day) {
  const prevDay = new Date(year, month - 1, day - 1);
  const yearNew = prevDay.getFullYear();
  const monthNew = prevDay.getMonth() + 1;
  const dayNew = prevDay.getDate();

  console.log(`${yearNew}-${monthNew}-${dayNew}`);
}

previousDay(2016, 9, 30);
//2016-9-29
previousDay(2015, 5, 10);
//2015-5-9
