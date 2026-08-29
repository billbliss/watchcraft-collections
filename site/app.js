const DIRECTORY_URL = "./directory.json";

function modeLabel(mode) {
  return {
    "managed-local": "Managed local media",
    "referenced-local": "Referenced local media",
    remote: "Remote media",
  }[mode] || mode;
}

function collectionCard(collection) {
  const card = document.createElement("section");
  card.className = "collection";

  const mode = document.createElement("div");
  mode.className = "mode";
  mode.textContent = (collection.media_modes || []).map(modeLabel).join(" · ");

  const title = document.createElement("h2");
  title.textContent = collection.title;

  const description = document.createElement("p");
  description.textContent = collection.description;

  const actions = document.createElement("p");
  actions.className = "actions";

  if (collection.manifest_url) {
    const install = document.createElement("a");
    install.href = `watchcraft://install?url=${encodeURIComponent(collection.manifest_url)}`;
    install.textContent = "Open in Watchcraft";

    const manifest = document.createElement("a");
    manifest.href = collection.manifest_url;
    manifest.textContent = "View manifest";
    actions.append(install, manifest);
  } else if (collection.package_url) {
    const download = document.createElement("a");
    download.href = collection.package_url;
    download.textContent = "Download collection";
    actions.append(download);
  }

  card.append(mode, title, description, actions);
  return card;
}

async function loadCollections() {
  const grid = document.querySelector("#collection-grid");
  try {
    const response = await fetch(DIRECTORY_URL);
    if (!response.ok) throw new Error(`Collection directory returned ${response.status}`);
    const directory = await response.json();
    const collections = Array.isArray(directory.collections)
      ? directory.collections.filter((collection) => collection.archived !== true)
      : [];
    grid.replaceChildren(...collections.map(collectionCard));
    if (!collections.length) {
      grid.textContent = "No public collections are available yet.";
    }
  } catch {
    grid.textContent = "The collection directory is temporarily unavailable.";
  }
}

void loadCollections();
