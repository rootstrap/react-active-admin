import useDispatch from '../useDispatch';
import { update } from '../../actions/modelActions';

export default (model, deps = []) => {
  const dispatch = useDispatch(update, [model, ...deps]);
  return (data, id) => dispatch(model, data, id);
};
