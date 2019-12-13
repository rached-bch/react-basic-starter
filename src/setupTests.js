// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

import Adapter from "enzyme-adapter-react-16";
import chai from "chai";
import { configure as configureEnzyme } from "enzyme";
import createChaiEnzyme from "chai-enzyme";
import createChaiJestDiff from "chai-jest-diff";
import dirtyChai from "dirty-chai";

chai
  .use(dirtyChai)
  .use(createChaiJestDiff())
  .use(createChaiEnzyme());

configureEnzyme({ adapter: new Adapter() });
