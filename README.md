## Notes :-

- In package.json

  - scripts

  ```
      format : "prettier \"src/**/*.{js,html}\" --format"

      \" \" :- means prettier resolves what is inside rather BASH
      /**/* :- means any folder inside any folder
      --write :- means write the styles in files itself

  ```

  - To launch it `npm run format `

  - Note :- how bash actually executes script tags like eslint/parcel, bash doesnt know eslint/parcel right ?
  - => In node_modules there is a `.bin` file which has got eslint/parcel , it picks from there when scripts of package.json run.
#   M y - R e a c t - B o i l e r p l a t e  
 