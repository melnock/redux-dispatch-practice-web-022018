export let state;


export function managePets(state={pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return {pets: [...state.pets, action.pet] }
      break;
    case "REMOVE_PET":
      const newpets = state.pets.filter((fr)=>{ return fr.id !== action.id})
      return {pets: [...newpets]}
      break;
    default:
      return state

  }
}

export function dispatch(action){
  state= managePets(state, action)
  document.getElementById('container').innerHTML = render()
}

export function render(){
  const pets = state.pets.map((pet)=>('<li>'+pet.name+'</li>'))

  return('<ul>'+ pets.join() +'</ul>');

}
