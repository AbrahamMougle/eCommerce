export default function reduce(state,action) {
    switch (action.type) {
        case 'incrementation': 
            return state+1;
        case 'decrementation' :
            return state-1   
         default:
           throw('erreur')
    }
    
}

