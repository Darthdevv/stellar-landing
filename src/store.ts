
import { create } from "zustand";
import { devtools } from "zustand/middleware";


// slices method where you create multiple slices and put them in your AppStore

// export interface UserSlice {
//   username : string,
//   email: string,
//   setUsername: (username: string) => void,
//   setEmail: (email: string) => void
// }


// export const createUserSlice: StateCreator<UserSlice> = (set) => ({
//   username: "",
//   email: "",
//   setUsername: (username: string) => set(() => ({ username })),
//   setEmail: (email: string) => set(() => ({ email })),
// });

// export const useAppStore = create(
//   devtools<UserSlice>(
//     (...a) => {
//       return createUserSlice(...a);
//     }
//   )
// )


// this method involves creating multiple stores for each feature


export interface UserStore {
  username : string,
  email: string,
  setUsername: (username: string) => void,
  setEmail: (email: string) => void
}

export interface Post {
  id: string,
  title: string,
  content: string
}

export interface PostStore { 
  posts: Post[],
  setPosts: (posts: Post[]) => void
}

export const useUserStore = create(
  devtools<UserStore>((set) => ({
      username: "",
      email: "",
      setUsername: (username: string) => set(() => ({ username })),
      setEmail: (email: string) => set(() => ({ email })),
  }))
);

export const usePostsStore = create(
  devtools<PostStore>((set) => ({
    posts: [],
    setPosts: (posts : Post[]) => set(() => ({ posts })),
  }))
);

