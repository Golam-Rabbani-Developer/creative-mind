import axios from "axios"
import { useEffect } from "react"

const useData = (data, setData) => {
    useEffect(() => {
        axios.get('https://creative-mind-server.vercel.app/creative-mind/courses')
            .then(res => setData(res.data.courses))
    }, [setData])
    return {
        data
    }
}



export const useSingleData = (id, data, setData) => {
    useEffect(() => {
        axios.get(`https://creative-mind-server.vercel.app/creative-mind/course/${id}`)
            .then(res => setData(res.data.course))
    }, [id, setData])
    return {
        data
    }
}


export default useData;
