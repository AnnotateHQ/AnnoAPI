<h2 align="center">Panic Key</h2>

This feature allows users to quickly switch to a saved site when needed.<br>
This will prevent detection from teachers walking around.

### function: getKey()
returns the current panik key

### function: getLink()
returns the current panik link

### function: setKey()
sets the panik key<br>
example: `aapi.panic.setKey('e')`<br>
note: this key is checked against the `key` properety of a keydown event.

### function: setLink()
sets the panik link<br>
example: `aapi.panic.setKey('https://classroom.google.com')`<br>
example: `aapi.panic.setKey('classroom.google.com')`<br>
the above two do the same thing. the below example will search google for the text.<br>
example: `aapi.panic.setKey('google classroom')`<br>

### function: get()
get the panik key and the panik link together<br>
example: `let { key, link } = aapi.panic.get();`

### function: set()
set the panik key and link in one go<br>
example: `aapi.panic.set({ key: 'e', link: 'classroom.google.com' })`

### function: force()
force the panic key to trigger, even if it wasn't clicked.<br>
example: `aapi.panic.force()`

<br>
<br>
<div align="center">
    <a href="./5_cloaking.md">Previous</a> | <a href="./7_file.md">Next</a>
</div>