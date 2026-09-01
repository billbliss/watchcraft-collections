# Watchcraft Collections

[![License: MIT](https://img.shields.io/badge/License-MIT-72cf91.svg)](LICENSE)

Collaborative, publishable collections for [Watchcraft](https://github.com/billbliss/watchcraft).

Each directory under `collections/` is an independently installable Watchcraft
collection. Public manifests and analysis are versioned here; retrieved captions,
downloaded media, caches, credentials, and other private authoring inputs are not.
Published collection manifests do not reference private transcripts.
The published `collections.json` file is an optional discovery directory for the
Watchcraft website, not an authority required by the application.
Directory entries with `"archived": true` remain directly installable but are
omitted from the website's available-collections list.
The optional `category` field is editorial directory metadata used by the
website for browsing and card labels; it is not part of an installable
collection manifest.

Authoring workspaces under `collections/` are added to the directory after a
successful build by default. The directory's `base_url` supplies their public
manifest URLs. Use the authoring command's `--unlisted` option to opt out; later
builds preserve that choice.

To publish an unlisted collection, publish its folder under `collections/` but
omit it from `site/collections.json`. Anyone with the manifest URL can install
it, while the Watchcraft website does not advertise it. URL-installed
collections that reference user-owned local videos prompt each device to locate
its own media folder. See [Publishing and sharing unlisted
collections](UNLISTED_COLLECTIONS.md) for the complete workflow.

## Collections

- [`hello-world-managed`](collections/hello-world-managed/) — archived example
  with one tiny original video downloaded into Watchcraft-managed storage
- [`hello-world-referenced`](collections/hello-world-referenced/) — archived
  example with the same video retained in a user-selected folder
- [`premiere-pro-ai-tools`](collections/premiere-pro-ai-tools/) — four-video
  **Learning Adobe Premiere Pro** YouTube course
- [`davinci-resolve`](collections/davinci-resolve/) — five-video **DaVinci
  Resolve** YouTube collection
- [`ptgui-tutorial`](collections/ptgui-tutorial/) — nine-video **Official PTGUI
  Tutorial** YouTube collection
- [`essence-of-linear-algebra`](collections/essence-of-linear-algebra/) —
  sixteen-video **Essence of Linear Algebra** course
- [`justinguitar-grade-1-beginner-guitar-course`](collections/justinguitar-grade-1-beginner-guitar-course/)
  — seventy-nine-video **JustinGuitar Grade 1** beginner course
- [`plumbing-repairs-and-upgrades`](collections/plumbing-repairs-and-upgrades/)
  — 147-video household plumbing collection
- [`techniquely-with-lan-lam-america-s-test-kitchen`](collections/techniquely-with-lan-lam-america-s-test-kitchen/)
  — fifty-one-video **Techniquely with Lan Lam** cooking collection

## Installable manifest URLs

- Managed local media:
  <https://collections.watchcraft.stream/collections/hello-world-managed/collection.json>
- Referenced local media package:
  <https://collections.watchcraft.stream/downloads/hello-world-referenced.zip>
- Remote media:
  <https://collections.watchcraft.stream/collections/premiere-pro-ai-tools/collection.json>
- Remote DaVinci Resolve media:
  <https://collections.watchcraft.stream/collections/davinci-resolve/collection.json>
- Remote PTGUI tutorial media:
  <https://collections.watchcraft.stream/collections/ptgui-tutorial/collection.json>

Install the managed and remote manifests directly from their URLs. For the
referenced example, download and extract the ZIP, then choose the extracted
`hello-world-referenced` folder in Watchcraft.

These examples are not a central collection registry. Any author can publish a
valid Watchcraft manifest and its referenced metadata at any HTTP(S) location.

## License

Original content in this repository is available under the [MIT License](LICENSE).
Referenced third-party videos and media remain subject to their owners' terms
and are not relicensed by this repository.
