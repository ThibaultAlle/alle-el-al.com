# Publications / PDFs Folder

This folder is for uploading your actual publication PDFs so they can be downloaded directly from the website.

## How It Works

1. Upload your PDF files into this folder.
2. In `data/publications.json`, add a `pdf` field pointing to the file.

Example in JSON:

```json
{
  "id": "pub-2025-1",
  "year": 2025,
  "title": "Structure-guided discovery of selective covalent inhibitors...",
  "authors": "Patel P., Kim J., Chen M., Alle A.",
  "journal": "Nature Chemical Biology",
  ...
  "link": "https://doi.org/10.1038/s41589-024-01732-1",
  "pdf": "/publications/2025-nature-chem-bio-patel.pdf",
  "type": "research",
  "highlight": true
}
```

## Recommended File Naming

Use a consistent, descriptive naming convention:

- `2025-nat-chem-bio-patel-et-al.pdf`
- `2024-jacs-chen-late-stage-functionalization.pdf`
- `2024-cell-chem-bio-kim-protacs.pdf`

This makes files easy to manage and reference.

## Best Practices

- **File size**: Try to keep PDFs under 5–8 MB when possible (optimize if needed).
- **Versioning**: If you have a preprint + final version, you can add both or note it in the JSON.
- **Access**: Files placed here are publicly accessible at `/publications/your-file.pdf`.
- **Legal**: Only upload papers where you have the right to distribute the PDF (check publisher policies or use the accepted manuscript).

## Current Status

The website will automatically show a **"Download PDF"** button on any publication that has a `pdf` field in the JSON.

If the `pdf` field is missing, only the DOI / external link is shown.

---

Maintained by the Alle Lab • UC San Diego
