import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  // property로는 reducer
});

export function* rootSaga() {
  // 파라미터로 saga function 호출
  yield all([]);
}

export default rootReducer;
