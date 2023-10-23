class Blank {
    window;

    constructor() {};

    openContent(text, disableClose = false) {
        if (!disableClose) this.window?.close();
        this.window = window.open(null, '_blank');
        this.window.document.write(text);
        return this.window;
    };

    open({
        title = 'Error',
        icon = '',
        frame = '',
        disableClose = false
    }) {
        return this.openContent(`<html><head><title>${title}</title><link rel="icon" href="${icon}"></head><body style="margin:0;"><iframe src="${frame}" width="100%" height="100%" style="border:none;" /></body></html>`, disableClose);
    };

    close() {
        this.window?.close();
        return this.window;
    };
};

const blank = new Blank();
export default blank;