
function injectScript(file: string, tag: string)
{
    const node: Element = document.getElementsByTagName(tag)[0];
    const scriptElement: HTMLScriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'text/javascript');
    scriptElement.setAttribute('src', file);
    node.appendChild(scriptElement);
}

injectScript(chrome.runtime.getURL('/static/setSourceView.js'), "body");

