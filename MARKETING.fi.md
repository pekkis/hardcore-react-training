# Pekkiksen kova React-valmennus

## React

React on Facebookin keksimä JavaScript-kirjasto käyttöliittymien rakentamiseen. "Löydettyäni" Reactin vuonna 2014 se tempaisi minut mukaansa poikkeuksellisen voimakkaasti. Minulle kävi harvinaisen nopeasti harvinaisen selväksi, että React tulisi disruptoimaan webbiscenen. Ryhdyin painokkaasti saarnaamaan Reactin ilosanomaa kaikille, jotka suostuivat kuuntelemaan.

Jälkiviisaus on osoittanut oraakkelimaiset visioni todeksi. Vuonna 2021 React on kaikkialla, ja minusta niin on edelleen hyvä. Teknologiaan ei kannata rakastua liikaa, se on vain väline ja silmät kannattaa pitää aina auki uusien trendien varalta, mutta React on osoittautunut kestäväksi.

## Pekkis

Olen opettanut Reactin iloja vertaisilleni vuosia. Tein tätä työtä pitkään Fraktion järjestämän [Suomen rankimman React-valmennuksen](https://www.fraktio.fi/palvelut/koulutus/suomen-rankin-react-valmennus/) puitteissa, ja palattuani valmennustauolta vuonna 2021 myyn valmennusta tämänhetkisen työnantajani Nitorin kautta.

Voit tutustua henkilööni googlettamalla minua (Mikko "Pekkis" Forsström on hyvä haku) ja / tai klikkailemalla suoraan linkkejä alla.

- [LinkedIn](https://www.linkedin.com/in/pekkis/)
- [Github](https://github.com/pekkis)
- [Ammatilliset muistelmani, osat 1-5](https://www.fraktio.fi/blogi/hopeakettu-muistelee-osa-1-laimea-uhka)
- [Diktaattoripörssi](https://diktaattoriporssi.com/)

## React vastaan "React"

Jos opettaisin React-nimisen käyttöliittymäkirjaston, kurssi olisi ohi tunnissa. React on pieni ja helppo oppia. Kun ihmiset puhuvat Reactista, tarkoittavat he kuitenkin yleensä "Reactia" lainausmerkeillä. Pelkästä käyttöliittymäkirjastosta ei vielä nimittäin useinkaan synny kokonaista webbisovellusta, ja niinpä Reactin ympärille on vuosien mittaan kasvanut valtava erilaisten työkalujen ja kirjastojen ekosysteemi.

Kahden päivän käytännönläheisessä valmennuksessa toteutamme pienen mutta kokonaisen React-sovelluksen alusta loppuun. Koulutus on aina ajantasainen, koska teen ja opettelen itsekin näitä juttuja joka päivä ja pidän valmennusta yllä "reaaliajassa" sen mukaan mikä on mielestäni kulloinkin opettamisen ja/tai jakamisen arvoista. Yritän parhaani mukaan tiivistää olennaisimman osan vuosien aikana syntyneestö tietämyksestäni kahteen valmennuspäivään.

Kaikki kurssimateriaalit ovat avointa lähdekoodia ja vapaata riistaa, joten sitä mitä kurssilta saat mukaasi, käytät miten tykkäät.

## Kenelle? Miten?

Valmennus sopii sinulle, jos olet ohjelmistokehittäjä ja / tai devsigner, ja tulet käyttämään JavaScriptiä, Reactia ja / tai muita ajanmukaisia fronttikehitysvälineitä työssäsi. Monet aiheista ovat vaikeita ja etenemme vauhdilla, joten kurssi ei sovellu vasta-alkajille.

Sinun ei tarvitse missään tapauksessa olla guru, mutta olen tosissani kun sanon että valmennukseni on tarkoitettu **ammattilaisille** ja että edellytän osallistujilta taustaa ammattimaisen ohjelmistokehityksen parista. Lisäksi sinulla tulee olla soveltavaa kokemusta JavaScriptistä, HTML:stä, CSS:stä ja webbikehityksestä ylipäätään.

Osallistuaksi valmennukseen tarvitset:

- Avoimen ja kahden päivän ajaksi "oikeasta" työstä vapautetun mielen.
- Tietokoneen ja kehitysympäristön
  - Lähetän esivalmistelu-ohjeet noin viikkoa aikaisemmin. Niiden suorittamiseen pitäisi mennä enintään puoli tuntia, ja ohjeiden suorittaminen etukäteen on **kurssille osallistumisen **ehdoton edellytys\*\*.
- Kulkutautien tai muiden poikkeusolojen aikana valmennus tapahtuu etänä. Tällä on seuraamuksia, jotka vaihtelevat, ja joita minun on vaikeaa ennakoida. Otathan asian huomioon odotusarvoissasi, niillä korteilla pelataan jotka on jaettu.

## Valmennuksen sisältö

Käytännössä koodaamme ja puhumme koodauksesta kaksi päivää. En usko kalvosulkeisiin. Jos alussa on enemmän kuin 20 slaidia tai niiden läpikäynnissä ei ole mielestäsi rotia, minua saa läpsiä huolella.

Käytämme ja läpikäymme kirjastoja ja työtapoja jotka ovat mielestäni hyväksi havaittuja tai muuten vain esittelemisen arvoisia. Sisältö elää sen mukaan mikä milloinkin on kuranttia ja mihin kunkin "luokan" mielenkiinto erityisesti kohdistuu. Kokemus on osoittanut että lopulta osallistujat määrittävät sen mitä kaikkea kahden päivän aikana ehdimme.

Käytämme modernia JavaScriptiä... ja TypeScriptiä sen päälle. Tämä on sekä kauheaa että ihanaa, mutta koska tulet joka tapauksessa satavarmasti käyttämään TypeScriptiä päivätyössäsi sitä on turha vältellä. TypeScriptissä on omat kommervenkkinsä, mutta "perustasolla" sen käyttöönotto on nopeaa eikä se juuri hidasta menoasi kunhan vain osaat ottaa sen käyttöön "oikein". Jos et vielä osaa, tämän jälkeen osaat!

Tässä joitakin ranskalaisia viivoja kummallekin valmennuspäivälle. Älä suhtaudu niihin absoluuttisesti. Jos itsellänne on erityisiä kiinnostuksen kohteita tai tarkkoja kehitystarpeita, kertokaa niistä minulle ennen valmennusta niin saatan osata sanailla aiheesta jotain tavanomaista syvällisempää.

## Päivä 1

- kehityksen Baabelin torni
  - Paketinhallinta: NPM, Yarn, pnpm
  - Babel, ES2021+, TypeScript
  - Webpack
  - Editorit, IDE:t, työkalut, konfiguraatiot
    - linttaus, Prettier, jne
- Reactin perusteet ja periaatteet
  - JSX
  - ajattele tilaa ja vain tilaa
  - hookit vs luokkakomponentit
  - Tilanhallinta Reactin hookeilla
- funktionaalinen paradigma ja immutaabeli data
- lomakkeet
- tyylitys
  - uudet, kivat CSS-ominaisuudet
  - komponenttipohjaisuus
  - css-modulit, PostCSS ja muut CSS:ksi kääntyvät kielet
  - CSS-in-JavaScript
    - emotion, theme-ui yms
- animaatiot

## Päivä 2

- tilanhallinta siihen erikoistuneilla välineillä
  - Tilanhallinnan lyhyt historia
  - de facto-standardi Redux
  - Mitä Reduxin jälkeen tai sijaan (jos mitään?!?)
  - GraphQL, React Query yms
- reititys
- koodin uusiokäyttö
  - lisää funktioita
  - Higher-Order Component (HOC) vs render props vs hookit
- suorityskyvyn profilointi ja optimointi
- testaus
- buildaus ja tuotantoonvienti
- kiinnostuksen ja ajankäytön mukaan:
  - edistynyt tilanhallinta
  - "natiivit" web-komponentit ja React
  - Design-systeemit / styleguidet
    - Storybook
    - StencilJS
    - mitä muuta?
  - GraphQL
  - valmiit broilerplatet vs "tee-se-itse"
    - Create-React-App
    - JAMStack / SSR
    - Gatsby / Next
  - Progressive Web Apps (PWA)
  - internationalisaatio & lokalisaatio
  - Webpack pintaa syvemmältä
    - Vaihtoehtoja
    - Tee-se-itse vs valmiit broilerplatet
  - Reactin "kilpailijat" ja tulevaisuus
    - Vue
    - Svelte
    - Angular
  - Q & A
    - kysykää, ja teille vastataan

## Ota yhteyttä

järjestän kurssia tällä hetkellä ainoastaan tilauksesta yrityksellesi.

Kurssin hinta on **6000 euroa + alv**, ja tällä hinnalla mukaan pääsee maksimissaan kymmenen henkilöä. Tämä on käytännön asettama rajoitus, koska sen suurempaa joukkoa en pysty opettamaan kerralla.

Kiinnostuitko? Lähetä minulle sähköpostia osoitteeseen <a href="mailto:mikko.forsstrom@nitor.com">mailto:mikko.forsstrom@nitor.com</a> ja jatketaan keskustelua!
