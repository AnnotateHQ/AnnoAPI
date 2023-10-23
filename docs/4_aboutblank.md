<h2 align="center">about:blank</h2>

We have an advanced wrapper for about:blank.

### function: openContent
Params: 
```md
text<string> - the HTML to embed in the about:blank window.
disableClose<bool> - [default: false] allows you to disable closing other about:blank windows, which it does automatically.
```
Examples:
```js
aapi.aboutblank.openContent(`<h1>this will be embedded in the about:blank window</h1>`);
// ^^ basic usage
aapi.aboutblank.openContent(`<h1>this will open a window but not close other about blank windows open</h1>`, true);
// ^^ usage with disableClose
```
### function: open
> [!NOTE]
> Content of open() will be templated and sent to openContent.

Params:
```md
data<json> - all the data, in JSON format due to many params
    title<string> - [default: "Error"] the tab title
    icon<string> - a link to the tab's favicon (may not work)
    frame<string> - a link to the frame embedded
    disableClose<bool> - the same thing as openContent()
```
Examples:
```js
aapi.aboutblank.open({
    title: '404', // tab title
    icon: '', // no icon
    frame: 'https://annotate.lol' // a fullscreen iframe to annotate.lol
});
// ^^ basic example
aapi.aboutblank.open({
    title: 'Google', // mimicking google
    icon: 'https://annotate.lol/assets/logos/google.png', // mimicking google icon
    frame: 'https://annotate.lol', // fullscreen iframe to annotate.lol
    disableClose: true // passes to openContent, doesn't close other about:blank windows when this is opened
})
// ^^ advanced example
```

<br>
<br>
<div align="center">
    <a href="./3_basics.md">Previous</a> | <a href="./5_cloaking.md">Next</a>
</div>