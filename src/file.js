class File {
    element;
    link;
    fileName;

    constructor({ link, name }) {
        this.element = document.createElement('a');

        if (link) this.link = link;
        if (name) this.fileName = name;
    };

    setLink(link) {
        this.link = link;
    };

    setFileName(name) {
        this.fileName = name;
    };

    download() {
        if (!this.link || !this.fileName) return console.error('Missing either a link or file name for the AAPI download. Use setLink and setFileName to fix this error.');

        this.element.setAttribute('href', `data:text/html;charset=utf-8,` + encodeURIComponent(`<iframe width="100%" height="100%" style="border:0;position:absolute;left:0;top:0;" src="${this.link}"></iframe>`));
        this.element.setAttribute('download', this.fileName);
        this.element.click();
        this.element.remove();
    };
};

export default File;