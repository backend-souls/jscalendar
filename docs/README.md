# RFC 8984

## JSCalendar: A JSON Representation of Calendar Data

The speciﬁ cation deﬁ nes a data model and JSON representation of calendar data that can be
used for storage and data exchange in a calendaring and scheduling environment.


### Nomenclature

#### Builders
- add*(): Add a map/array to the object
- with*(): Set a optional value to the object
- set*(): Set a required value to the object
- from*(): Set a value from mutually exclusive options
- build(): Return the object

### Initial Objectives

1. Create types for JSCalendar data model
2. Create database migrations for the JSCalendar data model (?)
  - Create the Drizzle database migrations
  - Generate SQL for PostgreSQL
  - Create an Docker image for the database migrations
  - Create an Github Action for the database migrations
3. Create a DDD layer for the JSCalendar data model (policy, custom operations) (?)
4. Create a REST API for the JSCalendar data model (?)
  - NestJS

### Notes

- About object creation (Event, Task, Group):
  - We are going to consider:
    - "canonical object" (where the values comes strictly from RFC-8984 default values)
    - "default object" (where the values comes from the mainteners)
    - "custom object" (where the values comes from the developers, the custom options should provide configuration
      via environment variables or a configuration file with prefixed variables: JSCALENDAR_***)
  - Create a method factory for each object (only function or class with static method?)
  - Create a builder for each object (create a fat builder with all properties or a builder for each property?)
    - an option to accept canonical, default or custom objects as initial values should be provided
  - Whats the relation? Should I make then completely independent? Is the factory and builder enough?
