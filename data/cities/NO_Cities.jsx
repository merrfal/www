const NO_Cities = [
  {
    name: "Vardø",
    value: "vard",
  },
  {
    name: "Vuonnabahta",
    value: "vuonnabahta",
  },
  {
    name: "Vadsø",
    value: "vads",
  },
  {
    name: "Storslett",
    value: "storslett",
  },
  {
    name: "Skjervøy",
    value: "skjervy",
  },
  {
    name: "Olderdalen",
    value: "olderdalen",
  },
  {
    name: "Øksfjord",
    value: "ksfjord",
  },
  {
    name: "Mehamn",
    value: "mehamn",
  },
  {
    name: "Lyngseidet",
    value: "lyngseidet",
  },
  {
    name: "Lakselv",
    value: "lakselv",
  },
  {
    name: "Kjøllefjord",
    value: "kjllefjord",
  },
  {
    name: "Kirkenes",
    value: "kirkenes",
  },
  {
    name: "Kautokeino",
    value: "kautokeino",
  },
  {
    name: "Kárášjohka",
    value: "karasjohka",
  },
  {
    name: "Honningsvåg",
    value: "honningsvag",
  },
  {
    name: "Ávanuorri",
    value: "avanuorri",
  },
  {
    name: "Hammerfest",
    value: "hammerfest",
  },
  {
    name: "Burfjord",
    value: "burfjord",
  },
  {
    name: "Bjørnevatn",
    value: "bjrnevatn",
  },
  {
    name: "Berlevåg",
    value: "berlevag",
  },
  {
    name: "Båtsfjord",
    value: "batsfjord",
  },
  {
    name: "Alta",
    value: "alta",
  },
  {
    name: "Rypefjord",
    value: "rypefjord",
  },
  {
    name: "Strai",
    value: "strai",
  },
  {
    name: "Skålevik",
    value: "skalevik",
  },
  {
    name: "Ytre Arna",
    value: "ytre-arna",
  },
  {
    name: "Voss",
    value: "voss",
  },
  {
    name: "Volda",
    value: "volda",
  },
  {
    name: "Vinstra",
    value: "vinstra",
  },
  {
    name: "Vikøyri",
    value: "vikyri",
  },
  {
    name: "Vikeså",
    value: "vikesa",
  },
  {
    name: "Vikersund",
    value: "vikersund",
  },
  {
    name: "Vik",
    value: "vik",
  },
  {
    name: "Vigrestad",
    value: "vigrestad",
  },
  {
    name: "Vigeland",
    value: "vigeland",
  },
  {
    name: "Vevelstad",
    value: "vevelstad",
  },
  {
    name: "Vestbygd",
    value: "vestbygd",
  },
  {
    name: "Vestby",
    value: "vestby",
  },
  {
    name: "Verdal",
    value: "verdal",
  },
  {
    name: "Vennesla",
    value: "vennesla",
  },
  {
    name: "Vatne",
    value: "vatne",
  },
  {
    name: "Varhaug",
    value: "varhaug",
  },
  {
    name: "Vanse",
    value: "vanse",
  },
  {
    name: "Valle",
    value: "valle",
  },
  {
    name: "Våler",
    value: "valer",
  },
  {
    name: "Vågåmo",
    value: "vagamo",
  },
  {
    name: "Utsira",
    value: "utsira",
  },
  {
    name: "Ulvik",
    value: "ulvik",
  },
  {
    name: "Ulsteinvik",
    value: "ulsteinvik",
  },
  {
    name: "Ulefoss",
    value: "ulefoss",
  },
  {
    name: "Uggdal",
    value: "uggdal",
  },
  {
    name: "Tysvær",
    value: "tysvr",
  },
  {
    name: "Tysse",
    value: "tysse",
  },
  {
    name: "Tynset",
    value: "tynset",
  },
  {
    name: "Tveit",
    value: "tveit",
  },
  {
    name: "Tvedestrand",
    value: "tvedestrand",
  },
  {
    name: "Innbygda",
    value: "innbygda",
  },
  {
    name: "Trondheim",
    value: "trondheim",
  },
  {
    name: "Tromsø",
    value: "troms",
  },
  {
    name: "Trofors",
    value: "trofors",
  },
  {
    name: "Treungen",
    value: "treungen",
  },
  {
    name: "Tretten",
    value: "tretten",
  },
  {
    name: "Tranby",
    value: "tranby",
  },
  {
    name: "Tonstad",
    value: "tonstad",
  },
  {
    name: "Tønsberg",
    value: "tnsberg",
  },
  {
    name: "Tomter",
    value: "tomter",
  },
  {
    name: "Tomra",
    value: "tomra",
  },
  {
    name: "Tolga",
    value: "tolga",
  },
  {
    name: "Tofte",
    value: "tofte",
  },
  {
    name: "Tjøme",
    value: "tjme",
  },
  {
    name: "Tingvatn",
    value: "tingvatn",
  },
  {
    name: "Terråk",
    value: "terrak",
  },
  {
    name: "Tau",
    value: "tau",
  },
  {
    name: "Tangvall",
    value: "tangvall",
  },
  {
    name: "Tananger",
    value: "tananger",
  },
  {
    name: "Syfteland",
    value: "syfteland",
  },
  {
    name: "Svolvær",
    value: "svolvr",
  },
  {
    name: "Svelvik",
    value: "svelvik",
  },
  {
    name: "Svelgen",
    value: "svelgen",
  },
  {
    name: "Sveio",
    value: "sveio",
  },
  {
    name: "Sunndalsøra",
    value: "sunndalsra",
  },
  {
    name: "Stryn",
    value: "stryn",
  },
  {
    name: "Strømmen",
    value: "strmmen",
  },
  {
    name: "Straumen",
    value: "straumen",
  },
  {
    name: "Straumen",
    value: "straumen",
  },
  {
    name: "Straume",
    value: "straume",
  },
  {
    name: "Stranda",
    value: "stranda",
  },
  {
    name: "Storsteinnes",
    value: "storsteinnes",
  },
  {
    name: "Storebø",
    value: "storeb",
  },
  {
    name: "Stokmarknes",
    value: "stokmarknes",
  },
  {
    name: "Stokke",
    value: "stokke",
  },
  {
    name: "Stjørdalshalsen",
    value: "stjrdalshalsen",
  },
  {
    name: "Steinkjer",
    value: "steinkjer",
  },
  {
    name: "Stavern",
    value: "stavern",
  },
  {
    name: "Stavanger",
    value: "stavanger",
  },
  {
    name: "Stange",
    value: "stange",
  },
  {
    name: "Spydeberg",
    value: "spydeberg",
  },
  {
    name: "Spetalen",
    value: "spetalen",
  },
  {
    name: "Sørumsand",
    value: "srumsand",
  },
  {
    name: "Sortland",
    value: "sortland",
  },
  {
    name: "Sørland",
    value: "srland",
  },
  {
    name: "Solfjellsjøen",
    value: "solfjellsjen",
  },
  {
    name: "Sola",
    value: "sola",
  },
  {
    name: "Søgne",
    value: "sgne",
  },
  {
    name: "Sogndalsfjøra",
    value: "sogndalsfjra",
  },
  {
    name: "Snåase",
    value: "snaase",
  },
  {
    name: "Skui",
    value: "skui",
  },
  {
    name: "Skudeneshavn",
    value: "skudeneshavn",
  },
  {
    name: "Skreia",
    value: "skreia",
  },
  {
    name: "Skotterud",
    value: "skotterud",
  },
  {
    name: "Skoppum",
    value: "skoppum",
  },
  {
    name: "Skogn",
    value: "skogn",
  },
  {
    name: "Skoger",
    value: "skoger",
  },
  {
    name: "Skodje",
    value: "skodje",
  },
  {
    name: "Skjeberg",
    value: "skjeberg",
  },
  {
    name: "Skjærhalden",
    value: "skjrhalden",
  },
  {
    name: "Skien",
    value: "skien",
  },
  {
    name: "Ski",
    value: "ski",
  },
  {
    name: "Skaun",
    value: "skaun",
  },
  {
    name: "Skarnes",
    value: "skarnes",
  },
  {
    name: "Sjøvegan",
    value: "sjvegan",
  },
  {
    name: "Skjønhaug",
    value: "skjnhaug",
  },
  {
    name: "Sjøholt",
    value: "sjholt",
  },
  {
    name: "Sistranda",
    value: "sistranda",
  },
  {
    name: "Siljan",
    value: "siljan",
  },
  {
    name: "Setermoen",
    value: "setermoen",
  },
  {
    name: "Sem",
    value: "sem",
  },
  {
    name: "Selvik",
    value: "selvik",
  },
  {
    name: "Seljord",
    value: "seljord",
  },
  {
    name: "Sauda",
    value: "sauda",
  },
  {
    name: "Sarpsborg",
    value: "sarpsborg",
  },
  {
    name: "Sandvika",
    value: "sandvika",
  },
  {
    name: "Sandvika",
    value: "sandvika",
  },
  {
    name: "Sandnessjøen",
    value: "sandnessjen",
  },
  {
    name: "Sandnes",
    value: "sandnes",
  },
  {
    name: "Sandefjord",
    value: "sandefjord",
  },
  {
    name: "Sande",
    value: "sande",
  },
  {
    name: "Sandane",
    value: "sandane",
  },
  {
    name: "Sand",
    value: "sand",
  },
  {
    name: "Sagvåg",
    value: "sagvag",
  },
  {
    name: "Sæveland",
    value: "sveland",
  },
  {
    name: "Sætre",
    value: "stre",
  },
  {
    name: "Rygge",
    value: "rygge",
  },
  {
    name: "Rubbestadneset",
    value: "rubbestadneset",
  },
  {
    name: "Røyrvik",
    value: "ryrvik",
  },
  {
    name: "Røyken",
    value: "ryken",
  },
  {
    name: "Rotnes",
    value: "rotnes",
  },
  {
    name: "Røst",
    value: "rst",
  },
  {
    name: "Rosendal",
    value: "rosendal",
  },
  {
    name: "Rørvik",
    value: "rrvik",
  },
  {
    name: "Røros",
    value: "rros",
  },
  {
    name: "Rollag",
    value: "rollag",
  },
  {
    name: "Rognan",
    value: "rognan",
  },
  {
    name: "Roa",
    value: "roa",
  },
  {
    name: "Rjukan",
    value: "rjukan",
  },
  {
    name: "Risør",
    value: "risr",
  },
  {
    name: "Rindal",
    value: "rindal",
  },
  {
    name: "Rena",
    value: "rena",
  },
  {
    name: "Reinsvoll",
    value: "reinsvoll",
  },
  {
    name: "Rensvik",
    value: "rensvik",
  },
  {
    name: "Reine",
    value: "reine",
  },
  {
    name: "Raufoss",
    value: "raufoss",
  },
  {
    name: "Ranemsletta",
    value: "ranemsletta",
  },
  {
    name: "Randaberg",
    value: "randaberg",
  },
  {
    name: "Ramberg",
    value: "ramberg",
  },
  {
    name: "Rakkestad",
    value: "rakkestad",
  },
  {
    name: "Råholt",
    value: "raholt",
  },
  {
    name: "Prestfoss",
    value: "prestfoss",
  },
  {
    name: "Prestestranda",
    value: "prestestranda",
  },
  {
    name: "Porsgrunn",
    value: "porsgrunn",
  },
  {
    name: "Øystese",
    value: "ystese",
  },
  {
    name: "Farnes",
    value: "farnes",
  },
  {
    name: "Otta",
    value: "otta",
  },
  {
    name: "Osøyro",
    value: "osyro",
  },
  {
    name: "Oslo",
    value: "oslo",
  },
  {
    name: "Os",
    value: "os",
  },
  {
    name: "Ørnes",
    value: "rnes",
  },
  {
    name: "Orkanger",
    value: "orkanger",
  },
  {
    name: "Ørje",
    value: "rje",
  },
  {
    name: "Oppdal",
    value: "oppdal",
  },
  {
    name: "Ølen",
    value: "len",
  },
  {
    name: "Odda",
    value: "odda",
  },
  {
    name: "Notodden",
    value: "notodden",
  },
  {
    name: "Norheimsund",
    value: "norheimsund",
  },
  {
    name: "Noresund",
    value: "noresund",
  },
  {
    name: "Nordfjordeid",
    value: "nordfjordeid",
  },
  {
    name: "Nodeland",
    value: "nodeland",
  },
  {
    name: "Nesttun",
    value: "nesttun",
  },
  {
    name: "Nesna",
    value: "nesna",
  },
  {
    name: "Nesbyen",
    value: "nesbyen",
  },
  {
    name: "Naustdal",
    value: "naustdal",
  },
  {
    name: "Narvik",
    value: "narvik",
  },
  {
    name: "Namsskogan",
    value: "namsskogan",
  },
  {
    name: "Namsos",
    value: "namsos",
  },
  {
    name: "Nærbø",
    value: "nrb",
  },
  {
    name: "Mysen",
    value: "mysen",
  },
  {
    name: "Myre",
    value: "myre",
  },
  {
    name: "Myra",
    value: "myra",
  },
  {
    name: "Mosterhamn",
    value: "mosterhamn",
  },
  {
    name: "Moss",
    value: "moss",
  },
  {
    name: "Mosjøen",
    value: "mosjen",
  },
  {
    name: "Moldjord",
    value: "moldjord",
  },
  {
    name: "Molde",
    value: "molde",
  },
  {
    name: "Fyresdal",
    value: "fyresdal",
  },
  {
    name: "Mo i Rana",
    value: "mo-i-rana",
  },
  {
    name: "Moi",
    value: "moi",
  },
  {
    name: "Moen",
    value: "moen",
  },
  {
    name: "Moelv",
    value: "moelv",
  },
  {
    name: "Mo",
    value: "mo",
  },
  {
    name: "Mjøndalen",
    value: "mjndalen",
  },
  {
    name: "Midsund",
    value: "midsund",
  },
  {
    name: "Meråker",
    value: "meraker",
  },
  {
    name: "Melsomvik",
    value: "melsomvik",
  },
  {
    name: "Melhus",
    value: "melhus",
  },
  {
    name: "Melbu",
    value: "melbu",
  },
  {
    name: "Maura",
    value: "maura",
  },
  {
    name: "Masfjorden",
    value: "masfjorden",
  },
  {
    name: "Manger",
    value: "manger",
  },
  {
    name: "Mandal",
    value: "mandal",
  },
  {
    name: "Malvik",
    value: "malvik",
  },
  {
    name: "Måløy",
    value: "maly",
  },
  {
    name: "Malm",
    value: "malm",
  },
  {
    name: "Lysaker",
    value: "lysaker",
  },
  {
    name: "Lyngdal",
    value: "lyngdal",
  },
  {
    name: "Lunde",
    value: "lunde",
  },
  {
    name: "Lundamo",
    value: "lundamo",
  },
  {
    name: "Løten",
    value: "lten",
  },
  {
    name: "Løpsmarka",
    value: "lpsmarka",
  },
  {
    name: "Lonevåg",
    value: "lonevag",
  },
  {
    name: "Fossbergom",
    value: "fossbergom",
  },
  {
    name: "Lødingen",
    value: "ldingen",
  },
  {
    name: "Løding",
    value: "lding",
  },
  {
    name: "Lindås",
    value: "lindas",
  },
  {
    name: "Lillestrøm",
    value: "lillestrm",
  },
  {
    name: "Lillesand",
    value: "lillesand",
  },
  {
    name: "Lillehammer",
    value: "lillehammer",
  },
  {
    name: "Liknes",
    value: "liknes",
  },
  {
    name: "Levanger",
    value: "levanger",
  },
  {
    name: "Lervik",
    value: "lervik",
  },
  {
    name: "Lena",
    value: "lena",
  },
  {
    name: "Leland",
    value: "leland",
  },
  {
    name: "Leknes",
    value: "leknes",
  },
  {
    name: "Leirvik",
    value: "leirvik",
  },
  {
    name: "Leirsund",
    value: "leirsund",
  },
  {
    name: "Lauvsnes",
    value: "lauvsnes",
  },
  {
    name: "Larvik",
    value: "larvik",
  },
  {
    name: "Larsnes",
    value: "larsnes",
  },
  {
    name: "Larkollen",
    value: "larkollen",
  },
  {
    name: "Langevåg",
    value: "langevag",
  },
  {
    name: "Langesund",
    value: "langesund",
  },
  {
    name: "Lærdalsøyri",
    value: "lrdalsyri",
  },
  {
    name: "Kyrksæterøra",
    value: "kyrksterra",
  },
  {
    name: "Kviteseid",
    value: "kviteseid",
  },
  {
    name: "Krokstadøra",
    value: "krokstadra",
  },
  {
    name: "Kristiansund",
    value: "kristiansund",
  },
  {
    name: "Kristiansand",
    value: "kristiansand",
  },
  {
    name: "Kragerø",
    value: "krager",
  },
  {
    name: "Korgen",
    value: "korgen",
  },
  {
    name: "Koppang",
    value: "koppang",
  },
  {
    name: "Kopervik",
    value: "kopervik",
  },
  {
    name: "Kongsvinger",
    value: "kongsvinger",
  },
  {
    name: "Kongsberg",
    value: "kongsberg",
  },
  {
    name: "Kolvereid",
    value: "kolvereid",
  },
  {
    name: "Kolbotn",
    value: "kolbotn",
  },
  {
    name: "Knarvik",
    value: "knarvik",
  },
  {
    name: "Knappstad",
    value: "knappstad",
  },
  {
    name: "Knappskog",
    value: "knappskog",
  },
  {
    name: "Kløfta",
    value: "klfta",
  },
  {
    name: "Kleppestø",
    value: "kleppest",
  },
  {
    name: "Kirkenær",
    value: "kirkenr",
  },
  {
    name: "Karlshus",
    value: "karlshus",
  },
  {
    name: "Kabelvåg",
    value: "kabelvag",
  },
  {
    name: "Judaberg",
    value: "judaberg",
  },
  {
    name: "Jørpeland",
    value: "jrpeland",
  },
  {
    name: "Jondal",
    value: "jondal",
  },
  {
    name: "Jevnaker",
    value: "jevnaker",
  },
  {
    name: "Jessheim",
    value: "jessheim",
  },
  {
    name: "Jaren",
    value: "jaren",
  },
  {
    name: "Isdalstø",
    value: "isdalst",
  },
  {
    name: "Inndyr",
    value: "inndyr",
  },
  {
    name: "Hyllestad",
    value: "hyllestad",
  },
  {
    name: "Hylkje",
    value: "hylkje",
  },
  {
    name: "Hvittingfoss",
    value: "hvittingfoss",
  },
  {
    name: "Hundorp",
    value: "hundorp",
  },
  {
    name: "Høyanger",
    value: "hyanger",
  },
  {
    name: "Hovden",
    value: "hovden",
  },
  {
    name: "Hov",
    value: "hov",
  },
  {
    name: "Horten",
    value: "horten",
  },
  {
    name: "Hopen",
    value: "hopen",
  },
  {
    name: "Hønefoss",
    value: "hnefoss",
  },
  {
    name: "Hommelvik",
    value: "hommelvik",
  },
  {
    name: "Holmestrand",
    value: "holmestrand",
  },
  {
    name: "Hokksund",
    value: "hokksund",
  },
  {
    name: "Hjelset",
    value: "hjelset",
  },
  {
    name: "Herre",
    value: "herre",
  },
  {
    name: "Hermansverk",
    value: "hermansverk",
  },
  {
    name: "Hemsedal",
    value: "hemsedal",
  },
  {
    name: "Hemnesberget",
    value: "hemnesberget",
  },
  {
    name: "Heggenes",
    value: "heggenes",
  },
  {
    name: "Hauknes",
    value: "hauknes",
  },
  {
    name: "Haugesund",
    value: "haugesund",
  },
  {
    name: "Hauge i Dalane",
    value: "hauge-i-dalane",
  },
  {
    name: "Harstad",
    value: "harstad",
  },
  {
    name: "Hareid",
    value: "hareid",
  },
  {
    name: "Hardbakke",
    value: "hardbakke",
  },
  {
    name: "Hansnes",
    value: "hansnes",
  },
  {
    name: "Hamnvik",
    value: "hamnvik",
  },
  {
    name: "Hamar",
    value: "hamar",
  },
  {
    name: "Halden",
    value: "halden",
  },
  {
    name: "Hagavik",
    value: "hagavik",
  },
  {
    name: "Gvarv",
    value: "gvarv",
  },
  {
    name: "Gullhaug",
    value: "gullhaug",
  },
  {
    name: "Grua",
    value: "grua",
  },
  {
    name: "Grong",
    value: "grong",
  },
  {
    name: "Grimstad",
    value: "grimstad",
  },
  {
    name: "Gravdal",
    value: "gravdal",
  },
  {
    name: "Gratangen",
    value: "gratangen",
  },
  {
    name: "Granvin",
    value: "granvin",
  },
  {
    name: "Gol",
    value: "gol",
  },
  {
    name: "Glomfjord",
    value: "glomfjord",
  },
  {
    name: "Gladstad",
    value: "gladstad",
  },
  {
    name: "Justvik",
    value: "justvik",
  },
  {
    name: "Gjøvik",
    value: "gjvik",
  },
  {
    name: "Gjerstad",
    value: "gjerstad",
  },
  {
    name: "Geilo",
    value: "geilo",
  },
  {
    name: "Frogner",
    value: "frogner",
  },
  {
    name: "Frekhaug",
    value: "frekhaug",
  },
  {
    name: "Fredrikstad",
    value: "fredrikstad",
  },
  {
    name: "Fossby",
    value: "fossby",
  },
  {
    name: "Fosnavåg",
    value: "fosnavag",
  },
  {
    name: "Førde",
    value: "frde",
  },
  {
    name: "Folldal",
    value: "folldal",
  },
  {
    name: "Florø",
    value: "flor",
  },
  {
    name: "Flekkefjord",
    value: "flekkefjord",
  },
  {
    name: "Flateby",
    value: "flateby",
  },
  {
    name: "Flå",
    value: "fla",
  },
  {
    name: "Fitjar",
    value: "fitjar",
  },
  {
    name: "Finnsnes",
    value: "finnsnes",
  },
  {
    name: "Fillan",
    value: "fillan",
  },
  {
    name: "Fevik",
    value: "fevik",
  },
  {
    name: "Fetsund",
    value: "fetsund",
  },
  {
    name: "Fedje",
    value: "fedje",
  },
  {
    name: "Fauske",
    value: "fauske",
  },
  {
    name: "Farsund",
    value: "farsund",
  },
  {
    name: "Fagerstrand",
    value: "fagerstrand",
  },
  {
    name: "Fagernes",
    value: "fagernes",
  },
  {
    name: "Evjen",
    value: "evjen",
  },
  {
    name: "Evje",
    value: "evje",
  },
  {
    name: "Evenskjer",
    value: "evenskjer",
  },
  {
    name: "Etne",
    value: "etne",
  },
  {
    name: "Espeland",
    value: "espeland",
  },
  {
    name: "Elverum",
    value: "elverum",
  },
  {
    name: "Eivindvik",
    value: "eivindvik",
  },
  {
    name: "Eike",
    value: "eike",
  },
  {
    name: "Eidsvoll",
    value: "eidsvoll",
  },
  {
    name: "Eidsvåg",
    value: "eidsvag",
  },
  {
    name: "Eidfjord",
    value: "eidfjord",
  },
  {
    name: "Eide",
    value: "eide",
  },
  {
    name: "Egersund",
    value: "egersund",
  },
  {
    name: "Drøbak",
    value: "drbak",
  },
  {
    name: "Drammen",
    value: "drammen",
  },
  {
    name: "Dovre",
    value: "dovre",
  },
  {
    name: "Dombås",
    value: "dombas",
  },
  {
    name: "Dokka",
    value: "dokka",
  },
  {
    name: "Dalen",
    value: "dalen",
  },
  {
    name: "Dale",
    value: "dale",
  },
  {
    name: "Dale",
    value: "dale",
  },
  {
    name: "Bygland",
    value: "bygland",
  },
  {
    name: "Bryne",
    value: "bryne",
  },
  {
    name: "Brumunddal",
    value: "brumunddal",
  },
  {
    name: "Bruflat",
    value: "bruflat",
  },
  {
    name: "Brønnøysund",
    value: "brnnysund",
  },
  {
    name: "Svortland",
    value: "svortland",
  },
  {
    name: "Brekstad",
    value: "brekstad",
  },
  {
    name: "Brattvåg",
    value: "brattvag",
  },
  {
    name: "Botngård",
    value: "botngard",
  },
  {
    name: "Borkenes",
    value: "borkenes",
  },
  {
    name: "Bogen",
    value: "bogen",
  },
  {
    name: "Bodø",
    value: "bod",
  },
  {
    name: "Bø",
    value: "b",
  },
  {
    name: "Blakstad",
    value: "blakstad",
  },
  {
    name: "Bjørkelangen",
    value: "bjrkelangen",
  },
  {
    name: "Bjerkvik",
    value: "bjerkvik",
  },
  {
    name: "Birkeland",
    value: "birkeland",
  },
  {
    name: "Berkåk",
    value: "berkak",
  },
  {
    name: "Berger",
    value: "berger",
  },
  {
    name: "Bergen",
    value: "bergen",
  },
  {
    name: "Batnfjordsøra",
    value: "batnfjordsra",
  },
  {
    name: "Barkåker",
    value: "barkaker",
  },
  {
    name: "Balestrand",
    value: "balestrand",
  },
  {
    name: "Bagn",
    value: "bagn",
  },
  {
    name: "Austrheim",
    value: "austrheim",
  },
  {
    name: "Aursmoen",
    value: "aursmoen",
  },
  {
    name: "Aure",
    value: "aure",
  },
  {
    name: "Auli",
    value: "auli",
  },
  {
    name: "Askim",
    value: "askim",
  },
  {
    name: "Asker",
    value: "asker",
  },
  {
    name: "Ask",
    value: "ask",
  },
  {
    name: "Åsgårdstrand",
    value: "asgardstrand",
  },
  {
    name: "Aas",
    value: "aas",
  },
  {
    name: "Ås",
    value: "as",
  },
  {
    name: "Åros",
    value: "aros",
  },
  {
    name: "Årnes",
    value: "arnes",
  },
  {
    name: "Årnes",
    value: "arnes",
  },
  {
    name: "Indre Arna",
    value: "indre-arna",
  },
  {
    name: "Arendal",
    value: "arendal",
  },
  {
    name: "Årdalstangen",
    value: "ardalstangen",
  },
  {
    name: "Åneby",
    value: "aneby",
  },
  {
    name: "Andenes",
    value: "andenes",
  },
  {
    name: "Åndalsnes",
    value: "andalsnes",
  },
  {
    name: "Åmot",
    value: "amot",
  },
  {
    name: "Åmli",
    value: "amli",
  },
  {
    name: "Alvdal",
    value: "alvdal",
  },
  {
    name: "Ålgård",
    value: "algard",
  },
  {
    name: "Ålesund",
    value: "alesund",
  },
  {
    name: "Ålen",
    value: "alen",
  },
  {
    name: "Ål",
    value: "al",
  },
  {
    name: "Åkrehamn",
    value: "akrehamn",
  },
  {
    name: "Ågotnes",
    value: "agotnes",
  },
  {
    name: "Å i Åfjord",
    value: "a-i-afjord",
  },
  {
    name: "Vormedal",
    value: "vormedal",
  },
  {
    name: "Tingvoll",
    value: "tingvoll",
  },
  {
    name: "Oppeid",
    value: "oppeid",
  },
  {
    name: "Hommersåk",
    value: "hommersak",
  },
  {
    name: "Årøysund",
    value: "arysund",
  },
  {
    name: "Myre",
    value: "myre",
  },
  {
    name: "Nesoddtangen",
    value: "nesoddtangen",
  },
  {
    name: "Ørsta",
    value: "rsta",
  },
  {
    name: "Ryggebyen",
    value: "ryggebyen",
  },
  {
    name: "Vedavågen",
    value: "vedavagen",
  },
  {
    name: "Vestnes",
    value: "vestnes",
  },
  {
    name: "Fjellfoten",
    value: "fjellfoten",
  },
  {
    name: "Neskollen",
    value: "neskollen",
  },
  {
    name: "Kinsarvik",
    value: "kinsarvik",
  },
  {
    name: "Sjølyststranda",
    value: "sjlyststranda",
  },
  {
    name: "Ytrebygda",
    value: "ytrebygda",
  },
  {
    name: "Sandsli",
    value: "sandsli",
  },
  {
    name: "Frydenberg",
    value: "frydenberg",
  },
  {
    name: "Stjørdal",
    value: "stjrdal",
  },
  {
    name: "Frosta",
    value: "frosta",
  },
  {
    name: "Vik",
    value: "vik",
  },
  {
    name: "Sogndal",
    value: "sogndal",
  },
  {
    name: "Meieribyen",
    value: "meieribyen",
  },
  {
    name: "Kirkebygda",
    value: "kirkebygda",
  },
  {
    name: "Elvestad",
    value: "elvestad",
  },
  {
    name: "Fjerdingby",
    value: "fjerdingby",
  },
  {
    name: "Kirkebygda",
    value: "kirkebygda",
  },
  {
    name: "Kjenn",
    value: "kjenn",
  },
  {
    name: "Teigebyen",
    value: "teigebyen",
  },
  {
    name: "Hurdal",
    value: "hurdal",
  },
  {
    name: "Flisa",
    value: "flisa",
  },
  {
    name: "Bergset",
    value: "bergset",
  },
  {
    name: "Engerdal",
    value: "engerdal",
  },
  {
    name: "Lesja",
    value: "lesja",
  },
  {
    name: "Bismo",
    value: "bismo",
  },
  {
    name: "Ringebu",
    value: "ringebu",
  },
  {
    name: "Segalstad bru",
    value: "segalstad-bru",
  },
  {
    name: "Slidre",
    value: "slidre",
  },
  {
    name: "Vang",
    value: "vang",
  },
  {
    name: "Vik",
    value: "vik",
  },
  {
    name: "Trøim",
    value: "trim",
  },
  {
    name: "Hol",
    value: "hol",
  },
  {
    name: "Lierbyen",
    value: "lierbyen",
  },
  {
    name: "Lampeland",
    value: "lampeland",
  },
  {
    name: "Rødberg",
    value: "rdberg",
  },
  {
    name: "Revetal",
    value: "revetal",
  },
  {
    name: "Borgheim",
    value: "borgheim",
  },
  {
    name: "Sauland",
    value: "sauland",
  },
  {
    name: "Blakstad",
    value: "blakstad",
  },
  {
    name: "Birketveit",
    value: "birketveit",
  },
  {
    name: "Kyrkjebygda",
    value: "kyrkjebygda",
  },
  {
    name: "Kleppe",
    value: "kleppe",
  },
  {
    name: "Hjelmelandsvågen",
    value: "hjelmelandsvagen",
  },
  {
    name: "Sand",
    value: "sand",
  },
  {
    name: "Ydstebøhamn",
    value: "ydstebhamn",
  },
  {
    name: "Bokn",
    value: "bokn",
  },
  {
    name: "Aksdal",
    value: "aksdal",
  },
  {
    name: "Straume",
    value: "straume",
  },
  {
    name: "Aurlandsvangen",
    value: "aurlandsvangen",
  },
  {
    name: "Gaupne",
    value: "gaupne",
  },
  {
    name: "Askvoll",
    value: "askvoll",
  },
  {
    name: "Hornindal",
    value: "hornindal",
  },
  {
    name: "Fiskå",
    value: "fiska",
  },
  {
    name: "Stordal",
    value: "stordal",
  },
  {
    name: "Sykkylven",
    value: "sykkylven",
  },
  {
    name: "Valderøy",
    value: "valdery",
  },
  {
    name: "Falkhytta",
    value: "falkhytta",
  },
  {
    name: "Elnesvågen",
    value: "elnesvagen",
  },
  {
    name: "Bruhagen",
    value: "bruhagen",
  },
  {
    name: "Surnadal",
    value: "surnadal",
  },
  {
    name: "Rissa",
    value: "rissa",
  },
  {
    name: "Steinsdalen",
    value: "steinsdalen",
  },
  {
    name: "Støren",
    value: "stren",
  },
  {
    name: "Børsa",
    value: "brsa",
  },
  {
    name: "Klæbu",
    value: "klbu",
  },
  {
    name: "Mebonden",
    value: "mebonden",
  },
  {
    name: "Høylandet",
    value: "hylandet",
  },
  {
    name: "Silvalen",
    value: "silvalen",
  },
  {
    name: "Hattfjelldal",
    value: "hattfjelldal",
  },
  {
    name: "Lurøy",
    value: "lury",
  },
  {
    name: "Husøya",
    value: "husya",
  },
  {
    name: "Vågaholmen",
    value: "vagaholmen",
  },
  {
    name: "Leinesfjorden",
    value: "leinesfjorden",
  },
  {
    name: "Leknes",
    value: "leknes",
  },
  {
    name: "Tennevoll",
    value: "tennevoll",
  },
  {
    name: "Sørreisa",
    value: "srreisa",
  },
  {
    name: "Brøstadbotn",
    value: "brstadbotn",
  },
  {
    name: "Hatteng",
    value: "hatteng",
  },
  {
    name: "Breivikbotn",
    value: "breivikbotn",
  },
  {
    name: "Tana bru",
    value: "tana-bru",
  },
  {
    name: "Ulsteinvik weather pws station",
    value: "ulsteinvik-weather-pws-station",
  },
  {
    name: "Billingstad",
    value: "billingstad",
  },
  {
    name: "Nordstranda",
    value: "nordstranda",
  },
  {
    name: "Lyefjell",
    value: "lyefjell",
  },
  {
    name: "Ensjø",
    value: "ensj",
  },
];

export default NO_Cities;
