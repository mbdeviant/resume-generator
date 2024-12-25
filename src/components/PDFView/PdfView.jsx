import { Page, Text, View, Document } from "@react-pdf/renderer";

const PDFPreview = ({ personalInfo, educationInfo, experienceInfo }) => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>{personalInfo}</Text>
        </View>
        <View>
          <Text>{educationInfo}</Text>
        </View>
        <View>
          <Text>{experienceInfo}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFPreview;

// so the deal is, pdf view is just an another component that
// you need to stylise separately. use StyleSheet.create(see react-pdf docs)
// since it's a pdf view, user will be able to download it via PDFViewer element
