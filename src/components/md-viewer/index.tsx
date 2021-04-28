import "highlight.js/styles/github.css";

const MdViewer = ({ children }) => {
  return <div dangerouslySetInnerHTML={{ __html: children }}></div>;
};

export default MdViewer;
