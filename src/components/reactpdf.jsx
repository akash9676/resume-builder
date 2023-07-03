import {
    Page,
    Document,
    PDFViewer,
} from "@react-pdf/renderer";

import styles from "./Styles";
import Intro from "./reactpdf/Intro";
import Education  from "./reactpdf/Education";
import Projects from "./reactpdf/Projects";


// Create Document Component
const Reactpdf = () => (
    <PDFViewer className="h-screen w-screen">
        <Document>
            <Page size="A4" style={styles.page}>
                <Intro />
                <Education />
                <Projects />
            </Page>
        </Document>
    </PDFViewer>
);

export default Reactpdf;
