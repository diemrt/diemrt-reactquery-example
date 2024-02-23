
# Esempio di un progetto con React Query + useReducer + useContext

## Preambolo

Questo esempio contiene una serie di nozioni che mostrano come implementare un applicativo front-end, in grado di interagire con uno o più servizi API esterni, senza l'utilizzo della libreria `Redux Toolkit`.  Il risultato è stato ottenuto combinando gli hook nativi di React `useReducer` e `useContext`, introdotti nelle ultime versioni, con la libreria [React Query](https://github.com/tanstack/query) di Tanstack.

## Motivazione

Lo scopo è quello di snellire la complessità applicativa, rimuovendo la dipendenza da Redux per i progetti che fanno un uso molto limitato dello stato applicativo condiviso. Al momento la vera complessità dei nostri applicativi risiede nella gestione del data fetching, in Redux questa complessità era gestita tramite il tool integrato RTK Query. Tuttavia, come indicato nella [documentazione ufficiale](https://redux-toolkit.js.org/rtk-query/comparison), questo strumento è stato creato sulla base di librerie già consolidate nell'ambito, tra cui proprio React Query. Non essendo RTK Query il principio cardine per cui Redux esiste, vincolare progetti ad esso può diventare un passaggio non necessario. Ciononostante Redux rimane uno strumento molto valido per continuare a gestire queste complessità.
 
Per un'approfondimento sull'argomento è possibile leggere alcuni articoli di Redux a questo [link](https://redux.js.org/faq/general#when-should-i-learn-redux).

## Installazione

Clonare il progetto dal repository remoto, dopodiché installare le dipendenze necessarie con il comando `npm install`. Prima di avviare l'applicazione assicurarsi che sia presente il file `.env` nella root del progetto.

> Il progetto è stato creato tramite il build tool **Vite** e non tramite il setup di **Create React App**. Durante la fase di installazione è importante ricordarsi della differenza nella definizione delle variabili d'ambiente; in Vite le variabili d'ambiente seguono la convenzione `VITE_NOMEVARIABILE`, in Create React App il prefisso era differente.

Per avviare il server in locale è possibile usare il comando `npm run dev`, questo avvierà lo script di dev configurato nel file `package.json`.