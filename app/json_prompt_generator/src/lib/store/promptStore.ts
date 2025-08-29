// Interface for a single uploaded file item
export interface FileItem {
  id: string;
  name: string;
  type: string;
  size: number;
  content: string; // Extracted text content
}

// Type for the different output format modes
export type OutputFormatMode = 'auto' | 'prebuilt' | 'custom';

// Interface for the state of the prompt form
export interface PromptState {
  prompt: string;
  files: FileItem[];
  model: string;
  purpose: string;
  negativeRequirements: string;
  outputFormat: {
    mode: OutputFormatMode;
    prebuiltTemplate: string; // e.g., 'user_profile_json'
    customFormat: string; // e.g., a JSON schema
  };
}

// Interface for the actions that can be performed on the store
export interface PromptActions {
  setPrompt: (prompt: string) => void;
  addFile: (file: FileItem) => void;
  removeFile: (fileId: string) => void;
  setModel: (model: string) => void;
  setPurpose: (purpose: string) => void;
  setNegativeRequirements: (requirements: string) => void;
  setOutputFormatMode: (mode: OutputFormatMode) => void;
  setPrebuiltTemplate: (template: string) => void;
  setCustomFormat: (format: string) => void;
  resetForm: () => void;
}

// The complete store interface, combining state and actions
export interface PromptStore extends PromptState {
  actions: PromptActions;
}
