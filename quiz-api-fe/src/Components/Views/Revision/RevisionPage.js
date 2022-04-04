import Revision from "./Revision";
import { useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {privateAxios} from '../../../Lib/apiClient'
import Loading from '../../UX/Loading/Loading'
const RevisionPage = () => {

    const {jwtToken} = useSelector((state)=>state.security)
    const [isRevisado, setIsRevisado] = useState({})
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
                dispatch({type:"PREGUNTAS_SUCCESS", payload:{preguntas}})
            } catch(ex){
                console.log(ex);
                dispatch({type:"PREGUNTAS_FAILED", payload:{}})
            }
        }
        loadData();
    },[])

    const reviewHandler = async (e)=>{
        e.preventDefault();
        e.stopPropagation();
        const idPregunta = e.target.value;
        try{
            const data = await privateAxios.put(`/api/v1/preguntas/revision/${idPregunta}`,
            {
                revision:false
            },{
                headers:{
                    Authorization:`Bearer ${jwtToken}`
                }
            })
            console.log('Update success');
            console.log(data);
            setIsRevisado({msg:"Marcado como revisado", id:idPregunta})
        } catch(ex){
            console.log(`Error on update: ${ex}`);
            console.log(ex);
        }
        
    }
    const editHandler = (e)=>{
    }
    const {preguntas, isLoading, errors} = useSelector(state=>state.preguntas);
    return (
        <>
            {isLoading && (<Loading/>)}
            <Revision 
            preguntas={preguntas} 
            onEditClick={editHandler}
            onReviewClick={reviewHandler}
            msgRevisado={isRevisado}
            />
        </>
    );
}

export default RevisionPage;