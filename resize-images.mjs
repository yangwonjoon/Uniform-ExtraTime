import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'src/assets');
const outputDir = path.join(__dirname, 'src/assets/resized');

// 지원되지 않는 파일 형식 무시
const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.tiff'];

// 리사이징할 크기 정의
const sizes = [
    { width: 600, suffix: 'small' },
    { width: 1200, suffix: 'medium' },
    { width: 1920, suffix: 'large' },
];

// 출력 디렉토리가 없으면 생성
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 입력 디렉토리에서 모든 이미지 파일을 가져오기
fs.readdir(inputDir, (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
        const inputFile = path.join(inputDir, file);
        const fileExt = path.extname(file).toLowerCase();

        if (!supportedFormats.includes(fileExt)) {
            console.log(`Skipping unsupported file format: ${file}`);
            return;
        }

        // 각 크기별로 리사이징하여 저장
        sizes.forEach(({ width, suffix }) => {
            const outputFile = path.join(outputDir, `${path.parse(file).name}-${suffix}.webp`);

            sharp(inputFile)
                .resize({ width })
                .toFormat('webp')
                .toFile(outputFile, (err) => {
                    if (err) {
                        console.error(`Error processing ${file}:`, err);
                        return;
                    }
                    console.log(`Resized ${file} to ${width}px width as ${outputFile}`);
                });
        });
    });
});
