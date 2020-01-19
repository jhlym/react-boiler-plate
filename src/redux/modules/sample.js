// https://redux-actions.js.org/api/createaction
// createAction return obj(type, payload)
import { createAction, handleActions } from 'redux-actions';

import createRequestSaga, { createRequestActionTypes } from '../common';
import * as sampleAPI from '../../api/sample';
// https://redux-saga.js.org/docs/api/
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';

const GENERAL_SAMPLE = 'sample/GENERAL_SAMPLE';
const [REQUEST_SAMPLE, REQUEST_SAMPLE_SUCCESS, REQUEST_SAMPLE_FAILURE] = createRequestActionTypes('sample/REQUEST_SAMPLE');

export const sampleGeneral = createAction(GENERAL_SAMPLE);
export const sampleRequest = createAction(REQUEST_SAMPLE);

const sampleRequestSaga = createRequestSaga(REQUEST_SAMPLE, sampleAPI.sample);

export function* sampleSaga() {
  yield takeLatest(REQUEST_SAMPLE, sampleRequestSaga);
}

const initialState = {
  value: null
}

export default handleActions(
  {
    [GENERAL_SAMPLE]: (state, payload) => { },
    [REQUEST_SAMPLE_SUCCESS]: (state, { payload: value }) => ({ ...state, value }),
    [REQUEST_SAMPLE_FAILURE]: (state, { payload: error }) => ({ ...state, error }),
  },
  initialState
)

