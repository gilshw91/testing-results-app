# Red Team Testing Results

A React application for displaying LLM security evaluation results, including prompt injection and jailbreak testing outcomes.

**Live Demo:** https://testing-results-app.vercel.app/

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS v4** for styling
- **Headless UI** for accessible UI components
- **Heroicons** for icons
- **Zustand** for state management

## Features

- **Tab Navigation** - Switch between Prompt Injection and Jailbreak test results
- **Filtering** - Filter results by severity (Critical, High, Medium, Low) and status (Passed, Failed)
- **Expandable Rows** - View detailed technique information with expand/collapse functionality
- **Thread Status Toggle** - Toggle individual thread status between Passed and Failed
- **Computed Status** - Test status automatically computed from thread results (any failed = test failed)
- **Responsive Design** - Mobile-friendly layout

## Project Structure

```
src/
├── components/
│   ├── Button.tsx
│   ├── Dropdown.tsx
│   ├── ErrorBoundary.tsx
│   ├── LabeledValue.tsx
│   ├── Section.tsx
│   ├── SeverityIndicator.tsx
│   ├── Skeleton.tsx
│   ├── StatusIcon.tsx
│   └── StatusToggle.tsx
├── config/
│   └── design.ts
├── data/
│   └── mockData.ts
├── hooks/
│   └── useTestResultsLoader.ts
├── pages/
│   └── TestResults/
│       ├── index.ts
│       ├── TestResultsPage.tsx
│       ├── Header.tsx
│       ├── FiltersBar.tsx
│       ├── TechniqueList.tsx
│       ├── TechniqueRow.tsx
│       └── ThreadList.tsx
├── services/
│   └── api.ts
├── stores/
│   └── useTestResultsStore.ts
├── types/
│   └── index.ts
├── utils/
│   └── statusHelpers.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```