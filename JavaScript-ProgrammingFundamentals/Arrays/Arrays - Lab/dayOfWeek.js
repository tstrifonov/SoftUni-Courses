function dayOfWeek(n) {
    let arrDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    ((n-1) >= 0 && (n-1) <= 6) ? console.log(arrDays[n-1]) : console.log("Invalid day!");
}

dayOfWeek(1);
dayOfWeek(3);
dayOfWeek(-5);
dayOfWeek("5a");
dayOfWeek(77);
dayOfWeek(4);