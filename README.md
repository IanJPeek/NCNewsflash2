## NC-News

NC News is a react application. It mimics a real news site, with similar formatting and functionality to existing forum sites such as Reddit. It contains articles on several main topics and can be sorted according to these. Articles can be viewed individually along with their comments, with both articles and comments able to be upvoted/ downvoted (and ordered according to these votes).

## Back-end Code :

https://github.com/IanJPeek/NC-News_Bend_Block_review

## Front-end Code :
https://github.com/IanJPeek/NCNewsflash2

## Deployed version :
https://nc-news-ianpeek.herokuapp.com

## Deployed Back-end version:
https://nc-news-ianp.herokuapp.com/api/articles

### Node requirement:
v12.10.0

#### To run:
1. Git clone the following link: https://github.com/IanJPeek/NCNewsflash2
2. 'cd' into the 'NCNewsflash2' repo
3. npm install
4. npm start
5. You will be logged in as default user "jessjelly" - all comments left will be under this username and only comments attached to this username can be deleted.

## As a user I can:

- View a list of all articles
- View a page for each topic, listing all articles associated with that topic
- View an individual article
- View comments on each individual article
- Sort articles by: date created (most recent), number of comments, and number of votes
- Sort an individual article's comments by number of votes/ when created.
- Post comments as "jessjelly" (the default user)
- Delete your own comments (jessjelly's)
- Upvote or downvote articles and see the corresponding vote change (this can be undone/ changed within +/- 1 range)
- Upvote or downvote comments and see the corresponding vote change (this can be undone/ changed within +/- 1 range)

- The site can be viewed on mobiles without loss of style or functionality
- Error messages are displayed for common errors (eg 404 for non-existent article/ path/ topic; 400 for invalid article ID)  or a default error message displays for others.
