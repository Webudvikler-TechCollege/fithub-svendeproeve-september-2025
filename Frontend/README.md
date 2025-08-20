# Frontend
Dette er mappen til din frontend løsning. Det er her du skal installere og bygge din løsning på svendeprøven.

Du må gerne slette eller overskrive denne readme fil med din egen.

## Opret React-app med Vite
```
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev # start dev-server (tryk Ctrl+C for at stoppe)
```
*Brug react-ts efter --template hvis du vil køre typescript*
## Første commit (git)
```
git init
git add .
git commit -m "Init: React + Vite"
git branch -M main
```
## Push til GitHub med GitHub CLI
#### Log ind hvis nødvendigt
```
gh auth login
```
## Opret repo på GitHub ud fra den nuværende mappe og push
```
gh repo create my-app --private --source . --remote origin --push
```
## Hurtige varianter

Har du allerede oprettet repo’et på GitHub?
```
git remote add origin https://github.com/<brugernavn>/<repo>.git
git push -u origin main
```
## Vil du lave et nyt commit og pushe ændringer:
```
git add .
git commit -m "Beskriv kort hvad du ændrede"
git push
```
### Tip: gh repo view -w åbner repoet i browseren.