# Mimi's Bakery 🐾

A tiny static website (no build step, no database) for Mimi's Bakery.

## What's in here

| File | What it is |
|---|---|
| `index.html` | the website |
| `products.js` | **all products and text** — the only file you normally edit |
| `style.css` | colours and layout (colours are at the top, in `:root`) |
| `script.js` | the interactive bits (filters, pop-ups, quiz, Mimi) |
| `qr.html` | makes printable round QR tags (home page or any product) |
| `images/` | all photos |
| `vendor/qrcode.js` | QR code library (MIT licence), bundled so nothing external is needed |

## Common edits (on github.com, no software needed)

1. Open `products.js` → click the pencil icon ✏️ → change text → **Commit changes**.
2. Wait about a minute and refresh the website.

- **Sold out:** set `available: false` on that product.
- **Add a price:** add a line `price: "90.000đ",` to the product.
- **New product:** upload a photo to `images/` (Add file → Upload files), then copy one
  `{ ... }` block in `products.js` and change the id, name and image.

## QR codes

Open `qr.html` **from the live website address** (e.g. `https://USERNAME.github.io/mimis-bakery/qr.html`),
choose the home page or a product, then download the PNG. Product QR codes open
`…/?p=<product id>`, which shows that product's pop-up straight away.

> Print tags only once the website address is final: a QR code is just the address
> written as a picture, so if the address changes, printed tags stop working.
