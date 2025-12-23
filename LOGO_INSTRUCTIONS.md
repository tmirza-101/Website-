# How to Add the NAMC Logo

## Quick Steps

1. **Get the logo from the main website:**
   - Visit https://www.namcmobeds.org
   - Right-click on the NAMC logo/symbol at the top of the page
   - Select "Save Image As..." or "Download Image"
   - Save it to this folder: `/Users/FSarkari/Website/`

2. **Rename the logo file:**
   - Rename the downloaded file to: `namc-logo.png`
   - (If it's a different format like .jpg or .svg, you can keep that extension and update the HTML files accordingly)

3. **Place the file:**
   - Make sure `namc-logo.png` is in the same folder as `index.html`
   - The file structure should look like:
     ```
     /Users/FSarkari/Website/
     ├── index.html
     ├── namc-logo.png  ← Your logo here
     ├── styles.css
     └── ... (other files)
     ```

4. **Refresh your browser:**
   - The logo will automatically appear in:
     - Top header (next to "NAMC")
     - Login pages (above the title)
     - Dashboard sidebars (at the top)

## Logo Specifications

The CSS is set up to display the logo at:
- **Header**: 60px height (auto width)
- **Login pages**: 80px height (auto width)
- **Dashboard sidebar**: 60px height (auto width)

## Alternative: If logo has a different filename

If your logo file is named something else (e.g., `logo.jpg` or `namc-symbol.svg`), you can either:

**Option 1:** Rename it to `namc-logo.png`

**Option 2:** Update all HTML files to use the correct filename:
   - Search for `namc-logo.png` in all HTML files
   - Replace with your actual filename

## Need Help?

If you need assistance getting the logo or have questions, let me know!

---

**Note:** The website is currently set up with the logo placeholder. Once you add the actual logo file, it will display automatically on all pages.

