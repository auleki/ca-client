import axios from 'axios'
// const axios = require('axios')

export const getClothes = async (url) => {
    try {
        console.log(await axios.get(url))
        // const result = await axios.get(url)      
        // return result.data 
    } catch (error) {
        console.log(error)
    }
}

export const formatToComma = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

