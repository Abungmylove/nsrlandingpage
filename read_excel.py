import zipfile
import xml.etree.ElementTree as ET
import glob

def read_xlsx(filename):
    print(f"=== READING: {filename} ===")
    try:
        with zipfile.ZipFile(filename, 'r') as z:
            # Read shared strings
            shared_strings = []
            if 'xl/sharedStrings.xml' in z.namelist():
                tree = ET.fromstring(z.read('xl/sharedStrings.xml'))
                for elem in tree.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}si'):
                    t = elem.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t')
                    shared_strings.append(t.text if t is not None and t.text else '')

            # Read sheet1
            sheet_files = [f for f in z.namelist() if f.startswith('xl/worksheets/sheet')]
            for sf in sheet_files:
                tree = ET.fromstring(z.read(sf))
                rows = tree.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheetData/{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row')
                for r in rows:
                    row_vals = []
                    for c in r.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
                        v = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
                        t = c.attrib.get('t')
                        if v is not None and v.text:
                            val = v.text
                            if t == 's':
                                val = shared_strings[int(val)]
                            row_vals.append(val)
                    if row_vals:
                        print(" | ".join(row_vals))
    except Exception as e:
        print("Error:", e)

for f in glob.glob("gambar fix/*.xlsx"):
    read_xlsx(f)
