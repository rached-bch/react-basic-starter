import { expect } from "chai";
import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import App from "./App";
import GuessCount from "./GuessCount";
import Section from "./Section";
import Card from "./Card";

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);

    expect(wrapper).to.contain(<GuessCount guesses={0} />);
  });
});

describe("<Card/>", () => {
  it("Card should trigger its `onClick` prop when clicked", () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Card card="😀" feedback="hidden" onClick={onClick} />
    );

    wrapper.simulate("click");
    expect(onClick).to.have.been.callCount(1);
  });
});
