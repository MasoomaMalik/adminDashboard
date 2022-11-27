import {createGlobalState} from 'react-hooks-global-state'
const{useGlobalState,setGlobalState}=createGlobalState({
    isDataAdded:false
})
export {useGlobalState,setGlobalState}