# Pekkiksen React-valmennus

## React

React on Facebookin keksimä JavaScript-kirjasto käyttöliittymien rakentamiseen. "Löydettyäni" Reactin vuonna 2014 se tempaisi minut mukaansa poikkeuksellisen voimakkaasti. Minulle kävi harvinaisen nopeasti harvinaisen selväksi, että React tulisi disruptoimaan koko webbiscenen. Ryhdyin painokkaasti saarnaamaan Reactin ilosanomaa kaikille, jotka suostuivat kuuntelemaan.

Samalla tiellä olen edelleen, ja jälkiviisaus on osoittanut oraakkelimaiset näkyni todeksi. Vuonna 2021 React on kaikkialla, ja minusta niin on hyvä. Fronttikoodaus on nykyaikaisilla työkaluilla aika mukavaa hommaa.

## Pekkis

Olen opettanut Reactin iloja vertaisilleni vuosia. Tein pitkään opetustyötäni Fraktion järjestämän [Suomen rankimman React-valmennuksen](https://www.fraktio.fi/palvelut/koulutus/suomen-rankin-react-valmennus/) puitteissa, ja nyttemmin palattuani valmennustauolta vuonna 2021 myyn valmennusta tämänhetkisen työnantajani Nitorin kautta.

Voit tutustua henkilööni googlettamalla minua (Mikko "Pekkis" Forsström) ja / tai klikkailemalla linkkejä alla.

- [Linkedin](https://www.linkedin.com/in/pekkis/)
- [Github](https://github.com/pekkis)
- [Ammatilliset muistelmani, osat 1-5](https://www.fraktio.fi/blogi/hopeakettu-muistelee-osa-1-laimea-uhka)
- [Diktaattoripörssi](https://diktaattoriporssi.com/)

## React vastaan "React"

Jos opettaisin kursseillani React-nimisen käyttöliittymäkirjaston, opetus olisi ohi tunnissa. React on lopulta aika pieni ja helppo oppia. Kun ihmiset puhuvat Reactista, tarkoittavat he kuitenkin "Reactia" lainausmerkeillä - ekosysteemiä, joka on syntynyt Reactin ympärille. Pelkästä käyttöliittymäkirjastosta ei vielä synny kokonaista webbisovellusta, ja kappas, siinä meillä onkin suun täydeltä pureskeltavaa.

Kahden päivän käytännönläheisessä valmennuksessa koodaamme pienen mutta kokonaisen React-sovelluksen. Koulutus on aina ajankohtainen, koska teen ja opettelen itsekin näitä juttuja joka päivä ja pidän valmennusta yllä "reaaliajassa" sen mukaan mikä on tässä kuussa mielestäni jakamisen ja opettamisen arvoista. Yritän parhaani mukaan tiivistää vuosien aikana syntyneen tietämykseni ja kokemukseni kahteen valmennuspäivään.

Kaikki kurssimateriaalit ovat avointa lähdekoodia ja vapaata riistaa, joten sitä mitä kurssilta saat mukaasi, käytät miten tykkäät.

## Kenelle? Miten?

Valmennus sopii sinulle, jos olet ohjelmistokehittäjä ja / tai devsigner, ja tulet tarvitsemaan JavaScriptiä, Reactia ja / tai muita ajanmukaisia fronttikehitysvälineitä työssäsi. Monet aiheista ovat vaikeita ja etenemme vauhdilla, joten kurssi ei sovellu vasta-alkajille.

Sinun ei tarvitse missään tapauksessa olla guru, mutta olen tosissani kun sanon että kurssini on tarkoitettu ammattilaisille ja että edellytän osallistujilta taustaa ohjelmistokehityksen saralta. Sinulla tulee olla ammatinharjoittamiseen riittävä ymmärrys ohjelmoinnista yleisesti ja JavaScriptistä, HTML:stä ja CSS:stä erityisesti.

Osallistuaksi valmennukseen tarvitset:

- Avoimen ja kahden päivän ajaksi "oikeasta" työstä vapautetun mielen.
- Tietokoneen ja kehitysympäristön
  - Lähetän esivalmistelu-ohjeet noin viikkoa aikaisemmin. Niiden suorittamiseen pitäisi mennä enintään puoli tuntia, ja ohjeiden suorittaminen etukäteen on kurssille osallistumisen **ehdoton** edellytys.
- Huomaa että kulkutautien aikana valmennus tapahtuu etänä. Sillä on seuraamuksia, jotka vaihtelevat, ja joita minun on vaikeaa ennakoida. Ota asia huomioon odotusarvoissasi, niillä korteilla pelataan jotka on jaettu.

## Valmennuksen sisältö

Koodaamme yhdessä kaksi päivää. En usko kalvosulkeisiin. Jos alussa on enemmän kuin 20 slaidia tai niiden läpikäynnissä ei ole mielestäsi rotia, pyydä rahasi takaisin.

Käytämme ja läpikäymme kirjastoja ja työtapoja jotka ovat hyväksi havaittuja tai muuten vain mielestäni esittelemisen arvoisia. Sisältö elää sen mukaan mikä milloinkin on kuranttia ja mihin kunkin "luokan" mielenkiinto erityisesti kohdistuu. Käytettävissämme on koko osaamiseni ja tietämykseni, mutta lopulta vasta osallistujat määrittävät sen mihin suuntaamme ja mitä kahden päivän aikana ehdimme!

Käytämme modernia JavaScriptiä ja TypeScriptiä sen päällä. Tämä on sekä kauheaa että ihanaa, mutta koska tulet käyttämään TypeScriptiä päivätyössäsi satavarmasti sitä on turha vältellä. TypeScriptissä on omat kommervenkkinsä, mutta "perustasolla" sen käyttöönotto on nopeaa eikä se juuri hidasta menoasi kunhan vain osaat ottaa sen käyttöön "oikein". Jos et vielä osaa, tämän jälkeen osaat!

Tässä joitakin avainsanoja valmennuspäiville. Jos teillä on itsellänne erityisiä kiinnostuksen kohteita tai kehitystarpeita, kertokaa niistä ennen valmennusta niin osaan hyvällä tuurilla sanailla aiheesta jotain tavallista syvällisempää.

## Päivä 1

- kehityksen Baabelin torni
  - NPM & Yarn
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
