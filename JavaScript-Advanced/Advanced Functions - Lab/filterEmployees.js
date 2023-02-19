function filterEmployeess(string, criteria) {
  const arrayOfObjects = JSON.parse(string);
  const [crit, value] = criteria.split("-");
  let counter = 0;

  arrayOfObjects.forEach((el) => {
    if (el[crit] === value) {
      console.log(
        `${counter}. ${el["first_name"]} ${el["last_name"]} - ${el["email"]}`
      );
      counter++;
    }
  });
}

const string1 = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`;

const criteria1 = "gender-Female";

const string2 = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`;

const criteria2 = "last_name-Johnson";

filterEmployeess(string1, criteria1);
/*
0. Ardine Bassam - abassam0@cnn.com
1. Kizzee Jost - kjost1@forbes.com
*/

filterEmployeess(string2, criteria2);
/*
0. Kaylee Johnson - k0@cnn.com
1. Kizzee Johnson - kjost1@forbes.com
2. Evanne Johnson - ev2@hostgator.com
*/
