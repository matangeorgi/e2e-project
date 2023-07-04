import { createBoard } from '@wixc3/react-board';
import { ThirdParty } from '../../../components/third-party/third-party';

export default createBoard({
    name: 'ThirdParty',
    Board: () => <div className={"shaked"}><ThirdParty /></div>
});
