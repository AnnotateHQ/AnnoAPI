<h2 align="center">Cloaking</h2>

Our next feature allows you to hide the tab with fake sites.<br>
There are MANY functions and things in this.<br>

### function: getIcon()
returns the current site icon.<br>
example: `aapi.cloaker.getIcon()`

### function: getTitle()
returns the current site title.<br>
example: `aapi.cloaker.getTitle()`

### function: setIcon()
sets the current tab's icon to the provided link<br>
example: `aapi.cloaker.setIcon('https://annotate.lol/assets/logos/google.png')`<br>
example: `aapi.cloaker.setIcon('https://annotate.lol/assets/logos/classroom.png')`

### function: setTitle()
sets the current tab's title to the provided string<br>
example: `aapi.cloaker.setTitle('Google')`<br>
example: `aapi.cloaker.setTitle('Classes')`

### variable: presets
a list of presets programmed into AAPI automatically.<br>
these are used in `usePreset()`, and not normally in code.<br>
to get a list of presets, run `console.table(aapi.cloaker.presets)`<br>
to get a specific preset, use `aapi.cloaker.presets['google']` or `aapi.cloaker.presets['PRESET HERE']`.

### function: usePreset()
use a preset as defined in `aapi.cloaker.presets`. there are two formats:<br>
example: `aapi.cloaker.usePreset('google classroom')`<br>
example: `aapi.cloaker.usePreset(aapi.cloaker.presets['google'])`<br>
all presets can, again, be listed with `console.table(aapi.cloaker.presets)`.

### function: set()
set title & icon in one go.
examples:
```js
aapi.cloaker.set({ // google cloak
    title: 'Google',
    icon: 'https://annotate.lol/assets/logos/google.png'
});
aapi.cloaker.set({ // google classroom cloak
    title: 'Classes',
    icon: 'https://annotate.lol/assets/logos/classroom.png'
});
```

<br>
<br>
<div align="center">
    <a href="./4_aboutblank.md">Previous</a> | <a href="./6_panickey.md">Next</a>
</div>