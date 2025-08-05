document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');
    const charCountNoSpaces = document.getElementById('charCountNoSpaces');
    const wordCount = document.getElementById('wordCount');
    const lineCount = document.getElementById('lineCount');
    const clearBtn = document.getElementById('clearBtn');

    function updateCounts() {
        const text = textInput.value;
        
        charCount.textContent = text.length;
        
        charCountNoSpaces.textContent = text.replace(/\s/g, '').length;
        
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = text.trim() === '' ? 0 : words.length;
        
        lineCount.textContent = text === '' ? 0 : text.split('\n').length;
    }

    textInput.addEventListener('input', updateCounts);
    
    clearBtn.addEventListener('click', function() {
        textInput.value = '';
        updateCounts();
        textInput.focus();
    });

    updateCounts();
});