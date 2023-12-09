<h2 align="center">File</h2>

The File API allows you to create a downloaded file with your proxy site iFramed.<br>
<br>
This one is a little harder to use, because it's a class and isn't already initiated like the others.<br>
To start off with the File API, create an instance:

```js
let file = new aapi.File();
```

You can also specify the file link (what the file shows) and the file name in the constructor:

```js
let file = new aapi.File({
    link: 'https://example.com'
});
```

```js
let file = new aapi.File({
    name: 'example-file.html'
});
```

```js
let file = new aapi.File({
    link: 'https://example.com',
    name: 'example-file.html'
});
```

### function: setLink(newLink)
sets the link embedded in the file.<br>
`file.setLink('https://example.com')`

### function: setFileName(newName)
sets the name of the file.<br>
`file.setName('example-file.html')`

### function: download()
downloads the file. without user permission, you can only download one file per page.

<br>
<br>
<div align="center">
    <a href="./6_panickey.md">Previous</a> | <a href="./8_storage.md">Next</a>
</div>