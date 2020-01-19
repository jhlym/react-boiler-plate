import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import sample, { sampleSaga } from './sample';

const rootReducer = combineReducers({
  // property로는 reducer
  sample,
});

export function* rootSaga() {
  // 파라미터로 saga function 호출
  yield all([sampleSaga()]);
}

export default rootReducer;
