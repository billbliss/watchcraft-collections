# Publishing and sharing unlisted collections

An unlisted Watchcraft collection is published on GitHub Pages and installable by
URL, but omitted from Watchcraft's available-collections directory. This is
security by obscurity, not access control: because this repository is public,
anyone browsing its files or history can discover the collection metadata.

Published collection packages contain the manifest and analysis. They do not
contain videos, transcripts, credentials, or absolute paths to an author's media.
People installing a referenced-local collection must already possess its videos
and select their local media folder in Watchcraft.

## URL convention

Every collection URL is derived from its folder name:

```text
https://billbliss.github.io/watchcraft-collections/collections/<slug>/collection.json
```

For a folder named `collections/my-course`, the installation URL is:

```text
https://billbliss.github.io/watchcraft-collections/collections/my-course/collection.json
```

The folders under `collections/` are therefore the source of truth for remembering
URLs. Watchcraft also displays the source URL for an installed collection in
Settings.

Use a stable, lowercase, hyphenated slug. Changing the slug later changes the URL
and makes Watchcraft treat it as a different source.

## Publish a local-video collection

First, author or update the collection from the folder containing its videos:

```bash
MEDIA_ROOT='/path/to/folder/containing/videos'

cd /Users/billbliss/dev/watchcraft/authoring

.venv/bin/python video_catalog.py process \
  --root "$MEDIA_ROOT" \
  --all
```

The private transcripts and portable collection output are written beneath
`$MEDIA_ROOT/Video Catalog/`. Choose a slug and copy only the manifest and analysis
into this repository:

```bash
SLUG='my-course'
PUBLISH_ROOT="/Users/billbliss/dev/watchcraft-collections/collections/$SLUG"

mkdir -p "$PUBLISH_ROOT/analysis"

rsync -a --delete \
  "$MEDIA_ROOT/Video Catalog/analysis/" \
  "$PUBLISH_ROOT/analysis/"

cp \
  "$MEDIA_ROOT/Video Catalog/collection.json" \
  "$PUBLISH_ROOT/collection.json"
```

`rsync --delete` removes obsolete published analysis files after videos or source
folders are renamed. Check `MEDIA_ROOT`, `SLUG`, and `PUBLISH_ROOT` before running
it.

## Publish a YouTube collection

YouTube collections can be authored directly in this repository. To import a
public or unlisted playlist without downloading its videos:

```bash
SLUG='my-youtube-course'
WORKSPACE="/Users/billbliss/dev/watchcraft-collections/collections/$SLUG"

cd /Users/billbliss/dev/watchcraft/authoring

.venv/bin/python watchcraft_author.py youtube add \
  --workspace "$WORKSPACE" \
  --collection-title "My YouTube Course" \
  --playlist 'YOUTUBE_PLAYLIST_URL'

.venv/bin/python watchcraft_author.py process \
  --workspace "$WORKSPACE"
```

The playlist URL may be a playlist page or a watch URL containing both `v=` and
`list=` parameters. Retrieved captions remain ignored private authoring inputs;
the generated manifest and analysis are publishable.

## Keep it unlisted and publish it

Do not add the collection to `site/collections.json`, and do not add it to the
public collection list in `README.md`. Commit only its folder:

```bash
cd /Users/billbliss/dev/watchcraft-collections

git status --short
git add "collections/$SLUG"
git commit -m "Publish unlisted $SLUG collection"
git push
```

A push to `main` triggers the GitHub Pages workflow. When it finishes, share the
URL formed from the convention above. The recipient can paste it into Watchcraft's
**Add a collection** field or open a channel-specific deep link. A
referenced-local collection then asks them to locate their local video folder.

Deep links can install any collection manifest reachable over HTTPS, whether or
not it appears in `site/collections.json`. They cannot install an unpublished
manifest that has no accessible URL. Stable Watchcraft builds use
`watchcraft://`; beta builds use `watchcraft-beta://` so both applications can be
installed on the same computer.

## Install the unlisted Marc Adamus collection

The published manifest is:

```text
https://billbliss.github.io/watchcraft-collections/collections/marc-adamus-videos/collection.json
```

Open it with [Watchcraft
Beta](watchcraft-beta://install?url=https%3A%2F%2Fbillbliss.github.io%2Fwatchcraft-collections%2Fcollections%2Fmarc-adamus-videos%2Fcollection.json),
or copy the deep link:

```text
watchcraft-beta://install?url=https%3A%2F%2Fbillbliss.github.io%2Fwatchcraft-collections%2Fcollections%2Fmarc-adamus-videos%2Fcollection.json
```

Open it with [stable
Watchcraft](watchcraft://install?url=https%3A%2F%2Fbillbliss.github.io%2Fwatchcraft-collections%2Fcollections%2Fmarc-adamus-videos%2Fcollection.json),
or copy the deep link:

```text
watchcraft://install?url=https%3A%2F%2Fbillbliss.github.io%2Fwatchcraft-collections%2Fcollections%2Fmarc-adamus-videos%2Fcollection.json
```

The browser may ask for permission to open Watchcraft. After confirming the
collection, select the folder containing the locally owned Marc Adamus videos.

## Update an existing collection

Run the applicable authoring command again, copy local-video output again when
needed, and commit the changed collection folder. Authoring preserves the revision
when portable content is unchanged and increments it when the manifest changes.
The installation URL stays the same; existing users can use **Update** in
Watchcraft Settings.

Before committing, confirm that no private material was staged:

```bash
git status --short
git diff --cached --stat
```

Transcripts are ignored by this repository's `.gitignore`, but never force-add
private transcripts, downloaded media, credentials, or caches. Remember that any
committed metadata remains visible in Git history even if it is removed later.
