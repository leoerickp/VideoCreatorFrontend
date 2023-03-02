import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ButtonLike } from "../../src/components/ButtonLike";
describe("<ButtonLike/> component test", () => {
  test("should be show like icon", () => {
    render(<ButtonLike isLiked={false} videoId={""} />);
    const button = screen.getByRole("button");
    fireEvent.mouseOver(button);
    //console.log(button);
    //screen.debug();
    expect(screen.getByRole("img")).toBeTruthy();
  });
});
