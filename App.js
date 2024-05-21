import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import NewsItem from './Components/NewsItem';


export default class App extends Component {
  articles = [

    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Pranav Dixit",
      "title": "Don't use smartwatches and rings that claim to measure blood sugar without needles, the FDA warns",
      "description": "The Food and Drug Administration on Wednesday issued a safety communication warning people to stay way from smartwatches and smart rings that claim to measure blood sugar levels without pricking the skin. “The FDA has not authorized, cleared, or approved any …",
      "url": "https://www.engadget.com/dontusesmartwatchesandringsthatclaimtomeasurebloodsugarwithoutneedlesthefdawarns001745875.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/pnLj9GRSq45Wc.wcAflrUQ/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA/https://s.yimg.com/os/creatruploadedimages/202402/1a332830d11611eebbfff7070d9022e6",
      "publishedAt": "20240222T00:17:45Z",
      "content": "The Food and Drug Administration on Wednesday issued a safety communication warning people to stay way from smartwatches and smart rings that claim to measure blood sugar levels without pricking the … [+1654 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Lauren Goode",
      "title": "Crying in Apple Vision Pro Is No Laughing Matter",
      "description": "I watched a steady diet of sad movies in Apple’s headset. It was strangely emotional, but the weight of the headset—and aloneness—distracted from the movies.",
      "url": "https://www.wired.com/story/cryinginapplevisionpro/",
      "urlToImage": "https://media.wired.com/photos/65d69c38c83aff5f69452044/191:100/w_1280,c_limit/gear_apple_vision_pro_crying.jpg",
      "publishedAt": "20240222T11:00:00Z",
      "content": "From the inside, though, the view is incredible. It really is. Im just as surprised by this as you are. The picture is crisp, and the spatial sound is so realistic that more than once I removed the h… [+2633 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Central"
      },
      "author": "vishnu.skar@gmail.com (Vishnu Sarangapurkar)",
      "title": "Apple Music on Android wants to make it easier to import your Spotify playlists",
      "description": "Apple Music and Spotify are always in the competition as both have massive music collections and a user base; new evidence points to the fact that transferring music between these apps could be hasslefree.",
      "url": "https://www.androidcentral.com/appssoftware/applemusicandroidintegratessongshiftfeature",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/EdH3ZAKYo5zNEs8LxVMKHg120080.jpg",
      "publishedAt": "20240222T06:17:49Z",
      "content": "<ul><li>Apple Music 4.7.0 beta (1359) for Android reveals a new SongShift feature.</li><li>As the name implies, it will allow users to transfer music across music streaming apps.</li><li>The feature … [+1993 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ReadWrite"
      },
      "author": "James Jones",
      "title": "Apple to launch PQ3 update for iMessage, bolstering encryption against quantum computing",
      "description": "Apple has confirmed its plans to launch its newest iMessage security protocol, named PQ3, in response to what it claims […]\nThe post Apple to launch PQ3 update for iMessage, bolstering encryption against quantum computing appeared first on ReadWrite.",
      "url": "https://readwrite.com/applecombatsquantumcomputerthreatwithpq3updateforimessage/",
      "urlToImage": "https://readwrite.com/wpcontent/uploads/2024/02/mariiashalabaievaeQsuFl7jNRAunsplashscaled.jpg",
      "publishedAt": "20240222T01:37:58Z",
      "content": "Apple has confirmed its plans to launch its newest iMessage security protocol, named PQ3, in response to what it claims is a future threat from quantum computers, according to a recent PCMag report.\r… [+2754 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hipertextual"
      },
      "author": "Aglaia Berlutti",
      "title": "‘Constelación’, crítica: uno de los mejores thrillers de ciencia ficción lleva el sello de Apple",
      "description": "Constelación lleva la idea del espacio profundo al misterio y al terror. La serie de Apple TV+, protagonizada por la actriz sueca Noomi Rapace, comienza por lo que parece un incidente aislado. Una explosión que transforma la tranquila existencia en la Estació…",
      "url": "http://hipertextual.com/2024/02/constelacioncriticaunodelosmejoresthrillersdecienciaficcionllevaelsellodeapple",
      "urlToImage": "https://imgs.hipertextual.com/wpcontent/uploads/2024/02/constellationHipertextualscaled.jpg",
      "publishedAt": "20240222T10:31:17Z",
      "content": "Constelación lleva la idea del espacio profundo al misterio y al terror. La serie de Apple TV+, protagonizada por la actriz sueca Noomi Rapace, comienza por lo que parece un incidente aislado. Una ex… [+6396 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hipertextual"
      },
      "author": "Rubén Chicharro",
      "title": "Microsoft se une al club de Apple: diseñará sus propios chips y recurrirá a un viejo conocido para fabricarlos",
      "description": "Intel y Microsoft han llegado a un acuerdo millonario donde la compañía especializada en procesadores fabricará chips que han sido diseñados por Microsoft, y que únicamente la propia Microsoft utilizará. Ambas firmas han revelado que el valor de esta asociaci…",
      "url": "http://hipertextual.com/2024/02/microsoftseunealclubdeappledisenarasuspropioschipsyrecurriraaunviejoconocidoparafabricarlos",
      "urlToImage": "https://imgs.hipertextual.com/wpcontent/uploads/2019/02/hipertextual2019434050.jpg",
      "publishedAt": "20240222T09:48:49Z",
      "content": "Intel y Microsoft han llegado a un acuerdo millonario donde la compañía especializada en procesadores fabricará chips que han sido diseñados por Microsoft, y que únicamente la propia Microsoft utiliz… [+2524 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Ricardo Aguilar",
      "title": "iOS se ha convertido en el referente para juegos de móvil. El problema es que el iPhone no puede con ellos",
      "description": "La tarde de ayer fue relevante para iOS y su tienda de aplicaciones, App Store. Llegaba de forma oficial y gratuita 'Warframe', uno de los MMORPG más relevantes de la actualidad y una muestra más del músculo de Apple a la hora de lograr pactos con empresas de…",
      "url": "https://www.xataka.com/aplicaciones/iossehaconvertidoreferenteparajuegosmovilproblemaqueiphonenopuedeellos",
      "urlToImage": "https://i.blogs.es/b1dbc6/iphonbe/840_560.jpeg",
      "publishedAt": "20240222T11:00:49Z",
      "content": "La tarde de ayer fue relevante para iOS y su tienda de aplicaciones, App Store. Llegaba de forma oficial y gratuita 'Warframe', uno de los MMORPG más relevantes de la actualidad y una muestra más del… [+2319 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Javier Pastor",
      "title": "Microsoft lleva años preparando el lanzamiento de sus propios chips. Y ya tiene aliado estrella: Intel",
      "description": "El lanzamiento de los Apple M1 en noviembre de 2020 fue crucial para el desarrollo de sus Mac, pero también fue un tortazo de realidad para Microsoft, que se dio cuenta de una cosa: a esas alturas, cualquiera podía fabricar un chip propio. \n<! BREAK 1 >\nL…",
      "url": "https://www.xataka.com/componentes/microsoftllevaanospreparandolanzamientosuspropioschipstienealiadoestrellaintel",
      "urlToImage": "https://i.blogs.es/d000c8/chipmsai/840_560.jpeg",
      "publishedAt": "20240222T09:00:49Z",
      "content": "El lanzamiento de los Apple M1 en noviembre de 2020 fue crucial para el desarrollo de sus Mac, pero también fue un tortazo de realidad para Microsoft, que se dio cuenta de una cosa: a esas alturas, c… [+3328 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hubspot.com"
      },
      "author": "Mandy Bray",
      "title": "8 Email Disclaimer Examples I Love (For Your Inspiration)",
      "description": "If I reach the footer of an email in my inbox, it usually means one of two things: 1) The email was so engaging I read all the way to the end (that’s rare), or 2) I scrolled down to unsubscribe.",
      "url": "https://blog.hubspot.com/marketing/emaildisclaimerexamples#article",
      "urlToImage": "https://blog.hubspot.com/hubfs/emaildisclaimerexamples.webp#keepProtocol",
      "publishedAt": "20240222T12:00:00Z",
      "content": "If I reach the footer of an email in my inbox, it usually means one of two things: 1) The email was so engaging I read all the way to the end (thats rare), or 2) I scrolled down to unsubscribe.\r\nTher… [+15409 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ikeahackers.net"
      },
      "author": "Jules Yap",
      "title": "4 Unique Mac Mini Stands to Enhance Your Workspace Setup",
      "description": "Mac Mini enthusiasts have long sought innovative, costeffective solutions to elevate and showcase their compact computing marvels. Enter the world of Mac Mini stand IKEA hacks, where creativity meets practicality to transform everyday IKEA items into functio…",
      "url": "https://ikeahackers.net/2024/02/macministandideas.html",
      "urlToImage": "https://ikeahackers.net/wpcontent/uploads/2024/02/macministand.jpg",
      "publishedAt": "20240222T11:00:00Z",
      "content": "Mac Mini enthusiasts have long sought innovative, costeffective solutions to elevate and showcase their compact computing marvels. Enter the world of Mac Mini stand IKEA hacks, where creativity meet… [+5430 chars]"
    },
    {
      "source": {
        "id": "foxnews",
        "name": "Fox News"
      },
      "author": "Kurt Knutsson, CyberGuy Report",
      "title": "Never fumble through paper instructions ever again with this killer Apple Vision Pro 3D app",
      "description": "Kurt “CyberGuy\" Knutsson gives the details on BILT's new app for Apple Vision Pro that provides 3D immersive instructions to make DIY projects easier, faster and more enjoyable.",
      "url": "https://www.foxnews.com/tech/neverfumblethroughpaperinstructionseveragainwiththiskillerapplevisionpro3dapp",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/2NeverfumblethroughpaperinstructionseveragainwiththiskillerApple3DVisionProapp.jpg",
      "publishedAt": "20240222T11:00:50Z",
      "content": "Have you ever bought something that came in a box and felt overwhelmed by the complicated instructions? Have you ever wished there was a better way to assemble, install or repair your products withou… [+6292 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Apple Newsroom"
      },
      "author": "John Gruber",
      "title": "Coming Soon: Apple Immersive Video Film With Highlights of MLS 2023 Playoffs",
      "description": "Major League Soccer’s 2024 season kicks off today, Wednesday, February 21, exclusively on MLS Season Pass on Apple TV.",
      "url": "https://www.apple.com/newsroom/2024/02/2024mlsseasonkicksofftodayexclusivelyonmlsseasonpassonappletv/",
      "urlToImage": "https://www.apple.com/newsroom/images/2024/02/2024mlsseasonkicksofftodaymlsseasonpassappletv/tile/AppleTVMLSSeasonPassliveschedule.jpg.og.jpg?202402212312",
      "publishedAt": "20240222T02:36:17Z",
      "content": "February 21, 2024\r\nUPDATE\r\n2024 MLS season kicks off today exclusively on MLS Season Pass on Apple TV\r\nLionel Messi and Inter Miami CF host Real Salt Lake at 8 p.m. ET\r\nMajor League Soccers 2024 seas… [+4858 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Trevor Mogg",
      "title": "The top 7 bestselling phones of 2023 were all … you guessed it",
      "description": "One brand dominated the top 10 chart for bestselling smartphones in 2023, according to data released this week by research firm Counterpoint.",
      "url": "https://www.digitaltrends.com/mobile/onebrandtookthetop7spotsin2023smartphonesales/",
      "urlToImage": "https://www.digitaltrends.com/wpcontent/uploads/2023/09/iphone15promaxreviewsideprofile.jpg?resize=1200%2C630&p=1",
      "publishedAt": "20240222T03:55:58Z",
      "content": "Seven of the top 10 bestselling handsets in 2023 were iPhones, according to data from research firm Counterpoint.\r\nThis marks the first time in Counterpoint’s tracking of such data that Apple’s hand… [+1563 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Don't dry your iPhone in a bag of rice, says Apple",
      "description": "The popular remedy risks \"small particles\" entering the phone and causing damage, new advice says.",
      "url": "https://www.bbc.com/news/technology68357165",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/465A/production/_132701081_gettyimages862051866.jpg",
      "publishedAt": "20240222T07:02:20Z",
      "content": "Don't try this at home, Apple says\r\nIf your iPhone gets wet don't dry it in a bag of rice, Apple has advised.\r\nDespite the technique's popularity, experts have long warned against it, with tests sugg… [+1539 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Github.com"
      },
      "author": "ory",
      "title": "Show HN: Auth0 OSS alternative Ory Kratos now with passwordless and SMS support",
      "description": "Ory Kratos v1.1 is the most complete, most scalable, and most secure opensource identity server on the planet, and we are thrilled to announce its release! This release comes with over 270 commits...",
      "url": "https://github.com/ory/kratos/releases/tag/v1.1.0",
      "urlToImage": "https://opengraph.githubassets.com/f50f5f56b2971bb4fcd5a22ff24bf47104936a386e4fa41ac9218683c2b3ebaf/ory/kratos/releases/tag/v1.1.0",
      "publishedAt": "20240222T11:41:48Z",
      "content": "Ory Kratos v1.1 is the most complete, most scalable, and most secure opensource identity server on the planet, and we are thrilled to announce its release! This release comes with over 270 commits a… [+20617 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gimp.org"
      },
      "author": "Wilber",
      "title": "Gimp 2.99.18 Released: The Last Development Preview Before 3.0",
      "description": "Release news for version GIMP 2.99.18",
      "url": "https://www.gimp.org/news/2024/02/21/gimp29918released/",
      "urlToImage": "https://www.gimp.org/news/2023/07/09/gimp29916released/gimp2.99.16splash.jpg",
      "publishedAt": "20240222T11:27:35Z",
      "content": "At long last, we bring you the final development version before GIMP 3! While the release of 2.99.18 is a bit behind our intended schedule, there are a number of new features and improvements that we… [+29603 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Ben Schwan",
      "title": "Neue SportsApp: Apple liefert LigaDaten und PlaybyPlay",
      "description": "Apple hat am Mittwoch unverhofft eine neue App fürs iPhone freigegeben – mit spitzer Zielgruppe. Wer sie hierzulande ausprobieren möchte, muss aber tricksen.",
      "url": "https://www.heise.de/news/NeueSportsAppAppleliefertLigaDatenundPlaybyPlay9635509.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.pnglossy85.webplossy85.foil1/_wwwheisede_/imgs/18/4/5/4/6/1/4/8/applesports9ce071c0900423a0.png",
      "publishedAt": "20240222T09:57:00Z",
      "content": "Apple interessiert sich zunehmend für das Sportgeschäft. Nach TVDeals mit USBaseballLigen und dem örtlichen Topfußball hat der iPhoneHersteller nun eine kostenlose neue App nur für dieses Thema v… [+2247 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Ben Schwan",
      "title": "Neue iPads: OLEDs, Dimensionen und die Frage nach dem mini",
      "description": "Bis Apple neue iPads vorstellt, dürfte es nur noch wenige Wochen dauern. Nun sind weitere Details zum Look und der weiteren Roadmap aufgetaucht.",
      "url": "https://www.heise.de/news/NeueiPadsOLEDsDimensionenunddieFragenachdemmini9634929.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.pnglossy85.webplossy85.foil1/_wwwheisede_/imgs/18/4/5/4/5/8/2/5/ipad_10d3dc753363f68a18.png",
      "publishedAt": "20240222T08:51:00Z",
      "content": "2023 war für Apples TabletAbteilung ein Jahr des Stillstands: Erstmals seit 2010 gab es kein einziges neues Gerät. Umso gespannter schauen iPadFreunde (und die Branche) nun auf die kommenden zwei M… [+2710 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Ben Schwan",
      "title": "SmartphoneTopTen 2023: Sieben von zehn Bestsellern waren iPhones",
      "description": "Mit iPhone 13, 14 und 15 ist es Apple im vergangenen Jahr gelungen, die Verkaufscharts zu dominieren. Das besagt eine Analyse von Counterpoint.",
      "url": "https://www.heise.de/news/SmartphoneTopTen2023SiebenvonzehnBestsellernwareniPhones9634925.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.pnglossy85.webplossy85.foil1/_wwwheisede_/imgs/18/4/5/4/5/8/2/3/tre_iPhone15ModelleUSBC09b17bf102145212.jpeg",
      "publishedAt": "20240222T09:10:00Z",
      "content": "Diese Liste dürfte das Management von Apple freuen: Die am Mittwoch vorgestellte \"Global Top Ten\" der meistverkauften Smartphones weltweit, die das Analyseunternehmen Counterpoint Research für das Ja… [+1963 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Ben Schwan",
      "title": "AppleWatchUnfallerkennung ruft Polizei, doch der Fahrer ist schon weg",
      "description": "Die in Apples Computeruhr eingebaute CrashErkennung arbeitet manchmal besser, als es Fahrern lieb ist, wie ein Fall aus Arizona zeigt.",
      "url": "https://www.heise.de/news/AppleWatchUnfallerkennungruftPolizeidochderFahreristschonweg9589300.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.pnglossy85.webplossy85.foil1/_wwwheisede_/imgs/18/4/5/2/1/8/3/5/crashproded1dbecbf43f9f6c.png",
      "publishedAt": "20240222T11:30:00Z",
      "content": "Apples Unfallerkennung ist seit dem Jahr 2022 Teil von aktuellen iPhones und AppleWatchComputeruhren. Dank der Crash Detection sollen Gerätebesitzer bei Autounfällen automatisch Hilfe erhalten und … [+1965 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Oliver Bünte",
      "title": "USGesundheitsbehörde warnt vor Blutzucker messenden Ringen und Smartwatches",
      "description": "Smarte Ringe und Smartwatches, die den Blutzuckerspiegel messen können, ohne dass dazu die Haut durchstochen wird, sind laut FDA nicht zugelassen und warnt.",
      "url": "https://www.heise.de/news/USGesundheitsbehoerdewarntvorBlutzuckermessendenRingenundSmartwatches9635282.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.pnglossy85.webplossy85.foil1/_wwwheisede_/imgs/18/4/5/4/6/0/2/2/shutterstock_583223728adfc4169e858d8bb.jpg",
      "publishedAt": "20240222T06:39:00Z",
      "content": "Die USGesundheitsbehörde Food and Drug Administration (FDA), die unter anderem für die Freigabe medizinischer Geräte verantwortlich ist, hat eine Warnung vor smarten Ringen und Smartwatches ausgespr… [+2263 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Zac Hall",
      "title": "Upgrade to iPhone 15? You’ll need this cable for CarPlay",
      "description": "Apple changed the charging port from Lightning to USBC with the iPhone 15. A USBC charging cable comes in the box, but upgraders may need to purchase a separate cable to continue using CarPlay.\n\n\n\n more…",
      "url": "https://9to5mac.com/2024/02/21/iphone15carplayusbccable/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wpcontent/uploads/sites/6/2023/11/JOYINGHondaCivicCarPlay.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "20240222T03:27:35Z",
      "content": "Apple changed the charging port from Lightning to USBC with the iPhone 15. A USBC charging cable comes in the box, but upgraders may need to purchase a separate cable to continue using CarPlay.\r\nTh… [+1445 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Police"
      },
      "author": "Will Sattelberg",
      "title": "Samsung is bringing Galaxy AI to last year's flagships in March",
      "description": "It's coming to the Galaxy S23, Z Fold 5, and more as part of One UI 6.1",
      "url": "https://www.androidpolice.com/samsungbringinggalaxyai2023flagshipsoneui/",
      "urlToImage": "https://static1.anpoimages.com/wordpress/wpcontent/uploads/2023/01/galaxys23trioblackplusbg.jpg",
      "publishedAt": "20240222T03:00:13Z",
      "content": "Summary\r\n<ul><li> Galaxy AI features are expanding to older Samsung devices like the Galaxy S23, Z Fold 5, and Tab S9 in March with One UI 6.1. </li><li> Google's Circle to Search tool is also coming… [+3992 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MarketWatch"
      },
      "author": "Barbara Kollmeyer",
      "title": "Stocks can get more expensive, but don’t get in front of FOMO for now, says strategist",
      "description": "This is no time to bail on momentum trades, even if stocks are looking expensive, says Evercore’s Julian Emanuel.",
      "url": "https://www.marketwatch.com/story/stockscangetmoreexpensivebutdontgetinfrontoffomofornowsaysstrategiste05fb2da",
      "urlToImage": "https://images.mktw.net/im88409229/social",
      "publishedAt": "20240222T11:45:00Z",
      "content": "The bulls are back in town or maybe they never left. After blowing past forecasts, Nvidia is not only soaring in premarket, but mass enthusiasm is sparking stock records from Tokyo to Paris, pointing… [+6402 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (Wesley Hilliard)",
      "title": "App Review's sudden enforcement of an inapp gift rule catches a meditation app off guard",
      "description": "Insight Timer is a popular meditation app that allows students to tip teachers directly, but an App Review mistake that took over a year to catch has forced the developer to adopt inapp purchases and pay Apple's 30% commission.Insight Timer on the App StoreA…",
      "url": "https://appleinsider.com/articles/24/02/22/appreviewssuddenenforcementofaninappgiftrulecatchesameditationappoffguard",
      "urlToImage": "https://photos5.appleinsider.com/gallery/58688119618IMG_4999xl.jpg",
      "publishedAt": "20240222T00:56:15Z",
      "content": "Insight Timer on the App Store\r\nInsight Timer is a popular meditation app that allows students to tip teachers directly, but an App Review mistake that took over a year to catch has forced the develo… [+5139 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "AppleInsider"
      },
      "author": "news@appleinsider.com (William Gallagher)",
      "title": "'Flower Moon' director Martin Scorsese honored by Berlin Film Festival",
      "description": "Apple TV+ \"Killers of the Flower Moon\" director Martin Scorsese has been awarded the prestigious Honorary Golden Bear by the Berlin International Film Festival, which also hosted a featurelength discussion with him.Martin Scorsese at the Berlin International…",
      "url": "https://appleinsider.com/articles/24/02/22/flowermoondirectormartinscorsesehonoredbyberlinfilmfestival",
      "urlToImage": "https://photos5.appleinsider.com/gallery/58689119622000ledeScorsesexl.jpg",
      "publishedAt": "20240222T11:21:38Z",
      "content": "Martin Scorsese at the Berlin International Film Festival\r\nApple TV+ \"Killers of the Flower Moon\" director Martin Scorsese has been awarded the prestigious Honorary Golden Bear by the Berlin Internat… [+1062 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Macworld"
      },
      "author": "Glenn Fleishman",
      "title": "Macs can’t use as many displays as they have USBC ports",
      "description": "Macworld\n\n\n\r\n\n\n\n\nApple went all in on USBC, starting with the introduction of the nowdiscontinued 12inch MacBook in 2015. For a while, you could buy a Mac with one, two, or four USBC ports, all of which were also Thunderbolt 3 capable, except the 12inch …",
      "url": "https://www.macworld.com/article/2232640/macscantuseasmanydisplaysastheyhaveusbcports.html",
      "urlToImage": "https://www.macworld.com/wpcontent/uploads/2024/02/macstudioports.jpeg?quality=50&strip=all&w=1024",
      "publishedAt": "20240222T09:00:00Z",
      "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nApple went all in on… [+2719 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Journal du geek"
      },
      "author": "tristan carballeda",
      "title": "Avec cette nouveauté iMessage va “dépasser largement” ses concurrents",
      "description": "Apple vient d'annoncer l'arrivée d'un nouveau protocole de sécurité PQ3 \"la mise à niveau la plus importante de l'histoire d'iMessage\".",
      "url": "https://www.journaldugeek.com/2024/02/22/aveccettenouveauteimessagevadepasserlargementsesconcurrents/",
      "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/02/imessageappleprotocolePG3.jpg",
      "publishedAt": "20240222T08:28:42Z",
      "content": "iOS 17.4 sera la mise à jour de tous les changements. En plus des modifications attendues en Europe pour le respect du nouveau DMA, Apple serait sur le point d’ajouter à sa mise à jour une fonctionna… [+2696 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Miguel López",
      "title": "El iPhone se iba a llamar originalmente de una manera muy distinta y tenía todo el sentido",
      "description": "iMac, iBook, iPod, iPhone. Cuando repasamos el nombre de los principales productos de Apple, se aprecia una lógica aplastante y un sistema simple para bautizarlos. Con este historial, a veces uno comete el error de pensar que la decisión de llamar iPhone al i…",
      "url": "https://www.applesfera.com/iphone/iphoneseibaallamaroriginalmentemaneramuydistintateniatodosentido",
      "urlToImage": "https://i.blogs.es/5dbf3b/stevejobsiphoneoriginal/840_560.jpeg",
      "publishedAt": "20240222T09:00:49Z",
      "content": "iMac, iBook, iPod, iPhone. Cuando repasamos el nombre de los principales productos de Apple, se aprecia una lógica aplastante y un sistema simple para bautizarlos. Con este historial, a veces uno com… [+3503 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Álvaro García M.",
      "title": "Siete de los diez móviles más vendidos en el mundo son de Apple y esto nos da una pista sobre el futuro del iPhone",
      "description": "Que a Apple le había ido bien en 2023 en lo que a ventas de iPhone se refiere es algo que ya sabíamos, puesto que le había ganado la partida a Samsung según mostraban ya varios estudios. También que dominó el mercado de gama alta y que incluso en España obtuv…",
      "url": "https://www.applesfera.com/iphone/estosfueronmovilesvendidos2023imposiblevergamaaltaquenofueseiphone",
      "urlToImage": "https://i.blogs.es/ea4be7/iphone14/840_560.jpeg",
      "publishedAt": "20240222T08:00:50Z",
      "content": "Que a Apple le había ido bien en 2023 en lo que a ventas de iPhone se refiere es algo que ya sabíamos, puesto que le había ganado la partida a Samsung según mostraban ya varios estudios. También que … [+4392 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Isra Fdez",
      "title": "\"Vale cada céntimo\": este es mi arma secreta para limpiar las millones de huellas del iPhone o el iPad y viene avalado por la propia Apple",
      "description": "Es el secreto mejor guardado de las Apple Store de medio mundo. Cada vez que cruzo el umbral y veo dispuestos en fila decenas de iPhone 15 Pro o esos inmaculados iMac de 24 pulgadas al fondo de la tienda siempre me preguntaba: vale, ¿y cómo los mantienen tan …",
      "url": "https://www.applesfera.com/accesorios/valecadacentimoestemiarmasecretaparalimpiarmilloneshuellasiphoneipadvieneavaladopropiaapple",
      "urlToImage": "https://i.blogs.es/327c15/portadadelimpieza/840_560.jpeg",
      "publishedAt": "20240222T11:00:49Z",
      "content": "Es el secreto mejor guardado de las Apple Store de medio mundo. Cada vez que cruzo el umbral y veo dispuestos en fila decenas de iPhone 15 Pro o esos inmaculados iMac de 24 pulgadas al fondo de la ti… [+3803 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Applesfera.com"
      },
      "author": "Álvaro García M.",
      "title": "Me he dado cuenta de que llevo años usando mal mi WiFi: así lo configuro ahora para mejorar su rendimiento en mi iPhone y mi MacBook",
      "description": "Trabajar desde casa y tener unos cuantos dispositivos conectados al WiFi puede ser un auténtico drama. Y da igual la tarifa de fibra que se tenga contratada. Hasta hace un tiempo, era habitual que notase problemas de conexión en mi iPhone o MacBook, especial…",
      "url": "https://www.applesfera.com/trucos/mehedadocuentaquellevoanosusandomalmiwifiasiconfiguroahoraparamejorarsurendimientomiiphonemimacbook",
      "urlToImage": "https://i.blogs.es/879de0/wifiiphone/840_560.jpeg",
      "publishedAt": "20240222T10:00:51Z",
      "content": "Trabajar desde casa y tener unos cuantos dispositivos conectados al WiFi puede ser un auténtico drama. Y da igual la tarifa de fibra que se tenga contratada. Hasta hace un tiempo, era habitual que n… [+3182 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Phandroid  News for Android"
      },
      "author": "Tyler Lee",
      "title": "Apple’s iMessage just got its security beefed up tremendously",
      "description": "Apple has announced that they will be beefing up security and privacy of iMessage through the use of a postquantum cryptographic protocol.\nThe post Apple’s iMessage just got its security beefed up tremendously appeared first on Phandroid.",
      "url": "https://phandroid.com/2024/02/22/applesimessagejustgotitssecuritybeefeduptremendously/",
      "urlToImage": "https://phandroid.com/wpcontent/uploads/2022/10/mkekeiphonecase4.jpg",
      "publishedAt": "20240222T09:46:54Z",
      "content": "A lot of messenger apps these days support endtoend encryption. This basically protects the contents of a message during transit as it can only be decrypted once it reaches its intended recipient. … [+1126 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka Android"
      },
      "author": "Fran León",
      "title": "Los auriculares Bluetooth con cancelación de ruido de Google más pro están hoy disponibles a precio de chollo",
      "description": "Aunque los AirPods de Apple son unos de los auriculares Bluetooth más vendidos, para usuarios de Android no sirven. Si estás buscando unos cascos de alta gama, los Google Pixel Buds Pro son una buena alternativa. Ahora, en Amazon, se pueden conseguir en ofert…",
      "url": "https://www.xatakandroid.com/ofertas/auricularesbluetoothcancelacionruidogoogleproestanhoydisponiblesapreciochollo",
      "urlToImage": "https://i.blogs.es/0cea55/ofertas_cpa_v3copia46/840_560.jpeg",
      "publishedAt": "20240222T12:00:50Z",
      "content": "Aunque los AirPods de Apple son unos de los auriculares Bluetooth más vendidos, para usuarios de Android no sirven. Si estás buscando unos cascos de alta gama, los Google Pixel Buds Pro son una buena… [+1578 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "HYPEBEAST"
      },
      "author": "info@hypebeast.com (Hypebeast)",
      "title": "Ray Vaughn Enlists Pusha T for New Single \"Problems\"",
      "description": "Top Dawg Entertainment’s Ray Vaughn linked up with Pusha T for his latest single, \"Problems.\"The track marks Vaughn's first release of 2024 and hears the pair trade sharp and witty bars over production by Rayo and Wizzle. Two versions of \"Problems\" will be av…",
      "url": "https://hypebeast.com/2024/2/rayvaughnpushatproblemssinglestream",
      "urlToImage": "https://imagecdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F02%2Frayvaughnpushatproblemssinglestreamtw.jpg?w=1080&cbr=1&q=90&fit=max",
      "publishedAt": "20240222T08:22:52Z",
      "content": "Top Dawg Entertainments Ray Vaughn linked up with Pusha T for his latest single, “Problems.”\r\nThe track marks Vaughn’s first release of 2024 and hears the pair trade sharp and witty bars over product… [+503 chars]"
    },
    {
      "source": {
        "id": "diezeit",
        "name": "Die Zeit"
      },
      "author": "ZEIT ONLINE: Kunst  Jens Balzer",
      "title": "Yoko Ono: Die Pionierin des Gelächters",
      "description": "Eine große Retrospektive in London feiert die Künstlerin Yoko Ono. Ihr Werk wirkt heute wieder erstaunlich aktuell. Und erst jetzt wird auch klar, wie viel Humor Ono hat.",
      "url": "https://www.zeit.de/2024/09/yokoonotatemodernlondon",
      "urlToImage": "https://img.zeit.de/2024/09/diepionierindesgelaechtersbild1/wide__1300x731",
      "publishedAt": "20240222T04:12:14Z",
      "content": "Yoko Ono mit ihrem \"Glass Hammer\", 1967© Clay Perry (Yoko Ono mit Glashammer aus \"HalfaWind Show\" Lisson Gallery 1967)\r\nDas ist möglicherweise nicht das Erste, woran man denkt, wenn man an Yoko Ono… [+10219 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "iMore"
      },
      "author": "Stephen Warwick",
      "title": "Apple TV Plus space thriller Constellation divides opinion — 'Slow', 'obvious' and boring? Or a 'slick' 'heir to Gravity'?",
      "description": "Reviews for Apple TV Plus' new show Constellation are in, and the results are mixed to say the least.",
      "url": "https://www.imore.com/musicmoviestv/appletvplusspacethrillerconstellationdividesopinionslowobviousandboringoraslickheirtogravity",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/sE6xEN789AabgPd2ZaA56D120080.jpg",
      "publishedAt": "20240222T11:14:34Z",
      "content": "Apple this week celebrated the global premier of its brand new scifi space thriller Constellation, and early reviews indicate it might be one of Apple’s most divisive shows ever. \r\nConstellation, st… [+2238 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "iMore"
      },
      "author": "johnanthony.disotto@futurenet.com (JohnAnthony Disotto)",
      "title": "Apple Vision Pro on sale in Russia despite the company no longer exporting to the country — thirdparty resale store offers demos and purchases on Apple's most exclusive product",
      "description": "Apple Vision Pro is on sale in Moscow despite the headset not being available in Europe and the company no longer exporting to Russia.",
      "url": "https://www.imore.com/visionpro/applevisionproonsaleinrussiadespitethecompanynolongerexportingtothecountrythirdpartyresalestoreoffersdemosandpurchasesonapplesmostexclusiveproduct",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/WuzMtu4mMuMVe4vcZGW6v120080.jpg",
      "publishedAt": "20240222T10:14:44Z",
      "content": "The Apple Vision Pro is the hottest tech product in the world right now and is only available officially in the U.S. However, at least one thirdparty store in Russia is offering the mixedreality he… [+2329 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "iMore"
      },
      "author": "Tammy Rogers",
      "title": "iPhones accounted for the top 7 bestselling phones of 2023 — and there are no topend Android handsets to be found",
      "description": "The iPhone 14 was the bestselling phone for 2023 and dominated the list over Android smart phones.",
      "url": "https://www.imore.com/iphone/iphone15/iphonesaccountedforthetop7bestsellingphonesof2023andtherearenotopendandroidhandsetstobefound",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/U5WUCwxFdrwe3dDKj4R84b120080.jpg",
      "publishedAt": "20240222T10:52:19Z",
      "content": "For the first time ever, Apple has dominated the top seven spots of the bestselling smartphone list, with the iPhone 14 leading the charge over the course of the year. Even more impressively, Apple's… [+2639 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Vox"
      },
      "author": "Marin Cogan",
      "title": "American drivers are now even more distracted by their phones. Pedestrian deaths are soaring.",
      "description": "During the pandemic, distracted driving increased, and it hasn’t gone down since.",
      "url": "https://www.vox.com/24078289/usdriversdistracteddrivingcellphoneroaddeathspedestrians",
      "urlToImage": "https://cdn.voxcdn.com/thumbor/7ETo_I_yIt1sXTXZcVElulAQ1o=/0x215:3000x1786/fitin/1200x630/cdn.voxcdn.com/uploads/chorus_asset/file/25297481/GettyImages_526624306.jpg",
      "publishedAt": "20240222T12:00:00Z",
      "content": "A driver is captured using a phone behind the wheel in New York in this 2016 in photo. The problem of distracted drivers has only gotten worse, one set of data from millions of drivers shows. | Spenc… [+11137 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xatakamovil.com"
      },
      "author": "Alejandro Alcolea",
      "title": "El iPhone SE 4 sería una especie de iPhone XR con pantalla OLED y hardware al día, según The Elec",
      "description": "Aunque llevan sonando un tiempo, estos últimos días los rumores sobre un posible iPhone SE 4 han vuelto con fuerza. El último modelo de esta familia fue un iPhone SE 2022 que se vio eclipsado por la última generación de los iPhone mini (el iPhone 13 mini) y, …",
      "url": "https://www.xatakamovil.com/apple/iphonese4seriaespecieiphonexrpantallaoledhardwarealdiatheelec",
      "urlToImage": "https://i.blogs.es/287c73/original/840_560.jpeg",
      "publishedAt": "20240222T12:00:50Z",
      "content": "Aunque llevan sonando un tiempo, estos últimos días los rumores sobre un posible iPhone SE 4 han vuelto con fuerza. El último modelo de esta familia fue un iPhone SE 2022 que se vio eclipsado por la … [+3635 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Appinn.com"
      },
      "author": "青小蛙",
      "title": "Apple Sports 发布，追踪实时你喜爱的球队和联赛比分和统计数据，包括五大联赛、NBA、MLB、MLS 等，无国内联赛[iPhone]",
      "description": "Apple Sports 是一款由苹果刚刚发布的体育赛事比分追踪应用，可以关注包括足球五大联赛、NBA、MLB、MLS 等赛事的比分、联赛统计数据。@Appinn今天中午，Cook 宣布了 Apple Sports：Ap",
      "url": "https://www.appinn.com/applesports/",
      "urlToImage": "https://www.appinn.com/wpcontent/uploads/2024/02/Appinnfeatureimages96.jpg",
      "publishedAt": "20240222T07:30:38Z",
      "content": "Apple Sports NBAMLBMLS @Appinn\r\nCook Apple Sports\r\nApple Sports \r\n<ul><li></li><li></li><li></li><li></li><li></li><li>Liga MX</li><li>MLB</li><li>MLS</li><li>NBA</li><li>NHL</li><li>NWSL</li><li>WNB… [+125 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Caschys Blog"
      },
      "author": "caschy",
      "title": "Amazon: Keine Änderungen an Freevee",
      "description": "Wir berichteten darüber, dass Amazon, laut einem Bericht von AdWeek, das Aus für seinen Streamingdienst Freevee plant. Falls der unbekannt sein sollte: Amazon Freevee, ehemals IMDb TV, ist ein kostenloser, werbefinanzierter StreamingVideodienst, der eine Aus…",
      "url": "https://stadtbremerhaven.de/amazonkeineaenderungenanfreevee/",
      "urlToImage": "https://stadtbremerhaven.de/wpcontent/uploads/2022/12/freevee_.jpg",
      "publishedAt": "20240222T07:24:50Z",
      "content": "Wir berichteten darüber, dass Amazon, laut einem Bericht von AdWeek, das Aus für seinen Streamingdienst Freevee plant. Falls der unbekannt sein sollte: Amazon Freevee, ehemals IMDb TV, ist ein kosten… [+1180 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "IndieWire"
      },
      "author": "Bill Desowitz",
      "title": "VES 2024 Winners Include ‘The Creator,’ ‘SpiderMan: Across the SpiderVerse,’ and ‘Nyad’",
      "description": "\"The Creator\" won five VES awards and \"SpiderMan: Across the SpiderVerse\" earned four, but \"Godzilla Minus One\" still might be the one to beat for the Oscar.",
      "url": "https://www.indiewire.com/awards/results/2024veswinners1234954988/",
      "urlToImage": "https://www.indiewire.com/wpcontent/uploads/2023/09/V10048_frm_pull.047.jpg",
      "publishedAt": "20240222T06:19:03Z",
      "content": "Gareth Edwards’ “The Creator” was the big winner at the 22nd Visual Effects Society Awards (held February 21 at the Beverly Hilton Hotel). The AIthemed, scifi actioner earned five awards, including… [+12051 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Frandroid"
      },
      "author": "Mélanie Capelli",
      "title": "Apple iPhone 15 Pro : le prix baisse drastiquement, mais aujourd’hui seulement",
      "description": "Rares sont les promos sur les produits Apple, alors quand l’occasion se présente, il ne faut pas hésiter si vous souhaitez renouveler votre iPhone. Le 15 Pro est aujourd’hui en promotion à 939 euros contre 1 229 euros de base.",
      "url": "https://www.frandroid.com/bonsplans/1943898_lameilleuredesoffrespourliphone15provientdetombermaiselleestvalableuniquementaujourdhui",
      "urlToImage": "https://images.frandroid.com/wpcontent/uploads/2023/10/appleiphone15profrandroiddsc09945.jpg",
      "publishedAt": "20240222T09:32:57Z",
      "content": "Rares sont les promos sur les produits Apple, alors quand loccasion se présente, il ne faut pas hésiter si vous souhaitez renouveler votre iPhone. Le 15 Pro est aujourdhui en promotion à 939 euros co… [+4128 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Frandroid"
      },
      "author": "Geoffroy Husson",
      "title": "Nouvelle Dacia Spring, bugs de ChatGPT et gros succès de Nvidia – Tech’spresso",
      "description": "Vous n’avez pas eu le temps de suivre l’actualité hier ? Voici ce qui a marqué le mercredi 21 février : l'annonce de la nouvelle Dacia Spring, les problèmes de ChatGPT et la valorisation record de Nvidia Pour ne manquer aucune actualité, pensez à vous inscrir…",
      "url": "https://www.frandroid.com/actualitesgenerales/1943910_nouvelledaciaspringbugsdechatgptetgrossuccesdenvidiatechspresso",
      "urlToImage": "https://images.frandroid.com/wpcontent/uploads/2024/02/dsc01767.jpg",
      "publishedAt": "20240222T06:00:52Z",
      "content": "Vous navez pas eu le temps de suivre lactualité hier? Voici ce qui a marqué le mercredi 21 février : l'annonce de la nouvelle Dacia Spring, les problèmes de ChatGPT et la valorisation record de Nvidi… [+1493 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Frandroid"
      },
      "author": "Cassim Montilla",
      "title": "Les finances de Nvidia donnent le vertige : le bénéfice a été multiplié par 6",
      "description": "L'ascension de Nvidia ne s'arrête pas. Le constructeur de cartes graphiques et de puces dédiées à l'IA a réalisé un nouveau trimestre record.",
      "url": "https://www.frandroid.com/marques/nvidia/1944048_lesfinancesdenvidiadonnentlevertigelebeneficeaetemultipliepar6",
      "urlToImage": "https://images.frandroid.com/wpcontent/uploads/2023/05/cartegraphiquegeforcertx4060tisourcenvidia.jpg",
      "publishedAt": "20240222T08:55:17Z",
      "content": "L'ascension de Nvidia ne s'arrête pas. Le constructeur de cartes graphiques et de puces dédiées à l'IA a réalisé un nouveau trimestre record.\r\nOù s’arrêtera Nvidia? Le géant du semiconducteur contin… [+2306 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Wwwhatsnew.com"
      },
      "author": "Juan Diego Polo",
      "title": "Apple avanza hacia la criptografía resistente a los ordenadores cuánticos en iMessage",
      "description": "La seguridad de nuestras comunicaciones digitales se ha convertido en un tema de gran importancia, y en ese contexto Apple anunció una actualización significativa para iMessage, su plataforma de mensajería, con el objetivo de hacerla resistente a los ataques …",
      "url": "https://wwwhatsnew.com/2024/02/22/appleavanzahacialacriptografiaresistentealosordenadorescuanticosenimessage/",
      "urlToImage": "https://wwwhatsnew.com/wpcontent/uploads/2024/02/applecuantico.jpg",
      "publishedAt": "20240222T02:00:53Z",
      "content": "La seguridad de nuestras comunicaciones digitales se ha convertido en un tema de gran importancia, y en ese contexto Apple anunció una actualización significativa para iMessage, su plataforma de mens… [+2487 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "01net.com"
      },
      "author": "Mickaël Bazoge",
      "title": "01net morning : nouvelle Dacia Spring, iMessage protégé contre les attaques quantiques, test du Sennheiser Accentum Plus",
      "description": "Bonjour à tous, voici la matinale de 01net ! Retrouvez toute l’actu à connaitre pour démarrer la journée du bon pied.",
      "url": "https://www.01net.com/actualites/01netmorningnouvelledaciaspringimessageprotegecontrelesattaquesquantiquestestdusennheiseraccentumplus.html",
      "urlToImage": "https://www.01net.com/app/uploads/2024/02/01netMorning8.jpg",
      "publishedAt": "20240222T05:01:16Z",
      "content": "Bonjour à tous, voici la matinale de 01net ! Retrouvez toute lactu à connaitre pour démarrer la journée du bon pied.À retenir dans l’actu\r\nTrois ans après son lancement, la moins chère des voitures é… [+1660 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "01net.com"
      },
      "author": "Mickaël Bazoge",
      "title": "Meta veut le feu vert d’Apple pour faire du Quest un récepteur AirPlay",
      "description": "Le Vision Pro et le Quest 3 ont beau être tous deux des casques de réalité mixte, leurs propositions sont quelque peu différentes. Le premier se destine davantage à un usage productif — ce qu'il accomplit à moitié —, le second est plutôt orienté jeux vidéo/fi…",
      "url": "https://www.01net.com/actualites/metaveutlefeuvertdapplepourfaireduquestunrecepteurairplay.html",
      "urlToImage": "https://www.01net.com/app/uploads/2024/02/Quest3Meta.jpg",
      "publishedAt": "20240222T05:58:16Z",
      "content": "Le Vision Pro et le Quest 3 ont beau être tous deux des casques de réalité mixte, leurs propositions sont quelque peu différentes. Le premier se destine davantage à un usage productif ce qu’il accomp… [+2573 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Justcreative.com"
      },
      "author": "Jacob Cass",
      "title": "[Podcast] How to Launch a Brand in 10 Days with Brand Sprints (Special Guest: Eden Videl)",
      "description": "In this episode get ready to reframe your thinking, reimagine your process, push the boundaries and embrace the scrappy nature of brand sprinting!",
      "url": "https://justcreative.com/brandsprintpodcast/",
      "urlToImage": "https://justcreative.com/wpcontent/uploads/2024/02/brandsprintsyoutube1.png",
      "publishedAt": "20240222T02:08:47Z",
      "content": "Sick of long winded brand building processes that take months and loose momentum?\r\nThen you need to know about “Brand Sprints“!\r\nIn this ‘scrappy’ episode we jump into the magical world of sprinting.… [+1093 chars]"
    },
    {
      "source": {
        "id": "t3n",
        "name": "T3n"
      },
      "author": "Andreas Floemer",
      "title": "Samsung: Diese GalaxySmartphones bekommen das KIUpdate",
      "description": "Samsung wird einige GalaxyModelle über ein Update mit zahlreichen KIFunktionen ausstatten. Jetzt hat der Hersteller bekannt gegeben, welche Features vom Galaxy S24 auf das S23 und andere Geräte übertragen werden – und wann. Mit dem Galaxy S24, S24 Plus und …",
      "url": "https://t3n.de/news/samsunggalaxyaikiupdate1606327/",
      "urlToImage": "https://t3n.de/news/wpcontent/uploads/2024/01/samsunggalaxys24ultratest_circletoseatch.jpg",
      "publishedAt": "20240222T08:30:00Z",
      "content": "Mit dem Galaxy S24, S24 Plus und Galaxy S24 Ultra (unser Test) hat Samsung Mitte Januar 2024 seine ersten Smartphones mit KIFunktionen vorgestellt. Im Zuge dessen hatte der Hersteller versprochen, e… [+5442 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Adafruit.com"
      },
      "author": "Pedro",
      "title": "Apple Watch Ultra Charging Stand #3DThursday #3DPrinting",
      "description": "coolblackcat shares: This design fits the size of the Apple Watch Ultra (1 and 2). It is made of 2 components, the Support and the Rubber base. The Rubber base also serve the purpose of holding the cable inside the support. I used Filaflex 70A for the Rubber …",
      "url": "https://blog.adafruit.com/2024/02/22/applewatchultrachargingstand3dthursday3dprinting/",
      "urlToImage": "https://cdnblog.adafruit.com/uploads/2024/02/AppleWatchUltraChargingStand.jpeg",
      "publishedAt": "20240222T12:00:57Z",
      "content": "February 22, 2024 AT 7:00 am\r\nApple Watch Ultra Charging Stand #3DThursday #3DPrinting\r\ncoolblackcat shares: \r\nThis design fits the size of the Apple Watch Ultra (1 and 2).\r\nIt is made of 2 component… [+4560 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Smartworld.it"
      },
      "author": "Alessandro Nodari",
      "title": "Ora potete ordinare la nuova Golf 2024. Tutti i prezzi di motorizzazioni e allestimenti",
      "description": "A un mese dalla presentazione, Volkswagen dà il via agli ordini dell'aggiornamento di metà corso per l'ottava serie della Golf....\r\nL'articolo Ora potete ordinare la nuova Golf 2024. Tutti i prezzi di motorizzazioni e allestimenti sembra essere il primo su Sm…",
      "url": "https://mobility.smartworld.it/prezzigolf2024.html",
      "urlToImage": "https://mobility.smartworld.it/images/2024/01/24/golfrestyling2024_1200x675.jpg",
      "publishedAt": "20240222T07:33:00Z",
      "content": "A un mese dalla presentazione, Volkswagen dà il via agli ordini dell'aggiornamento di metà corso per l'ottava serie della Golf. Si parte da 30.150 euro per l'allestimento Lite, ma è solo il primo pas… [+5201 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Smartworld.it"
      },
      "author": "SmartWorld team",
      "title": "Come trovare ricette con le app",
      "description": "trovare ricette, trovare ricette con le app, app ricette, ricette dieta app, trovare ricette app iPhone, trovare ricette app Android.\r\nL'articolo Come trovare ricette con le app sembra essere il primo su Smartworld.",
      "url": "https://www.smartworld.it/app/cometrovarericetteconleapp.html",
      "urlToImage": "https://www.smartworld.it/images/2024/02/21/trovarericette_1200x675.jpg",
      "publishedAt": "20240222T07:25:00Z",
      "content": "Siete appassionati di cucina e siete sempre alla ricerca di nuove ricette da provare e personalizzare? Oppure magari non avete molta creatività ai fornelli e volete delle ricette per non cucinare sem… [+4412 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Osxdaily.com"
      },
      "author": "Paul Horowitz",
      "title": "4th Beta of iOS 17.4, macOS Sonoma 14.4, iPadOS 17.4, Available for Testing",
      "description": "Apple has issued the fourth beta versions of iOS 17.4, iPadOS 17.4, macOS Sonoma 14.4, watchOS 14.4, and tvOS 17.4. Additionally a new beta of visionOS 1.1 is available for the developers who are working with Apple Vision Pro. These beta updates are available…",
      "url": "https://osxdaily.com/2024/02/21/4thbetaofios174macossonoma144ipados174availablefortesting/",
      "urlToImage": "https://cdn.osxdaily.com/wpcontent/uploads/2023/08/iosmacosipadospublicbetas.jpg",
      "publishedAt": "20240222T02:11:13Z",
      "content": "Apple has issued the fourth beta versions of iOS 17.4, iPadOS 17.4, macOS Sonoma 14.4, watchOS 14.4, and tvOS 17.4. Additionally a new beta of visionOS 1.1 is available for the developers who are wor… [+2850 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Marketingdirecto.com"
      },
      "author": "Esther Lastra",
      "title": "El plan de Apple para dejar el vagón de cola de la IA y ponerse a la vanguardia de esta tecnología",
      "description": "Pese a que de cara a la galería Apple se muestra extraordinariamente silente en el área de la IA, entre bambalinas está invirtiendo miles de millones de dólares en la tecnología de moda.\nLa entrada El plan de Apple para dejar el vagón de cola de la IA y poner…",
      "url": "https://www.marketingdirecto.com/digitalgeneral/digital/planappleponersevanguardiaia",
      "urlToImage": "https://www.marketingdirecto.com/wpcontent/uploads/2024/02/appleia.jpg",
      "publishedAt": "20240222T10:35:26Z",
      "content": "Pese a que de cara a la galería Apple se muestra extraordinariamente silente en el área de la IA, entre bambalinas está invirtiendo miles de millones de dólares en la tecnología de moda.Pese a ser un… [+4493 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "La Vanguardia"
      },
      "author": "Fran Besora",
      "title": "Messi lanza su lista de reproducción exclusiva para Apple Music",
      "description": "Recientemente se ha estrenado un nuevo documental sobre Messi en Apple TV+. Un documental que narra el mundial que ganó con su selección, Argentina. Pero no solo se ha lanzado ese documental esta semana, también una lista de reproducción de Apple Music con al…",
      "url": "https://www.lavanguardia.com/andro4all/apple/messilanzasulistadereproduccionexclusivaparaapplemusic",
      "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/02/messinuevalistaapplemusic.jpeg?width=1200",
      "publishedAt": "20240222T11:01:36Z",
      "content": "\"Messi: Precalentamiento\" ya disponible en Apple Music\r\nRecientemente se ha estrenado un nuevo documental sobre Messi en Apple TV+. Un documental que narra el mundial que ganó con su selección, Argen… [+2030 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "La Vanguardia"
      },
      "author": "Fran Besora",
      "title": "Meta y Microsoft se quejan en la UE de las nuevas políticas del App Store",
      "description": "Apple anunció hace unas semanas sus nuevas políticas del App Store para permitir las tiendas de aplicaciones de terceros alternativas en iOS con el objetivo de cumplir con la Ley de Mercados Digitales. Unas nuevas políticas que harán difícil que otros desarro…",
      "url": "https://www.lavanguardia.com/andro4all/apple/metaymicrosoftsequejanenlauedelasnuevaspoliticasdelappstore",
      "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/02/microsoftmetaencontranuevaspoliticasappstore.jpeg?width=1200",
      "publishedAt": "20240222T07:55:06Z",
      "content": "Las nuevas políticas del App Store son criticadas por Meta y Microsoft\r\nAppleanunció hace unas semanas sus nuevas políticas del App Store para permitir las tiendas de aplicaciones de terceros alterna… [+2545 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Impress.co.jp"
      },
      "author": null,
      "title": "「楽天リーベイツ」経由で対象iPhoneが5％還元、29日まで",
      "description": "楽天リーベイツを経由してApple公式サイトで対象のiPhoneを購入すると、楽天ポイントが5.0％還元されるキャンペーンが実施されている。期間は2月29日まで。",
      "url": "https://ktai.watch.impress.co.jp/docs/news/1571083.html",
      "urlToImage": "https://ktai.watch.impress.co.jp/img/ktw/list/1571/083/01.png",
      "publishedAt": "20240222T09:34:19Z",
      "content": "AppleiPhone5.0229 \r\n 124800iPhone 15128GB5672112800iPhone 14128GB5127 \r\n Apple"
    },
    {
      "source": {
        "id": null,
        "name": "Mubi.com"
      },
      "author": null,
      "title": "MUBI Podcast: Sofia Coppola—from \"Virgin Suicides\" to \"Priscilla\"",
      "description": null,
      "url": "https://mubi.com/en/notebook/posts/mubipodcastsofiacoppolafromvirginsuicidestopriscilla",
      "urlToImage": null,
      "publishedAt": "20240222T06:28:57Z",
      "content": "Sofia Coppola's Priscilla (2023) will stream exclusively on MUBI starting March 1 in the UK, Germany, Turkey, India, and Latin America.There’s maybe no working filmmaker more associated with film fas… [+795 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Deadline"
      },
      "author": "Zac Ntim",
      "title": "UK Casting Awards: ‘Rye Lane,’ ‘Dreaming Whilst Black’ & ‘Roald Dahl’s Matilda The Musical’ Among Top Winners",
      "description": "Raine Allen Miller’s debut feature Rye Lane, Adjani Salmon’s Dreaming Whilst Black, and Roald Dahl’s Matilda The Musical were among the top winners at the sixth edition of the CDG Casting Awards. Scross down for the full list of winners.   Kharmel Cochrane pi…",
      "url": "http://deadline.com/2024/02/ukcastingawardsryelanedreamingwhilstblackroalddahlsmatildathemusicalwinners1235833980/",
      "urlToImage": "https://deadline.com/wpcontent/uploads/2024/02/download.jpg?w=1024",
      "publishedAt": "20240222T09:19:59Z",
      "content": "Raine Allen Miller’s debut feature Rye Lane, Adjani Salmon’s Dreaming Whilst Black, and Roald Dahl’s Matilda The Musical were among the top winners at the sixth edition of the CDG Casting Awards. Scr… [+5776 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Tech Desk",
      "title": "7 out of 10 bestselling smartphones were iPhones in 2023: Report",
      "description": "Meanwhile, the budget Samsung mobile Aseries held its own with 3 models in the top 10 global bestsellers.",
      "url": "https://indianexpress.com/article/technology/technewstechnology/7outof10bestsellingsmartphonesiphones9175079/",
      "urlToImage": "https://images.indianexpress.com/2023/12/iphonereuters.jpg",
      "publishedAt": "20240222T08:56:56Z",
      "content": "If you think you have noticed a growing number of people around you brandishing an iPhone, you are not imagining it. In Counterpoint Researchs latest chart for the top smartphone models around the gl… [+1693 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nextpit.de"
      },
      "author": "Jade Bryan",
      "title": "MetaQuestHeadsets: AirPlayUpdate mit AppleGeräten in Aussicht",
      "description": "Meta möchte seine QuestHeadsets mit AirPlayUnterstützung ausstatten, damit iPhone oder iPadNutzer:innen Bildschirminhalte übertragen können.",
      "url": "https://www.nextpit.de/appleairplayupdatefuermetaquestheadsets",
      "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Meta_Quest_3/nextpit_Meta_Quest_3.jpg",
      "publishedAt": "20240222T08:00:00Z",
      "content": "Derzeit bieten die QuestHeadsets eine große Auswahl an Apps, mit denen die Nutzer:innen MultimediaInhalte konsumieren oder streamen können, und sogar die Möglichkeit, Dateien für eine spätere Wiede… [+2212 chars]"
    },
    {
      "source": {
        "id": "focus",
        "name": "Focus"
      },
      "author": "FOCUS online",
      "title": "Hohe Kursgewinne  Nvidia macht Millionäre: Was 1000 Dollar zum Börsengang heute wert sind",
      "description": "Der USChiphersteller Nvidia gehört zu den Stars an den Börsen. Das Unternehmen profitiert vom KIBoom. Das führt zu massiv steigenden Umsätzen und Gewinnen. Die wiederum treiben den Aktienkurs – allein 2024 hat Nvidia bislang gut 40 Prozent zugelegt.",
      "url": "https://www.focus.de/finanzen/boerse/hohekursgewinnenvidiamachtmillionaerewas1000dollarzumboersengangheutewertsind_id_259694041.html",
      "urlToImage": "https://p6.focus.de/img/fotos/id_259693433/nvidia.jpg?im=Crop%3D%280%2C294%2C2048%2C1023%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=mediumHigh&hash=fde7405855de83e7b4a3e3f6f707e30bfa10a0f64b221a79470eb6fd2e3861a0",
      "publishedAt": "20240222T10:57:29Z",
      "content": "Der USChiphersteller Nvidia gehört zu den Stars an den Börsen. Das Unternehmen profitiert vom KIBoom. Das führt zu massiv steigenden Umsätzen und Gewinnen. Die wiederum treiben den Aktienkurs allei… [+2693 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Giveawayoftheday.com"
      },
      "author": "GOTD_Editor",
      "title": "Apeaksoft Video Fixer 1.0.10",
      "description": "Apeaksoft Video Fixer is a lightweight and easytouse video repairing tool that can help you fix broken videos to normal in seconds. Powered by AI, this software can repair videos for you automatically as long as you correctly add the corrupted video and sam…",
      "url": "https://www.giveawayoftheday.com/apeaksoftvideofixer1010/",
      "urlToImage": "https://giveawayoftheday.com/wpcontent/uploads/og/2024/02/46934767a2eeb92df08d9312ed6647f0.png",
      "publishedAt": "20240222T08:00:00Z",
      "content": "Apeaksoft Video Converter Ultimate is the allinone video converter, editor and enhancer. As a powerful video converter, it supports over 300 video and audio formats (4K supported), like MP4, MOV, A… [+3027 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nakedcapitalism.com"
      },
      "author": "Yves Smith",
      "title": "The Growing Environmental Footprint Of Generative AI",
      "description": "AI runs on powerhungry equipment that uses millions of gallons of fresh water. Policymakers are weighing the costs.",
      "url": "https://www.nakedcapitalism.com/2024/02/thegrowingenvironmentalfootprintofgenerativeai.html",
      "urlToImage": null,
      "publishedAt": "20240222T08:05:13Z",
      "content": "Yves here. This article usefully provides data on potential generative AI energy use and why cheery notions that its appetite will fall are likely to prove to be wrong.\r\n By David Berreby, who writes… [+11896 chars]"
    },
    {
      "source": {
        "id": "marca",
        "name": "Marca"
      },
      "author": "marca.com",
      "title": "El Inter Miami de Messi, Busquets y Alba arranca con buen pie en el debut oficial, sin gol, de Luis Suárez",
      "description": "El Inter Miami se impuso al Real Salt Lake por 20 en su debut oficial de temporada en la MLS, con los goles del finlandés Robert Taylor y el paraguayo Diego Gómez, en el estreno d",
      "url": "https://www.marca.com/futbol/estadosunidos/2024/02/22/65d6c349268e3ea0028b45b2.html",
      "urlToImage": "https://phantommarca.unidadeditorial.es/2189e85ca8ca68c6d3d4ce4e5cd00dd6/resize/1200/f/webp/assets/multimedia/imagenes/2024/02/22/17085738790952.jpg",
      "publishedAt": "20240222T03:52:25Z",
      "content": "El Inter Miami se impuso al Real Salt Lake por 20 en su debut oficial de temporada en la MLS, con los goles del finlandés Robert Taylor y el paraguayo Diego Gómez, en el estreno del uruguayo Luis Su… [+6807 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ascii.jp"
      },
      "author": "ASCII",
      "title": "AirPodsやiPhoneをきれいに使うプレミアムクリーニングキット",
      "description": "アスキーストアでは、AirPodsを含むイヤホンやiPhoneやiPadなどさまざまなデジタルデバイスに使える「KeyBudz AirCare2.0 プレミアムクリーニングキット」を2月下旬に発売する。予約受付中。",
      "url": "https://weekly.ascii.jp/elem/000/004/185/4185508/",
      "urlToImage": "https://ascii.jp/img/2024/02/21/3689641/l/fba4ba4588da16a3.jpg",
      "publishedAt": "20240222T11:00:00Z",
      "content": "2Apple! KeyBudz AirCare2.0 \r\nAirPodsiPhoneiPadKeyBudz AirCare2.0 2\r\n2\r\nAppleApple\r\nAirPodsiPadiPhone\r\n5\r\n1. \r\n2. \r\n3. \r\n4. \r\n5. TPE\r\nAirPods\r\n10 \r\n316LN52PCR70%\r\nApple\r\n×5×10\r\n5980\r\n2Apple! KeyBudz A… [+27 chars]"
    },
    {
      "source": {
        "id": "techradar",
        "name": "TechRadar"
      },
      "author": "alexblake.techradar@gmail.com (Alex Blake)",
      "title": "Don’t dry your wet iPhone in a bag of rice, Apple warns – do this instead",
      "description": "Apple has shared advice on how to dry a wet iPhone and prevent corrosive damage.",
      "url": "https://www.techradar.com/phones/dontdryyourwetiphoneinabagofriceapplewarnsdothisinstead",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/ZCVhwzcrhHhSrrr8sCAD7J120080.jpg",
      "publishedAt": "20240222T11:27:42Z",
      "content": "If you’ve dropped your iPhone in water and need to dry it out, plenty of people will give you a simple piece of advice: put it in a sealed bag of rice. The idea is the rice will draw out the moisture… [+2598 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "John Koetsier, Senior Contributor, \n John Koetsier, Senior Contributor\n https://www.forbes.com/sites/johnkoetsier/",
      "title": "Apple’s Sports App: No NFL, MLB, UFC, Formula 1, Still Tops The Charts",
      "description": "Apple released a new app today, Apple Sports, for realtime scores and stats and, likely, to promote live sports broadcasts on Apple TV.",
      "url": "https://www.forbes.com/sites/johnkoetsier/2024/02/21/applessportsappnonflmlbufcformula1stilltopsthecharts/",
      "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/65d69f7f3c9872b72e72b77c/0x0.jpg?format=jpg&crop=2495,1665,x526,y153,safe&height=900&width=1600&fit=bounds",
      "publishedAt": "20240222T01:14:40Z",
      "content": "The Apple Sports app has rocketed to the top of the App Store charts\r\ngetty\r\nApple released a new app today, Apple Sports, for realtime scores and stats and, likely, to promote live sports broadcast… [+3021 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Laura Manske, Contributor, \n Laura Manske, Contributor\n https://www.forbes.com/sites/lauramanske/",
      "title": "Interview With Funny Phil Rosenthal: New Season Of ‘Somebody Feed Phil’",
      "description": "Phil and I sat down to dish up behindthescenes scoops, sentiments and surprises about the 7th season of his awardwinning travelfood show on Netflix, starting March 1.",
      "url": "https://www.forbes.com/sites/lauramanske/2024/02/22/interviewwithfunnyphilrosenthalnewseasonofsomebodyfeedphil/",
      "urlToImage": "https://imageio.forbes.com/specialsimages/imageserve/65ce6f4af92ead39f882decc/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "20240222T11:45:19Z",
      "content": ". \r\n© Courtesy of Netflix / 2024 Netflix, Inc.\r\nAwardwinning Somebody Feed Philthe delectably illuminating foodtravel show hosted by bighearted, energetic funnyman Phil Rosenthal on Netflixpremier… [+14303 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Iphoneblog.de"
      },
      "author": "Alex Olma",
      "title": "Im USAppStore: Apple Sports",
      "description": "Apple Sports gives fans a simple and fast way to stay up to speed on the teams and leagues they love. Users can customize their scoreboards on Apple Sports by following their favorite teams, tournaments, and leagues. Fans can easily navigate between scores an…",
      "url": "https://www.iphoneblog.de/2024/02/22/imusappstoreapplesports/",
      "urlToImage": "https://www.iphoneblog.de/wpcontent/uploads/2024/02/iphoneblog.de_apple_sports.png",
      "publishedAt": "20240222T11:41:57Z",
      "content": "Wir benötigen Ihre Zustimmung, bevor Sie unsere Website weiter besuchen können.Wenn Sie unter 16 Jahre alt sind und Ihre Zustimmung zu freiwilligen Diensten geben möchten, müssen Sie Ihre Erziehungsb… [+626 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hdblog.it"
      },
      "author": "HDblog.it",
      "title": "Apple Sports è la nuova app per i tifosi. Niente Italia per ora, ma c'è la Serie A",
      "description": "USA, UK e Canada, per ora.",
      "url": "https://www.hdblog.it/smartphone/articoli/n578679/applesportsserieaappdownloadgratis/",
      "urlToImage": "https://hd2.tudocdn.net/1142674?w=1920",
      "publishedAt": "20240222T09:55:00Z",
      "content": "Apple Sports è la nuova app dedicata agli appassionati sportivi, è disponibile al download gratuito per il momento solo negli Stati Uniti, Canada e Regno Unito in lingua inglese, francese e spagnola,… [+1687 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ComputerBase"
      },
      "author": "Frank Hüber",
      "title": "Top 10 2023: Smartphones von Apple auf Platz 1–7, Samsung auf 8–10",
      "description": "Counterpoint Research hat ihre Analyse der weltweiten SmartphoneVerkäufe für das Jahr 2023 veröffentlicht. Zum ersten Mal kann Apple mit dem iPhone Platz 1 bis 7 für sich beanspruchen. Die Plätze 8 bis 10 gehen an Smartphones von Samsung.",
      "url": "https://www.computerbase.de/202402/top102023smartphonesvonappleaufplatz17samsungauf810/",
      "urlToImage": "https://pics.computerbase.de/1/1/1/2/4/46268fa0348e5f1c7/article1280x720.cfc0af72.jpg",
      "publishedAt": "20240222T11:19:00Z",
      "content": "Counterpoint Research hat ihre Analyse der weltweiten SmartphoneVerkäufe für das Jahr 2023 veröffentlicht. Zum ersten Mal kann Apple mit dem iPhone Platz 1 bis 7 für sich beanspruchen. Die Plätze 8 … [+1904 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Antyweb.pl"
      },
      "author": "Błażej Wojciechowski",
      "title": "Apple zrobiło niespodziewany prezent właścicielom iPhone'ów",
      "description": "Użytkownicy narzekali na to, że kondycja baterii w ich poprzednim modelu spadała w ekspresowym tempie. W przypadku iPhone 15 nie powinno to stanowić najmniejszego problemu, bowiem Apple twierdzi że smartfon zaoferuje wysoką jakość akumulatora nawet do 1000 ła…",
      "url": "https://antyweb.pl/iphonezywotnoscbaterii",
      "urlToImage": "https://antyweb.pl/img/1250/550/fit/wpcontent/uploads/2023/09/fjqwhx3nke/iphone15pro14.jpg",
      "publishedAt": "20240222T11:00:14Z",
      "content": "Apple niekoniecznie znane jest ze swojej hojnoci w kwestii obdarowywania uytkowników. Co najwyej wycigania od nich pienidzy za kolejne generacje nowych sprztów, których ceny nierzadko puchn w oczach.… [+1284 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Antyweb.pl"
      },
      "author": "Kamil Pieczonka",
      "title": "Smart home z EVE buduje się prosto, ale bez iPhone sporo traci  recenzja",
      "description": "Idea smart home przebija się do wyobraźni coraz większej liczby osób, a wraz z nią pojawia się coraz więcej inteligentnych urządzeń. Dzisiaj sprawdzimy sobie ofertę marki Eve, która skupia się na współpracy z Apple, ale dzięki wsparciu Matter, bez problemu dz…",
      "url": "https://antyweb.pl/evesmarthomezmatter",
      "urlToImage": "https://antyweb.pl/img/1250/550/fit/wpcontent/uploads/2024/02/d4ul3ya6mq/evesmarthome03.jpg",
      "publishedAt": "20240222T11:30:20Z",
      "content": "Eve to marka, która powstaa w 1999 roku jako Elgato, a po drodze zostaa wchonita przez giganta brany, niemieck firm ABB. Obecnie oferuje szereg rozwiza smart home, które powstay gównie z myl o ekosys… [+10083 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Antyweb.pl"
      },
      "author": "Piotr Kurek",
      "title": "Nintendo Switch w 2024 z masą gier. Gracze będą mieli w czym wybierać",
      "description": "Choć na horyzoncie powoli mieni się następca Nintendo Switch, obecna konsola japońskiego giganta wciąż trzyma się dobrze. Podsumujmy najnowsze Nintendo Direct, które w całości skupiało się na tytułach third party, które na konsolę trafią w tym roku.\n \n The po…",
      "url": "https://antyweb.pl/nintendoswitchw2024zmasagier",
      "urlToImage": "https://antyweb.pl/img/1250/550/fit/wpcontent/uploads/2020/03/02151550/Switch444.jpg",
      "publishedAt": "20240222T10:00:23Z",
      "content": "Nintendo Switch w tym roku obchodzi swoje 7 urodziny i wci trzyma si doskonale przynajmniej jeli chodzi o wsparcie dla tej konsoli. O ile wida ju, e w wielu przypadkach sprzt ten niedomaga, wci pojaw… [+3711 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Wpbeginner.com"
      },
      "author": "Ben Rojas",
      "title": "What Is Google EEAT? A Detailed Guide to WordPress Websites",
      "description": "Perhaps you have heard about Google’s EEAT guidelines and are wondering what they mean for your WordPress website. Google’s search algorithm and guidelines are constantly changing and evolving to make sure that search engine results pages (SERPs) prioritiz…",
      "url": "https://www.wpbeginner.com/opinion/whatisgoogleeeat/",
      "urlToImage": "https://www.wpbeginner.com/wpcontent/uploads/2024/02/whatisgoogleeeatfacebook1.png",
      "publishedAt": "20240222T11:00:00Z",
      "content": "Perhaps you have heard about Googles EEAT guidelines and are wondering what they mean for your WordPress website.\r\nGoogles search algorithm and guidelines are constantly changing and evolving to m… [+17980 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Iphoneitalia.com"
      },
      "author": "Giuseppe Migliorino",
      "title": "Un Apple Immersive Video dedicato alla MLS arriverà su Vision Pro",
      "description": "Un nuovo Apple Immersive Video dedicato alla MLS potrà essere visualizzato su Vision Pro. \nLink all'articolo originale: Un Apple Immersive Video dedicato alla MLS arriverà su Vision Pro",
      "url": "https://www.iphoneitalia.com/822477/appleimmersivevideomlsvisionpro",
      "urlToImage": "https://static.iphoneitalia.com/wpcontent/uploads/2024/01/246965_vision_pro_VPavic_0153.jpg.webp",
      "publishedAt": "20240222T08:06:45Z",
      "content": "Apple ha annunciato il prossimo arrivo di un Apple Immersive Video che presenterà il meglio dei playoff della MLS Cup 2023. Apple afferma che questo sarà il primo video sportivo in assoluto catturato… [+1137 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Iphoneitalia.com"
      },
      "author": "Giuseppe Migliorino",
      "title": "Apple chiede la commissione sulle “mance”, il CEO di Insight Timer critica le regole dell’App Store",
      "description": "Apple ha iniziato a chiedere la commissione per quelle che Insight Timer definisce mance ai propri insegnanti. \nLink all'articolo originale: Apple chiede la commissione sulle “mance”, il CEO di Insight Timer critica le regole dell’App Store",
      "url": "https://www.iphoneitalia.com/822461/commissionimanceappstore",
      "urlToImage": "https://static.iphoneitalia.com/wpcontent/uploads/2024/02/InsightTimer.jpg",
      "publishedAt": "20240222T09:46:30Z",
      "content": "Il CEO di Insight Timer Christopher Plowman ha parlato con TechCrunch per lamentarsi di un’esperienza frustrante con il team di revisione dell’‌App Store‌.\r\nInsight Timer è un’app di meditazione basa… [+3584 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Iphoneitalia.com"
      },
      "author": "Giuseppe Migliorino",
      "title": "La FDA contro gli smartwatch che misurano il glucosio nel sangue in modo non invasivo",
      "description": "La FDA fa sapere che non approverà a livello medico quegli smartwatch che misurano il livello di glucosio nel sangue in modo non invasivo. \nLink all'articolo originale: La FDA contro gli smartwatch che misurano il glucosio nel sangue in modo non invasivo",
      "url": "https://www.iphoneitalia.com/822469/fdasmartwatchglucosiosangue",
      "urlToImage": "https://static.iphoneitalia.com/wpcontent/uploads/2021/01/applewatchglucosio.jpg",
      "publishedAt": "20240222T07:02:52Z",
      "content": "La Food and Drug Administration (FDA) degli Stati Uniti non vuole che i consumatori acquistino o utilizzino smartwatch o anelli smart che promettono di misurare i livelli di glucosio nel sangue utili… [+2673 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Iphoneitalia.com"
      },
      "author": "Giuseppe Migliorino",
      "title": "PlayStation aggiunge il supporto a passkey per l’accesso agli account",
      "description": "Anche PlayStation ha deciso di integrare passkey come metodo di autenticazione per gli account degli utenti. \nLink all'articolo originale: PlayStation aggiunge il supporto a passkey per l’accesso agli account",
      "url": "https://www.iphoneitalia.com/822473/playstationpasswordaccountpasskey",
      "urlToImage": "https://static.iphoneitalia.com/wpcontent/uploads/2024/02/playstationpasskey.webp",
      "publishedAt": "20240222T07:06:20Z",
      "content": "I proprietari di account PlayStation potranno presto iniziare a utilizzare una passkey come alternativa alla password quando accedono a un account PlayStation sul Web, in un’app o su una console.\r\nL’… [+786 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Olhardigital.com.br"
      },
      "author": "Vitoria Lopes Gomez",
      "title": "Rival da OpenAI, Anthropic promete não destruir a humanidade; entenda boom da startup",
      "description": "Guerra da IA motivou investimentos bilionários em startups, como OpenAI e Anthropic, que, agora, terão que responder por possível truste\nO post Rival da OpenAI, Anthropic promete não destruir a humanidade; entenda boom da startup apareceu primeiro em Olhar Di…",
      "url": "https://olhardigital.com.br/2024/02/22/pro/rivaldaopenaianthropicprometenaodestruirahumanidadeentendaboomdastartup/",
      "urlToImage": "https://olhardigital.com.br/wpcontent/uploads/2023/10/Anthropic695x500.jpg",
      "publishedAt": "20240222T09:00:00Z",
      "content": "A Anthropic é um dos nomes que chama a atenção na corrida pelo desenvolvimento de inteligência artificial (IA). Apesar do ChatGPT já ter decolado e outras ferramentas terem o seguido, como o Gemini (… [+4702 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "watcher.guru",
      "title": "The Magnificent 7: Apple, Amazon, Now Wield Greater Financial Power than Any Major Country",
      "description": "Dubbed the Magnificent 7 by a recent Deutsche report, Apple, Amazon, and Meta, along with Tesla, Alphabet, Microsoft, and Nvidia, have been referred to as forces to be reckoned with. The report outlines how the collective market capital of these seven compani…",
      "url": "https://biztoc.com/x/959f401d6d020af2",
      "urlToImage": "https://c.biztoc.com/p/959f401d6d020af2/s.webp",
      "publishedAt": "20240222T00:44:08Z",
      "content": "Dubbed the Magnificent 7 by a recent Deutsche report, Apple, Amazon, and Meta, along with Tesla, Alphabet, Microsoft, and Nvidia, have been referred to as forces to be reckoned with. The report outli… [+270 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "siliconrepublic.com",
      "title": "FDA warns against wearables that measure blood sugar without needles",
      "description": "The US agency said smartwatches and smart rings that claim to measure blood glucose without piercing the skin are not FDA approved and could cause people with diabetes to mismanage their condition. Wearables such as smartwatches are commonly associated with h…",
      "url": "https://biztoc.com/x/ee94178f0591260a",
      "urlToImage": "https://c.biztoc.com/p/ee94178f0591260a/s.webp",
      "publishedAt": "20240222T10:32:17Z",
      "content": "The US agency said smartwatches and smart rings that claim to measure blood glucose without piercing the skin are not FDA approved and could cause people with diabetes to mismanage their condition.We… [+255 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Actualidadiphone.com"
      },
      "author": "Ángel González",
      "title": "Apple dominó las ventas de smartphones en el 2023: los 7 primeros fueron iPhones",
      "description": "El ranking de ventas de smartphones del 2023 ya se ha publicado y Apple domina la lista con los siete primeros puestos siendo iPhone.",
      "url": "https://www.actualidadiphone.com/appledominolasventasdesmartphonesenel20237primerosfueroniphones/",
      "urlToImage": "https://www.actualidadiphone.com/wpcontent/uploads/2024/02/Smartphonesmasvendidos2023.jpg",
      "publishedAt": "20240222T11:00:19Z",
      "content": "Las compañías presumen de sus resultados anuales cuando pasan unos meses después del final de cada año. Esto es debido a que las empresas de estadística tardan unos meses en computar todos los datos … [+2290 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Actualidadiphone.com"
      },
      "author": "Ángel González",
      "title": "Se filtran las posibles dimensiones de los próximos iPad Air y iPad Pro",
      "description": "Apple planea lanzar nuevos iPad Pro y iPad Air en los próximos meses y se acaban de filtrar las que serían sus posibles dimensiones.",
      "url": "https://www.actualidadiphone.com/sefiltranlasposiblesdimensionesdelosproximosipadairyipadpro/",
      "urlToImage": "https://www.actualidadiphone.com/wpcontent/uploads/2023/12/iPadAir20242.jpg",
      "publishedAt": "20240222T09:00:04Z",
      "content": "Ayer hablábamos de los posibles nuevos AirPods 4 y AirPods Max 2, que podrían lanzarse a finales del 2024. Es muy probable que en las próximas semanas Apple nos convoque a una nueva keynote para pres… [+2150 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Geekpark.net"
      },
      "author": null,
      "title": "业绩远超预期，英伟达盘后大涨10%；谷歌宣布 Gemma 大模型全球开放使用；华为首超苹果成中国平板市场第一｜极客早知道",
      "description": "谷歌宣布 Gemma 大模型全球开放使用\n2 月 21 日，谷歌公司宣布，AI 大模型 Gemma 即日起在全球范围内开放使用。谷歌将发布两种权重规模的模型：Gemma 2B 和 Gemma 7B。每种规模都有预训练和指令微调版本，使用条款允许所有组织（无论规模大小）负责任地进行商用和分发。谷歌介绍，Gemma 模型与其规模最大、能力最强的 AI 模型 Gemini 共享技术和基础架构。\n谷歌表示，Gemma 采用与 Gemini 模型相同的研究和技术，由 Google DeepMind 和谷歌其他团队开发，专为…",
      "url": "https://www.geekpark.net/news/331483",
      "urlToImage": "https://imgslim.geekpark.net/uploads/image/file/83/1a/831a2ad23c0b3c83832d6af1d0920895.jpg",
      "publishedAt": "20240222T00:30:30Z",
      "content": "Gemma \r\n2 21 AI Gemma Gemma 2B Gemma 7BGemma AI Gemini \r\nGemma Gemini Google DeepMind AI Gemma 18 11 Meta Llama2 Gemma\r\nGemma 7B 56.4 Llama13B52.2Mistral7B54.0\r\nOpenAI Sora Copilot\r\n2 21 MSPowerU… [+973 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Ntv.de"
      },
      "author": "ntv NACHRICHTEN",
      "title": "Wohin steuert Russland?: \"Ein Regime, das sich immer weiter radikalisiert\"",
      "description": "Putins Angriffskrieg auf die Ukraine jährt sich zum zweiten Mal. Auf der einen Seite wird Russland immer risikobereiter, auf der anderen Seite droht es zu einem „Anhängsel Chinas“ zu werden. Was heißt das für die Welt  und für uns?",
      "url": "https://www.ntv.de/politik/EinRegimedassichimmerweiterradikalisiertarticle24754211.html",
      "urlToImage": "https://bilder2.ntv.de/img/incoming/crop24754217/6161328049cImg_16_9w1200/448578370.jpg",
      "publishedAt": "20240222T10:00:00Z",
      "content": "Putins Angriffskrieg auf die Ukraine jährt sich zum zweiten Mal. Auf der einen Seite wird Russland immer risikobereiter, auf der anderen Seite droht es zu einem Anhängsel Chinas zu werden. Was heißt … [+2373 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Tinhte.vn"
      },
      "author": "noreply@tinhte.vn (P.W), P.W",
      "title": "Có con cái, không nhiều thời gian chơi game, có khi Steam Deck là lựa chọn tốt nhất",
      "description": "Tết 2024 này, ngoài cái điện thoại là vật bất ly thân, thì mình mang về hai món đồ công nghệ để làm việc và giải trí trong khoảng thời gian rảnh rang. Một là chiếc laptop cấu hình cùi vừa đủ gõ văn bản và sửa Photoshop, và hai là Steam Deck.",
      "url": "https://tinhte.vn/thread/coconcaikhongnhieuthoigianchoigamecokhisteamdecklaluachontotnhat.3764578/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachmentfiles/2024/02/8268057_6152372trainghiemsteamdecktinhte3.webp",
      "publishedAt": "20240222T02:22:56Z",
      "content": "So vi Ryzen Z1, Ryzen Z1 Extreme, hay vài con chip Core Ultra th h Meteor Lake mà Intel va cho ra mt th trng, ng nhiên nu ch xét v sc mnh x lý thô, APU mà AMD thit k cho Steam Deck thc s có th c mô t… [+4059 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hurriyet.com.tr"
      },
      "author": "Hürriyet",
      "title": "Islanan telefonu pirinçte kurutanlar dikkat! Faydasından çok zararı varmış",
      "description": "Hayatımızın olmazsa olmazı akıllı cihazlarla ilgili küçük kullanım hileleri sık sık karşımıza çıkıyor. Ancak bu hilelerin bazıları telefonlarımıza ve diğer cihazlarımıza faydadan çok zarar veriyor.",
      "url": "https://www.hurriyet.com.tr/bilgi/galeriislanantelefonupirinctekurutanlardikkatfaydasindancokzararivarmis42408872",
      "urlToImage": "https://image.hurimg.com/i/hurriyet/75/0x0/65d6ec53ad163a2ded957270.jpg",
      "publishedAt": "20240222T06:14:00Z",
      "content": "Telefonunuzdaki internet taraycda gizli modu kullanyorsanz, konum ve IP bilgilerinizin üçüncü ahslardan gizlendiini düünüyor olabilirsiniz. Ama bu doru bir bilgi deil.\r\nGizli mod tarama geçmiinizi sa… [+702 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ComingSoon.net"
      },
      "author": "Disheeta Maheshwari",
      "title": "Napoleon Streaming Release Date: When Is It Coming Out on Apple TV Plus?",
      "description": "The Napoleon Apple TV Plus release date is right around the corner, and viewers are wondering when they can start streaming the movie. Napoleon is a historical drama film helmed by director Ridley Scott and penned by David Scarpa. The film premiered at Salle …",
      "url": "https://www.comingsoon.net/guides/news/1559312napoleonstreamingreleasedatewhenisitcomingoutonappletvplus",
      "urlToImage": "https://www.comingsoon.net/wpcontent/uploads/sites/3/2024/02/NapoleonAppleTVPlusreleasedate.jpg?resize=1200,630",
      "publishedAt": "20240222T09:05:16Z",
      "content": "TheNapoleonApple TV Plus release date is right around the corner, and viewers are wondering when they can start streaming the movie.\r\nNapoleon is a historical drama film helmed by director Ridley Sco… [+1941 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sspai.com"
      },
      "author": "少数派编辑部",
      "title": "派早报：Apple Music 新增每月统计功能、《艾尔登法环》推出 DLC 等",
      "description": "华硕公开 Zenfone 11 Ultra 手机、LG 推出 27 英寸便携式随行屏 StanbyME Go 等。查看全文",
      "url": "https://sspai.com/post/86581",
      "urlToImage": "https://cdn.sspai.com/22/02/2024/article/a8fa6065aa9289e7110d75843ee075d0.jpg",
      "publishedAt": "20240222T00:36:31Z",
      "content": "Apple Music \r\n2 20 Apple Apple Music Apple Music Replay \r\n 2 20 Apple Music 2024 Apple Replay Mix \r\nZenfone 11 Ultra \r\n 2 21 Zenfone 11 Ultra Zenfone 11 Ultra Zenfone Expand Your Vision\r\n 3 14 \r\nLG 2… [+568 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Computerra.ru"
      },
      "author": "Компьютерра",
      "title": "Мошенники обманули Apple с помощью 5000 поддельных iPhone",
      "description": "В официальном заявлении прокуратуры округа Колумбия отмечается, что граждане Китая были признаны виновными в сложной схеме обмена 5000 поддельных iPhone на суммы в миллионы долларов. Федеральное жюри присяжных в окружном суде США по округу Колумбия признало 3…",
      "url": "https://www.computerra.ru/293231/moshennikiobmanuliapplespomoshhyu5000poddelnyhiphone/",
      "urlToImage": "https://www.computerra.ru/wpcontent/uploads/2024/02/843fd250127911eb9df7f0948508264fscaled1.jpeg",
      "publishedAt": "20240222T06:34:40Z",
      "content": ", 5000 iPhone .\r\n33 . , 2017 2019 , Apple, iPhone .\r\n UPS. IMEI Apple .\r\n Apple 5000 $3 . Apple iPhone 2700 . , , .\r\n . 5 2019 . 21 2024 , 20 ."
    },
    {
      "source": {
        "id": null,
        "name": "Courrier International"
      },
      "author": null,
      "title": "Dans “Constellation”, sur Apple TV+, Noomi Rapace n’a plus les pieds sur Terre",
      "description": "Les amateurs de thriller et de sciencefiction trouveront leur compte dans cette série Apple TV+, relèvent les critiques angloaméricaines. “Constellation” démarre à la manière d’un film catastrophe dans l’espace, mais lorsque l’astronaute incarnée par Noomi …",
      "url": "https://www.courrierinternational.com/article/seriedansconstellationsurappletvnoomirapacenapluslespiedssurterre",
      "urlToImage": "https://focus.courrierinternational.com/2024/02/21/0/0/2396/1604/1200/630/60/0/207dbe0_1708527921969constellationnoomirapaceapple.jpg",
      "publishedAt": "20240222T04:00:15Z",
      "content": "Lespace est notoirement inhospitalier, mais le retour sur Terre nest pas forcément un soulagement. Constellation, la série diffusée sur Apple TV+ depuis le 21 février, prend en tout cas ce point de d… [+588 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "PC Gamer"
      },
      "author": "Chris Szewczyk",
      "title": "Apple issues rice advice, saying its not the way you should dry out your wet iPhone",
      "description": "Debunks an urban myth.",
      "url": "https://www.pcgamer.com/appleissuesriceadvicesayingitsnotthewayyoushoulddryoutyourwetiphone/",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/2qYDMFCgDVre5m5SWGudZA120080.jpg",
      "publishedAt": "20240222T06:02:34Z",
      "content": "Many people—myself included— have had to deal with the woe of a wet phone. My experience came during the Songkran festival in Thailand. If you've ever experienced it, it means you get wet. Very wet. … [+2025 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "PC Gamer"
      },
      "author": "Chris Szewczyk",
      "title": "Intel announces new 14A node at IFS Direct Connect 2024, and its aggressive 'five nodes in four years' roadmap remains on track",
      "description": "On the path to the Angstrom era.",
      "url": "https://www.pcgamer.com/intelannouncesnew14anodeatifsdirectconnect2024anditsaggressivefivenodesinfouryearsroadmapremainsontrack/",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/x99vSw32fWtJ9HobcAQm7Q120080.jpg",
      "publishedAt": "20240222T02:16:42Z",
      "content": "Intel held its inaugural Intel Foundry Services Direct Connect event today. It essentially marks the launch of Intel's new manufacturing strategy, bringing all of its customer manufacturing, system d… [+3253 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Tinhte.vn"
      },
      "author": "noreply@tinhte.vn (Anh Tú.), Anh Tú.",
      "title": "iPad Pro OLED sẽ có viền cực kỳ mỏng",
      "description": "Theo tin đồn, iPad Pro OLED mới của Apple sẽ mỏng hơn đáng kể so với các mẫu hiện có trên thị trường. Lý do là vì Apple sẽ chuyển sang sử dụng tấm nền OLED mỏng hơn cho iPad Pro đời kế tiếp, làm cho tổng kể iPad mỏng hơn nữa…",
      "url": "https://tinhte.vn/thread/ipadprooledsecoviencuckymong.3764721/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachmentfiles/2024/02/8268504_coverOLEDiPadtinhteanhtu.jpg",
      "publishedAt": "20240222T05:06:21Z",
      "content": "K n là tin n v kích thc tng th ca iPad Pro 2024. Mt báo cáo ca 9to5Mac cho rng iPad Pro 12,9 inch 2024 s có kích thc 281,5 mm x 215,5 mm x 5,0 mm. Nu chính xác, iu này s làm cho iPad Pro 2024 mng hn … [+1403 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Tinhte.vn"
      },
      "author": "noreply@tinhte.vn (P.W), P.W",
      "title": "Nvidia lại thông báo doanh thu và lợi nhuận kỷ lục, lãi tăng tới 769%",
      "description": "Nvidia hôm thứ 4 vừa rồi đã lại công bố doanh thu và lợi nhuận kỷ lục trong ba tháng 11, 12/2023 và tháng 1/2024. Cụ thể hơn, doanh thu của tập đoàn trong khoảng thời gian này đã đạt mức 22.1 tỷ USD, tăng 265% so với cùng kỳ năm ngoái.",
      "url": "https://tinhte.vn/thread/nvidialaithongbaodoanhthuvaloinhuankyluclaitangtoi769.3764763/",
      "urlToImage": "https://photo2.tinhte.vn/data/attachmentfiles/2024/02/8268611_20240122image8.webp",
      "publishedAt": "20240222T12:03:11Z",
      "content": "Nvidia hôm th 4 va ri ã li công b doanh thu và li nhun k lc trong ba tháng 11, 12/2023 và tháng 1/2024. C th hn, doanh thu ca tp oàn trong khong thi gian này ã t mc 22.1 t USD, tng 265% so vi cùng k … [+2453 chars]"
    }
  ]

  constructor() {
    console.log("cmd")
    super();
    this.state = {

      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=API_KEY"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

  }


  render() {
    return (
      <div>
        <NavBar />
        <div className="container my-3">
          <h1>NewsHub-Top Headling</h1>
          <div className="row my-3" >
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem tittle={element.title ? element.title.slice(0, 20) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  ImageUrl={element.urlToImage} newsurl={element.url} />
              </div>
            })}

          </div>
        </div>

      </div >
    )
  }
}

