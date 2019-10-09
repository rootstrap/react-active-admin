import { useEffect } from 'react';
import useSelector from './useSelector';
import useDispatch from '../useDispatch';
import { index } from '../../actions/modelActions';

export default (model, deps) => {
  const getIndex = useDispatch(index, [model, ...(deps || [])]);
  useEffect(() => { getIndex(model); }, ...(deps || []));
  const items = useSelector(model) || [];
  return items;
};
