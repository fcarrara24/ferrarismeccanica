# Documentazione Deploy

Il sito viene rilasciato automaticamente sul branch `deploy` utilizzando il pacchetto `gh-pages`.

## Procedura di Deploy
Per effettuare il deploy del sito, è sufficiente eseguire il seguente comando dalla root del progetto:

```bash
npm run deploy
```

### Cosa fa questo comando:
1.  **`npm run build`**: Compila il progetto utilizzando Vite, genera i file statici nella cartella `dist/` ed esegue il pre-rendering delle pagine.
2.  **`gh-pages -d dist --dotfiles -b deploy`**: Carica il contenuto della cartella `dist/` sul branch `deploy` del repository remoto.

## Requisiti
- Assicurarsi di aver configurato correttamente le chiavi SSH per l'accesso al repository GitHub, in modo che `gh-pages` possa eseguire il push correttamente.
- Avere i permessi di scrittura sul repository.
