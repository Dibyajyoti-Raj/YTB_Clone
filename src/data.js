 export const API_Key = 'AIzaSyD21J7oFb_xzHadnHqLQ_JMRnXTLb45Dpo' 

 export const valueConverter = (value) =>{
    if(value >= 1000000)
        return Math.floor(value/1000000)+'M'
    else if(value >= 1000)
        return Math.floor(value/1000)+'K'
    else
        return value
}

