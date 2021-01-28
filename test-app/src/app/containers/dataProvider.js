import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';
import fakeDataProvider from 'ra-data-fakerest';

//dataProvider={jsonServerProvider('mongodb://127.0.0.1:27017')}

// fake data base for testing
const dataProvider = fakeDataProvider({
  Exponate: [
    {
      _id: 'Kg 31:21',
      category: 'Kunst und Kulturgeschichte',
      sub_category: 'Archäologie/Vor- und Frühgeschichte',
      title: 'Goldfibel von Mölsheim',
      picture: [
        {
          $oid: '5ff98892ccd2776f571d6c1a',
        },
      ],
      description:
        'Stilistisch datieren vor allem die Goldfiligranarbeiten in den Flächen der Vierpassform die Prunkfibel in die Zeit um 630/640–680 n. Chr. und legen eine Herstellung im westfränkischen Raum (Burgund?) nahe. Der zentral angebrachte Kameo – ein erhaben geschnittener Achat in Form eines Gorgonenhauptes – wurde von dem Goldschmiedemeister sicherlich in dem Wissen, dass es sich hierbei um ein antikes Kleinod aus hellenistischer Zeit handelte, wiederverwendet. Heute scheint es sehr wahrscheinlich, dass er aus derselben alexandrinischen Steinschneidewerkstatt stammt, aus der als bestes Vergleichsstück die bekannte Tazza Farnese, heute im Museo Archeologico Nationale in Neapel, mit einem ebenso ausgezeichnet geschnittenen Kameo hervorgegangen ist. (A. Z.)',
      additional_information:
        'Ein Landwirt fand die heute weltweit bekannte Filigranscheibenfibel im Jahr 1930 beim Anlegen eines Weinbergs ohne Grabkontext und damit ohne Hinweis darauf, welche adelige Frau sie getragen, geschweige denn, wo und von wem sie hergestellt wurde. Motiviert durch den sensationellen Fund unternahm das Hessische Landesmuseum Darmstadt in den Jahren 1931 und 1935 Grabungen, die einen frühmittelalterlichen Reihengräberfriedhof zutage brachten.',
      interdisciplinary_context: 'Themen: Kunsthandwerk',
      year: 'Fibel: um 630/40–680, Kameo:\nspätes\n2. Jahrhundert v. Chr.',
      art_type: 'Kunsthandwerk; Fibel',
      creator: 'unbekannt',
      material:
        'Fibel: Gold, Bronze, Perlen, Glas- und Edelsteine; \nKameo: Achat',
      size_: 'Durchmesser: 8,3 cm',
      location: 'Fundort: Landkreis Alzey-Worms',
    },
  ],
  Touren: [
    {
      _id: {
        $oid: '600024333c43791d7831f306',
      },
      name: 'Tour1',
      search_id: 'xxxxx',
      description: 'This is such an awesome tour',
      session_id: 420,
      owner: {
        username: 'Anna',
      },
      user: [
        {
          username: 'Vilja',
        },
        {
          username: 'Cosima',
        },
      ], 
      difficulty: 5,
      status: 'privat',
      lastEdit: '2020-01-01',
    },
  ],
  Benutzer: [
    {
      username: 'Anna',
      password: '***',
      email: '',
      Adminrechte: true,
    },
    {
      username: 'Vilja',
      password: '***',
      email: '',
      Adminrechte: true,
    },
    {
      username: 'Cosi',
      password: '***',
      email: '',
      Adminrechte: true,
    },
    {
      username: 'Xenia',
      password: '***',
      email: '',
      Adminrechte: false,
    },
    {
      username: 'Fenja',
      password: '***',
      email: '',
      Adminrechte: false,
    },
  ],

  Abzeichen: [
    {
      _id: 'Erstellte_Rundgaenge_silber',
      name: 'Erstellte Rundgaenge silber',
      picture: {
        $oid: '5ff98919cdd36137740fc368',
      },
      unlocked_picture: {
        $oid: '5ff98919cdd36137740fc367',
      },
      cost: 10,
    },
    {
      _id: 'Betrachtete_Artefakte_bronze',
      name: 'Betrachtete Artefakte bronze',
      picture: {
        $oid: '5ff98919cdd36137740fc36d',
      },
      unlocked_picture: {
        $oid: '5ff98919cdd36137740fc36c',
      },
      cost: 3,
    },
    // {
    //   AbzeichenID: '#1' /*
    //   Url: '/app/components/Media/1.png', */,
    //   Bild:
    //     'https://blog.qwant.com/wp-content/uploads/sites/3/2016/01/test.jpg',
    //   Beschreibung: 'test',
    // },
  ],
  ProfilePicture: [
    {
      _id: {
        $oid: '5ff9889f4028d9e0ea9cc52d',
      },
      picture: {
        $oid: '5ff9889f4028d9e0ea9cc52a',
      },
      locked: false,
    },
  ],
  Pictures: [
    {
      _id: {
        $oid: '5ff98892ccd2776f571d6c1a',
      },
      picture: 'https://blog.qwant.com/wp-content/uploads/sites/3/2016/01/test.jpg',
      locked: false,
    },
  ],
  Codes: [
    {
      code: 'abc'
    },
  ],
  Feedback: [
    {
      _id: 0,
      tour: {
        $oid: '600024333c43791d7831f306',
      },
      rating: 4,
      review: 'bad tour',
    },
  ],
});
export default dataProvider;
