import { loremIpsum } from 'lorem-ipsum';

const getPage = (index) => (
    <>
        <h3>Page {index}</h3>
        <div>
            Page {index} content: {loremIpsum({ count: 5 })}
        </div>
    </>
);

export const PageOne = () => getPage(1);
export const PageTwo = () => getPage(2);