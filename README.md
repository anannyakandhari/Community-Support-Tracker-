What I Did

## Created the HTML form

Inputs for charity name, hours, date, and rating.

A submit button to save entries.

## Validated inputs with JavaScript

Charity name must not be empty.

Hours must be a positive number.

Date must be selected.

Rating must be between 1 and 5.

Shows error messages if something is wrong.
## Stored entries in a JavaScript array
## Displayed entries in a table

Each row shows the entry details.

Delete buttons remove the entry from both table and storage.
## Saved data using localStorage

## Problem i faced
Delete button did not work → added event listener for each button.

Total hours were not updating → fixed inside updateDisplay() after each change.

Errors did not show properly → added showError() and clearErrors().


