import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';
import fakeDataProvider from 'ra-data-fakerest';

//dataProvider={jsonServerProvider('mongodb://127.0.0.1:27017')}

// images for user study
//objetcs
import goldfibel from './fake_data/pictures/38-image0.jpg';
import ortenberger from './fake_data/pictures/127-image0.jpg';
import morgensonne from './fake_data/pictures/163-image0.jpg';
import gestade from './fake_data/pictures/161-image0.jpg';
//badges
import tour_silver from './fake_data/badges/Erstellte_Rundgaenge_silber.jpg';
import object_bronze from './fake_data/badges/Betrachtete_Artefakte_bronze.jpg';
//profile pictures
import joseph from './fake_data/profilepictures/free/Joseph.jpg';
import iphigenie from './fake_data/profilepictures/free/Iphigenie.jpg';
import reward_tour_silver from './fake_data/profilepictures/locked/Erstellte_Rundgaenge_silber.jpg';
import reward_object_bronze from './fake_data/profilepictures/locked/Betrachtete_Artefakte_bronze.jpg';


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
      _id: 0,
      name: 'Tour1',
      name: 'Amphibien Tour',
      search_id: 'xxxxx',
      description: 'This is such an awesome tour',
      description: 'Die Tour führt entlang der interessanter Exponate rund um Amphibien.',
      session_id: 420,
      owner: {
        username: 'Anna',
        username: 'Marie',
      },
      user: [
        {
          username: 'Vilja',
          username: 'Tom',
        },
        {
          username: 'Cosima',
          username: 'Lena',
        },
      ], 
      difficulty: 5,
      status: 'privat',
      lastEdit: '2020-01-01',
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
      username: 'Frank',
      password: 'passwort',
      Adminrechte: true,
    },
    {
      username: 'Sabine',
      password: 'MyPassword',
      Adminrechte: false,
    },
    {
      username: 'Simone',
      password: 'hallo',
      Adminrechte: false,
    },
    {
      username: 'Carlo',
      password: 'meinPasswort',
      Adminrechte: false,
    },
    {
      username: 'Tobias',
      password: '4567',
      Adminrechte: false,
    },
    {
      username: 'Markus',
      password: 'hihi',
      Adminrechte: false,
    },
    {
      username: 'Andreas',
      password: 'hallsao',
      Adminrechte: false,
    },
    {
      username: 'Lena',
      password: 'geschichte',
      Adminrechte: false,
    },

  ],

  Abzeichen: [
    {
      _id: 'Erstellte_Rundgaenge_silber',
      name: 'Erstellte Rundgaenge silber',
      picture: tour_silver,
      unlocked_picture: reward_tour_silver,
     /*  picture: {
        $oid: '5ff98919cdd36137740fc368',
      },       
      unlocked_picture: {
        $oid: '5ff98919cdd36137740fc367',
      },*/
      cost: 10,
    },
    {
      _id: 'Betrachtete_Artefakte_bronze',
      name: 'Betrachtete Artefakte bronze',
      picture: object_bronze,
      unlocked_picture: reward_object_bronze,
     /*  picture: {
        $oid: '5ff98919cdd36137740fc36d',
      },
      unlocked_picture: {
        $oid: '5ff98919cdd36137740fc36c',
      }, */
      cost: 3,
    },
  ],
  /* ProfilePicture: [
    {
      _id: {
        $oid: '5ff9889f4028d9e0ea9cc52d',
      },
      picture: {
        $oid: '5ff9889f4028d9e0ea9cc52a',
      },
      locked: false,
    },
  ], */
  // only for testing 
  ProfilePicture: [
    {
      picture: iphigenie,
      locked: false,
    },
    {
      picture: joseph,
      locked: false,
    },
    {
      picture: reward_object_bronze,
      locked: true,
    },
    {
      picture: reward_tour_silver,
      locked: true,
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
        $oid: 0,
      },
      rating: 8,
      review: 'great tour!',
    },
    {
      _id: 1,
      tour: {
        $oid: '600024333c43791d7831f306',
      },
      rating: 6,
      review: 'Ich würde noch...',
    },
  ],
});
export default dataProvider;
