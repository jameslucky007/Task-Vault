const fs = require('fs');
const file = 'src/components/landing/BentoGrid.tsx';
let lines = fs.readFileSync(file, 'utf-8').split(/\r?\n/);

const startIdx = lines.findIndex(l => l.includes('{/* BOTTOM ROW: EXACTLY 3 CARDS */}'));
const endIdx = lines.findIndex((l, i) => i > startIdx && l.includes('</div>   </div>'));

if (startIdx !== -1 && endIdx !== -1) {
    let block = lines.slice(startIdx, endIdx);
    
    lines[endIdx] = '          </div>'; 
    block.push('</div>');
    
    const gridColIdx = block.findIndex(l => l.includes('grid-cols-3'));
    if (gridColIdx !== -1) {
       block[gridColIdx] = block[gridColIdx].replace('grid-cols-3 gap-6 w-full flex-1 h-full', 'grid-cols-1 lg:grid-cols-3 gap-6 w-full h-full mt-8');
    }
    
    const rightSideIdx = lines.findIndex(l => l.includes('{/* RIGHT SIDE: PHONE MOCKUP */}'));
    if (rightSideIdx !== -1) {
        const mainEndIdx = lines.findIndex(l => l.includes('</main>'));
        lines.splice(mainEndIdx - 1, 0, ...block);
    }
}

fs.writeFileSync(file, lines.join('\n'));
console.log('Moved bottom row to take full width!');
