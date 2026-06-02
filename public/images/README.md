# Logo Instructions

## Required Logo File

Please save the CBRS logo to this directory as:

**`cbrs-logo.svg`** (SVG format recommended)

or

**`cbrs-logo.png`** (PNG format with transparent background)

### Logo Specifications

- **Format**: SVG (preferred) or PNG
- **Dimensions**: Approximately 400px × 200px (will be scaled to fit)
- **Background**: Transparent
- **Colors**:
  - Orange/Terracotta arcs: `#E07542` (cbrs-terracotta-600)
  - Navy blue letters: `#1E3A5F` (cbrs-navy-900)
  - Olive/Green letters: `#6B7F3C` (cbrs-olive-600)

### File Location

Place the logo file here:
```
/public/images/cbrs-logo.svg
```

The header component will automatically display the logo once the file is in place.

### Updating the Header

If using a PNG instead of SVG, update the Image src in:
```
src/components/layout/Header.tsx (line 45)
```

Change from:
```tsx
src="/images/cbrs-logo.svg"
```

To:
```tsx
src="/images/cbrs-logo.png"
```
