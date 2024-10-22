import { useEffect } from 'react'
import { db } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'

export const useFethDocument = (docColletion, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        const loadDocument = async () => {
            setLoading(true)

            try{
                const docRef = await doc(db, docColletion, id)
                const docSnpap = await getDoc(docRef)

                setDocument(docSnpap.data())
            }catch(error) {
                console.error(error.message)
                setError(error.message)
            }

            setDocument(false)
        }
    }, [docColletion, id])

    console.log(document)

    return{
        document,
        loading,
        error
    }
}