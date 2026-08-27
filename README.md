# Watchcraft Collections

Collaborative, publishable collections for [Watchcraft](https://github.com/billbliss/watchcraft).

Each directory under `collections/` is an independently installable Watchcraft
collection. Public manifests and analysis are versioned here; retrieved captions,
downloaded media, caches, credentials, and other private authoring inputs are not.
The published `collections.json` file is an optional discovery directory for the
Watchcraft website, not an authority required by the application.

## Collections

- [`hello-world-managed`](collections/hello-world-managed/) — one tiny original
  video downloaded into Watchcraft-managed storage
- [`hello-world-referenced`](collections/hello-world-referenced/) — the same
  video retained in a user-selected folder
- [`premiere-pro-ai-tools`](collections/premiere-pro-ai-tools/) — four-video
  **Learning Adobe Premiere Pro** YouTube course

## Installable manifest URLs

- Managed local media:
  <https://billbliss.github.io/watchcraft-collections/collections/hello-world-managed/collection.json>
- Referenced local media package:
  <https://billbliss.github.io/watchcraft-collections/downloads/hello-world-referenced.zip>
- Remote media:
  <https://billbliss.github.io/watchcraft-collections/collections/premiere-pro-ai-tools/collection.json>

Install the managed and remote manifests directly from their URLs. For the
referenced example, download and extract the ZIP, then choose the extracted
`hello-world-referenced` folder in Watchcraft.

These examples are not a central collection registry. Any author can publish a
valid Watchcraft manifest and its referenced metadata at any HTTP(S) location.
