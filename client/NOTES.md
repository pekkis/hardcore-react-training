# Muistiinpanoja

## alkujaaritus

* React
  * komponenttipohjaisuus
  * DOM on implementaatiodetalji
  * yksinkertainen
  * JSX - lähestymistapa vs Angular (HTML vs JS)

* Jarno
* Webpack
* Babel

## verryttelyä

* broilerplate (https://github.com/pekkis/broilerplate)
* rakenne
  * juuressa konffit
  * src:ssä kaikki lähdekoodi (client.js ja server.js entryt)
  * tähdennä että kyseessä oma näkemys siitä miten asiat voi tehdä fiksusti.
* yarn

## kood kood

* client.js
* export, import, var, const, let, ES6
* rendataan Root (moi)
  * root on olemassa vain bootsträppäystä varten. Appi appiin.

## mega app mvp

* tehdään appissa personeita fakerilla
* yksinkertainen tilaton komponentti (Person)
* komponenttien kompositointi (PersonList)
  * listat ja key!!!
* komponenttien tyylitys (css-modulit ja postcss)
* filtteröinti (miehet ja naiset esim) ja komponenttien uusiokäyttö
* tilallinen komponentti (App) ja lifecycle-metodit
* datan haku palvelimelta (axios)
* tyypin poisto, callbackkien kuletus
* knappi
* knappi! (primary & secondary)
* PropTypes

* immutable.js ja paremmat tietorakenteet
* pure


* Extra huomiselle!

* error boundary ?
* tyyppien lisäys (lomakkeiden "vaikeus")
* perf tools
* form


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
  * single person
* containerit pageille
* HOC / render props
* recompose
* modaali-protaali!

## koodinhuolto, debuggaus ja performanssi

* linttaus
* testaus
* selitä että usein ei tartte tehdä mitään.
* mankelointi, source mapit ja debuggaus

## vanhojen softien refaktorointi

* pala kerrallaan mahdollista

## flow

* lussuta tyypityksestä?
* typescript / flow?
* jos kiinnostusta löytyy, käy läpi

## serverirendaus

* webpackataan serveripuolikin
* reititys / thunkkailu
* aloitustila mukaan jsonina
* react osaa "napata" tilanteen lennosta (ReactDOM.hydrate)

## graphql

* demonstroi d-pörssillä pikaisesti

## best practices

* redux containerien rohkea käyttö
* säilytä yksi tila, derivoi subsetit, optimoi reselectillä jos tarttee
