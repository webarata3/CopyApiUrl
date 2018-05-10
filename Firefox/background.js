let blogLink = '';

chrome.browserAction.onClicked.addListener(tab => {
  const url = tab.url;
  const lastIndex = url.lastIndexOf('/');
  let displayUrl = url.substr(lastIndex + 1, url.length);

  // メソッドへのリンクの場合 .html と ()がURLに含まれるのでそれを除去する
  if (displayUrl.indexOf('.html') !== -1) {
    displayUrl = displayUrl.replace('.html', '');

    const bracketIndex = displayUrl.indexOf('(');
    displayUrl = displayUrl.substr(0, bracketIndex);
  }

  blogLink = `<code><a href="${url}">${displayUrl}</a></code>`;
  console.log(document.execCommand('copy'));
});

document.addEventListener('copy', e => {
  e.preventDefault();
  e.clipboardData.setData('text/plain', blogLink);
});
