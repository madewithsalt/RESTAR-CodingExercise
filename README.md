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

### View Page

This is a simple view which allows you to view the data uploaded, and a list of files in memory that were uploaded.



# Notes

### Research & Resources

- [Proper Japanese Address Formatting](https://www.post.japanpost.jp/int/use/writing/normal_en.html)
- [Translation Help](https://jisho.org)
