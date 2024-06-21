interface FolderItem {
  count: number;
  folder_title: string;
  id?: number;
  created_at?: string;
  member?: number;
  modified_at?: string;
}

interface CardItem {
  id: number;
  title: string;
  description: string;
  count: number;
  creator: string;
  stars?: number;
  status?: boolean;
  file_uploads?: string;
  gpt_input?: string;
  folder_id?: number;
  created_at?: string;
  updated_at?: string;
}
