/*
Write a program to extend a forum post record with voting 
functionality. It needs to have the options to upvote, downvote, 
and tally the total score (positive minus negative votes). 
Furthermore, to prevent abuse, if a post has more than 50 total 
votes, the numbers must be obfuscated – the stored values remain 
the same, but the reported amounts of upvotes and downvotes have
a number added to them. This number is 
25% of the greater number of votes (positive or negative), 
rounded up. The actual numbers should not be modified, 
just the reported amounts.

{
  id: <id>,
  author: <author name>,
  content: <text>,
  upvotes: <number>,
  downvotes: <number>
}
*/
