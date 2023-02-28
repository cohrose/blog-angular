import "../App.scss";
import { CodeBlock, dracula } from "react-code-blocks";

function Grid(props) {
  const htmlcode = `<div class="grid">
  <div>Box One</div>
  <div>Box Two</div>
  <div>Box Three</div>
</div>`;
  const csscode = `/* default */
.grid {
    display: grid;
    grid-column-template: 1fr 1fr 1fr 1fr;
    gap: 30px;
}
/* large devices */
@media screen and (max-width: 1279px) {
    .grid {
        grid-column-template: 1fr 1fr 1fr;
        gap: 20px;
    }
}
/* medium devices */
@media screen and (max-width: 959px) {
    .grid {
        grid-column-template: 1fr 1fr;
        gap: 15px;
    }
}
/* small devices */
@media screen and (max-width: 599px) {
    .grid {
        grid-column-template: 1fr;
        gap: 10px;
    }
}
`;
  const showNumbers = props.width < 600 ? false : true;
  return (
    <div className="card">
      <h2>Grid</h2>
      <div className="text">Grid is an extremely powerful tool if you know how to use it properly.</div>
      <div className="text">
        You always want to make sure you're making your websites responsive, so don't forget to adjust the columns for
        each media size:
      </div>
      <div className="text">HTML</div>
      <CodeBlock text={htmlcode} language="html" showLineNumbers={showNumbers} wrapLines theme={dracula} />
      <div className="text" style={{ marginTop: "10px" }}>
        CSS
      </div>
      <CodeBlock text={csscode} language="css" showLineNumbers={showNumbers} wrapLines theme={dracula} />

      <div className="date">Feb 10, 2023</div>
    </div>
  );
}

export default Grid;
