const marked = require("marked");
const _ = require(`lodash`);

// https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-transformer-plugin/#convert-yaml-into-json-for-storage-in-gatsby-nodes
async function onCreateNode({
  node,
  actions,
  createNodeId,
  createContentDigest,
  loadNodeContent,
}) {
  function transformObject(obj, id, type, content) {
    const mdNode = {
      obj,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type,
        content,
      },
    };
    createNode(mdNode);
    createParentChildLink({ parent: node, child: mdNode });
  }

  const { createNode, createParentChildLink } = actions;

  // only log for nodes of mediaType `text/markdown`
  if (node.internal.mediaType !== `text/markdown`) {
    return;
  }

  const content = await loadNodeContent(node);
  const marked_content = marked(content);

  //   marked_content.forEach((obj, i) => {
  const obj = marked_content;
  const i = 1;
  transformObject(
    obj,
    obj.id ? obj.id : createNodeId(`${node.id} [${i}] >>> MD`),
    _.upperFirst(_.camelCase(`${node.name} md`)),
    content
  );
}

exports.onCreateNode = onCreateNode;
