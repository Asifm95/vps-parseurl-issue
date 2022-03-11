import { usePageContext } from '../../renderer/usePageContext';

export { Page };

function Page() {
    const {
        routeParams: { id },
    } = usePageContext();
    return <p>hello {id}</p>;
}
