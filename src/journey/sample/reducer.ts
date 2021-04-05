import {Action} from '../../types';
import {ERROR_SAMPLE, LOAD_SAMPLE, RECEIVE_SAMPLE} from './constants';

export interface SampleEntity {
  data: any;
  isLoading: boolean;
  isError: boolean;
}

const reducer = (state: SampleEntity, action: Action) => {
  console.log('state**', state);
  switch (action.type) {
    case RECEIVE_SAMPLE: {
      return {
        ...state,
        data: action?.payload?.data,
        isLoading: false,
        isError: false,
      };
    }
    case LOAD_SAMPLE: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ERROR_SAMPLE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return {
        ...state,
        data: 'aila',
        isLoading: true,
        isError: false,
      };
  }
};

export default reducer;
