import { expect } from "chai";
import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";

import App from "./App";
import GuessCount from "./GuessCount";
import Section from "./Section";
import Card from "./Card";

describe("<Card/>", () => {
  it("Card should trigger its `onClick` prop when clicked", () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Card card="😀" feedback="hidden" onClick={onClick} />
    );

    wrapper.simulate("click");
    expect(onClick).to.have.been.callCount(1);
  });

  it("should match its reference snapshot", () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
    );

    expect(wrapper).to.matchSnapshot();
  });
});
