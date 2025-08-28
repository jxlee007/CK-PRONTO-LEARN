# json_prompt_generator

```
json-prompt-generator/
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── github-mark.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── MainLayout.tsx
│   │   │   └── ResponsiveDivider.tsx
│   │   ├── form/
│   │   │   ├── PromptInput.tsx
│   │   │   ├── FileUploadModal.tsx
│   │   │   ├── FloatingUploadMenu.tsx
│   │   │   ├── ModelInput.tsx
│   │   │   ├── PurposeInput.tsx
│   │   │   ├── NegativeRequirementsInput.tsx
│   │   │   ├── OutputFormatSection/
│   │   │   │   ├── OutputFormatSelector.tsx
│   │   │   │   ├── PrebuiltTemplates.tsx
│   │   │   │   └── CustomFormatInput.tsx
│   │   │   └── FormContainer.tsx
│   │   ├── result/
│   │   │   ├── ResultContainer.tsx
│   │   │   ├── JsonViewer.tsx
│   │   │   └── ActionButtons.tsx
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── separator.tsx
│   │   └── ThemeProvider.tsx
│   ├── lib/
│   │   ├── api/
│   │   │   ├── openrouter.ts
│   │   │   └── types.ts
│   │   ├── store/
│   │   │   └── promptStore.ts
│   │   ├── utils/
│   │   │   ├── fileUtils.ts
│   │   │   ├── themeUtils.ts
│   │   │   ├── validation.ts
│   │   │   └── outputFormatUtils.ts
│   │   ├── constants/
│   │   │   ├── index.ts
│   │   │   └── outputFormats.ts
│   │   └── hooks/
│   │       ├── useOutputFormat.ts
│   │       └── useFormState.ts
│   ├── styles/
│   │   ├── globals.css
│   │   ├── theme.css
│   │   └── animations.css
│   ├── hooks/
│   │   ├── useFileUpload.ts
│   │   └── useApiRequest.ts
│   ├── pages/
│   │   └── index.tsx
│   ├── netlify/
│   │   └── functions/
│   │       └── openrouter-proxy.js
│   ├── App.tsx
│   └── main.tsx
├── netlify.toml
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
├── vite.config.ts
└── README.md
```
