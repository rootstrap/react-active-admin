import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useDispatch from '../useDispatch';
import { show } from '../../actions/modelActions';

export default (model, id, deps = []) => {
  const getItem = useDispatch(show, [model, ...deps]);
  useEffect(() => { getItem(model, id); }, [model, ...deps]);
  return useSelector(state => state.models[model].current) || {};
};
