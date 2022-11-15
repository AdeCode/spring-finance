const fetchCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => {return res.json()})
        .then(data => {
            console.log(data)
            return data
            // let output = '<option>Select a country</option>';
            // data.forEach(country => {
            //     output += `<option>${country.name.common}<option>`
            // });
            // dropDown.innerHTML = output;
        })
        .catch(err => {console.log(err)})
};

const fetchStates = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => {return res.json()})
        .then(data => {
            console.log(data)
            return data
            // let output = '<option>Select a country</option>';
            // data.forEach(country => {
            //     output += `<option>${country.name.common}<option>`
            // });
            // dropDown.innerHTML = output;
        })
        .catch(err => {console.log(err)})
};

const fetchData = {
    fetchCountries,
    fetchStates
} 

export default fetchData