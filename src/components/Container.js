/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Container = ({ children }) => (
  <div css={styles} className="container">
    {children}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid red;
`;

export default Container;
