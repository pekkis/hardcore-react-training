# Muistiinpanot

## Odotellessa

- Ota ihmiset vastaan.
- Tarjoa aamiaista jos on tarjottavaa.
- Juttele mukavia.
- Varmista hellästi että ovat saaneet pökäleet pystyyn.

## Alkulörinät sitten kun kaikki ovat saapuneet

- [Avaa slaidit](https://docs.google.com/presentation/d/1YTNORX-38NHLzF-SI39HiYEsVs5Cwmqip_xHyxFBiBY/edit#slide=id.p)
- Kerro itsestäsi
- Kysele osallistujien koodaustaustasta sekä toiveista ynnä odotuksista valmennusta kohtaan. Orientoi itsesi ja osallistujat, juttele mukavia, se edesauttaa leppoisan ilmapiirin luontia.

## Peruslörinät

- Ensin varmista vielä kerran että kaikilla on setit onnistuneesti pystyssä
  - http://localhost:3000/
- Kehota kaikkia avaamaan VSCode
  - Kysele käyttääkö joku töissä muita editoreja. Juttele niistä mukavia jos aihetta ilmenee.
- Selitä Yarn vs NPM vs PNPM.

- Käy läpi se että clientin juuressa sijaitsee konffiripulit. Avaa (fyysisesti) mielenkiintoiset tiedostot.

  - .env.local
  - .eslintc.js ja .prettierrc
  - Next.js pysyy mustana laatikkona, jaa vähän ajatuksiasi siitä.

## Oma koodi src:ssä

- Lähde liikkeelle src:stä.
  - Kerro vähän TypeScriptistä ja siitä miksi sillä vs js
  - Koodaa JSX:ää suoraan [Babelin replissä](https://babeljs.io/repl)
    - Selitä JSX syvällisesti, se auttaa oppilaita, trust me!
    - Demonstroi kuinka kaikki tagit ovat lopulta vain funktiokutsuja
    - Demonstroi ero pienkirjainkomponenttien (div, jne) ja omien compojen välillä
    - Demonstroi propsit ja {javascript javascriptin sisällä}
    - kerro childrenistä ja kompositoinnista
  - Demonstroi fast refresh, sen pitäisi toimia epävakaan epäsäännöllisesti!
  - Jos Linuxeja, kehota nostamaan relevanttia kernelin parametria (ohjeet voi googlata)

## ES6

- ES6-syntaksin avaaminen sitä mukaa kun sitä esiintyy siinä mitassa kun tarpeellista.
  - export, import tussi, { lussi, naama }
  - () => läskinuolifunktioiden salat
  - spreadaus (...)
  - const { destrukturointi } = props

## layout ja etusivu

- tehkää juurileiska
- tehkää pääsivu

## Maailmankello

- kello client sidenä

  - useState + hookkien esittely

    - hookit (etenkin useState, useEffectin kaikki kolme käyttötapausta)
    - Käy nopeasti läpi kaikki hookit Reactin docseissa
    - Kehota jengiä lukemaan hookit läpi ajatuksella
    - Kerro hookkien säännöt (suoritetaan aina, sama järjestys)

  - DateTime
  - kello mikrosekuntien / osasekuntien tarkkuudella!
  - kello eloon!
  - SSR / ei javascriptiä, tulee varmasti esille :D
  - tyylitys, ei teemoitus
  - neljä kelloa (montreal, lontoo, helsinki, tokio)
    - mäppäys
    - key
    - Selitä miksi uniikimpi id on aina parempi kuin listan indeksi. Käytä kellon otsaketta keynä.
    - Funktionaalisen ohjelmoinnin 101, osa 1: mitä tekee Array.map
  - oma hookki

## Gridautus

- Globaalit tyylit
- toteutetaan gridautus (kello + 2 muuta mitä tulee)
- Header, footer
- teemoitus
  - ankat tahtoo Comic Sans MS:n, ainoan luotettavan fontin
  - Rahakas globaali taustakuva (webpack kuvan importtaus)
  - Selitä assettien cachebustaus taikaluoti
  - Kerro JS-tyylityksen voimakkuudesta ja tradeoffit yleisellä tasolla. Hauku CSS-in-JS runtimelliset kirjastot.

## Valuuttakurssit

- service-kerros (src/services/person.js)
- axios ja http-kirjastot vs fetch
- avaa promisen konsepti jos tarpeellista, then / catch
- johdattele async / awaitiin (tehkää lopulta tällä, muista try/catch simppeli virheenhallinta!)
- haetaan valuuttakurssit, tehdään komponentti
- mäpätään läpi rumasti
- tehdään kunnon kompsonentit, lisää teemaa
- tehdään filtteri
- tehdään päivämäärän vaihto
- tehdään keinotekoinen hitaus
- useDeferredValue, lapsikomponentin memotus

## Virheenhallinta

- valuuttakurssien hakemisesta tehdään errori ja setataan state.
- tehdään error.tsx error boundary!
- Selitä errorin pusku Sentryyn tms

## Uutisotsikot

- Haetaan kvartikkelit servulla
- Gaylord tahtoo jakaa kvartikkelit tärkeisiin ja ei tärkeisiin.
  - Selitä se että tilassa pidetään tarvittava ja loput derivoidaan lennossa.
  - Filtteri (isImportant)
  - Headlines-komponenttien luonti

## Devaustyökalut ja profilointi

- Demonstroi Components-täppä ja Profiler-täppä.
- Demonstroi profilointi hard reloadilla ja softaa käyttämällä.
- Selitä React.memo ja sen avulla optimointi
- Optimoi asioita
- Optimoi asioita server componenteilla
- Demonstroi uudelleen suorituskykyä.

## uutissivu

- Tehdään uutissivu
- generoidaan metatiedot
- rendataan köpö artikkeli
- funtsitaan artikkelin sisällön rendausta
- 404

## kommentit

- react query
- kommenttien haku
- lomake (react hook form)
- zod
- postaus
- invalidointi

## tilanhallinta

- paikallinen tila
- useReducer
- serveritila
- react query
- tilanhallintahimmelit

## duck ui

- Gaylord tahtoo pulleat ja pyöreät käyttis-elementit.
- koodataan
- forwardRef
- käyttöön

## Reititys

- kerro että riippuu systeemistä

## Buildaus

Yleensä about lopetan buildaukseen.

- npm run build
- Kerro oman ja vendor-koodin eroista ja niiden splittauksesta
- Demonstroi stats.jsonin visualisointia esimerkiksi webpack-visualizerilla
- Tee koodinsplittaus Suspensella ja laiskoilla komponenteilla (IndexPage, PersonPage)
  - Jutustele koodinsplittauksesta

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

## Q & A

Varaa riittävästi aikaa (vartti tms vähintään) kyssäreille ja vastauksille, jos mahdollista!

- testaus
- Storybook et al.
- GraphQL
- metaframewörkit
