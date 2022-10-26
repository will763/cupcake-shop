import { loginWithEmailAndPassword } from "./services";

const useLoginViewModel = () => {
    async function newLogin(email: string, password: string) {
        return loginWithEmailAndPassword({ email, password });
    }

    return {
        newLogin
    }
}

export default useLoginViewModel;