import re

def update_product_types(content, title, new_types):
    if not new_types:
        replacement = 'productTypes: [],'
    else:
        items = ',\n        '.join([f'{{ name: "{n}" }}' for n in new_types])
        replacement = f'productTypes: [\n        {items}\n      ],'

    pattern = re.compile(
        r'(title:\s*"' + re.escape(title) + r'".*?)productTypes:\s*\[.*?\]\,',
        re.DOTALL
    )
    
    new_content, count = pattern.subn(r'\1' + replacement, content)
    return new_content

with open('src/pages/IndustryDetail.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

updates = [
    ("Decoratives & Waterproofing", [
        "Styrene Acrylic Emulsion",
        "Pure-Acrylic Emulsion",
        "Self-Crosslink Acrylic Emulsion",
        "Styrene Acrylic Emulsion for 1K Water Proofing",
        "Styrene Acrylic Emulsion for 2K Cementitious Water Proofing"
    ]),
    ("Ink", [
        "Film-forming Acrylic Emulsion",
        "Non-film Forming Acrylic Emulsion",
        "Solid Acrylic Resin"
    ]),
    ("Overprint Varnish (OPV)", [
        "Film-forming Acrylic Emulsion",
        "Non-film Forming Acrylic Emulsion",
        "Solid Acrylic Resin"
    ]),
    ("Functional Coating", []),
    ("Metal Coating", [
        "Acrylic Emulsion"
    ]),
    ("Wood Coating", [
        "Acrylic Emulsion",
        "Self-crosslink Acrylic Emulsion"
    ]),
    ("Plastic Coating", []),
    ("Defoamer", []),
    ("Leveling", []),
    ("Dispersing", [])
]

for title, new_types in updates:
    content = update_product_types(content, title, new_types)

with open('src/pages/IndustryDetail.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Data updated successfully.")