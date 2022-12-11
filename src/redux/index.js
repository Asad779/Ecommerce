export const addCart = (product) =>{
    return{
        type: "AddCart",
        payload : product
    }
}

export const delCart = (product) =>{
    return{
        type: "delCart",
        payload : product
    }
}