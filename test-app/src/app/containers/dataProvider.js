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
    {
      _id: 'Kg 42:67',
      category: 'Kunst und Kulturgeschichte',
      sub_category: 'Gotik',
      title: 'Ortenberger Altar - Heilige Sippe',
      picture: [
        {
          $oid: '5ff95692dcf3447f57146c1s',
        },
      ],
      description:
        'Tafelmalerei auf Tannenholz, mit Blattgold',
      additional_information:
        '',
      interdisciplinary_context: 'Themen: Kunsthandwerk',
      year: 'um 1430',
      art_type: 'Gemälde',
      creator: 'Meister des Ortenberger Altars',
      material:
        'Tannenholz, Leinwand, Tempera, Blattgold',
      size_: '100,5 cm x 162,5 cm',
      location: 'Ortenberg',
    },
    {
      _id: 'Kg 2:95',
      category: 'Kunst und Kulturgeschichte',
      sub_category: 'Expressionsimus',
      title: 'Morgensonne',
      picture: [
        {
          $oid: '5ffe569ssd2dcf3447f5714561s',
        },
      ],
      description:
        'Gemälde',
      additional_information:
        'Öl auf Leinwand',
      interdisciplinary_context: 'Themen: Gemälde',
      year: '1910',
      art_type: 'Gemälde',
      creator: 'Lovis Corinth',
      material:
        'Öl, Leinwand',
      size_: '68,5 cm x 80,5 cm',
      location: 'Ortenberg',
    },
    {
      _id: 'Kg 34:12',
      category: 'Kunst und Kulturgeschichte',
      sub_category: 'Realismus',
      title: 'Abendstimmung in der Campagna',
      picture: [
        {
          $oid: '5ffe569ssfesrsd447f5714561s',
        },
      ],
      description:
        'Gemälde',
      additional_information:
        'Öl auf Leinwand',
      interdisciplinary_context: 'Themen: Gemälde',
      year: '1850',
      art_type: 'Gemälde',
      creator: 'Oswald Achenbach',
      material:
        'Öl, Leinwand',
      size_: '98 cm x 134 cm',
      location: 'Düsseldorf',
    },
    {
      _id: 'Kg 8:27',
      category: 'Kunst und Kulturgeschichte',
      sub_category: 'Symbolismus',
      title: 'Gestade der Vergessenheit',
      picture: [
        {
          $oid: '8sd95564dcf3675f57146gaw',
        },
      ],
      description:
        'Gestade der Vergessenheit (meist mit Artikel „Das…“, seltener „Die…“) ist ein Gemälde von Eugen Bracht. Zwischen 1889 und 1916 entstanden acht Fassungen. Von diesen sind mindestens zwei museal erhalten und werden permanent ausgestellt. Neben Arnold Böcklins Toteninsel gilt es als eines der bekanntesten Werke des Symbolismus.',
      additional_information:
        'Urversion',
      interdisciplinary_context: 'Themen: Gemälde',
      year: '1889',
      art_type: 'Gemälde',
      creator: 'Eugen Bracht',
      material:
        'Öl, Leinwand',
      size_: '139 cm x 257 cm',
      location: 'Hessen',
    },
  ],
  Touren: [
    {
      _id: {
        $oid: '600024333c43791d7831f306',
      },
      name: 'Amphibien Tour',
      search_id: 'xxxxx',
      description: 'Die Tour führt entlang der interessanter Exponate rund um Amphibien.',
      session_id: 420,
      owner: {
        username: 'Marie',
      },
      user: [
        {
          username: 'Tom',
        },
        {
          username: 'Lena',
        },
      ], 
      difficulty: 5,
      status: 'privat',
      lastEdit: '2021-01-01',
    },
    {
      _id: {
        $oid: '600024333c67891h7831f659',
      },
      name: 'Zoologie Tour - Australien',
      search_id: 'xxxxx',
      description: 'Die Tiere aus Down Under lassen sich in dieser Tour bestaunen.',
      session_id: 435,
      owner: {
        username: 'Lena',
      },
      user: [
        {
          username: 'Lukas',
        },
        {
          username: 'Franziska',
        },
        {
          username: 'Tom',
        },
      ], 
      difficulty: 2,
      status: 'freigegeben',
      lastEdit: '2020-10-11',
    },
    {
      _id: {
        $oid: '660024555c67891l6731f789',
      },
      name: 'Urpferd 2.0',
      search_id: 'xxxxx',
      description: 'Diese Tour dreht sich um das »Wappentier« der Grube Messel, das Messeler Urpferd ',
      session_id: 375,
      owner: {
        username: 'Frank',
      },
      user: [
        {
          username: 'Lukas',
        },
        {
          username: 'Franziska',
        },
        {
          username: 'Tobias',
        },
      ], 
      difficulty: 4,
      status: 'ausstehend',
      lastEdit: '2020-08-18',
    },
  ],
  Benutzer: [
    {
      username: 'Lena',
      password: '1234',
      email: '',
      Adminrechte: true,
    },
    {
      username: 'Marie',
      password: 'test',
      email: '',
      Adminrechte: true,
    },
    {
      username: 'Franziska',
      password: 'vierdreizweieins',
      email: '',
      Adminrechte: true,
    },
    {
      username: 'Tom',
      password: 'geschichte12',
      email: '',
      Adminrechte: false,
    },
    {
      username: 'Lukas',
      password: 'L99geschi',
      email: '',
      Adminrechte: false,
    },
    {
      username: 'Frank',
      password: 'passwort',
      email: '',
      Adminrechte: true,
    },
    {
      username: 'Sabine',
      password: 'MyPassword',
      email: '',
      Adminrechte: false,
    },
    {
      username: 'Simone',
      password: 'hallo',
      email: '',
      Adminrechte: false,
    },
    {
      username: 'Carlo',
      password: 'meinPasswort',
      email: '',
      Adminrechte: false,
    },
    {
      username: 'Tobias',
      password: '4567',
      email: '',
      Adminrechte: false,
    },
    {
      username: 'Markus',
      password: 'hihi',
      email: '',
      Adminrechte: false,
    },
    {
      username: 'Andreas',
      password: 'hallsao',
      email: '',
      Adminrechte: false,
    },
    {
      username: 'Lilli',
      password: 'geschichte',
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
        url: 'https://image.shutterstock.com/image-vector/tickets-museum-history-icon-cartoon-600w-497081827.jpg',
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
        url:'https://image.shutterstock.com/image-vector/not-completed-red-stamp-text-600w-472077142.jpg',
      },
      unlocked_picture: {
        $oid: '5ff98919cdd36137740fc36c',
        url:'https://image.shutterstock.com/image-vector/completed-grunge-vintage-square-stamp-600w-506324629.jpg',
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
      name: 'Test',
      _id: {
        $oid: '5ff9889f4028d9e0ea9cc52d',
      },
      /*picture: {
        $oid: '5ff9889f4028d9e0ea9cc52a',
      },*/
      picture: 'https://blog.qwant.com/wp-content/uploads/sites/3/2016/01/test.jpg',
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
