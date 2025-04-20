# 🚀 Défi Cyberun — JSONForms Lecture Seule

Ce projet répond au challenge proposé par **Cyberun** dans le cadre d’une candidature à un stage de développeur web.

L’objectif était de créer une interface en **React + TypeScript** basée sur **JSONForms** (avec **vanilla-renderers uniquement**) pour afficher des données issues d’un schéma JSON, **en lecture seule**, avec une mise en forme personnalisée conforme aux spécifications.

---

## 🎯 Objectifs techniques

- ✅ Utilisation exclusive des **vanilla-renderers** de JSONForms (pas de `react-renderers`)
- ✅ Interface 100% **lecture seule** (aucun champ modifiable, aucun bouton)
- ✅ Mise en forme visuelle adaptée :
  - 📌 Champs texte simple → 2 colonnes (question / réponse)
  - 📄 Champs texte multiligne → en bloc pleine largeur
  - 🏷️ Enum simple/multiple → badges arrondis stylés
  - 🌍 Liste de pays + pourcentages → affichage clair et lisible

---

## ⚙️ Lancer le projet en local

### 1. Cloner le repo

```bash
git clone https://github.com/Benjam1Lct/CyberunExercice.git
cd CyberunExercice
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

> 📍 Par défaut, le projet s’ouvre sur :  
> [http://localhost:5173](http://localhost:5173)

---

## 🌐 Démo en ligne

Accès direct à la version déployée :  
🔗 [https://cyberun.benjamin-lecomte.com](https://cyberun.benjamin-lecomte.com)

---

## 🗂️ Organisation du code

```
src/
├── json/           # Schéma, UI, données
│   ├── schema.json
│   ├── uischema.json
│   └── data.json
├── renderers/      # Composants React customisés (lecture seule)
│   ├── ReadOnlyText.tsx
│   ├── ReadOnlyMultilineText.tsx
│   ├── ReadOnlyEnumArray.tsx
│   └── ReadOnlyCountryPercent.tsx
├── styles/         # CSS séparé par type de champ
│   ├── textFields.css
│   ├── enumFields.css
│   └── table.css
```

---

## 🛠️ Stack technique

- ⚛️ React + TypeScript
- 🧩 JSONForms avec vanilla-renderers
- ⚡ Vite (serveur rapide & moderne)
- 🎨 CSS modulaire (par type de composant)

---

## 👨‍💻 Auteur

**Benjamin Lecomte**  
📍 [https://www.benjamin-lecomte.com](https://www.benjamin-lecomte.com)

---

## ✅ Statut

✔️ Projet terminé et conforme à l’ensemble des consignes fournies par Cyberun.
