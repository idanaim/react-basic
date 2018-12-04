const log = () => next => action => {
  console.log(`ACTION idan : ${action.type}`, action);
  next(action);
}

export default log;