# Introduzione
Questo è un piccolo server che permette di gestire l'autenticazione degli utenti su un generico sito. Permette quindi di registrarsi, effettuare il login, ed ad ognu utente registrato verrà fornito un token da usare per effettuare qualsiasi altro tipo di richiesta.

## Struttura
Il server è stato creato grazie ad [Express.js](https://expressjs.com/it/ "Express.js"), ed è stato utilizzato un database di tipo MongoDB, sfruttando appunto [MongoDB](https://www.npmjs.com/package/mongodb "MongoDB"). Inoltre fa utilizzio di altri pacchetti npm che agevolano lo sviluppo. 

### Dettagli
Le chiamate che si possono effettuare a questo server sono :
- get('/authentication') => per validare il token dell'utente(il token dovrà essere passato nell'header della chiamata come 'x-access-token');
- post('/users') => per registare un nuovo utente ( nel body della chiamata dovranno essere forniti username e password);
- post('/users/:username') => per effettuare il login di un utente (nel body della chiamata dovrà essere passata la password), la chiamata se andata a buon fine fornirà il token all'utente.

## Prova ora
Il server è disponibile a questo [indirizzo](https://autenticazione.now.sh/ "https://autenticazione.now.sh/"). Per metterlo online è stato sfruttato Zeit e quindi i comandi [now](https://zeit.co/docs/now-cli#getting-started "now.cli"), sfruttando quindi i vantaggi che mette a disposizione ad esempio i [secrets](https://zeit.co/docs/v2/serverless-functions/env-and-secrets "secrets").
