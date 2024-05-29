export default function getFullResponseFromAPI (success){
    return success === true ? Promise.resolve({
        status: 200,
        body: 'Success'
    }) : Promise.reject("The fake API is not working currently")
}