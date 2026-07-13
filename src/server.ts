// src/server.ts
import { AngularAppEngine, createRequestHandler } from '@angular/ssr';

const appEngine = new AngularAppEngine();

export default createRequestHandler((req) => {
  return appEngine.handle(req);
});