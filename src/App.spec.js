import { expect } from "chai";
import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import App from "./App";
import GuessCount from "./GuessCount";
import Section from "./Section";
import Card from "./Card";

describe("<App/>", () => {
  it("should match its reference snapshot", () => {
    const wrapper = shallow(<App />);

    expect(wrapper).to.matchSnapshot();
  });
});
