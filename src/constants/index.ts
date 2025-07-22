import type {
  FeaturesDataType,
  PreviewdataType,
  VariantsDataType,
} from "@/types";

export const Previewdata: PreviewdataType[] = [
  {
    id: 1,
    name: "Midnight",
    image: "/img/neo-midnight.png",
  },
  {
    id: 2,
    name: "Mystic",
    image: "/img/neo-mystic.png",
  },
  {
    id: 3,
    name: "Glacier",
    image: "/img/neo-glacier.png",
  },
];

export const FeaturesData: FeaturesDataType[] = [
  {
    icon: "✅",
    title: "Accessible & Readable",
    description: "Designed with accessibility & readability in mind",
  },
  {
    icon: "🌗",
    title: "Dark Modes",
    description: "Includes both dark variants",
  },
  {
    icon: "🖥️",
    title: "High-DPI Optimized",
    description: "Optimized for high-DPI & Retina screens",
  },
  {
    icon: "💻",
    title: "Multi-Language Support",
    description: "Perfect for Web, JavaScript, TypeScript, Python, and more",
  },
  {
    icon: "🚀",
    title: "Fast & Flexible",
    description: "Easy installation and switching between variants",
  },
];

export const VariantsData: VariantsDataType[] = [
  {
    name: "NeoSpectrum Midnight",
    type: "Dark",
    description: "Deep & high-contrast, ideal for night coding",
    color: "bg-gray-900 text-white",
  },
  {
    name: "NeoSpectrum Mystic",
    type: "Dark",
    description: "Vibrant purples and blues for an artistic touch",
    color: "bg-purple-800 text-white",
  },
  {
    name: "NeoSpectrum Glacier",
    type: "Dark",
    description: "Cool icy tones with a clean, minimal interface",
    color: "bg-sky-900 text-white",
  },
];

export const marketplaceSteps: string[] = [
  "Open VS Code",
  "Go to Extensions (Ctrl+Shift+X)",
  "Search for NeoSpectrum",
  "Click Install",
  "Use Ctrl+K Ctrl+T to choose a variant",
];

export const manualSteps: string[] = [
  "git clone https://github.com/your-username/neospectrum-vscode-theme.git",
  "cd neospectrum-vscode-theme",
  "npm install",
  "npm run build",
  "code .",
];
