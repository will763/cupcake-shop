interface ProductParams {
    id: string | number
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            login: undefined
            signup: undefined
            home: undefined
            feedback: undefined
            RegisterProduct: undefined
            Product: ProductParams
        }
    }
}