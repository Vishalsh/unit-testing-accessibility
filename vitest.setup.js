import * as matchers from "vitest-axe/matchers";
import { expect } from "vitest";
expect.extend(matchers);

HTMLCanvasElement.prototype.getContext = () => {
  // return whatever getContext has to return
};
