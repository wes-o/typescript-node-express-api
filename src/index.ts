// index.ts
// All required external modules
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

// All routes currently defined
import { itemsRouter } from "./routes/items.router";

// All middleware classes/functions defined
import { errorHandler } from "./middleware/error"

dotenv.config();
// App variables for express, PORT 
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

if (!process.env.PORT) {
    process.exit(1);
}

// Configuration for middleware functions from imported packages
// helmet is a collection of middleware functions that set HTTP response headers
// cors enables all CORS requests
// express.json parses 'requests' to express server, creates new 'body' object with parsed data
app.use(helmet());
app.use(cors());
app.use(express.json());

// Enpoint configuration using routes from './routes'
// the 'use()' function takes (optional path parameter, callbackFunction)
app.use("/items", itemsRouter);

// Middleware 'error.ts' KEEP in place. Add additional routes ABOVE. 
// 'errorHandler' closes connection by sending response back to client
app.use(errorHandler);

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// Additional HMR configuration for express server
// This enables updated modules for Webpack 
// When HMR is enabled, the 'module.hot' is available
// Then, 'accept()` updates or `dispose()` persistent resources
// The 'ngxs' project from Angular provides the following interface for HMR

type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
 }
