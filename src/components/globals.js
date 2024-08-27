export default class Globals {
    static default_style_page = "flex min-h-screen flex-col items-center pt-10 pb-2";

    static observer(load) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('init-hidden-off');
                }
            });
        }, {
            threshold: [0]
        });

        Array.from(document.querySelectorAll('.init-hidden')).forEach(element => {
            observer.observe(element);
        });

        setTimeout(() => load(false), 500);
    }
}