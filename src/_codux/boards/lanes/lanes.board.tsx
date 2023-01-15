import { createBoard } from '@wixc3/react-board';
import { Lanes } from '../../../components/lanes/lanes';

export default createBoard({
    name: 'Lanes',
    Board: () => <Lanes />
});
