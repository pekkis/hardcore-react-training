# Peksun muistiinpanot

Olen täydentänyt tätä listaa kolmen vuoden aikana satunnaisesti. 3.12.2019 yritän täydentää juuri lopettamani kurssin mukaisesti niin että uudet soihtunkantajat saavat ajantasaisen tiedon.

## Odotellessa

- Ota ihmiset vastaan
- Tarjoa aamiaista jos omassa pesässä
- Juttele mukavia
- Varmista hellästi että ovathan saaneet pökäleet pystyyn.

## Alkulörinät sitten kun kaikki ovat saapuneet

- [Slaidit joita olen käyttänyt](https://docs.google.com/presentation/d/1XxM81DAsLHA0Uyy8Yf9bFVmSAAMcwLJiFjA4ih5URFg/edit?usp=sharing)
  - Kerro itsestäsi
  - Kysele osallistujien koodaustaustasta sekä toiveista ynnä odotuksista valmennusta kohtaan. Orientoi itsesi, juttele mukavia, se edesauttaa leppoisan ilmapiirin luontia.
  - JavaScriptin evoluutio
  - React
    - state => ui
    - Tähdennä ankarasti sitä että kyse on siitä että React on tilan funktio. Sisään tila, ulos käyttis.
    - Kaikki muu on semantiikkaa.
    - Toista yhä uudelleen: ajattele vain tilaa. Tilasta piirtyy käyttöliittymä. Kun tila päivittyy, käyttöliittymä piirtyy uudelleen. Loppu on triviaalia.
    - Komponentit uudelleenkäytettävyyden perusyksikkönä
    - props & state. Vähempi statea === parempi.
  - React vs "React" (kirjasto vs ideologia/ekosysteemi)
  - Reactin popularisoimat työkalut ja paradigmat
    - Avaa kaikki sillä tasolla että ymmärtävät.
  - Kerro miksi itse tykkäät Reactista niin paljon. Miksi se on ollut sinulle ja Fraktiolle hyvä?
  - Valmennuksesta itsestään
    - Parhaat kuratoidut kirjastot
    - Oma teemani on perinteisesti ollut Fraktion ERP: se että paha toimitusjohtaja Jesse haluaa karsia läskit Fraktiosta, erottaa kaikki yli 30v ja palkata serkkupoikia. Absurdi huumori on itselleni rakasta, keksi tähän oma teema.
    - ERP kolmella toiminnolla (henkilöiden haku, palkkaus, potkiminen) on osoittautunut erittäin sopivaksi skoopiksi. Sen ehtii minimivaatimuksilla aina, ja sitä voi laajentaa lähes loputtomiin.

## Konffilörinät

- Ensin Varmista että kaikilla on setit onnistuneesti pystyssä.
  - http://localhost:8888/
  - https://localhost:8889/person
- Kehota kaikkia avaamaan VSCode client-kansio juurena, ei koko projekti. Koko projekti juurena bugaa helposti. Välty murheilta.
- Selitä Yarn vs NPM jos herättää "ihmetystä".
  - Kysele käyttääkö joku muita editoreja. Juttele niistä mukavia jos aihetta ilmenee.
- Käy läpi se että clientin juuressa sijaitsee konffiripulit. Avaa (fyysisesti ja konseptuaalisesti) mielenkiintoiset tiedostot.
  - .browserslistrc / babel-preset-env
    - autoprefixer kans!
  - .env, miksi hyvä tapa konffia softaa, buildaa missä vaan, twelve factor app, jne
  - postcss.config.js ja autoprefixer (jos meinaat opettaa css-tyylitystä, en ole enää opettanut itse kuin jos ovat erityisesti kysyneet)
  - .eslintc.js ja .prettierrc
    - avaa linttaus ja prettier niin että ymmärtävät miksi parasta sitten viipaloidun leivän
  - Webpack pysyy mustana laatikkona, broilerplate
    - näytä syntyvää webpack-konffia jossain vaiheessa myöhemmin jos ovat kiinnostuneita ja muistat. Selitä plugarit ja loaderit ja muut Webpackin olennaiset sisukset tasolla joka tuntuu sopivalta.

## Oma koodi src:ssä

- Lähde liikkeelle client.tsx:stä
  - Kerro vähän TypeScriptistä
  - "Perustason" TypeScriptin opettaminen ei ole sen haastavampaa kuin PropTypes jne. Mielestäni on edukasta opettaa TypeScriptin kautta jos vain pysyvät mukana!
  - TypeScript babel-molluskana ja type checkkerinä vs raakana compiloitsijana. Ei blokkaa tekemistä vaikka tyypit ei tyydyty.
- Avaa render
  - Selitä delegaatio client > Root (broilerplate, wrapperit) > App
  - Koodaa JSX:ää suoraan [Babelin replissä](https://babeljs.io/repl)
    - Selitä JSX syvällisesti, se auttaa oppilaita, trust me!
    - Demonstroi kuinka kaikki tagit ovat lopulta vain funktiokutsuja
    - Demonstroi ero pienkirjainkomponenttien (div, jne) ja omien compojen välillä
    - Demonstroi propsit ja {javascript javascriptin sisällä}
    - kerro childrenistä ja kompositoinnista
- Käske keksimään Appissa omalle softalle H1-otsikko
  - Demonstroi Hot Reloadaus Magiaa, sen pitäisi toimia kaikilla!
  - Jos Linuxeja, kehota nostamaan relevanttia kernelin parametria (ohjeet voi googlata)

## Eka komponentti

Tähdennän, että tästä alkaen (ja miksei ennenkin) valmentaminen on lopulta aina improvisaatiota joka muuntautuu osallistujien mukaan. Järjestys ja painotukset mukautuvat osallistujien tarpeisiin.

- ES6-syntaksin avaaminen sitä mukaa kun sitä esiintyy siinä mitassa kun tarpeellista.
  - export, import tussi, { lussi, naama }
  - () => läskinuolifunktioiden salat
  - spreadaus (...)
  - const { destrukturointi } = props
- henkilöiden hakeminen serveriltä
  - service-kerros (src/services/person.js)
  - hookit (etenkin useState, useEffectin kaikki kolme käyttötapausta)
    - Käy nopeasti läpi kaikki hookit Reactin docseissa
    - Kehota jengiä lukemaan hookit läpi ajatuksella
    - Kerro hookkien säännöt (suoritetaan aina, sama järjestys)
  - axios ja http-kirjastot vs fetch
  - avaa promisen konsepti jos tarpeellista, then / catch
  - johdattele async / awaitiin (tehkää lopulta tällä, muista try/catch simppeli virheenhallinta!)
  - mäppää henkilöt läpi raakana App.tsx:ssä jotta ruudulle saadaan 200 tyyppiä
    - Älä käytä key-proppia
    - Selitä miksi ilman key-proppia tulee virhe ja mitä se key merkitsee
    - Selitä miksi uniikimpi id on aina parempi kuin listan indeksi. Käytä person.id:tä keynä.
    - Funktionaalisen ohjelmoinnin 101, osa 1: mitä tekee Array.map()
  - Person-komponentin tekeminen
    - Raakan mapin refaktorointi komponentiksi
    - Komponentin tyylittäminen css-propilla (emotion.js)
    - Opeta tyylittäminen mahd. aikaisin koska se on tekemistä tylsiin hetkiin jota voi koko ajan edistää omatoimisesti.
  - Globaalit tyylit
    - Jesse tahtoo Comic Sans MS:n, ainoan luotettavan fontin
    - Rahakas globaali taustakuva (webpack kuvan importtaus)
    - Selitä assettien cachebustaus taikaluoti
    - Kerro JS-tyylityksen voimakkuudesta (polished, breakpointi-map-reduce, jne) ja tradeoffit yleisellä tasolla

## Lista

- Jesse tahtoo segregoida ihmiset kahteen listaan, hyvikset ja pahikset
  - Selitä se että tilassa pidetään tarvittava ja loput derivoidaan lennossa.
  - Filtteri (isGood)
  - Filtterin uudelleenkäyttö / negaatio
  - DuckList-komponentin luonti
    - Juttele sen propseista ja vastuualueista (kenelle esim title kuuluu)
  - Optionaalinen metatietopropsi (pahoista halutaan nähdä määrä ja keski-ikä, hyviksistä ei)
    - Keski-ikä koska funktionaalisen ohjelmoinnin 101, osa 2: reduce
    - boolean propsien erityispiirteet
    - optionaalinen renderöinti {showMetadata && <p>metadata</p>}

## Poispotkiminen ulos statesta

- Ei potkita pois palvelimelle asti, vain statesta!
- Selitä kuinka paska valuu alaspäin (callbackit myös propseina koska yksisuuntainen dataflow)
- Toteuttakaa firePerson-funkkari ja valuttakaa se alaspäin
- Demonstroi DuckListissä kuinka spreadaus { ...rest } toimii edestakaisin koska DuckList ei ole kiinnostunut tästä funkkarista vaan haluaa delegoida kaikki loput vaan sokkona Personille
- Toteuttakaa Personiin nappi josta erotus tapahtuu
  - Jutelkaa onClickistä ja klosuurista riittävästi notta ymmärtävät
- Onnitelkaa itseänne henkilön onnistuneesta poistumisesta!

## Palkkaaminen

- Toteuttakaa hirePerson-funktio Appiin.
- Keskustele formeista ja neitseellisten React-formien paskuudesta (yksisuuntainen bindaus, verböösiys)
  - Redux-form
  - Final-form
  - Formik
  - Itse olen lopulta opettanut Formikin koska se vaan toimii.
- Toteuttakaa HirePersonForm jossa sisällä Formik-lomake KAHDELLE ARVOLLE (firstName, lastName). Loput suosiolla kotitehtäväksi.
  - Ole hyvin varovainen. Tässä on paljon tasoja erilaisia sulkeita ja menevät helposti niissä joskus sekaisin.
  - Etene riittävän hitaasti yksi suljetaso kerrallaan.
  - Selitä mitä tapahtuu (render props children)
  - onSubmitissa demonstroi halpa kloonaus { ... person } spreadaamalla. Kovakoodatkaa age, gender ja muut tarpeelliset.
  - Käytä suoraan Field ja Form komponentteja, niillä tämä syntyy nopsakkaan.
- Toteuttakaa simppeli validaatio Yupilla ja validationSchemalla
  - Sopivan scheman saa Formikin validaatiomanuskasta copy-pastoroitua! Ohjeista muutkin copypastoroimaan!
  - Virheiden näyttäminen niin yksinkertaisesti kuin mahdollista
  - isValid ja napin disablointi

## Pulleat inputit

- Jesse tahtoo pulleat ja pyöreät inputit.
  - Tyylitelkää emotion.js:n styled-abstraktiolla primitiivit Button ja Input.
  - Töräyttäkää kaikki olemassaolevat mestat (Personin button ja formin inputit & button) käyttämään näitä itsetehtyjä mahtikomponentteja!

## Animaatiot

Tässä kohtaa joskus "hitaammilla" kursseilla ensimmäinen päivä alkaakin olemaan iltapäivässä. Jos näin on niin mieti tarkasti skippaatko animaatiot suosiolla. Jos aikaa on, niin sitten tämä on voimauttava "loppukevennys".

- Esittele framer-motion kirjastona, ohjaa sen manuskaan.
- Sano että tehtävänne on omatoimisesti töräyttää linjalle niin hienot animaatiot että pää hajoaa.
- Kerro että olet tästä edes vain vapaa konsultti joka neuvoo kysyttäessä parhaansa mukaan ja koodaa itse samalla itselleen animaatiota.
- Jos se on mahdollista, kutsu Jaani tässä kohtaa apuopettajaksi. Se toimii tosi hyvin.
  - Jos olet epävarma, katso esimerkkiä jostain aiemmasta koodauksesta joka toimii, [esimerkiksi täältä](https://github.com/pekkis/hardcore-react-training/blob/2019-12-02/client/src/components/DuckList.tsx)
  - Koodaa DuckList-komponenttiin jengille toimivaa esimerkkiä ja sitten kun se on valmis niin näytä ja selitä se ihmisille.
  - Kerro AnimatePresencestä ja toteuta se.
  - Anna tyypeille koodausrauha, koodaa itse ruudulla jotain todella friikkiä animaatziota.

## Immutaabeli data ja tietorakenteet

Jos ensimmäisestä päivästä on riittävästi tuntia jäljellä ja/tai ajatus tuntuu hyvältä, töräytä tämä osio ekan päivän loppuun. Jos ei ole, toisen päivän aamupäivä on OK sekin.

- Selitä mutaabeli vs. immutaabeli data
- Kysy mielipiteitä JS:n natiiveista tietorakenteista ([], {}). Ovatko immutaabeleja ja mutaabeleita?
- Leikkikoodaa livenä hyviä esimerkkejä epämääräisyydestä (push, sort, concat tms)
- Selitä immutaabelin datan edut ja tietysti eritoten Reactissa
- Immer
- Immutable.js (paremmat tietorakenteet, immutaabelit, parempi API)
- Fuktoroikaa kaikki []:t Immutablen listalla (App, DuckList tarttevat muutoksia)

## Generaattorit

Jos meinaat opettaa Reduxin saagojen kautta, opeta ja demonstroi live-koodaamalla esimerkiksi range(min, max) avulla ensin nämä konseptit. Tätä en käytännössä koskaan ole kerennyt opettaa ensimmäisenä päivänä.

- iteraattori
- iteraabeli
- generaattori

## Reititys

Reitityksen kohta opetuksessa määräytyy sen mukaan mikä on painotus. Jos meinaat viedä tilanhallinnan opetuksen niin pitkälle kuin osaaminen riittää, tee tämä ensin. Silloin ei haittaa jos aika loppuu kesken, koska kaikki olennainen on opetettu jo ennen tilanhallintaa. Jos meinaat opettaa "helpon" version, tämä voi tulla myös Reduxin jälkeen.

- Kerro reitityksen kahdesta mahdollisesta suunnasta (määrittääkö tila urlin vai url tilan)
- React Router
  - React Router DOM, miksi?
  - Roottiin BrowserRouter-wrapperi
- Refaktoroikaa Appista IndexPage ja tehkää uusi PersonPage-komponentti joille kaikki tarvittava tulee propseina.
  - Jos kurssi on "hidas", voi koko satsin toteuttaa Appissa inlinena säästääkseen aikaa.
  - Selitä Switch ja Route
  - Toteuttakaa reitit ja NotFound-route mahd. yksinkertaisena
- Toteuttakaa linkki Person-komponentista henkilön omalle sivulle
- Demonstroin aina PersonPagen avulla sitä miten UI:n täytyy pystyä hallitsemaan tila hajoamatta
  - Linkki etusivulta henkilön sivulle toimii mutta kova lataus henkilön sivulla ei toimi
  - Korjataan tämä guard clausella
  - Tässä kohtaa joskus koodaan oman Render-propsin demonstroidakseni asiaa. Edellämainitun guard clausen vieminen uudelleenkäytettäväksi abstraktiksi asiaksi em. metodologioilla on tyydyttävä aasinsilta. Ovat nähneet Formikin ja Routterin jo, niin hyvä että ymmärtävät mitä siinä tapahtuupi.

## Tilanhallinta, perusteet

Jos mahdollista, opeta saagat. Niiden opettaminen ei ole juuri hankalampaa kuin thunkkien, sanoo kokemukseni, ja ne ovat äärettömän paljon voimakkaampia.

- Kerro tilanhallinnan historiasta ja nykytilanteesta.
- Selitä Redux yksinkertaisimman mahdollisen arkkitehtuurikuvan avulla.
  - Kaikki globaali tila asuu yhdessä storessa
  - Viewit tilaavat tilaa
  - Dispatchataan actioneja eli tyhmiä JS-objekteja (flux-standard-action)
  - Reducerit saavat vanhan tilan ja jokaisen actionin, redusoivat uuden tilan.
  - Viewit saavat uuden tilan.
- Fuktoroikaa Reduxiin
  - Selitä ankat
  - Tehkää person-ankka
    - Toteuttakaa VAIN SYNKRONISET TOIMINNOT (palkkaus, erotus)
    - Selitä ankkojen indeksi
    - Selitä ja toteuttakaa reducer
    - Selitä ja toteuttakaa action constantit
    - Selitä miksi action creatorit ovat ehkä turhia.
  - Fuktoroikaa App person-ankkaan. Kaikelle löytyy analogia.
  - Wirettäkää Redux Provider Roottiin
  - Wirettäkää (dekommentoimalla) Redux client.tsx:ssä.
    - Selitä stepit.
  - Teen tämän koko roskan yleensä yhdellä stepillä. Sitten debugataan kunnes kaikilla toimii. Kehota kaikkia, jotka saavat toimimaan, tutustumaan Redux devtoolsseihin.
  - Kun kaikilla toimii, selitä devtoolssit
    - Actionit ja aikamatkailu
    - State
    - Diff

## Tilanhallinta, asynkronisuus

- Jos saagat, tehkää henkilöiden noudolle saaga
- Jos ei saagoja, toteuttakaa henkilöiden noudolle thunk.
  - Thunkin lähdekoodin avaaminen usein auttaa.

## Tilanhallinta, toimitusjohtajan lisävaatimukset

- Toteuttakaa "oikea" henkilöiden palkkaus ja erotus
  - PersonServiceen funktiot
  - Asynkroniset toiminnallisuudet saagaan / thunkkiin / redux-promise-middleware.
  - Reducer kuuntelee fulfilled-actioneita
- Erotuksessa on satunnainen suuri viive, demonstroi miten se "hajottaa" käyttökokemuksen.
- Jesse tahtoo spinnerin joka spinnaa aina kun jotain asynkronista tapahtuu
- Jesse tahtoo että kun henkilöä ollaan erottamassa, erotusnappi disabloituu kyseiseltä henkilöltä.
  - Yleensä tässä kohtaa fuktoroimme person-ankassa listatietorakenteen mapiksi! Se on hyvä opetus!

## Tilanhallinta, edistyneet fiitsöt

Jos tilanhallinnassa ehditään TODELLA pitkälle, tässä lisäpähkinöitä. Olen opettanut näitä vain saagojen kanssa, koska aina kun tilanhallinnassa mennään pitkälle olen opettanut saagojen kautta.

- Laita oppilaat toteuttamaan ohjelmistoon notifikaatiot.

  - Notifikaatiot häviävät ruudulta itsestään 5 sekunnissa tai klikkaamalla
  - Tervetuloa erottamaan-notifikaatio
  - Kannustava notifikaatio joka viidennen onnistuneen erottamisen jälkeen

- Serveripuolen .env:stä on enabloitavissa kirjautuminen. Sen jälkeen sekä erottaminen että palkkaaminen vaativat tokenin (lue koodia, selviää kyllä)
  - POST /auth { email: "gaylord.lohiposki@dr-kobros.com", password: "gaylordpassu" } palauttaa tokenin
  - Toteuttakaa login / logout flow saagoilla. Tässä demonstroidaan vaikeita asioita jotka muuttuvat saagoilla helpoiksi.

## Devaustyökalut ja profilointi

- Demonstroi Components-täppä ja Profiler-täppä.
- Demonstroi profilointi hard reloadilla ja softaa käyttämällä.
- Selitä React.memo ja sen avulla optimointi
- Optimoi Person
- Optimoi App useCallbackillä
- Demonstroi uudelleen suorituskykyä.

## Virheenhallinta

- Personiin errorin heitto, valkoinen ruutu. Selitä miksi niin käy vs React 15 ja epämääräinen tila.
- Tarvitsee luokkakomponenttia jos sen meinaa itse tehdä.
- react-error-boundary asennettuna, käyttäkää sitä.
- Toteuttakaa Roottiin toimiva error boundary fallbackilla
- Selitä errorin pusku Sentryyn tms componentDidCatchissa / onErrorissa

## Buildaus

Yleensä about lopetan buildaukseen.

- npm run build
- Kerro oman ja vendor-koodin eroista ja niiden splittauksesta
- Demonstroi stats.jsonin visualisointia esimerkiksi webpack-visualizerilla
- Tee koodinsplittaus Suspensella ja laiskoilla komponenteilla (IndexPage, PersonPage)
  - Jutustele koodinsplittauksesta

## Todistusten jako

- Muista jakaa todistukset. Se on tärkeä ele!

## Q & A

Varaa riittävästi aikaa (vartti tms vähintään) kyssäreille ja vastauksille, jos mahdollista!

- Usein kysyvät testauksesta, varaudu vastaamaan.
  - Automatisoidut kliksuttelutestit
  - Snapshot-testaus
  - Saagojen testaus
  - Funktioiden testaus
  - Storybook et al.

## GraphQL

- Olen koodannut APIsta GraphQL-version ihan huvin ja urheilun vuoksi
  - http://localhost:8889/graphql
  - En ole koskaan ehtinyt lähteä opettamaan asiaa, ainoastaan olen kertonut GraphQL:stä ja demonstroinut sen eroa REST/JSON-rajapintoihin.
