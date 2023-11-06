# ts-reserve-assets
This is a config file driven reservation system, written in React and typescript.

I started off as a desk booking system and then realised that it could be used for reserving books in a library, seats at a restaurant, car park places ...

The list of items presented to the user for selection has those previously reserved during the time period selected remove from choice.

Various example config files are given, any of them can be copied and changed.

The system does require that a start datetime and end datetime are given.

It presents the user with radio buttons to choose between the groups defined in the configuration file and then a pull-down list of items in the group to select.

An email address is used for the booking, and additional fields can be required e.g. registration numbers in the car park booking system.

The npm targets all_desks and all_books will run the backend and frontend in parallel.

SSL_CRT and SSL_KEY are required environmental variables e.g.

SSL_CRT=../certs/localhost.crt SSL_KEY=../certs/localhost.key npm run desk

MongoDB is used at the backend. The backend is another project here .. and presents a REST API to the MongoDB datastore.
