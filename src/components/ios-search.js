import "../App.scss";
import { CodeBlock, dracula } from "react-code-blocks";

function IOSsearch(props) {
  const code = `<input 
  (keyup.enter)='search()' 
  (keyup.shift.enter)='search()' 
  type="text"
/>`;
  const showNumbers = props.width < 600 ? false : true;
  return (
    <div className="card">
      <h2>"return" not working on IOS input</h2>
      <div className="text">
        On Apple IOS mobile devices, by default, the shift key is automatically selected. Therefore,{" "}
        <code>keyup.enter</code> will not capture the "enter" command.
      </div>
      <div className="text">To fix this, you will need to combine the "shift" and "enter" key capture:</div>
      <CodeBlock text={code} language="html" showLineNumbers={showNumbers} wrapLines theme={dracula} />
      <div className="date">Feb 25, 2023</div>
    </div>
  );
}

export default IOSsearch;
