# ScriptGrade AI Tutor

Act as a Principal UI/UX Architect and Lead Frontend Engineer. Generate a single, standalone HTML file containing complete, production-ready code (including HTML5, embedded Tailwind CSS via CDN, FontAwesome/Lucide icons via CDN, ApexCharts.js via CDN, and vanilla JavaScript) for the primary "ScriptGrade" Teacher Dashboard. 

This single file must visually demonstrate the solution to all 8 core vulnerabilities specified in the ScriptGrade technical architecture (Garbage Text/Keyword Stuffing, Negation Detection, Phrasing/Synonym Variation, Spelling Typos, Procedural Sequence Mismatch, Non-Text Diagram Evaluation via Vision AI, Length Bias via Information Density, and Automated Rubric Generation) without any placeholder content or missing logic.

---

### TECH STACK & CDN IMPORTS (Embedded in <head>)
1. Tailwind CSS CDN (`<script src="https://cdn.tailwindcss.com"></script>`)
2. Lucide Icons CDN (`<script src="https://unpkg.com/lucide@latest"></script>`)
3. ApexCharts CDN (`<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>`)
4. Inter Font Family from Google Fonts

---

### DESIGN SYSTEM & VISUAL STYLE
- Theme: Clean, modern, academic B2B SaaS layout.
- Color Palette:
  - Primary Accent: Slate Blue / Indigo (`#4F46E5` / `bg-indigo-600`)
  - Background: Neutral Crisp Gray (`bg-slate-50`)
  - Cards & Panels: Pure White (`bg-white`) with subtle borders (`border-slate-200`) and soft shadows (`shadow-sm`).
  - Status Indicators: Emerald Green (Matches/Correct), Amber Yellow (Partial Mismatch/Sequence Issue), Rose Red (Negation/Contradiction/Garbage Text), Cyan/Blue (Vision AI Verified).

---

### UI LAYOUT & STRUCTURE (Single Page View)

#### 1. Top Navigation Bar (Header)
- Brand Logo: "ScriptGrade" with a glowing AI badge ("Alibaba Cloud Qwen-Powered").
- Active Context Bar: Current Exam: "Biology 101 - Final Assessment (Term 1)".
- Quick Stats Bar: "50 Papers Uploaded" | "48 Auto-Evaluated" | "2 Flagged for Review" | "Time Saved: 3.5 Hours".
- Profile & Actions: Teacher Avatar, "Export Results CSV/PDF" button, and "System Health: All APIs Online".

#### 2. Main Workspace (3-Column / Split Layout)

##### LEFT PANEL: Class Overview & Exam Setup (Width: 25%)
- Card 1: Exam Setup & One-Click AI Rubric (Addresses Vulnerability #8 - Teacher Setup Fatigue).
  - Button: "Upload Exam Paper & Reference Answer (PDF/PNG)".
  - Auto-Generated Rubric Preview: Shows extracted "Magic Concepts" with interactive toggles:
    - [Toggle ON] "Ignore Minor Spelling Mistakes (Levenshtein Threshold 85%)" (Vulnerability #4).
    - [Toggle ON] "Strict Procedural Order Matching" (Vulnerability #5).
    - [Toggle ON] "Information Density Scoring (Anti-Fluff Normalization)" (Vulnerability #7).
- Card 2: Student Papers List (Scanned Batch Upload).
  - List of 50 students with status badges:
    - Student A (Roll #01): Score 100% [Vision Verified Badge]
    - Student B (Roll #02): Score 100% [Concise Answer Badge]
    - Student C (Roll #03): Score 0% [Garbage Text Flagged]
    - Student D (Roll #04): Score 0% [Negation Contradiction Flagged]
    - Student E (Roll #05): Score 40% [Sequence Mismatch Flagged]

##### CENTER PANEL: Interactive Paper Evaluation Workspace (Width: 45%)
- Header: Student Selection Bar (e.g., "Evaluating Roll #03 - Garbage Text Case" OR dropdown to switch between edge-case pre-loaded students).
- Split View Container:
  - Left Sub-Pane: Digitized/Scanned Student Submission Sheet (Displays rendered text, math formulas, or handwritten paper image/diagram).
  - Right Sub-Pane: AI Diagnostic Evaluation Breakdown.
- AI Diagnostic Details (Interactive Display for Selected Student):
  - Overall Score Widget (e.g., "0 / 10 Marks").
  - Breakdown of Vulnerability Detection Engines:
    1. Semantic Similarity Score vs. Information Density Ratio.
    2. Contradiction & Negation Engine Status.
    3. Structural Diagram & OCR Part Mapping.
    4. Chronological Flow Graph.

##### RIGHT PANEL: Dynamic Edge-Case Inspector & Overrides (Width: 30%)
A dedicated panel showing how ScriptGrade solves each specific edge case. Include a TABBED SYSTEM or SELECTOR to switch between 8 pre-configured student examples:

- TAB 1: Garbage Text / Keyword Stuffing (Vulnerability #1)
  - Student Input: "Yesterday I was walking in the garden and saw Sunlight. I like green leaves because they have Chlorophyll. My favourite sweet fruit contains Glucose."
  - AI Analysis Box: "Contextual Relevance Score: 12% (FAILED). High magic word count detected, but Sentence Embedding & Qwen LLM detected zero logical coherence with the question 'Explain Photosynthesis'. Score: 0/10."
  - Badge: [REJECTED: Garbage Text]

- TAB 2: Negation Trick (Vulnerability #2)
  - Student Input: "Photosynthesis is a process that does NOT need Sunlight or Chlorophyll to produce Glucose."
  - AI Analysis Box: "Dependency Parsing Alert: Negative modifier 'NOT' linked to keywords 'Sunlight' and 'Chlorophyll'. Semantic Entailment detected direct contradiction to reference answer. Score: 0/10."
  - Badge: [REJECTED: Contradiction Detected]

- TAB 3: Synonyms & Phrasing (Vulnerability #3)
  - Student Input: "Plants capture solar energy using green pigments in their leaves to make natural sugars."
  - AI Analysis Box: "Cosine Similarity: 94%. Synonym Mapping: Solar Energy -> Sunlight, Green Pigments -> Chlorophyll, Natural Sugars -> Glucose. Score: 10/10."
  - Badge: [ACCEPTED: Semantic Match]

- TAB 4: Spelling Mistakes & Typos (Vulnerability #4)
  - Student Input: "In fotosinthesis, plants use clorophil to make glucoss."
  - AI Analysis Box: "Levenshtein Distance Analysis: Auto-corrected 'fotosinthesis' -> 'Photosynthesis', 'clorophil' -> 'Chlorophyll', 'glucoss' -> 'Glucose'. 'Ignore Spelling' toggle active. Score: 10/10."
  - Badge: [ACCEPTED: Fuzzy Match]

- TAB 5: Sequence Mismatch (Vulnerability #5)
  - Student Input: "First Serve Hot in a cup, then Boil Water in a pan, and finally Add Milk."
  - AI Analysis Box: "Directed Acyclic Graph (DAG) Violation: Step 3 (Serve) executed before Step 1 (Boil). Procedural Flow Broken. Penalty Applied. Score: 2/10."
  - Badge: [PARTIAL: Order Error]

- TAB 6: Non-Text Content / Diagrams (Vulnerability #6)
  - Display Mock Diagram Box: Labeled drawing of Heart showing Left Atrium, Aorta, and arrows for Pumping.
  - AI Analysis Box: "Qwen-VL Multimodal Processing: Detected 3/3 required visual components (Left Atrium [98% confidence], Aorta [95% confidence], Directional Flow Arrows [91% confidence]). Text transcript empty, but visual diagram 100% accurate. Score: 10/10."
  - Badge: [ACCEPTED: Qwen-VL Verified]

- TAB 7: Length Bias / Information Density (Vulnerability #7)
  - Comparison View: 
    - Concise Student A: "Gravity is a fundamental force pulling objects toward Earth's center." (Information Density: 95%, Score 10/10)
    - Lengthy Student B: "Gravity is very interesting... Newton saw an apple... keeps us on ground..." (Information Density: 25%, Filler Detected: 75%, Score 10/10 without bonus length bias).
  - AI Analysis Box: "Normalized length scoring applied. Concise 1-liner awarded full points based on core concept coverage."
  - Badge: [ACCEPTED: High Density]

- TAB 8: Automated Rubric Setup (Vulnerability #8)
  - UI Card: "One-Click AI Rubric Extraction Engine".
  - Interactive Display: Uploaded Sample Answer -> Auto-extracted Magic Keywords, Weighted Scores, Synonyms, and Rules within 3 seconds. Zero manual entry required by teacher.

---

### INTERACTION & JAVASCRIPT LOGIC
1. Tab Switching: Clicking any of the 8 Edge Case tabs in the right panel dynamically updates the Center Panel's paper preview, scores, highlighted text colors, and diagnostic reason box.
2. Toggle Interactivity: Switching "Ignore Spelling Mistakes" ON/OFF immediately recalculates the visible score in Tab 4 from 10/10 to 4/10 in real-time.
3. Teacher Manual Override: Include an "Override Score" input box and "Confirm Override" button that allows the teacher to manually set a score and add a note, updating the class average in real-time.
4. ApexCharts Analytics Widget: A small inline bar chart showing class score distribution (e.g., 80-100%, 60-79%, Flagged).

---

### CODE QUALITY REQUIREMENTS
- Write 100% functional, fully styled HTML code in a single file. Do not use external CSS files or custom JS modules—use Tailwind classes and vanilla embedded JavaScript inside `<script>` tags.
- Ensure all Lucide icons render properly using `lucide.createIcons()`.
- Use clean semantic HTML5 elements (`<header>`, `<main>`, `<aside>`, `<section>`).
- Ensure layout is fully responsive and fills the browser viewport cleanly without broken text or overlapping elements.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c0164ec9-9890-4f27-9256-7dbbe4dcfda5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
