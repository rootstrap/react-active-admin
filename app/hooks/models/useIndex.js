import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useDispatch from '../useDispatch';
import { index } from '../../actions/modelActions';

export default (model, deps = []) => {
  const getIndex = useDispatch(index, [model, ...deps]);
  useEffect(() => { getIndex(model); }, [model, ...deps]);
  return useSelector(state => state.models[model].index);
};
