function gcdByDivisionTable(numbers) {
    let steps = '';
    let values = [...numbers]; // สำเนาค่าไว้ใช้ใน loop
    let factor = 2;
    let gcdFactors = [];

    steps += values.join(' ') + '\n'; // บรรทัดแรกแสดงตัวเลขตั้งต้น

    while (true) {
        // เช็คว่า factor นี้หารทุกจำนวนใน values ลงตัวหรือไม่
        if (values.every(v => v % factor === 0)) {
            gcdFactors.push(factor);
            steps += factor + '| ' + values.join(' ') + '\n';

            // หารทุกตัวด้วย factor
            values = values.map(v => v / factor);
        } else {
            // ลอง factor ถัดไป
            factor++;
            // ถ้า factor มากกว่าตัวน้อยสุด ก็หยุด
            if (factor > Math.min(...values)) break;
        }
    }

    steps += '   ' + values.join(' ') + '\n';
    let result = gcdFactors.reduce((a, b) => a * b, 1);
    steps += `\nดังนั้น ห.ร.ม. ของ ${numbers.join(', ')} คือ ${gcdFactors.join('×')} = ${result}`;
    return steps;
}
export {gcdByDivisionTable};