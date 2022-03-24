console.log("injected");
const node = document.createElement("button");
node.innerHTML="test";
node.style.top="0px";
node.style.right="10px";
node.style.position="absolute";
node.style.zIndex="1"
document.body.appendChild(node);