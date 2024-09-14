export default function reduce2(tasks,action) {
    switch (action.type) {
        case 'Ajouter': 
            return [
                ...tasks,
                {
                  id:action.id,
                  text:action.text,
                  done: false,
                },
              ] ;
        case 'Supprimer' :
            return (tasks.filter((t) => t.id !== action.taskId));
        case 'changer' :
            return (
                tasks.map((t) => {
                  if (t.id === task.id) {
                    return task;
                  } else {
                    return t;
                  }
                })
              );     
         default:
           throw('erreur')
    }
    
}