
const initPerson = [{ names: "jun", ages: 18 }]
export default function personReducer(preState = initPerson, actions) {
  const { type, data } = actions
  switch (type) {
    case "addPerson":
      return [...preState, data]
    default:
      return preState
  }
}

