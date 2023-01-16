import { createBoard } from '@wixc3/react-board';
import { Classes } from '../../../components/classes/classes';
import Classes_module from '../../../components/classes/classes.module.scss';

export default createBoard({
    name: 'Classes',
    Board: () => (
        <Classes
            className={`${Classes_module.Bombastic} ${Classes_module.extra} ${Classes_module.extra2} ${Classes_module.extra3} ${Classes_module.extra4} ${Classes_module.extra5} ${Classes_module.newCLASS} ${Classes_module.dxv} ${Classes_module.dsfsdfsd} ${Classes_module.asdasdasdsadasdasdasdasdasdsadasdasd}`}
        />
    ),
});
