# Lennuplaneerija

Rakenduse käivitamiseks on vajalikud järgmised tarkvarad:
- Java 21
- Maven 3.9.9
- PostgreSQL (kasutaja nimi ja parool)
- DBeaver (valikuline, kuid sellega on lihtne parooli ja kasutajanime seadistada ja andmebaasi jälgida)
- Node.js
- npm (tuleb Node.js-ga kaasa)

Käivitamiseks:
1. Loo andmebaas:<br>
   Käivita PostgreSQL ja kirjuta järgmised read:<br>
   `CREATE DATABASE lennuplaneerija;`<br>
   `CREATE USER kasutajanimi WITH ENCRYPTED PASSWORD 'sinu parool';`<br>
   `GRANT ALL PRIVILEGES ON DATABASE lennuplaneerija TO kasutajanimi;`<br>
   või tee neid samme graafiliselt DBeaveris.
2. Käivita backend:
   Liigu "back-end" -> recource -> application.properties ning muuda järgmistel ridadel oma kasutajanimi ja parool<br>
   `spring.datasource.username=kasutajanimi`<br>
   `spring.datasource.password=parool`<br>
3. Käivita front-end:
   Liigu kausta front -> lennuplaneerija-frontend ning kirjuta seal vajalike sõltuvuste alla laadimiseks käsureale<br>
   `npm install`<br>
   Seejärel käivita front-end käsuga <br>
   `npm start`

Nüüd liigu veebibrauseris lehele `8081`

Lendudes määratud kohad on juhuslikud ning back-endi taaskäivitudes info talletunud ei ole. Seda saab vajadusel muuta application.properties failis muutes rida
`spring.jpa.hibernate.ddl-auto=create-drop` create-drop -> update. Kui mõni teine protsess juba kasutab porte 8080 või 8081, siis tuleks see taskmanageris tappa.
