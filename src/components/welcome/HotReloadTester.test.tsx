import { render } from "@testing-library/react";
import HotReloadTester from "./HotReloadTester";
import { describe, it, expect } from "vitest";

describe("<HotReloadTester />", () => {
  it("will render", async () => {
    const { container } = render(<HotReloadTester />);
    expect(container).toHaveTextContent("reloading");
  });

  it("will assert true to be false", () => {
    expect(true).toBe(false);
  });
});
