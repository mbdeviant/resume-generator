import { Page, Text, View, Document } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

export default function PdfView() {
  const PreviewPDF = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <div>
        <PDFViewer>
          <PreviewPDF width="100%" height="100%" />
        </PDFViewer>
      </div>
    </div>
  );
}
