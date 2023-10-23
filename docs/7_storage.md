<h2 align="center">Storage</h2>
a wrapper of the localStorage api, for skids!<br>
<br>
the storage works with KEYS and VALUES. the keys are ALWAYS strings. the values can be numbers or strings, or stringified json.

### function: get()
get something from the storage<br>
example: `aapi.storage.get('randomSettingName')`

### function: set()
set something in the storage<br>
this is also how you add something to the storage<br>
example: `aapi.storage.set('randomSettingName', 'randomSettingContent')`

### function: remove()
remove something from the storage<br>
example: `aapi.storage.remove('settingThatWeDoNotNeedAnymore')`

### function: clear()
clears the storage. this **cannot** be undone.<br>
example: `aapi.storage.clear()`

### function: all()
get everything in the storage<br>
example: `aapi.storage.all()`

### function: refresh()
you probably don't need this. it syncs the storage with localStorage.<br>
example: `aapi.storage.refresh()`

<br>
<br>
<div align="center">
    <a href="./6_panickey.md">Previous</a> | <a href="./8_goodbye.md">Next</a>
</div>