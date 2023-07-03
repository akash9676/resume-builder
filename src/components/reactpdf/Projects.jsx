import { Text, View, Line, Svg } from "@react-pdf/renderer";

import styles from "../Styles";

// Create Document Component
const Projects = () => (
    <View>
        <View style={styles.field}>
            <Text>Projects</Text>
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
        <View style={styles.projectsheading}>{/* Chandu will write here */}
        <Text>Image processing model | Deep Learning</Text>
            <View >
        
            </View>
        </View>
    </View>
);

export default Projects;
