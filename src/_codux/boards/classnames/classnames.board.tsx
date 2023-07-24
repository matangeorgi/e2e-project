import { createBoard } from '@wixc3/react-board';
import { Classnames } from '../../../components/classnames/classnames';
import Classnames_module from '../../../components/classnames/classnames.module.scss';

export default createBoard({
    name: 'Classnames',
    Board: () => <Classnames className={Classnames_module.adsasd} />,
    environmentProps: {
        windowWidth: 764,
    },
});
