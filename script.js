const emojis = [
    { emoji: '&#128512;', code: '128512' },
    { emoji: '&#128525;', code: '128525' },
    { emoji: '&#128578;', code: '128578' },
    { emoji: '&#128514;', code: '128514' },
    { emoji: '&#128526;', code: '128526' },
    { emoji: '&#128521;', code: '128521' },
    { emoji: '&#128528;', code: '128528' },
    { emoji: '&#128536;', code: '128536' },
    { emoji: '&#128539;', code: '128539' },
    { emoji: '&#128563;', code: '128563' },
    { emoji: '&#128564;', code: '128564' },
    { emoji: '&#128591;', code: '128591' },
    { emoji: '&#129315;', code: '129315' },
    { emoji: '&#127800;', code: '127800' },
    { emoji: '&#128515;', code: '128515' },
    { emoji: '&#128293;', code: '128293' },
    { emoji: '&#128121;', code: '128121' },
    { emoji: '&#129340;', code: '129340' },
    { emoji: '&#128075;', code: '128075' },
    { emoji: '&#129412;', code: '129412' },
    { emoji: '&#129392;', code: '129392' },
    { emoji: '&#128169;', code: '128169' },
    { emoji: '&#129497;', code: '129497' },
    { emoji: '&#128584;', code: '128584' },
    { emoji: '&#128247;', code: '128247' },
];


const emojiGallery = document.getElementById('emoji-gallery');

emojis.forEach((emojiData) => {
    const emojiElement = document.createElement('div');
    emojiElement.innerHTML = `
    <p>
      <span style="font-size: 5rem;">${emojiData.emoji}</span><br>
      <span>${emojiData.code}</span>
    </p>
  `;
    emojiGallery.appendChild(emojiElement);
});
