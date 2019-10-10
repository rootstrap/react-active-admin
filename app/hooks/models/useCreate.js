import useDispatch from '../useDispatch';
import { create } from '../../actions/modelActions';

export default (model, deps = []) => {
  const dispatch = useDispatch(create, [model, ...deps]);
  return data => dispatch(model, data);
};
