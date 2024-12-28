import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const PDFPreview = ({ personalInfo, educationInfo, experienceInfo }) => {
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
      fontFamily: "Helvetica",
      color: "#333",
    },
    header: {
      textAlign: "center",
      marginBottom: 20,
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
      marginTop: 4,
    },
    contactInfo: {
      // textAlign: "left",
      marginTop: 10,
      fontSize: 11,
      lineHeight: 1.4,
    },
    section: {
      marginBottom: 20,
    },
    sectionHeader: {
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 8,
      textDecoration: "underline",
    },
    infoRow: {
      marginBottom: 6,
    },
    text: {
      fontSize: 12,
      marginBottom: 4,
    },
    boldText: {
      fontWeight: "bold",
    },
    line: {
      borderBottom: "1px solid #ccc",
      marginVertical: 10,
    },
    duration: {
      fontStyle: "italic",
      color: "#555",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {personalInfo.name} {personalInfo.surname}
          </Text>
          <Text style={styles.title}>{personalInfo.title}</Text>
        </View>

        <View style={styles.contactInfo}>
          <Text>{personalInfo.email || "N/A"}</Text>
          <Text>{personalInfo.number || "N/A"}</Text>
          <Text>{personalInfo.address || "N/A"}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Summary</Text>
          <Text style={styles.text}>{personalInfo.about || "N/A"}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Education</Text>
          {educationInfo.map((edu) => (
            <View key={edu.id} style={styles.infoRow}>
              <Text style={styles.boldText}>{edu.university}</Text>
              <Text>{edu.department}</Text>
              <Text style={styles.duration}>
                From {edu.startDate} to {edu.graduation}
              </Text>
              <View style={styles.line}></View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Experience</Text>
          {experienceInfo.map((exp) => (
            <View key={exp.id} style={styles.infoRow}>
              <Text style={styles.boldText}>{exp.company}</Text>
              <Text>{exp.position}</Text>
              <Text style={styles.duration}>
                From {exp.startDate} to {exp.endDate || "Present"}
              </Text>
              <Text>{exp.description}</Text>
              <View style={styles.line}></View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default PDFPreview;
