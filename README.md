# boreholeUI
Angular UI to create and view boreholes, this was created as an experiment to play with using an Angular reactive form over a templated one and a few outher intrest areas. 

It is designed to work with the [BoreholeAPI](https://github.com/ro5635/boreholeapi) Node API that is avalible on github.

The design for this could do with some serious refactoring to improve the modeling of boreholes within the system, the differnt sub-type's of borehole are currrently just handled by optional parameters on the Borehole.ts class, this could be vastly improved by using sub-classes...

Live deployment: [live deployment](https://static.robertcurran.co.uk/borehole/)

### Add

Create a new Borehole, step through the stepper process and hit save at the end. Once this is done you will be able to go to the search utility and search for the **exact** borehole ID that you created.

### Search 

Load a borehole that you have previusly created, this is not so much as a 'Search' feature as a load by ID...

#### Next Tasks
- [ ] Refactor Modeling of Borehole within system
- [ ] Refactor Error handaling with service
- [ ] Build out UI with enhanced navigation
- [ ] Add ability to edit failed borehole creation request
- [ ] Check for ID colision on borehole creation form after ID text input compleated
