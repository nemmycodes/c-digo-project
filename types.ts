
export enum FileType {
  FOLDER,
  GITIGNORE,
  TOML,
  CARGO,
  JSON,
  MARKDOWN,
  RUST
}

export interface FileNode {
  name: string;
  type: FileType;
  status: 'U' | 'M' | '';
  children?: FileNode[];
}
