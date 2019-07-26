import { INDEX } from '../../constants/resources';

const indexes = models => Object.entries(models).reduce((accumulator, [key, value]) => (
  value.resources.includes(INDEX) ? { ...accumulator, [key]: value } : accumulator
), {});

export default indexes;
