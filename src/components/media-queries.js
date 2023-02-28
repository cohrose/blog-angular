import "../App.scss";
import { CodeBlock, dracula } from "react-code-blocks";

function MediaQueries(props) {
  const code = `/* small devices */
@media screen and (max-width: 599px) {}
/* medium devices */
@media screen and (max-width: 959px) {}
/* large devices */
@media screen and (max-width: 1279px) {}`;
  const showNumbers = props.width < 600 ? false : true;
  return (
    <div className="card">
      <h2>Media Queries</h2>
      <div className="text">
        When making responsive websites, you want to be consistant with your media queries so everything collapses at
        the same time.
      </div>
      <div className="text">Common breakpoints are as follows:</div>
      <CodeBlock text={code} language="css" showLineNumbers={showNumbers} wrapLines theme={dracula} />
      <div className="date">Feb 20, 2023</div>
    </div>
  );
}

export default MediaQueries;
