/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// import { usePDF } from "@react-pdf/renderer";
import { Education } from "./components/education";
import Reactpdf from "./components/reactpdf";

function App() {
    // const [instance, updateInstance] = usePDF({ document: <Reactpdf /> });
    // above is a something, im just testing for my branch
    // if (instance.loading) return <div>Loading ...</div>;

    // if (instance.error) return <div>Something went wrong: {error}</div>;
    return (
        <>
            {/* <a href={instance.url} download="Resume.pdf">
                Download
            </a> */}
            <Reactpdf />
        </>
    );
}

export default App;
