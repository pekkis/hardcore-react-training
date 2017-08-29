# Muistiinpanoja

## alkujaaritus

* React
  * komponenttipohjaisuus
  * DOM on implementaatiodetalji
  * yksinkertainen
  * JSX - lähestymistapa vs Angular (HTML vs JS)

* Jarno
* Webpack (päivitin koloseen)
* Babel

## verryttelyä

* rakenne
  * juuressa konffiripuli
  * src:ssä kaikki lähdekoodi
  * tähdennä että kyseessä mun näkemys siitä miten asiat voi tehdä fiksusti.
* yarn

## kood kood

* client.js
* export, import, var, const, let
* rendataan Root (moi)
  * root on olemassa vain bootstrappaystä varten. Appi appiin.

## mega app mvp

* tehdään appissa personeita fakerilla
* yksinkertainen tilaton komponentti (Person)
* komponenttien kompositointi (PersonList)
  * listat ja key!!!
* komponenttien tyylitys (css-modulit ja postcss)
* filtteröinti (miehet ja naiset esim) ja komponenttien uusiokäyttö
* immutable.js ja paremmat tietorakenteet
* tilallinen komponentti (App) ja lifecycle-metodit
* datan haku palvelimelta (axios)
* tyypin poisto, callbackkien kuletus
* tyyppien lisäys (lomakkeiden "vaikeus")
* knappi
* knappi! (primary & secondary)
* pure
* perf tools

## refaktoroidaan mega apps

* tila asuu reduxissa, yhdessä ainoassa paikassa.
* selitä flow: äksönit dispätsätään, reducerit kuuntelee, muokkaa tilaa.
* ducks: säästä aikaa ja energiaa
* devtoolssit chrome storesta
* typerät ja fiksut komponentit
  * fiksuissa ei hötskää
  * tyhmissä ei tilaa
  * HOC

## alasivut mega appsiin

* react router
  * index
  * gender
  * single person
* containerit pageille
* oma HOC?
* recompose

## koodinhuolto, debuggaus ja performanssi

* linttaus
* testaus
* selitä että usein ei tartte tehdä mitään.
* mankelointi, source mapit ja debuggaus

## vanhojen softien refaktorointi

* pala kerrallaan mahdollista

## flow

* lussuta tyypityksestä
* typescript
* jos kiinnostusta löytyy, käy läpi

## serverirendaus

* case: diktaattoripörssi
  * webpackataan serveripuolikin
  * redial acyncciin
  * aloitustila mukaan jsonina
  * react osaa napata tilanteen lennosta

## best practices

* redux containerien rohkea käyttö
* säilytä yksi tila, derivoi subsetit, optimoi reselectillä jos tarttee
