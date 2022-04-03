const defaultPreguntas = {
    preguntas: [],
    isLoading: false,
    errors: [],
    totalPages:0,
    currentPage:0,
    itemXPage:10,
    totalItems:0
  }

  export const preguntasReducer = (state = defaultPreguntas, action)=>{
    const {type, payload} = action;
    switch(type){
      case 'PREGUNTAS_LOADING':
        return {...state, isLoading: true};
      case 'PREGUNTAS_FAILED':
        return {...state, isLoading: false, errors:['Error al cargar preguntas']};
      case 'PREGUNTAS_SUCCESS':
        return {
          ...state,
          preguntas:[...payload.preguntas],
          isLoading: false,
          errors:[]
        };
      case 'PREGUNTAS_CLEAR':
        return {
          ...state,
          preguntas: [],
          isLoading: false,
          errors: []
        };
      default:
        return state;
    }
  } 