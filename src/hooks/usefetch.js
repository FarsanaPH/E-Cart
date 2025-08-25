import { useEffect, useState } from "react"


const usefetch = (url) => {
    const [data,setData] = useState([])

    useEffect(() => {
       fetch(url).then((response) => {
        response.json(). then((result) => {
            setData(result)
        })
       })
    },[url])

    return data
}

export default usefetch