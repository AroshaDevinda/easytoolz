// EasyToolz — Tools Data (v3 — 55 tools)
const TOOLS = [
  // 🖼️ Images
  { id:'image-compressor',      name:'Image Compressor',       desc:'Compress images without losing quality',                icon:'🖼️', cat:'images', file:'image-compressor.html' },
  { id:'image-resizer',         name:'Image Resizer',           desc:'Resize images to any dimension instantly',              icon:'📐', cat:'images', file:'image-resizer.html' },
  { id:'image-to-base64',       name:'Image to Base64',         desc:'Convert images to Base64 encoded string',               icon:'🔢', cat:'images', file:'image-to-base64.html' },
  { id:'image-cropper',         name:'Image Cropper',           desc:'Crop images visually right in your browser',            icon:'✂️', cat:'images', file:'image-cropper.html' },
  { id:'image-converter',       name:'Image Converter',         desc:'Convert JPG, PNG, WebP images to any format',           icon:'🔄', cat:'images', file:'image-converter.html' },
  { id:'image-flip-rotate',     name:'Image Flip & Rotate',     desc:'Flip or rotate images horizontally and vertically',     icon:'🔃', cat:'images', file:'image-flip-rotate.html' },
  { id:'image-watermark',       name:'Image Watermark',         desc:'Add text watermark to your images easily',              icon:'🔖', cat:'images', file:'image-watermark.html' },
  { id:'image-color-extractor', name:'Color Extractor',         desc:'Extract dominant colors and palette from images',       icon:'🎨', cat:'images', file:'image-color-extractor.html' },
  { id:'image-upscale',         name:'Image Upscale',           desc:'Enlarge images 2× or 4× with quality interpolation',   icon:'🔭', cat:'images', file:'image-upscale.html' },
  { id:'image-blur-face',       name:'Blur Face / Area',        desc:'Select and blur any region of an image easily',        icon:'🌫️', cat:'images', file:'image-blur-face.html' },
  { id:'image-remove-bg',       name:'Remove Background',       desc:'Remove image background — free alternatives guide',    icon:'✂️', cat:'images', file:'image-remove-bg.html' },
  { id:'meme-generator',        name:'Meme Generator',          desc:'Add top/bottom text to any image — make a meme!',      icon:'😂', cat:'images', file:'meme-generator.html' },
  { id:'photo-editor',          name:'Photo Editor',            desc:'Adjust brightness, contrast, filters & more',          icon:'🖌️', cat:'images', file:'photo-editor.html' },
  { id:'html-to-image',         name:'HTML to Image',           desc:'Convert HTML/CSS code to a PNG image',                 icon:'🌐', cat:'images', file:'html-to-image.html' },

  // 📄 PDF - Organize
  { id:'pdf-merger',            name:'PDF Merger',              desc:'Merge multiple PDFs into one file easily',              icon:'🔗', cat:'pdf', file:'pdf-merger.html' },
  { id:'pdf-split',             name:'PDF Split',               desc:'Split a PDF into pages or custom ranges',              icon:'✂️', cat:'pdf', file:'pdf-split.html' },
  { id:'pdf-remove-pages',      name:'Remove PDF Pages',        desc:'Delete specific pages from any PDF file',              icon:'🗑️', cat:'pdf', file:'pdf-remove-pages.html' },
  { id:'pdf-extract-pages',     name:'Extract PDF Pages',       desc:'Extract specific pages into a new PDF document',       icon:'📤', cat:'pdf', file:'pdf-extract-pages.html' },
  { id:'pdf-organize',          name:'Organize PDF',            desc:'Reorder and rearrange pages in any PDF',               icon:'📋', cat:'pdf', file:'pdf-organize.html' },
  { id:'scan-to-pdf',           name:'Scan to PDF',             desc:'Use your camera to capture pages and save as PDF',     icon:'📸', cat:'pdf', file:'scan-to-pdf.html' },
  { id:'pdf-compress',          name:'Compress PDF',            desc:'Reduce PDF file size — browser-based compression',     icon:'📦', cat:'pdf', file:'pdf-compress.html' },
  { id:'pdf-repair',            name:'Repair PDF',              desc:'Free alternatives guide for repairing corrupt PDFs',   icon:'🔧', cat:'pdf', file:'pdf-repair.html' },
  { id:'ocr-pdf',               name:'OCR PDF',                 desc:'Extract text from scanned PDFs using Tesseract.js',    icon:'🔍', cat:'pdf', file:'ocr-pdf.html' },
  // Convert to PDF
  { id:'jpg-to-pdf',            name:'JPG to PDF',              desc:'Convert JPG/PNG images to a PDF file instantly',       icon:'🖼️', cat:'pdf', file:'images-to-pdf.html' },
  { id:'word-to-pdf',           name:'WORD to PDF',             desc:'Word to PDF alternatives & free tools guide',          icon:'📝', cat:'pdf', file:'word-to-pdf.html' },
  { id:'powerpoint-to-pdf',     name:'PPT to PDF',              desc:'PowerPoint to PDF alternatives & free tools guide',    icon:'📊', cat:'pdf', file:'powerpoint-to-pdf.html' },
  { id:'excel-to-pdf',          name:'EXCEL to PDF',            desc:'Excel to PDF alternatives & free tools guide',         icon:'📊', cat:'pdf', file:'excel-to-pdf.html' },
  { id:'html-to-pdf',           name:'HTML to PDF',             desc:'Convert HTML/CSS code to a printable PDF',             icon:'🌐', cat:'pdf', file:'html-to-pdf.html' },
  // Convert from PDF
  { id:'pdf-to-images',         name:'PDF to Images',           desc:'Convert each PDF page to a PNG image',                 icon:'🖼️', cat:'pdf', file:'pdf-to-images.html' },
  { id:'pdf-page-counter',      name:'PDF Page Counter',        desc:'Count pages in any PDF file instantly',                icon:'📄', cat:'pdf', file:'pdf-page-counter.html' },
  { id:'pdf-to-word',           name:'PDF to WORD',             desc:'PDF to Word alternatives & free tools guide',          icon:'📝', cat:'pdf', file:'pdf-to-word.html' },
  { id:'pdf-to-excel',          name:'PDF to EXCEL',            desc:'PDF to Excel alternatives & free tools guide',         icon:'📊', cat:'pdf', file:'pdf-to-excel.html' },
  { id:'pdf-to-pdfa',           name:'PDF to PDF/A',            desc:'PDF to PDF/A archival format alternatives guide',      icon:'📋', cat:'pdf', file:'pdf-to-pdfa.html' },
  // Edit PDF
  { id:'pdf-rotate',            name:'Rotate PDF',              desc:'Rotate all or specific pages 90°/180°/270°',           icon:'🔄', cat:'pdf', file:'pdf-rotate.html' },
  { id:'pdf-add-page-numbers',  name:'Add Page Numbers',        desc:'Add page numbers to any PDF — choose position & format',icon:'🔢', cat:'pdf', file:'pdf-add-page-numbers.html' },
  { id:'pdf-add-watermark',     name:'PDF Watermark',           desc:'Stamp text watermark across all PDF pages',            icon:'💧', cat:'pdf', file:'pdf-add-watermark.html' },
  { id:'pdf-text-extractor',    name:'PDF Text Extractor',      desc:'Extract all readable text from any PDF file',          icon:'📋', cat:'pdf', file:'pdf-text-extractor.html' },
  { id:'pdf-compare',           name:'PDF Compare',             desc:'PDF compare alternatives & free tools guide',          icon:'🔍', cat:'pdf', file:'pdf-compare.html' },
  // PDF Security
  { id:'pdf-sign',              name:'Sign PDF',                desc:'Draw signature and embed it into a PDF page',          icon:'✍️', cat:'pdf', file:'pdf-sign.html' },
  { id:'pdf-redact',            name:'Redact PDF',              desc:'PDF redaction alternatives & secure tools guide',      icon:'🖊️', cat:'pdf', file:'pdf-redact.html' },
  // PDF Intelligence
  { id:'pdf-ai-summarizer',     name:'AI PDF Summarizer',       desc:'AI summarizer alternatives & free tools guide',        icon:'🤖', cat:'pdf', file:'pdf-ai-summarizer.html' },
  { id:'pdf-translate',         name:'Translate PDF',           desc:'PDF translation alternatives & free tools guide',      icon:'🌐', cat:'pdf', file:'pdf-translate.html' },

  // 🧮 Calculators
  { id:'age-calculator',        name:'Age Calculator',          desc:'Calculate your exact age in years, months & days',     icon:'🎂', cat:'calculators', file:'age-calculator.html' },
  { id:'bmi-calculator',        name:'BMI Calculator',          desc:'Check your Body Mass Index instantly',                 icon:'⚖️', cat:'calculators', file:'bmi-calculator.html' },
  { id:'percentage-calc',       name:'Percentage Calculator',   desc:'Quick percentage calculations of any kind',            icon:'💯', cat:'calculators', file:'percentage-calculator.html' },
  { id:'emi-calculator',        name:'EMI Calculator',          desc:'Calculate monthly loan & EMI installments',            icon:'🏦', cat:'calculators', file:'emi-calculator.html' },
  { id:'tip-calculator',        name:'Tip Calculator',          desc:'Calculate tips and split bills easily',                icon:'🍽️', cat:'calculators', file:'tip-calculator.html' },
  { id:'discount-calc',         name:'Discount Calculator',     desc:'Find final price after discount instantly',            icon:'🏷️', cat:'calculators', file:'discount-calculator.html' },
  { id:'scientific-calc',       name:'Scientific Calculator',   desc:'Full-featured scientific calculator',                  icon:'🧮', cat:'calculators', file:'scientific-calculator.html' },

  // 📝 Text
  { id:'word-counter',          name:'Word Counter',            desc:'Count words, characters, sentences & paragraphs',     icon:'📝', cat:'text', file:'word-counter.html' },
  { id:'case-converter',        name:'Case Converter',          desc:'Convert text to UPPER, lower, Title Case',            icon:'🔤', cat:'text', file:'case-converter.html' },
  { id:'lorem-ipsum',           name:'Lorem Ipsum Generator',   desc:'Generate placeholder text for your designs',          icon:'📄', cat:'text', file:'lorem-ipsum.html' },
  { id:'text-repeater',         name:'Text Repeater',           desc:'Repeat any text or character multiple times',         icon:'🔁', cat:'text', file:'text-repeater.html' },

  // 🔧 Developer
  { id:'json-formatter',        name:'JSON Formatter',          desc:'Format, validate and beautify JSON data',             icon:'{ }', cat:'developer', file:'json-formatter.html' },
  { id:'url-encoder',           name:'URL Encoder/Decoder',     desc:'Encode or decode any URL or string',                  icon:'🔗', cat:'developer', file:'url-encoder.html' },
  { id:'color-picker',          name:'Color Picker',            desc:'Pick colors and get HEX, RGB, HSL codes',             icon:'🎨', cat:'developer', file:'color-picker.html' },

  // 🛠️ Utilities
  { id:'qr-generator',          name:'QR Code Generator',       desc:'Create QR codes for any text or URL instantly',       icon:'📱', cat:'utilities', file:'qr-code-generator.html' },
  { id:'password-gen',          name:'Password Generator',      desc:'Generate strong, secure random passwords',            icon:'🔐', cat:'utilities', file:'password-generator.html' },
  { id:'unit-converter',        name:'Unit Converter',          desc:'Convert length, weight, temperature & more',          icon:'📏', cat:'utilities', file:'unit-converter.html' },
  { id:'currency-conv',         name:'Currency Converter',      desc:'Convert between world currencies',                    icon:'💱', cat:'utilities', file:'currency-converter.html' },

  // 📅 Daily
  { id:'stopwatch',             name:'Stopwatch',               desc:'Online stopwatch with lap timer',                     icon:'⏱️', cat:'daily', file:'stopwatch.html' },
  { id:'countdown-timer',       name:'Countdown Timer',         desc:'Set a countdown for any duration',                    icon:'⏳', cat:'daily', file:'countdown-timer.html' },
  { id:'notepad',               name:'Online Notepad',          desc:'Quick notes that auto-save in your browser',          icon:'📓', cat:'daily', file:'notepad.html' },
  { id:'todo-list',             name:'To-Do List',              desc:'Simple daily task manager — no sign-up needed',       icon:'✅', cat:'daily', file:'todo-list.html' },
  { id:'date-calculator',       name:'Date Calculator',         desc:'Calculate days, weeks or months between dates',       icon:'📅', cat:'daily', file:'date-calculator.html' },
  { id:'fuel-calculator',       name:'Fuel Cost Calculator',    desc:'Calculate fuel cost for any trip easily',             icon:'⛽', cat:'daily', file:'fuel-calculator.html' },
];
