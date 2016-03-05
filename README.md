# mixmax-khaled
Khaledify your email messages with Mixmax

## Instructions
1. Clone the repository ``git clone https://github.com/karlding/mixmax-khaled.git``
2. Install dependencies using ``npm install``
3. Start ``npm start``

Add the slash command to Mixmax.

| Input Name            | Value                           |
|-----------------------|---------------------------------|
| Name                  | Khaledify                       |
| Command               | khaledify                       |
| Parameter placeholder | [not required]                  |
| Typeahead API URL     | http://localhost:9145/typeahead |
| Resolver API URL      | http://localhost:9145/resolver  |

On a side note, maybe I'm not understanding what slash commands are, but it was super awkward to make a no-parameter command. But maybe I'm just used to chat-bot commands.

## Tests
You can use [Postman](https://www.getpostman.com/) to test the API calls, or you can do things the old school way and use ``curl``. The endpoints are ``http://localhost:9145/resolver`` and ``http://localhost:9145/typeahead``.
