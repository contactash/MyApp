import {ERROR_SAMPLE, LOAD_SAMPLE, RECEIVE_SAMPLE} from './constants';
import {Action} from '../../types';

export const receiveSample = (data: string): Action => ({
  type: RECEIVE_SAMPLE,
  payload: {
    data,
  },
});

export const loadSample = (): Action => ({
  type: LOAD_SAMPLE,
});

export const errorSample = (error: unknown): Action => ({
  type: ERROR_SAMPLE,
  payload: {
    error,
  },
});
