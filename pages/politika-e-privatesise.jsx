import { Privacy as Meta } from '../data/metas'
import { Privacy as Content } from '../data/content'
import { Page } from '../ui/pages';

const Route = () => <Page meta={<Meta />} content={Content} />;
export default Route;