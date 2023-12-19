class Cloaker {
    title;
    icon;

    constructor(title = document.title, icon = this.getIcon()) {
        this.title = title;
        this.icon = icon;
    };

    getIcon() {
        let siteFavicons = [...document.querySelectorAll('link')].filter(a => a.rel === 'icon' || a.rel === 'shortcut icon');
        if (siteFavicons.length) return siteFavicons.length > 1 ? siteFavicons.map(a => a.href) : siteFavicons[0].href;
        else return '/favicon.ico';
    };

    getTitle() {
        if (this.title !== document.title) this.title = document.title;
        return this.title;
    };

    setTitle(title) {
        if (this.getTitle() === title) return;
        document.title = title;
        return this.getTitle();
    };

    setIcon(icon, id = 'annoicon', rel = 'icon') {
        [...document.querySelectorAll('link')]
            .filter(a => a.rel === 'icon' || a.rel === 'shortcut icon')
            .forEach(a => a.remove());

        const link = document.createElement('link');
        link.rel = rel;
        link.id = id;
        link.href = icon;
        document.head.appendChild(link);

        return document.querySelector('#' + id);
    };

    presets = {
        'google classroom': {
            title: 'Classes',
            icon: 'https://annotate.lol/assets/logos/classroom.png'
        },
        'google': {
            title: 'Google',
            icon: 'https://annotate.lol/assets/logos/google.png'
        },
        'google docs': {
            title: 'Google Docs',
            icon: 'https://annotate.lol/assets/logos/docs.ico'
        },
        'google drive': {
            title: 'Google Drive',
            icon: 'https://annotate.lol/assets/logos/drive.png'
        }
    };

    usePreset(preset) {
        if (typeof preset === 'string') {
            if (this.presets[preset]) preset = this.presets[preset];
            else return false;
        };
        this.setIcon(preset.icon);
        this.setTitle(preset.title);
        return {
            title: this.getTitle(),
            icon: this.getIcon()
        };
    };

    set({ title, icon }) {
        this.setTitle(title);
        this.setIcon(icon);
        return {
            title: this.getTitle(),
            icon: this.getIcon()
        };
    };
};

const cloaker = new Cloaker();
export default cloaker;