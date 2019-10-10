import useDispatch from '../useDispatch';
import { destroy } from '../../actions/modelActions';

export default (model, deps = []) => {
  const dispatch = useDispatch(destroy, [model, ...deps]);
  return id => dispatch(model, id);
};
