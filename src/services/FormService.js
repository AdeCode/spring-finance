import http from "../shared/http";
import axios from "axios";

const fetchCountries = async() => {
    try{
        const {data} = await http.get('/countries')
        const institutions = data.data.results
        return institutions
    }catch(err){
        console.log(err)
    }
}

const getInstitutions = async() => {
    try{
        const {data} = await http.get('/institutions')
        const institutions = data.data.results
        return institutions
    }catch(err){
        console.log(err)
    }
}

// let schools = getInstitutions()

// schools.then((res)=>{
//     console.log(res)
// })

const submitBusinessForm = async() => {
    //console.log(getLocation());
    //console.log(formData)
    multiply.then((result)=>{
        //console.log(result)
    })

    
    // let data = await multiply(2,4)
    // console.log(data)

}

const getLocation = async () => {
    try{
        const {data} = await axios.get('https://geolocation-db.com/json/')
        return data
    }catch(err){
        console.log(err)
    }
}

const multiply = async(a,b) => {
    let result = await a*b
    return result
}

const services = {
    fetchCountries,
    submitBusinessForm,
    getLocation,
    getInstitutions
}

export default services