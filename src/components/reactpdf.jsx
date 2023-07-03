import {
    Page,
    Text,
    View,
    Document,
    Line,
    Svg,
    PDFViewer,
} from "@react-pdf/renderer";

import styles from "./Styles";


// Create Document Component
const Reactpdf = () => (
    <PDFViewer className="h-screen w-screen">
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.name}>
                    <Text>Gundapuneni Akash</Text>
                </View>
                <View style={styles.links}>
                    <View style={styles.linkleft}>
                        <Text>LinkedIn</Text>
                        <Text>GitHub</Text>
                    </View>
                    <View style={styles.linkright}>
                        <Text>akashnaidu545@gmail.com</Text>
                        <Text>Portfolio</Text>
                    </View>
                </View>
                <View style={styles.field}>
                    <Text>Education</Text>
                </View>
                <View style={styles.line}>
                    <Svg height="20" width="540">
                        <Line
                            x1="0"
                            y1="0"
                            x2="600"
                            y2="0"
                            strokeWidth={3}
                            stroke="rgb(0,0,0)"
                        />
                    </Svg>
                </View>
                <View>
                    {/* Akash will write here */}
                </View>
                <View>
                    {/* Chnadu will write here about experience */}
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default Reactpdf;
