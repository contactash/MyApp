import {all, fork} from 'redux-saga/effects';
import {watchSample} from './journey/sample/flowSaga';

export default function* appRoot() {
  yield all([fork(sampleRoot)]);
}

export function* sampleRoot() {
  yield all([watchSample()]);
}
