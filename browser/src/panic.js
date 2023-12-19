class Panic {
    key;
    link;

    constructor(key = '`', link = 'https://google.com') {
        this.key = key;
        this.link = link;

        document.body.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === this.getKey().toLowerCase()) {
                const url = /^(http(s)?:\/\/)?([\w-]+\.)+[\w]{2,}(\/.*)?$/.test(this.getLink()) ?
                    ((!this.getLink().startsWith('http://') && !this.getLink().startsWith('https://')) ? 'https://' + this.getLink() : this.getLink()) :
                    'https://google.com/search?q=' + encodeURIComponent(this.getLink());
                top.location.href = url;
            };
        });
    };

    getKey() {
        return this.key;
    };

    getLink() {
        return this.link;
    };

    setKey(key) {
        this.key = key;
        return this.key;
    };

    setLink(link) {
        this.link = link;
        return this.link;
    };

    get() {
        return {
            key: this.getKey(),
            link: this.getLink()
        };
    };

    set({ key, link }) {
        this.setKey(key);
        this.setLink(link);
        return {
            key: this.getKey(),
            link: this.getLink()
        };
    };

    force() {
        const url = /^(http(s)?:\/\/)?([\w-]+\.)+[\w]{2,}(\/.*)?$/.test(this.getLink()) ?
            ((!this.getLink().startsWith('http://') && !this.getLink().startsWith('https://')) ? 'https://' + this.getLink() : this.getLink()) :
            'https://google.com/search?q=' + encodeURIComponent(this.getLink());
        top.location.href = url;
    };
};

const panic = new Panic();
export default panic;