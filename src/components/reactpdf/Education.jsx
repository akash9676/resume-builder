import { Text, View, Line, Svg } from "@react-pdf/renderer";

import styles from "../Styles";

// Create Document Component
const Education = () => (
    <View>
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
        <View style={styles.education}>
            {/* Akash will write here */}
            <View style={styles.educationleft}>
                <Text>Guru Nank Institutions Technical Campus</Text>
                <Text>8.03 CSE-IOT</Text>
            </View>
            <View style={styles.educationright}>
                <Text>Nov,2020-24</Text>
                <Text>Hyderbad,India</Text>
            </View>
        </View>
    </View>
);

export default Education;
