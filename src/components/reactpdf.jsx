import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Line,
    Svg,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
    },
    name: {
        marginTop: 20,
        gap: 10,
        display: "flex",
        flexGrow: 1,
        fontSize: 25,
        justifyContent: "center",
    },
    links: {
        marginLeft: 20,
        marginRight: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
});

// Create Document Component
const Reactpdf = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.name}>
                <Text>Gundapuneni</Text>
                <Text>Akash</Text>
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
            <View>
                <Text>Education</Text>
            </View>
            <View>
                <Svg height="20" width="1000">
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
);

export default Reactpdf;
