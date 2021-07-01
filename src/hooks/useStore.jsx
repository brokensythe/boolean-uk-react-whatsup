import create from "zustand";

const useStore = create((set, get) => ({
    users: [],
    setUsers: (array) => {set(state=>({users: array}))}
}) )

export default useStore