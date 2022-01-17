/**
 * @jest-environment jsdom
 */

import { describe, test, beforeEach, afterEach, expect } from "@jest/globals";
import {
  render,
  fireEvent,
  screen,
  waitFor,
  act
} from "@testing-library/react";
import { createRandomDuck } from "./services/random";
import Root from "./Root";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";

import { rest } from "msw";

const server = setupServer();

describe("IndexPage", () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test("App is rendered and request is mocked", async () => {
    const ducks = Array.from({ length: 50 }).map(() => createRandomDuck());

    server.use(
      rest.get("http://localhost/erp/test/duck", (req, res, ctx) => {
        return res(ctx.json(ducks));
      }),
      rest.delete("http://localhost/erp/test/duck/:duckId", (req, res, ctx) => {
        return res(ctx.json(ducks.find((d) => d.id === req.params.duckId)));
      })
    );

    const user = userEvent.setup();

    render(<Root />);

    const items = await waitFor(() => screen.getAllByRole("listitem"));
    expect(items.length).toEqual(ducks.length);

    const btn = screen.getAllByRole("button", { name: "free" });

    await waitFor(() => expect(btn.length).toEqual(ducks.length));

    await waitFor(() => user.click(btn[0]));
  });
});
