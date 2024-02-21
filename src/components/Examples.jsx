import { useState } from 'react';

import Section from './Section.jsx';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Tabs from './Tabs.jsx'

export default function Examples() {
    const [selectedTopic, setContent] = useState();
    /**
     * @param {'components' | 'jsx' | 'props' | 'state'} selectedButton
     */
    function clickHandler(selectedButton) {
        setContent(selectedButton);
    }

    let tabContent = (<p>Please Select a topic</p>);
    if (selectedTopic) {
        tabContent = (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>);
    }

    return (
        <Section title={"Examples"} id='examples'>
            <Tabs buttons={
                <>
                    <TabButton isSelected={selectedTopic === 'components'} onClick={() => clickHandler('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => clickHandler('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} onClick={() => clickHandler('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} onClick={() => clickHandler('state')}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    );
}