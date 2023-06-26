import English from './en.json';
import Ukrainian from './uk.json';

interface Language {
  lang: string,
  props: {
    nativeName: string,
    resource: unknown
  }
}

const languages: Array<Language> = [
  {
    'lang': 'en',
    props: {
      nativeName: 'English',
      resource: English
    }
  },
  {
    'lang': 'uk',
    props: {
      nativeName: 'Українська',
      resource: Ukrainian
    }
  }
];
export default languages;