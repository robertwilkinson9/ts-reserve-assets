# ts-reserve-assets
This is a config file driven reservation system.

I started off with a desk-booker and then realised that it could be used for reserving books in a library, seats at a restaurant ...

Various example config files are given, ut any of them can be copied and changef.

The system does require that a start datetime and end datetime are given.

It presents the user with radio buttons to choose between a number of groups and then a pull-down list of items in the group to select.

An email address is used for the booking.

MongoDB is used at the backend. The list of items presented to the user for selection has those previously reserved during the time period selected remove from choice.

The backend is another project here .. and presents a REST API to the MongoDB datastore.
