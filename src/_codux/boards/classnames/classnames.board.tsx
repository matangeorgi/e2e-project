import { createBoard } from '@wixc3/react-board';
import { Classnames } from '../../../components/classnames/classnames';

export default createBoard({
    name: 'Classnames',
    Board: () => <Classnames />,
    environmentProps: {
        windowWidth: 764,
    },
});
