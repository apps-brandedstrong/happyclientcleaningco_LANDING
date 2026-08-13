# Happy Client Cleaning — Landing Page (Ads)

Landing de campaña enfocada en **carpet cleaning** para Happy Client Cleaning
Services LLC (Fort Collins, CO). Colores, tipografías, copy e imágenes tomados
de [happyclientcleaningco.com](https://www.happyclientcleaningco.com/).

## Stack

Vite + React 18 + TypeScript + TailwindCSS + framer-motion.
Backend del formulario: función serverless de Vercel (`/api/send-email`) con
[Resend](https://resend.com).

## Correr en local

```bash
npm install
npm run dev          # solo el front (el formulario dará error sin backend)
```

Para probar el formulario end-to-end hace falta el runtime de Vercel:

```bash
npm i -g vercel
vercel dev           # levanta front + /api/send-email juntos
```

Antes de eso, copiar `.env.example` a `.env.local` y completar `RESEND_API_KEY`.

## Formularios → 3 emails

Cada lead (del form del hero y del footer) se manda por Resend a:

1. `happyclientcleaning@gmail.com` — cliente
2. `info@happyclientcleaningco.com` — corporativo
3. `dalila@latinbranding.com` — Latin Branding

Se pueden cambiar sin tocar código con la env var `LEAD_RECIPIENTS`
(separados por coma). El default está en [api/send-email.ts](api/send-email.ts).

El formulario incluye un honeypot anti-spam (campo `company` oculto) y el
contenido se escapa antes de armar el HTML del email.

## Deploy en Vercel

1. `vercel link` (o importar el repo desde el dashboard).
2. Settings → Environment Variables, cargar:
   - `RESEND_API_KEY`
   - `RESEND_FROM`
   - `LEAD_RECIPIENTS` (opcional)
3. `vercel --prod`

### ⚠️ Verificar el dominio en Resend

Sin dominio verificado, Resend solo deja usar `onboarding@resend.dev` y **solo
entrega al email dueño de la cuenta de Resend** — los otros dos destinatarios
no reciben nada.

Para producción: Resend → Domains → Add Domain → cargar los registros DNS de
`happyclientcleaningco.com` → luego poner
`RESEND_FROM="Happy Client Cleaning <leads@happyclientcleaningco.com>"`.

## Pendientes antes de lanzar los anuncios

- [ ] **Reseñas reales.** [src/data/reviews.ts](src/data/reviews.ts) tiene
      placeholders. Reemplazar por reseñas reales del Google Business Profile
      (nombre, fecha y texto tal cual). Publicar testimonios inventados como
      reales es publicidad engañosa y puede costar la cuenta de Google Ads.
- [ ] **URL de Google.** Actualizar `GOOGLE_REVIEWS_URL` en el mismo archivo con
      el link real al perfil.
- [ ] **Mapa.** `mapsEmbedUrl` en [src/data/siteConfig.ts](src/data/siteConfig.ts)
      apunta a Fort Collins genérico. Si el negocio tiene ficha de Google Maps,
      reemplazar por su embed.
- [ ] **Widget de actividad.** [src/data/socialProof.ts](src/data/socialProof.ts)
      muestra actividad de ejemplo, no interacciones reales. Decidir si se deja,
      se alimenta desde el CRM, o se saca de
      [FloatingWidgets.tsx](src/components/layout/FloatingWidgets.tsx).
- [ ] **Número de tracking.** Si la campaña usa un número distinto para medir
      llamadas, cambiar `phone` / `phoneHref` en `siteConfig.ts`.
- [ ] **Letra chica de la promo.** Confirmar con el cliente qué cuenta como
      "room" y qué queda fuera del $160 (escaleras, pasillos, suciedad pesada).

## Estructura

```
api/send-email.ts          función serverless (Resend → 3 emails)
public/gallery/            imágenes reales del sitio, comprimidas
src/data/                  config, servicios, reseñas, áreas, social proof
src/sections/              Hero · Promo · About · WhyUs · Services ·
                           Gallery · Reviews · Maps · Footer
src/components/widgets/    social proof · promo · contacto rápido ·
                           WhatsApp · back to top
```

## Cambiar la promo o los datos

Casi todo sale de [src/data/siteConfig.ts](src/data/siteConfig.ts): teléfono,
email, ciudades, horarios, WhatsApp y el bloque `promo` ($160 / first 3 rooms).
