# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Design & Review Document for Ticket Breakdown

## Goal
We have to add possibility to add custom identifier for our Agents by Facilities. We have seperate tables for Agents, Shifts and Objects. We have function - getShiftsByFacility which need facility's id to generate all shifts worked that quarter. We have generateReport function which converts shifts into PDF file.

## Plan
#### Ticket 1: Update Facility model and database schema

**Description:**
To enable Facilities to save their own custom IDs for each Agent, we need to update the Facility model and modify the corresponding database schema.

**Acceptance Criteria:**
The Facility model should have a new field named "custom_agent_ids" to store the custom IDs for Agents.
The Facility database table should be updated to include the "custom_agent_ids" column.

*Effort Estimate:* 2 hours

**Implementation Details:**
Update the Facility model definition to include a new field, "custom_agent_ids," which should be a list or array type.
Modify the database schema to add a new column named "custom_agent_ids" to the Facility table.
Migrate the database schema to reflect the changes.


#### Ticket 2: Update Agent model and database schema

**Description:**
To support custom IDs for Agents, we need to update the Agent model and modify the corresponding database schema.

**Acceptance Criteria:**
The Agent model should have a new field named "custom_id" to store the custom ID provided by Facilities.
The Agent database table should be updated to include the "custom_id" column.

*Effort Estimate*: 2 hours

**Implementation Details:**
Update the Agent model definition to include a new field, "custom_id," which should be a string or integer type.
Modify the database schema to add a new column named "custom_id" to the Agent table.
Migrate the database schema to reflect the changes.


#### Ticket 3: Update getShiftsByFacility function to include custom Agent IDs

**Description:**
The getShiftsByFacility function needs to be modified to include the custom Agent IDs in the Shifts data retrieved for a Facility.

**Acceptance Criteria:**
Modify the getShiftsByFacility function to retrieve the custom Agent IDs for each Shift.
Update the returned Shifts data structure to include the custom Agent IDs.

*Effort Estimate:* 3 hours

**Implementation Details:**
Modify the getShiftsByFacility function to join the Agent table with the Shifts table and retrieve the custom IDs.
Update the data structure of the returned Shifts to include the custom Agent IDs alongside other metadata.


#### Ticket 4: Update generateReport function to use custom Agent IDs

**Description:**
The generateReport function should be updated to utilize the custom Agent IDs instead of the internal database IDs when generating reports for Facilities.

**Acceptance Criteria:**
Modify the generateReport function to replace the internal database IDs with the custom Agent IDs in the generated reports.

*Effort Estimate:* 3 hours

**Implementation Details:**
Update the generateReport function to access and use the custom Agent IDs from the Shifts data.
Replace the usage of internal database IDs with the corresponding custom Agent IDs when generating the report.


#### Ticket 5: Update report PDF format and template

**Description:**
The report PDF format and template need to be updated to include the custom Agent IDs alongside other Shift information.

**Acceptance Criteria:**
Modify the report PDF format and template to display the custom Agent IDs.
Ensure the custom Agent IDs are appropriately positioned and formatted within the report.

*Effort Estimate:* 4 hours

**Implementation Details:**
Update the report PDF generation code to include the custom Agent IDs in the generated PDF.
Modify the report template to accommodate the additional field for custom Agent IDs.
Adjust the layout and formatting of the report to display the custom Agent IDs clearly and consistently.
