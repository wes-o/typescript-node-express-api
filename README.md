# typescript-node-express-api

> *Includes support for Typescript, Webpack + HMR, express middleware, and authentication*

TL;DR

This project can be used as a *development* tool for testing client-side requests to an Express server.

## Greetings

If you are reading this, you have taken a step into the world of Typescript. A wonderful *superset* of the Javascript language.

This `README` will guide you through creating an express server quickly in the project repository directory.

## To quickly get started

Open a terminal on your computer and run:

```bash
git clone https://github.com/wes-o/typescript-node-express-api && cd typescript-node-express-api
mv .env.example .env
npm install
npm run webpack
npm start
```

Happy Express-ing! :computer:

---

## Additional Information

> Would you like to customize the project repository from scratch?

```bash
npm init -y
```

> Install project dependencies for express server

```bash
npm install express dotenv cors helmet
```

> Install a stable version of Typescript as DevDependency

```bash
npm install -D typescript
```

> Type definitions are needed for using Typescript effectively

```bash
npm install -D @types/node @types/express @types/dotenv @types/cors @types/helmet
```

> Dependencies for using Webpack and Typescript

```bash
npm install -D ts-loader webpack webpack-cli webpack-node-externals
```

_N.B._

A default `tsconfig.json` file is included. However, to generate new run: `npx tsc --init`.

A sample `example.env` file is included. Environmental vars should be changed to a personal auth token.

A reasonable `webpack.config.ts` file with Hot Module Replacement (HMR) is included.

For additional customization of Webpack see [docs](https://webpack.js.org/configuration/configuration-languages#typescript)

## Typescript

In the Typescript language, `<type>` is the name of the game. The structure of a Typescript project reflects this core specification:

- In a `Class` or `Interface` we define and enforce the structure of objects in project.

> this will enable us to define custom `<type>`

Overall, *Interfaces will not be part of the compiled bundle from Webpack*

If you require an instance of an object a *class* should be used instead.

### Future Improvements

- [ ] Add support for persistent data from PostgreSQL, MongoDB, etc
- [ ] Include test coverage with Jest
- [ ] User Interface for visual acuity-minded individuals

### References

- <https://typescriptlang.org>
- <https://expressjs.com/en/guide/>
- <https://webpack.js.org/configuration/configuration-languages#typescript>
