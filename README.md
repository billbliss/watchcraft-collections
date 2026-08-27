# Watchcraft Collections

Collaborative, publishable collections for [Watchcraft](https://github.com/billbliss/watchcraft).

Each directory under `collections/` is an independently installable Watchcraft
collection. Public manifests and analysis are versioned here; retrieved captions,
downloaded media, caches, credentials, and other private authoring inputs are not.

## Collections

- [`hello-world-local`](collections/hello-world-local/) — one tiny original
  local video for checking folder installation, playback, and chapter seeking
- [`premiere-pro-ai-tools`](collections/premiere-pro-ai-tools/) — four-video
  **Learning Adobe Premiere Pro** YouTube course

## Installable manifest URLs

- Local-media example:
  <https://billbliss.github.io/watchcraft-collections/collections/hello-world-local/collection.json>
- YouTube example:
  <https://billbliss.github.io/watchcraft-collections/collections/premiere-pro-ai-tools/collection.json>

The YouTube collection can be installed directly from its URL. For the local
example, download or clone this repository and choose the
`collections/hello-world-local` folder in Watchcraft so the app can bind the
manifest to its local `media/` directory.

These examples are not a central collection registry. Any author can publish a
valid Watchcraft manifest and its referenced metadata at any HTTP(S) location.
