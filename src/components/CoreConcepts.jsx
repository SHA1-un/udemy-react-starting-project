import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js'

export default function CoreConcepts() {

    // function buildCoreConceptItems() {
    //     return CORE_CONCEPTS.map((concept) => {
    //         return (
    //             <CoreConcept
    //                 title={concept.title}
    //                 description={concept.description}
    //                 image={concept.image}
    //             />
    //         )
    //     })
    // }
    return (
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                {/* Example: Using a function to build the items dynamically */}
                {/* {buildCoreConceptItems} */}
                {/* Another alternative would be...*/}
                {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept} />)}

                {/* Explicitly typing out the properties */}
                {/* <CoreConcept
                    title={CORE_CONCEPTS[0].title}
                    description={CORE_CONCEPTS[0].description}
                    image={CORE_CONCEPTS[0].image}
                /> */}
                {/* Using the spread operator on a object- Looks to be specific to React */}
                {/* <CoreConcept {...CORE_CONCEPTS[1]} />
                    <CoreConcept {...CORE_CONCEPTS[2]}/>
                    <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            </ul>
        </section>
    )
}