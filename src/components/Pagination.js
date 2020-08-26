/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const numbers = [];
  for(let i = 1; i <= Math.ceil( totalPosts / postsPerPage); i++) {
    numbers.push(i)
  }
    return(
        <nav>
          <ul>
            {numbers.map(num => (
              <li key={num}>
                <a onClick={() => paginate(num)}href="!#">{num}</a>
              </li>
            ))}
          </ul>
        </nav>
    );
};

export default Pagination;