import { createBoard } from '@wixc3/react-board';
import { Microsoft } from '../../../components/microsoft/microsoft';

export default createBoard({
    name: 'Microsoft',
    Board: () => <Microsoft />
});
