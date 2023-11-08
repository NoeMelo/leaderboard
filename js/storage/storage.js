const getItemStorage = (item) =>{
        const value = window.localStorage.getItem(item);
        if(!value){
            return null;
        }
        return value;
    }
const setItemStorage = (item, value) =>{
        window.localStorage.setItem(item, value);
    }
const removeItemStorage = (item) =>{
        window.localStorage.removeItem(item);
    }
const clearItemsStorage = () =>{
        window.localStorage.clear();
    }