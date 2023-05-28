import { useParams } from 'react-router-dom';
import { loremIpsum } from 'lorem-ipsum';

const BuildPage = ({ index }) => {
    const { id } = useParams();
    return (
        <>
            <h3>Page {index}</h3>
            <div>
                Page {index} {id && <span> - paragraph {id} </span>} content: {loremIpsum({ count: 5 })}
            </div>
        </>
    )
}

export const PageOne = () => BuildPage({ index: 1 });
export const PageTwo = () => BuildPage({ index: 2 });
