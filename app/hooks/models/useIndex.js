import { useEffect } from 'react';
import useSelector from './useSelector';
import useDispatch from '../useDispatch';
import { index } from '../../actions/modelActions';

export default (model) => {
  const getIndex = useDispatch(index, [model, []]);
  useEffect(() => { getIndex(model); }, []);
  const items = useSelector(model) || [];
  return items;
};
