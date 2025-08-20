# Fithub
## Svendeprøve September 2025

# Backend

* **Formål:** Pre-installeret REST API.
* **Stack:** Node.js, Express, TypeScript, Prisma.
* **Database:** MySQL (kræver `DATABASE_URL` i `.env`).
* **Struktur:** `src/` (routes, controllers, middleware), `prisma/` (schema & migrations).
* **Kom i gang:**

  1. `npm install`
  2. Opret `.env` med `DATABASE_URL=...`
  3. (Første gang) `npx prisma migrate dev`
  4. `npm run dev` for at starte API’et

# Frontend

* **Formål:** Her bygger eleverne hele frontend-projektet.
* **Stack:** React + Vite.
* **API-adresse (valgfrit):** Sæt `VITE_API_URL` i `.env` hvis UI’et skal pege på en anden backend-URL.
* **Kom i gang:**

  1. `npm install`
  2. `npm run dev` for at starte Vite-udviklerserveren

> Tip: Kør backend først, så frontend kan hente data fra API’et.
