import { createBoard } from '@wixc3/react-board';
import { ConditionalComp } from '../../../components/conditional-comp/conditional-comp';

export default createBoard({
    name: 'ConditionalComp',
    Board: () => <ConditionalComp />
});
