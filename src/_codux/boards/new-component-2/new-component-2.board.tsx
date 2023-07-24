import { createBoard } from '@wixc3/react-board';
import { NewComponent2 } from '../../../components/new-component-2/new-component-2';
import { Seasons } from '../../../components/classes/classes';

export default createBoard({
    name: 'Visualizers',
    Board: () => (
        <NewComponent2
            arr={[1, 2, 3, 4]}
            color={'red'}
            obj={{ test: 'test' }}
            bool={false}
            func={() => console.log('hey')}
            enum={Seasons.winter}
        />
    ),
});
