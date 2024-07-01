
This is a config file driven reservation system, written in react and typescript and scaffolded using <a href="https://vitejs.dev/">vite</a>.

It started off as a desk booking system and then generalised to be used for reserving books in a library, seats at a restaurant, car park places ...

The list of items presented to the user for selection has those previously reserved during the time period selected remove from choice.

Various example config files are given, any of them can be copied and changed.

The system does require that a start datetime and end datetime are given.

It presents the user with radio buttons to choose between the groups defined in the configuration file and then a pull-down list of items in the group to select.

An email address is used for the booking, and additional fields can be required e.g. registration numbers in the car park booking system.

SSL_CRT and SSL_KEY are required environmental variables e.g.

<code>SSL_CRT=../certs/localhost.crt SSL_KEY=../certs/localhost.key npm run generic desk</code>

MongoDB is used at the backend. The backend is another project <a href="https://github.com/robertwilkinson9/ts-REST-api-for-mongodb">here</a>
