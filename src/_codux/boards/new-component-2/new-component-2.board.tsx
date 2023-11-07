import { createBoard } from '@wixc3/react-board';
import { NewComponent2 } from '../../../components/new-component-2/new-component-2';

const Seasons = {
    Summer: 'summer',
    Autumn: 'autumn',
    Winter: 'winter',
    Spring: 'spring',
};

export default createBoard({
    name: 'Visualizers',
    Board: () => (
        <NewComponent2
            enum={Seasons}
            arr={[1, 2, 3, 4, 55454]}
            color={'redגגגג'}
            obj={{ test: 'test' }}
            bool={false}
            func={() => console.log('hey')}
        />
    ),
});
