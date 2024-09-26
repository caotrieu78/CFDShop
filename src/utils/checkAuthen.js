import { LOCAL_STORAGE } from "@/constants/localStorage"

export const checkAuthen = () => {
    return !!localStorage.getItem(LOCAL_STORAGE.token)
}