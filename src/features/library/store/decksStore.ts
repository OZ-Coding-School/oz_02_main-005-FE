import { create } from 'zustand';

const initialState = [
  {
    id: 1,
    title: '생물전공용어',
    status: true,
    file_uploads: 'biology.doc',
    gpt_input: '',
    folder_id: 1,
    created_at: '2024-05-20T14:50:40.439757',
    updated_at: '2024-05-21T14:51:38.736475',
    description: '생명공학 전공 강의',
    creator: '호범',
    count: 15,
  },
  {
    id: 2,
    title: '영숙어 10제',
    status: true,
    file_uploads: '10word.doc',
    gpt_input: '',
    folder_id: 1,
    created_at: '2024-05-20T14:50:40.439757',
    updated_at: '2024-05-20T14:51:38.736475',
    description: '영숙어 초급',
    creator: '휘연',
    count: 10,
  },
];

export interface CardsState {
  decks: CardItem[];
  createDeck: () => void;
  newDeck: Omit<CardItem, 'id'> | null;
  setNewDeck: (deck: Omit<CardItem, 'id'>) => void;
  id: number;
}

export const useDecksStore = create<CardsState>()(set => ({
  decks: initialState,
  createDeck: () =>
    set(state => {
      if (state.newDeck) {
        const newDeck = {
          ...state.newDeck,
          id: state.decks.length + 1,
          created_at: new Date().toISOString(),
          status: true,
        };
        return { decks: [...state.decks, newDeck], newDeck: null };
      }
      return state;
    }),
  id: 0,
  newDeck: null,
  setNewDeck: deck => ({ newDeck: deck }),
}));
