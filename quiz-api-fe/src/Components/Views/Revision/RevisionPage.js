import Revision from "./Revision";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import {privateAxios} from '../../../Lib/apiClient'
import Loading from '../../UX/Loading/Loading'
const RevisionPage = () => {

    const {jwtToken} = useSelector((state)=>state.security)
    // console.log(`jwt: ${jwtToken}`);
    const dispatch = useDispatch();
    useEffect(()=>{
        const loadData = async ()=>{ 
            dispatch({type:"PREGUNTAS_LOADING", payload:{}})
            // getPreguntasRevision
            try{
                const {data: {
                    preguntas, status

                }} = await privateAxios.get('/api/v1/preguntas/getPreguntasRevision',{
                    headers:{
                        Authorization: `Bearer ${jwtToken}`
                    }
                });
                console.log(preguntas);
                dispatch({type:"PREGUNTAS_SUCCESS", payload:{preguntas}})
            } catch(ex){
                console.log(ex);
                dispatch({type:"PREGUNTAS_FAILED", payload:{}})
            }
        }
        loadData();
    },[])
    const {preguntas, isLoading, errors} = useSelector(state=>state.preguntas);
    return (
        <>
            {isLoading && (<Loading/>)}
            <Revision preguntas={preguntas}/>
        </>
    );
}

export default RevisionPage;