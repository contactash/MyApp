import React, {Dispatch, useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import Loading from '../../common/components/Loading';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Sample = ({loadData, sampleData, isLoading}: Props) => {
  useEffect(() => {
    loadData();
  }, [loadData]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View>
      <Text>{sampleData}</Text>
      <Text>{'This is a sample component'}</Text>
    </View>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.sample.isLoading,
    sampleData: state.sample.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  loadData: () =>
    dispatch({
      type: 'LOAD_SAMPLE',
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
