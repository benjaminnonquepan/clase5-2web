import os
import re
import sys

errors = []
html_files = sorted(f for f in os.listdir(".") if f.endswith(".html"))

for name in html_files:
    with open(name, encoding="utf-8") as fh:
        content = fh.read()
    for attr, href in re.findall(r'(href|src)="([^"]+)"', content):
        if href.startswith(("http", "mailto:", "data:")):
            continue
        target = href.partition("#")[0]
        if target and not os.path.exists(target):
            errors.append(f"{name}: {attr} roto -> {href}")

required = ["index.html", "style.css", "script.js", "manifest.json", "icons/icon.svg"]
for path in required:
    if not os.path.exists(path):
        errors.append(f"falta archivo requerido: {path}")

if errors:
    print("Errores:")
    for e in errors:
        print(f"  - {e}")
    sys.exit(1)

print(f"OK: {len(html_files)} páginas HTML, todos los enlaces internos resuelven y los archivos clave existen.")
