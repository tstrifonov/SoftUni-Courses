function companyUsers(input) {
    let companies = {};

    for (let entry of input) {
        let [companyName, employeeID] = entry.split(" -> ");
        
        if(!companies.hasOwnProperty(companyName)) {
            companies[companyName] = [];
        }

        if (!companies[companyName].includes(employeeID)) {
            companies[companyName].push(employeeID);
        }
    }

    let companiesArr = Object.keys(companies);
    companiesArr.sort((a, b) => a.localeCompare(b));

    for (let companyName of companiesArr) {
        console.log(companyName);
        for (let employeeID of companies[companyName]) {
            console.log(`-- ${employeeID}`);
        }
    }

}

/*
Write a function, which keeps the information about companies and their employees. 
You will receive an array of strings containing the company name and employee's id. 

Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
When you finish reading data, order the companies by their name in ascending order. 

Print the company name and each employee's id in the following format:
{companyName}
-- {id1}
-- {id2}
-- {idN}
Input / Constraints
The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
The input always will be valid.
*/

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);
/*
HP
-- BB12345
Microsoft
-- CC12345
SoftUni
-- AA12345
-- BB12345
*/