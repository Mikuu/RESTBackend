import { v4 as uuidv4 } from 'uuid';

export const bookUuid = () => {
    return "BID" + uuidv4().replace(/-/g, "");
};
