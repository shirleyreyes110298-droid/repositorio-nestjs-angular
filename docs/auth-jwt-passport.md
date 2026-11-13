# Clase 7 - Login Auth JWT con Passport

## ¿Qué es JWT?
JWT (JSON Web Token) es un token que usa el backend para saber que un usuario ya inició sesión, sin tener que guardar la sesión en el servidor.

Está formado por 3 partes: header.payload.signature

## ¿Qué es Passport?
Passport es la librería que usa NestJS para hacer la autenticación.
Con Passport + JWT protegemos las rutas.

## Instalación - Página 15

```bash
npm i --save @nestjs/jwt passport-jwt bcrypt
npm i --save-dev @types/passport-jwt
npm i class-validator class-transformer