export const getLang = () => {
    const lang = localStorage.getItem('lang');
    if (!lang){
        window.localStorage.setItem('lang','en')
        return 'en'
    }else {
        return lang
    }
}
