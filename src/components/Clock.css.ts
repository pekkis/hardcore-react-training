import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const clock = style({
  marginBlock: theme.spacing.m,
  padding: theme.spacing.m,
  border: "10px solid rgb(0 0 0)",
  borderRadius: "5px"
});

export const nightTime = style({
  backgroundColor: "rgb(0 0 0)",
  color: "rgb(255, 255, 255)"
});

/*
.clock {
  border: 10px solid rgb(0 0 0);
  padding: 1rem;
  margin-block: 1rem;
  border-radius: 5px;
}
*/
