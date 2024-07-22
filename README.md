# RESTAR-CodingExercise
Source code for the Coding Exercise &amp; Assessment

## Quick Start in Terminal

1. `nvm use`: Install correct node version
2. `npm install && npm build`: Install dependencies and build production example
3. `npm start`: Run local production instance

## Boilerplate Code
The following files were set up using my 'basic' website scaffolding template. I use this for all of my mini projects and experiments, and was written prior to this exercise:

- Routing Structure using `react-router`
- `useMountedState.ts`: page render stability, useful for pages with long load times that can be interrupted, such as when uploading files. 

The rest was provided by `Vite.js` default React/Typescript project scaffolding.

## Project Files

### Upload Page

> Given a CSV File in the provided format, process the data and return a JSON object in the data object notation provided.

#### Type Definition
- API Type definitions specific to this project can be found in `types/api.d.ts`

#### Uploader Behavior and LocalStorage
Because this is a static-hosted website with no live backend, I have leveraged local browser DataStorage to persist uploaded files in memory for demonstration purposes. I have noted where such code would be best handled server-side if this were a production-ready application.

## Page: Upload Properties CSV - `/upload`

## Page: View Properties "API" - `/property` or `/property?id=<property_id>`

- This is a simulated API endpoint which allows you to view the uploaded data in the correctly translated JSON format.
- If an ID is provided, it will show only the values for that property ID.


# Notes

### Research & Resources

- [Japanese Postal Address Primer](https://www.realestate-tokyo.com/living-in-tokyo/japan-info/japanese-address/)
- [Translation Help](https://jisho.org)
