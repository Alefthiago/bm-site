export default class Globals {
    static default_style_page = "flex min-h-screen flex-col items-center pt-10 pb-2";
    static observer() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    if (entry.target.classList.contains('show-top')) {
                        entry.target.classList.add('animate-fade-up');
                    } else if (entry.target.classList.contains('show-bottom')) {
                        entry.target.classList.add('animate-fade-down');
                    } else if (entry.target.classList.contains('show-left')) {
                        entry.target.classList.add('animate-fade-left');
                    } else {
                        entry.target.classList.add('animate-fade-right');
                    }
                    entry.target.classList.remove('invisible');
                }
            });
        }, {
            threshold: [0]
        });

        Array.from(document.querySelectorAll('.show-top, .show-bottom, .show-left, .show-right')).forEach(element => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }
}