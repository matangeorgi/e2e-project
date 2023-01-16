import { createBoard } from '@wixc3/react-board';
import { StylePanelGrid } from '../../../components/style-panel-grid/style-panel-grid';
import StylePanelGrid_module from '../../../components/style-panel-grid/style-panel-grid.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'StylePanelGrid',
    Board: () => (
        <StylePanelGrid
            test={10000000000}
            className={Classnames(
                'NEWcLASS',
                StylePanelGrid_module.NEWclass,
                StylePanelGrid_module.dasdasd,
                StylePanelGrid_module.fdgdfg,
                StylePanelGrid_module.sdfsdfdsf,
                StylePanelGrid_module.sdfdsfsdfdsf
            )}
        />
    ),
});
