import { useEffect } from 'react';
import useModels from './useModels';
import useDispatch from '../useDispatch';
import { index } from '../../actions/modelActions';

export default (model, deps = []) => {
  const getIndex = useDispatch(index, [model, ...deps]);
  useEffect(() => { getIndex(model); }, deps);
  const items = useModels(modelState => modelState.index);
  return items || [];
};
