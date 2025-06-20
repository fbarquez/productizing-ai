import { useEffect } from 'react';

export default function LanguageToggle() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        includedLanguages: 'en,zh-CN,es,fr,de,ar,pt,ru',
      }, 'google_translate_element');
    };
  }, []);

  return (
    <div id="google_translate_element" style={{ position: 'fixed', top: '10px', right: '20px', zIndex: 1000 }}></div>
  );
}