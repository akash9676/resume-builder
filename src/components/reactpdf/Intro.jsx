import {
    Text,
    View,
} from "@react-pdf/renderer";

import styles from "../Styles";

// Create Document Component
const Intro = () => (
    <View>
        <View style={styles.name}>
            <Text>Vishnu Chiluveri</Text>
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
    </View>
);

export default Intro;
