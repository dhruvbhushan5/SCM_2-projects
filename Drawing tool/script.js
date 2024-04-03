const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');
let isDrawing = false;
let currentTool = 'pen'; // Added default tool
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

function startDrawing(e) {
    isDrawing = true;
    draw(e);
}

function draw(e) {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e;
    context.lineWidth = 5;
    context.lineCap = 'round';
    if (currentTool === 'pen') {
        context.strokeStyle = '#000';
    } else if (currentTool === 'eraser') {
        context.strokeStyle = '#fff';
    }
    context.lineTo(offsetX, offsetY);
    context.stroke();
    context.beginPath();
    context.moveTo(offsetX, offsetY);
}

function stopDrawing() {
    isDrawing = false;
    context.beginPath();
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function setTool(tool) {
    currentTool = tool;
}
