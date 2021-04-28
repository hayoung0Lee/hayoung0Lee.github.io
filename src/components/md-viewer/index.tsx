import "highlight.js/styles/github.css";

const MdViewer = ({ children }) => {
  return (
    <div
      className={"mdViewer"}
      dangerouslySetInnerHTML={{ __html: children }}
    ></div>
  );
};

export default MdViewer;
