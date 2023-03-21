/*
Write a program that manages a database of tickets. A ticket has a destination, a price, and a status. 
Your program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string, 
representing a sorting criterion. The ticket descriptions have the following format:
<destinationName>|<price>|<status>
Store each ticket and at the end of execution return a sorted summary of all tickets, sorted by either destination, price, 
or status, depending on the second parameter that your program received. Always sort in ascending order 
(the default behavior for alphabetical sort). If two tickets compare the same, use order of appearance. 
See the examples for more information.
Input
Your program will receive two parameters - an array of strings and a single string.
Output
Return a sorted array of all the tickets that were registered.
*/

function ticketDatabase(ticketDescriptions, sortingCriterion) {
  const tickets = [];

  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  for (let ticket of ticketDescriptions) {
    const [destinationName, price, status] = ticket.split("|");
    const newTicket = new Ticket(destinationName, price, status);
    tickets.push(newTicket);
  }

  tickets.sort((a, b) => {
    if (sortingCriterion === "price") {
      return a[sortingCriterion] - b[sortingCriterion];
    } else {
      return a[sortingCriterion].localeCompare(b[sortingCriterion]);
    }
  });

  return tickets;
}

console.log(
  ticketDatabase(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);

/*
[ Ticket { destination: 'Boston',
    price: 126.20,
    status: 'departed' }, 
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'available' }, 
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'sold' }, 
  Ticket { destination: 'Philadelphia',
    price: 94.20,
    status: 'available' } ]
*/

console.log(
  ticketDatabase(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "status"
  )
);

/*
[ Ticket { destination: 'Philadelphia',
    price: 94.20,
    status: 'available' },
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'available' },
  Ticket { destination: 'Boston',
    price: 126.20,
    status: 'departed' },
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'sold' } ]
*/
