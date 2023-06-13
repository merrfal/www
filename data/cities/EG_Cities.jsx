const EG_Cities = [
  {
    name: "Zefta",
    value: "zefta",
  },
  {
    name: "Ţūkh",
    value: "tukh",
  },
  {
    name: "Ţimā",
    value: "tima",
  },
  {
    name: "Ţanţā",
    value: "tanta",
  },
  {
    name: "Ţāmiyah",
    value: "tamiyah",
  },
  {
    name: "Ţalkhā",
    value: "talkha",
  },
  {
    name: "Talā",
    value: "tala",
  },
  {
    name: "Ţahţā",
    value: "tahta",
  },
  {
    name: "Sumusţā as Sulţānī",
    value: "sumusta-as-sultani",
  },
  {
    name: "Sohag",
    value: "sohag",
  },
  {
    name: "Siwa Oasis",
    value: "siwa-oasis",
  },
  {
    name: "Sinnūris",
    value: "sinnuris",
  },
  {
    name: "Sīdī Sālim",
    value: "sidi-salim",
  },
  {
    name: "Sīdī Barānī",
    value: "sidi-barani",
  },
  {
    name: "Shubrā al Khaymah",
    value: "shubra-al-khaymah",
  },
  {
    name: "Shirbīn",
    value: "shirbin",
  },
  {
    name: "Shibīn al Qanāṭir",
    value: "shibin-al-qanatir",
  },
  {
    name: "Shibīn al Kawm",
    value: "shibin-al-kawm",
  },
  {
    name: "Sharm el-Sheikh",
    value: "sharm-el-sheikh",
  },
  {
    name: "Samannūd",
    value: "samannud",
  },
  {
    name: "Samālūţ",
    value: "samalut",
  },
  {
    name: "Rosetta",
    value: "rosetta",
  },
  {
    name: "Ras Gharib",
    value: "ras-gharib",
  },
  {
    name: "Rafaḩ",
    value: "rafah",
  },
  {
    name: "Quwaysinā",
    value: "quwaysina",
  },
  {
    name: "Quţūr",
    value: "qutur",
  },
  {
    name: "Qūş",
    value: "qus",
  },
  {
    name: "Qinā",
    value: "qina",
  },
  {
    name: "Qaşr al Farāfirah",
    value: "qasr-al-farafirah",
  },
  {
    name: "Qalyūb",
    value: "qalyub",
  },
  {
    name: "Nuwaybi‘a",
    value: "nuwaybia",
  },
  {
    name: "Naja' Ḥammādī",
    value: "naja-hammadi",
  },
  {
    name: "Mīt Ghamr",
    value: "mit-ghamr",
  },
  {
    name: "Minyat an Naşr",
    value: "minyat-an-nasr",
  },
  {
    name: "Munūf",
    value: "munuf",
  },
  {
    name: "Maţāy",
    value: "matay",
  },
  {
    name: "Mashtūl as Sūq",
    value: "mashtul-as-suq",
  },
  {
    name: "Mersa Matruh",
    value: "mersa-matruh",
  },
  {
    name: "Marsa Alam",
    value: "marsa-alam",
  },
  {
    name: "Manfalūţ",
    value: "manfalut",
  },
  {
    name: "Mallawī",
    value: "mallawi",
  },
  {
    name: "Maghāghah",
    value: "maghaghah",
  },
  {
    name: "Madīnat Sittah Uktūbar",
    value: "madinat-sittah-uktubar",
  },
  {
    name: "Madīnat an Naşr",
    value: "madinat-an-nasr",
  },
  {
    name: "Al ‘Āshir min Ramaḑān",
    value: "al-ashir-min-ramadan",
  },
  {
    name: "Ash Shaykh Zuwayd",
    value: "ash-shaykh-zuwayd",
  },
  {
    name: "Kirdāsah",
    value: "kirdasah",
  },
  {
    name: "Kawm Umbū",
    value: "kawm-umbu",
  },
  {
    name: "Kawm Ḩamādah",
    value: "kawm-hamadah",
  },
  {
    name: "Kafr Şaqr",
    value: "kafr-saqr",
  },
  {
    name: "Kafr az Zayyāt",
    value: "kafr-az-zayyat",
  },
  {
    name: "Kafr ash Shaykh",
    value: "kafr-ash-shaykh",
  },
  {
    name: "Kafr ad Dawwār",
    value: "kafr-ad-dawwar",
  },
  {
    name: "Juhaynah",
    value: "juhaynah",
  },
  {
    name: "Girga",
    value: "girga",
  },
  {
    name: "‘Izbat al Burj",
    value: "izbat-al-burj",
  },
  {
    name: "Iţsā",
    value: "itsa",
  },
  {
    name: "Isnā",
    value: "isna",
  },
  {
    name: "Idkū",
    value: "idku",
  },
  {
    name: "Idfū",
    value: "idfu",
  },
  {
    name: "Ibshawāy",
    value: "ibshaway",
  },
  {
    name: "Ḩalwān",
    value: "halwan",
  },
  {
    name: "Hihyā",
    value: "hihya",
  },
  {
    name: "Ḩawsh ‘Īsá",
    value: "hawsh-isa",
  },
  {
    name: "Fuwwah",
    value: "fuwwah",
  },
  {
    name: "Farshūţ",
    value: "farshut",
  },
  {
    name: "Fāraskūr",
    value: "faraskur",
  },
  {
    name: "Fāqūs",
    value: "faqus",
  },
  {
    name: "Damietta",
    value: "damietta",
  },
  {
    name: "Diyarb Najm",
    value: "diyarb-najm",
  },
  {
    name: "Disūq",
    value: "disuq",
  },
  {
    name: "Dishnā",
    value: "dishna",
  },
  {
    name: "Dikirnis",
    value: "dikirnis",
  },
  {
    name: "Dahab",
    value: "dahab",
  },
  {
    name: "Dayrūţ",
    value: "dayrut",
  },
  {
    name: "Dayr Mawās",
    value: "dayr-mawas",
  },
  {
    name: "Damanhūr",
    value: "damanhur",
  },
  {
    name: "Būsh",
    value: "bush",
  },
  {
    name: "Port Said",
    value: "port-said",
  },
  {
    name: "Safaga",
    value: "safaga",
  },
  {
    name: "Bilqās",
    value: "bilqas",
  },
  {
    name: "Bilbays",
    value: "bilbays",
  },
  {
    name: "Basyūn",
    value: "basyun",
  },
  {
    name: "Banī Suwayf",
    value: "bani-suwayf",
  },
  {
    name: "Banī Mazār",
    value: "bani-mazar",
  },
  {
    name: "Banhā",
    value: "banha",
  },
  {
    name: "Zagazig",
    value: "zagazig",
  },
  {
    name: "Awsīm",
    value: "awsim",
  },
  {
    name: "El-Tor",
    value: "el-tor",
  },
  {
    name: "At Tall al Kabīr",
    value: "at-tall-al-kabir",
  },
  {
    name: "Asyūţ",
    value: "asyut",
  },
  {
    name: "Aswan",
    value: "aswan",
  },
  {
    name: "Suez",
    value: "suez",
  },
  {
    name: "As Sinbillāwayn",
    value: "as-sinbillawayn",
  },
  {
    name: "As Sallūm",
    value: "as-sallum",
  },
  {
    name: "Aş Şaff",
    value: "as-saff",
  },
  {
    name: "Ash Shuhadā’",
    value: "ash-shuhada",
  },
  {
    name: "Ashmūn",
    value: "ashmun",
  },
  {
    name: "Al Wāsiţah",
    value: "al-wasitah",
  },
  {
    name: "Luxor",
    value: "luxor",
  },
  {
    name: "Al Qūşīyah",
    value: "al-qusiyah",
  },
  {
    name: "Al Quşayr",
    value: "al-qusayr",
  },
  {
    name: "Al Qurayn",
    value: "al-qurayn",
  },
  {
    name: "Al Qanāyāt",
    value: "al-qanayat",
  },
  {
    name: "Al Qanāţir al Khayrīyah",
    value: "al-qanatir-al-khayriyah",
  },
  {
    name: "Cairo",
    value: "cairo",
  },
  {
    name: "Al Minyā",
    value: "al-minya",
  },
  {
    name: "Al Maţarīyah",
    value: "al-matariyah",
  },
  {
    name: "Al Manzalah",
    value: "al-manzalah",
  },
  {
    name: "Al Manşūrah",
    value: "al-mansurah",
  },
  {
    name: "Al Minshāh",
    value: "al-minshah",
  },
  {
    name: "Al Maḩallah al Kubrá",
    value: "al-mahallah-al-kubra",
  },
  {
    name: "Al Khuşūş",
    value: "al-khusus",
  },
  {
    name: "Al Khārjah",
    value: "al-kharjah",
  },
  {
    name: "Al Khānkah",
    value: "al-khankah",
  },
  {
    name: "Giza",
    value: "giza",
  },
  {
    name: "Al Jammālīyah",
    value: "al-jammaliyah",
  },
  {
    name: "Ismailia",
    value: "ismailia",
  },
  {
    name: "Alexandria",
    value: "alexandria",
  },
  {
    name: "Al Ibrāhīmīyah",
    value: "al-ibrahimiyah",
  },
  {
    name: "Al Ḩawāmidīyah",
    value: "al-hawamidiyah",
  },
  {
    name: "Al Ḩāmūl",
    value: "al-hamul",
  },
  {
    name: "Hurghada",
    value: "hurghada",
  },
  {
    name: "Al Fayyūm",
    value: "al-fayyum",
  },
  {
    name: "Al Fashn",
    value: "al-fashn",
  },
  {
    name: "Al Bawīţī",
    value: "al-bawiti",
  },
  {
    name: "Al Balyanā",
    value: "al-balyana",
  },
  {
    name: "Al Bājūr",
    value: "al-bajur",
  },
  {
    name: "Al Badārī",
    value: "al-badari",
  },
  {
    name: "Al ‘Ayyāţ",
    value: "al-ayyat",
  },
  {
    name: "Arish",
    value: "arish",
  },
  {
    name: "Al ‘Alamayn",
    value: "al-alamayn",
  },
  {
    name: "Akhmīm",
    value: "akhmim",
  },
  {
    name: "Ajā",
    value: "aja",
  },
  {
    name: "Ad Dilinjāt",
    value: "ad-dilinjat",
  },
  {
    name: "Abū Tīj",
    value: "abu-tij",
  },
  {
    name: "Abu Simbel",
    value: "abu-simbel",
  },
  {
    name: "Abū Qurqāş",
    value: "abu-qurqas",
  },
  {
    name: "Abū Kabīr",
    value: "abu-kabir",
  },
  {
    name: "Abū al Maţāmīr",
    value: "abu-al-matamir",
  },
  {
    name: "Abnūb",
    value: "abnub",
  },
  {
    name: "Bi’r al ‘Abd",
    value: "bir-al-abd",
  },
  {
    name: "Az Zarqā",
    value: "az-zarqa",
  },
  {
    name: "El Gouna",
    value: "el-gouna",
  },
  {
    name: "Makadi Bay",
    value: "makadi-bay",
  },
  {
    name: "Ain Sukhna",
    value: "ain-sukhna",
  },
  {
    name: "New Cairo",
    value: "new-cairo",
  },
  {
    name: "Saint Catherine",
    value: "saint-catherine",
  },
  {
    name: "Munshāt ‘Alī Āghā",
    value: "munshat-ali-agha",
  },
  {
    name: "Al-'Ubūr",
    value: "al-ubur",
  },
];

export default EG_Cities;
