import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Line,
    Svg,
    PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
    page: {},
    name: {
        margin: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        fontWeight: "thin",
        fontSize: 20,
    },
    links: {
        marginLeft: 20,
        marginRight: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: 14,
    },
    linkleft: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    linkright: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    field: {
        marginTop: 10,
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        fontSize: 15,
    },
    line: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
});

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
                    <Svg height="20" width="550">
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
            </Page>
        </Document>
    </PDFViewer>
);

export default Reactpdf;
