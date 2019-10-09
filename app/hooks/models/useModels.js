import { useSelector } from 'react-redux';

export default (selector = i => i) => useSelector(state => selector(state.models));
