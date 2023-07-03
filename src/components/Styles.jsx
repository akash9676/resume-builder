
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
    },
    linkleft: {
        fontSize: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    linkright: {
        fontSize: 12,
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
        fontSize: 16,
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
    education: {
        marginLeft: 30,
        marginRight: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    educationleft: {
        fontSize: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    educationright: {
        fontSize: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-end",
    },
});

export default styles;