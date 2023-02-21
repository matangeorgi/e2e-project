import { createBoard } from '@wixc3/react-board';
import { States } from '../../../components/states/states';

export default createBoard({
    name: 'States',
    Board: () => <States />
});
