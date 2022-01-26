import { useState, useEffect } from 'react'


const useFetch = (url) => {
    // bort controller
    const abortCont = new AbortController()

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        setTimeout(() => {
         fetch(url, {signal: abortCont.signal})
         .then(res => {
             if(!res.ok){
                 throw Error("cannot catch the data")
             }
             return res.json()
         }).then(data =>{
            setData(data)
            setIsLoading(false)
            setError(null)
         }).catch(err =>{
             if (err.name === 'AbortError'){
                 console.log("fetch aborted")
             }else{
                setIsLoading(false)
                setError(err.message)
             }
         })
        }, 1000)

        return () => abortCont.abort()
    }, [url])
    return {data, isLoading, error}
}
 
export default useFetch;