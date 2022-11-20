import http from "../shared/http";
import axios from "axios";

const fetchCountries = () => {
    return http.get('/countries')
}

const fetchAllCountries = () => {
    return http.get('/web')
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

const getInstitutionsByCountry = async(id) => {
    try{
        const {data} = await http.get(`/countries/${id}`)
        return data.data.results
    }catch(err){
        console.log(err)
    }
}

const submitBusinessForm = async() => {
   console.log('submit business')
}

const submitInstitutionForm = async(payload) => {
    return http.post('/web/institutions', payload)
}

const getLocation = async () => {
    try{
        const {data} = await axios.get('https://geolocation-db.com/json/')
        return data
    }catch(err){
        console.log(err)
    }
}


const services = {
    fetchCountries,
    submitBusinessForm,
    getLocation,
    getInstitutions,
    getInstitutionsByCountry,
    submitInstitutionForm,
    fetchAllCountries,
}

export default services