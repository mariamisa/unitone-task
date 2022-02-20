import { object, string } from 'yup';

const validationSchema = object({
  name: string().min(4, 'name must be at least 4 char.').required(),
  description: string()
    .min(8, 'Description must be at least 8 char.')
    .required()
});

export default validationSchema;
