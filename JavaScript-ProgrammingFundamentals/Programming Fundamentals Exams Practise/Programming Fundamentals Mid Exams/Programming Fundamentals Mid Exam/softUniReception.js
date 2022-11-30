function softUniReception(input) {
    let employeeOneEficiency = Number(input.shift());
    let employeeTwoEficiency = Number(input.shift());
    let employeeThreeEficiency = Number(input.shift());
    let studentCount = Number(input.shift());
    let time = 0;

    while (studentCount > 0) {
        time++;
        if (time % 4 != 0) {
            studentCount = studentCount - (employeeOneEficiency + employeeTwoEficiency + employeeThreeEficiency);
        }
    }
    
    console.log(`Time needed: ${time}h.`)
}

softUniReception(['5','6','4','20']); //Time needed: 2h.
softUniReception(['1','2','3','45']); //Time needed: 10h.
softUniReception(['3','2','5','40']); //Time needed: 5h.
