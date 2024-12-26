import { Page, Text, View, Document } from "@react-pdf/renderer";

const PDFPreview = ({ personalInfo, educationInfo, experienceInfo }) => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>
            {/* this works */}
            {personalInfo.name} works
            {personalInfo.surname}
            zed
          </Text>
          <Text>{personalInfo.title}</Text>
        </View>
        <View>
          <Text>
            {/* map these info */}
            {/* {educationInfo.university}
            {educationInfo.department} */}
            section2
          </Text>
        </View>
        <View>
          <Text>
            {/* {experienceInfo.company}
            {experienceInfo.position} */}
            section3
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFPreview;
