import Member from '@/types/Member';
import { create } from 'zustand';

type MemberStore = {
  loading: boolean;
  members: Member[];
  fetchMembers: () => Promise<void>;
};

export const useMember = create<MemberStore>((set) => ({
  loading: false,
  members: [],
  fetchMembers: async () => {
    try {
      set({ loading: true });
      const res = await fetch(`${process.env.API_URL}/members`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { data } = await res.json();
      set({ members: data });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
