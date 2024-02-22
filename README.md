
# Esempio di un progetto con React Query + useReducer + useContext

## Preambolo

Questa guida contiene una serie di nozioni che mostrano come implementare un applicativo front-end, in grado di interagire con uno o più servizi API esterni, senza l'utilizzo della libreria `Redux Toolkit`.  Il risultato è stato ottenuto combinando gli hook nativi di React `useReducer` e `useContext`, introdotti nelle ultime versioni, con la libreria [React Query](https://github.com/tanstack/query) di Tanstack.

La guida non può essere usata come un tutorial, perché non contiene una serie di passaggi da seguire punto per punto.

## Motivazione

Lo scopo è quello di snellire la complessità applicativa, rimuovendo la dipendenza da Redux per i progetti che fanno un uso molto limitato dello stato applicativo condiviso. Al momento la vera complessità dei nostri applicativi risiede nella gestione del data fetching, in Redux questa complessità era gestita tramite il tool integrato RTK Query. Tuttavia, come indicato nella [documentazione ufficiale](https://redux-toolkit.js.org/rtk-query/comparison), questo strumento è stato creato sulla base di librerie già consolidate nell'ambito, tra cui proprio React Query. Non essendo RTK Query il principio cardine per cui Redux esiste, vincolare progetti ad esso può diventare un passaggio non necessario. Ciononostante Redux rimane uno strumento molto valido per continuare a gestire queste complessità.
 
Per un'approfondimento sull'argomento è possibile leggere alcuni articoli di Redux a questo [link](https://redux.js.org/faq/general#when-should-i-learn-redux).

## Installazione

Clonare il progetto dal repository remoto, dopodiché installare le dipendenze necessarie con il comando `npm install`. Prima di avviare l'applicazione assicurarsi che sia presente il file `.env` nella root del progetto.

> Il progetto è stato creato tramite il build tool **Vite** e non tramite il setup di **Create React App**. Durante la fase di installazione è importante ricordarsi della differenza nella definizione delle variabili d'ambiente; in Vite le variabili d'ambiente seguono la convenzione `VITE_NOMEVARIABILE`, in Create React App il prefisso era differente.

Per avviare il server in locale è possibile usare il comando `npm run dev`, questo avvierà lo script di dev configurato nel file `package.json`.

## Librerie usate

Questa guida non vedrà nel dettaglio l'uso di ciascuna libreria usata nel progetto, molte delle librerie servono solo a rendere il progetto testabile a livello di front-end, ma non costituiscono uno standard di utilizzo. Sono riportate qua di seguito queste librerie supplementari e il link alla relativa documentazione:

| Nome                    | Documentazione                                             |
| ----------------------- | ---------------------------------------------------------- |
| @hookform/error-message | https://react-hook-form.com/docs/useformstate/errormessage |
| @preline/tooltip        | https://preline.co/plugins/html/tooltip.html               |
| axios                   | https://axios-http.com/docs/intro                          |
| preline                 | https://preline.co/docs/index.html                         |
| react-hook-form         | https://react-hook-form.com/get-started                    |
| react-router-dom        | https://reactrouter.com/en/main/start/overview             |

> Le `devDependencies` non sono presenti nella lista qua sopra, se non vengono nominate  nel corso della guida il loro scopo è stato solo quello di migliorare l'esperienza durante lo sviluppo del codice. Non costituiscono anche loro uno standard.

## Flusso di implementazione