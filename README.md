
# Esempio di un progetto con React Query + react-oidc-context

## Preambolo

Questo esempio contiene una serie di nozioni che mostrano come implementare un applicativo front-end, in grado di interagire con uno o più servizi API esterni, senza l'utilizzo della libreria `Redux Toolkit`.  Il risultato è stato ottenuto usando la libreria [React Query](https://github.com/tanstack/query) di Tanstack. Il progetto emula un portale web, che richiede l'accesso tramite username e password per usarne le funzionalià. Il flusso di login rispetta i protocolli OIDC e OAuth2.0 e fa uso della libreria [react-oidc-context](https://github.com/authts/react-oidc-context) per l'interazione con i provider esterni del flusso di login. 

## Motivazione

Lo scopo è quello di snellire la complessità applicativa, rimuovendo la dipendenza da Redux per i progetti che fanno un uso molto limitato dello stato applicativo condiviso. Al momento la vera complessità dei nostri applicativi risiede nella gestione del data fetching, in Redux questa complessità era gestita tramite il tool integrato RTK Query. Tuttavia, come indicato nella [documentazione ufficiale](https://redux-toolkit.js.org/rtk-query/comparison), questo strumento è stato creato sulla base di librerie già consolidate nell'ambito, tra cui proprio React Query. Non essendo RTK Query il principio cardine per cui Redux esiste, vincolare progetti ad esso può diventare un passaggio non necessario. Ciononostante Redux rimane uno strumento molto valido per continuare a gestire queste complessità.
 
Per un'approfondimento sull'argomento è possibile leggere alcuni articoli di Redux a questo [link](https://redux.js.org/faq/general#when-should-i-learn-redux).

## Installazione

Clonare il progetto dal repository remoto, dopodiché installare le dipendenze necessarie con il comando `npm install`. Prima di avviare l'applicazione assicurarsi che sia presente il file `.env` nella root del progetto e controllare che la variabile d'ambiente `VITE_API_DOMAIN` sia presente e valorizzara con i puntamenti all'api esterna.

> Il progetto è stato creato tramite il build tool **Vite** e non tramite il setup di **Create React App**. Durante la fase di installazione è importante ricordarsi della differenza nella definizione delle variabili d'ambiente; in Vite le variabili d'ambiente seguono la convenzione `VITE_NOMEVARIABILE`, in Create React App il prefisso era differente.

Per avviare il server in locale è possibile usare il comando `npm run dev`, questo avvierà lo script di dev configurato nel file `package.json`.

## Informazioni sull'uso del protocollo OIDC e OAuth 2.0

Il progetto può essere configurato per usare il flusso Resource Owner Password Credentials, ma anche il flusso tramite redirect su un servizio di Single Sign-On (SSO). Per un corretto funzionamento assicurarsi che il file delle variabili d'ambiente contenga le seguenti voci:

```
VITE_OAUTH_REDIRECT_AUTHORITY=  //l'authority del provider esterno di riferimento in caso di redirect con single sign-on
VITE_OAUTH_ROPC_AUTHORITY=      //l'authority del provider esterno di riferimento in caso di flusso Resource Owner Password Credentials
VITE_OAUTH_CLIENT_ID=           //Il client id del provider esterno
VITE_OAUTH_REDIRECT_URI=        //La rotta di redirect di questo applicativo per il flusso con redirect
VITE_OAUTH_IS_ROPC=             //true, se si vuole usare il flusso ROPC, altrimenti false
VITE_OAUTH_SCOPE=               //Lo scope custom in caso in cui sia diverso dal valore di default "oidc"
```

Per comprendere meglio il funzionamento della libreria, fare riferimento alla documentazione di [oidc-client-ts](https://github.com/authts/oidc-client-ts)