import {call, take, put} from 'redux-saga/effects';
import {LOAD_SAMPLE} from './constants';
import {errorSample, loadSample, receiveSample} from './actions';

function* loadSampleSaga() {
  try {
    yield put(loadSample());
    const data = 'fully loaded from flowSaga';
    yield put(receiveSample(data));
  } catch (e) {
    yield put(errorSample(e));
    console.log('handle error', e);
  }
}

export function* watchSample() {
  while (yield take(LOAD_SAMPLE)) {
    yield call(loadSampleSaga);
  }
}
