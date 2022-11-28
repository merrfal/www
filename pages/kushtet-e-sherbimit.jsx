import { Terms as Meta } from '../data/metas'
import { Terms as Content } from '../data/content'
import { Page } from '../ui/pages';

const Route = () => <Page meta={<Meta />} content={Content} />;
export default Route;