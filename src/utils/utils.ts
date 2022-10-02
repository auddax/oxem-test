function fillInputTrack(target: HTMLInputElement) {
  if (!target.id.includes('Range')) return;
  const { style } = target;
  const percentage = ((Number(target.value) - Number(target.min))
    / (Number(target.max) - Number(target.min))) * 100;
  style.backgroundImage = `linear-gradient(90deg, #FF9514 ${percentage}%, transparent ${percentage}%)`;
}

export default fillInputTrack;
