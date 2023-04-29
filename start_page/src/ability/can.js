import { createContextualCan } from '@casl/react';
import CaslContext from './caslContext';

const Can = createContextualCan(CaslContext.Consumer);

export default Can;