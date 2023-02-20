import { createBoard } from '@wixc3/react-board';
import { StylePanelGrid } from '../../../components/style-panel-grid/style-panel-grid';
import StylePanelGrid_module from '../../../components/style-panel-grid/style-panel-grid.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'StylePanelGrid',
    Board: () => (
        <StylePanelGrid/>
    ),
});
