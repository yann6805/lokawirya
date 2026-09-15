const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/DashboardTenagaTerampilPage.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Helper: normalize whitespace for matching
function replaceBadgeWithSpan(content, statusExpr, variantValue) {
  // Match <Badge ... > ... </Badge> blocks that use statusBadgeClass with the given status expr
  const regex = new RegExp(
    `<Badge\\s+className=\\{statusBadgeClass\\[${statusExpr}\\]\\}\\s+variant=\\{${statusExpr} as '${variantValue}'\\}\\s*>\\s*\\{${statusExpr}\\}\\s*</Badge>`,
    'g'
  );
  const replacement = `<span className={statusBadgeClass[${statusExpr}]}>{${statusExpr}}</span>`;
  const result = content.replace(regex, replacement);
  if (result === content) {
    console.log(`WARNING: No match for ${statusExpr} as ${variantValue}`);
  } else {
    console.log(`OK: replaced ${statusExpr} as ${variantValue}`);
  }
  return result;
}

// Fix 1: req.status as 'Menunggu' (incoming requests list)
content = replaceBadgeWithSpan(content, 'req.status', 'Menunggu');

// Fix 2: proj.status as 'Diterima' (active projects)
content = replaceBadgeWithSpan(content, 'proj.status', 'Diterima');

// Fix 3: proj.status as 'Selesai belum dirating' (finished projects)
content = replaceBadgeWithSpan(content, 'proj.status', 'Selesai belum dirating');

// Fix 4: activeWorker.verificationStatus - replace Badge with span using verificationClass helper
const profileBadgeRegex = /<Badge\s+className=\{statusBadgeClass\[activeWorker\.verificationStatus\]\}\s+variant=\{activeWorker\.verificationStatus as 'verified'\}\s*>\s*\{activeWorker\.verificationStatus\}\s*<\/Badge>/g;
const profileReplacement = '<span className={verificationClass(activeWorker.verificationStatus)}>{activeWorker.verificationStatus}</span>';
if (profileBadgeRegex.test(content)) {
  content = content.replace(profileBadgeRegex, profileReplacement);
  console.log('OK: replaced profile verification Badge');
} else {
  console.log('WARNING: No match for profile verification Badge');
}

// Add verificationClass helper after rupiah function
const rupiahRegex = /const rupiah = \(n: number\) => `Rp\$\{n\.toLocaleString\('id-ID'\)}`;\n/;
const helperCode = `const rupiah = (n: number) => \`Rp\${n.toLocaleString('id-ID')}\`;

const verificationClass = (s: Worker["verificationStatus"]): string => {
  if (s === "verified") return "bg-primary/20 text-[#4C7A00]";
  if (s === "pending") return "bg-warning/15 text-[#9A6400]";
  return "bg-gray-border/50 text-gray-dark";
};
`;
if (rupiahRegex.test(content)) {
  content = content.replace(rupiahRegex, helperCode);
  console.log('OK: added verificationClass helper');
} else {
  console.log('WARNING: Could not find rupiah function');
}

fs.writeFileSync(filePath, content);
console.log('\\nFile written successfully');
