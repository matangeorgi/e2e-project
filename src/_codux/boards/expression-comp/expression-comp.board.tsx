import { createBoard } from '@wixc3/react-board';
import { ExpressionComp } from '../../../components/expression-comp/expression-comp';

export default createBoard({
    name: 'ExpressionAndRepater',
    Board: () => (
        <ExpressionComp>
            <div />
        </ExpressionComp>
    ),
});
