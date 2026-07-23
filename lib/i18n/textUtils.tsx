import { Fragment } from "react";

/** Splits a dictionary string on "\n" and renders each line separated by <br/>. */
export function withLineBreaks(text: string): React.ReactNode {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));
}
