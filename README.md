# RESTAR-CodingExercise
Source code for the Coding Exercise &amp; Assessment

## Quick Start in Terminal

1. `nvm use`: Install correct node version
2. `npm install`: Install dependencies and build production example
3. `npm run dev`: Run local development instance

## Boilerplate Code
The following files were set up using my 'basic' website scaffolding template. I use this for all of my mini projects and experiments, and was written prior to this exercise:

- Routing Structure using `react-router`

The rest was provided by `Vite.js` default React/Typescript project scaffolding.

## Project Files

### Upload Page

> Given a CSV File in the provided format, process the data and return a JSON object in the data object notation provided.

#### Type Definition
- API Type definitions specific to this project can be found in `types/api.d.ts`

#### Uploader Behavior and LocalStorage
Because this is a static-hosted website with no live backend, I have leveraged local browser LocalStorage to persist uploaded files in memory for demonstration purposes. I have noted where such code would be best handled server-side if this were a production-ready application.

## Page: Upload Properties CSV - `/`

The root of this project contains the CSV Uploader logic. This module:

- Allows uploading of CSV files
- Processes the file in the required formats using strict typing and translation definitons
- Saves the data to LocalStorage in an "api-like" fascade
- Confirms successful save of data with links to view the proprties JSON "endpoint"

## Page: View Properties "API" - `/property` or `/property?id=<property_id>`

- This is a simulated API endpoint which allows you to view the uploaded data in the correctly translated JSON format.
- If an ID is provided, it will show only the values for that property ID.


## Key files and Application Structure Breakdown:

### Definitions:

- *module*: A unique element, often used a high-level, and intended to be a singleton (unique entity) within the application. In this example, the business-logic processing of the PropertyData is handled within a *module*.
- *component*: An element which is intended to be generic enough to allow multiple instances within a single view. Buttons, form elements, menus, and so on are *components*.
- *page*: A unique entry point into the application, intended to be matched with a URL Route.
- *hooks*: React-specific modules which use a highly testable design pattern, which decouples view logic from business logic.
- *helpers*: Non-React utility scripts which enable key functionality. 
- *data*: Static data in JSON format. In this example, this holds the `JP <-> EN` translations.
- *types*: Contains all of the Typescript definitions, and is separated by generic global defs and api-specific defs. 

#### `components/CSVUploader.tsx`
Contains all of the logic and form HTML which passes up an `onFileUpload` method, which allows a higher-level component to process application-specific logic. This design pattern allows for efficient unit testing that is completely decoupled from the business logic or XHR browser-specific behavior.

#### `modules/PropertyDataManager.tsx`
This module contains all of the business logic for recieving and processing the uploaded CSV data.

#### `hooks/useDataLoader.tsx`
This hook contains all of the logic around getting, setting, and efficiently storing in memory the Property Data into LocalStorage.


# Notes

### Research & Resources

- [Japanese Postal Address Primer](https://www.realestate-tokyo.com/living-in-tokyo/japan-info/japanese-address/)
- [Translation Help](https://jisho.org)
