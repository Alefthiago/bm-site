export default class Globals {
    static default_style_page = "flex min-h-screen flex-col items-center pt-5";
    static observer() {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    switch (true) {
                        case entry.target.classList.contains('show-top'):
                            entry.target.classList.add('animate-fade-up');
                            break;
                        case entry.target.classList.contains('show-bottom'):
                            entry.target.classList.add('animate-fade-down');
                            break;
                        case entry.target.classList.contains('show-left'):
                            entry.target.classList.add('animate-fade-left');
                            break;
                        case entry.target.classList.contains('show-right'):
                            entry.target.classList.add('animate-fade-right');
                            break;
                    }
                    entry.target.classList.remove('invisible');
                }
            });
        }, {
            threshold: [0]
        });
    
        document.querySelectorAll('.show-top, .show-bottom, .show-left, .show-right').forEach(element => {
            observer.observe(element);
        });
    
        return () => {
            observer.disconnect();
        };
    }    
}