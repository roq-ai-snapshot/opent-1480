import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  table_id: yup.string().nullable().required(),
});
