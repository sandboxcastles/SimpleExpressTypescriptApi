# SimpleExpressTypescriptApi
# VERY Basic API

This will not persist data after the api is closed down.

Initialize: `npm i`
Run: `npm start`

If you want to define any extra collections, see the other files in src/collections, and add another file similar to these. If you define items in the items array, they will be preloaded to you db when the project is loaded.
You can add an interface to define the type (like IJoke), or you can just use the 'any' keyword.
After you've defined collections, make sure to go into src/environment.ts and import these, like the jokes example.