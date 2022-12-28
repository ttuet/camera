import { AxiosFactory } from '../../lib/axios';
import { PERSON_API } from '../../utils/constants';

export const personService = AxiosFactory(PERSON_API);
