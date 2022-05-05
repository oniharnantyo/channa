import moment from 'moment';
import 'moment/locale/id';

export const formatDate = (date: Date, format: string) =>
  moment(date).locale('id').local().format(format);
