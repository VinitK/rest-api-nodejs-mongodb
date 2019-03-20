# Steps to CRUD using the API endpoints:

### GET

In browser open the following URL to view all players information from PLAYERS collection of IPLDB.

https://rest-api-demo-wpkmez.turbo360-vertex.com/api/players

In browser open the following URL to view all players information from PLAYERS collection of IPLDB.

https://rest-api-demo-wpkmez.turbo360-vertex.com/api/teams

### POST

To Post a document in TEAMS Collection run the following in the command prompt:

`curl -H 'content-type:application/json' -X POST -d '{"name":"Rajasthan Royals","city":"Jaipur","won":5}' https://rest-api-demo-wpkmez.turbo360-vertex.com/api/teams`

To Post a document in PLAYERS Collection run the following in the command prompt:

`curl -H 'content-type:application/json' -X POST -d '{"firstname":"Sachin","lastname":"Tendulkar","type":"all rounder","age":40,"team":"Mumbai Indians"}' https://rest-api-demo-wpkmez.turbo360-vertex.com/api/players`

### PUT

Get the id of the TEAM to update and replace <team id> with it and then run the following in command prompt

`curl -H 'content-type:application/json' -X PUT -d '{"name":"Rajasthan Royals","city":"Rajasthan","won":6}' https://rest-api-demo-wpkmez.turbo360-vertex.com/api/teams/<team id>`

Get the id of the PLAYER to update and replace <player id> with it and then run the following in command prompt

`curl -H 'content-type:application/json' -X PUT -d '{"firstname":"Sachin","lastname":"Tendulkar","type":"batsman","age":41,"team":"Mumbai Indians"}' https://rest-api-demo-wpkmez.turbo360-vertex.com/api/teams/<player id>`

### DELETE

Get the id of the TEAM to update and replace <team id> with it and then run the following in command prompt

`curl -H 'content-type:application/json' -X DELETE https://rest-api-demo-wpkmez.turbo360-vertex.com/api/teams/<team id>`

Get the id of the PLAYER to update and replace <player id> with it and then run the following in command prompt

`curl -H 'content-type:application/json' -X DELETE https://rest-api-demo-wpkmez.turbo360-vertex.com/api/teams/<player id>`
