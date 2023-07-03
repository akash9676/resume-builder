
import {StyleSheet} from '@react-pdf/renderer';
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
        marginLeft: 30,
        marginRight: 30,
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
    projectsheading: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 30,
        fontSize:13,
    },
});

export default styles;