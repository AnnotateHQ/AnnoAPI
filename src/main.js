import aboutblank from './blank.js';
import cloaker from './cloak.js';
import file from './file.js';
import panic from './panic.js';
import storage from './storage.js';

(() => {
    let frame = document.createElement('iframe');
    frame.src = 'about:blank';
    frame.style = 'visibility:none;width:1px;height:1px;z-index:-99999999;';
    document.body.appendChild(frame);
    frame.contentWindow.console.log(`\n\n\t\t%cAnnotate API has loaded!%c\n\t\t\tVersion: 1.0.0\n\t\t\tMore Information: https://github.com/AnnotateHQ/AnnoAPI\n\n\n`, 'font-size:20px;color:red;font-family:\'Monaco\';', '');
    frame.remove();
})();

window.aapi = {
    aboutblank,
    cloaker,
    file,
    panic,
    storage
};