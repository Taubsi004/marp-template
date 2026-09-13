---
name: steckbrief
description: "Use when creating or editing a person profile/Steckbrief slide for this Marp template, especially with placeholder image, profile fields, or a full-page person presentation."
user-invocable: true
---

# Steckbrief Skill

Use the template style from `slides/demo-features.md`.

- Start the slide with `<!-- _class: profile-grid -->`.
- Use a two-column Markdown table: left cell for the placeholder image, right cell for the profile fields.
- Keep the profile compact: Name, Rolle, Fokus, Kontakt are usually enough.
- Avoid raw HTML blocks.
- If needed, keep the slide full-height by letting the image fill the left cell and the text sit aligned at the top/right.

Example:

```markdown
<!-- _class: profile-grid -->

# Personenprofil

| ![Platzhalterbild](https://placehold.co/320x240/00844D/ffffff?text=Person) | **Name:** Max Mustermann<br>**Rolle:** Projektmitarbeiter<br>**Fokus:** Frontend & Daten<br>**Kontakt:** max@beispiel.de |
| :--- | :--- |
```