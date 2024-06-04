const updateUniqueItems = (set) => {
    try{
            const newMap = []
            set.forEach(x => x[1] == 1 ? newMap.push([x[0], 100]) : newMap.push(x))
            
            return newMap;
;    }
    catch (err){
        throw new Error(err);
    }
}
export default updateUniqueItems;