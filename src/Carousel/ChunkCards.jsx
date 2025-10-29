const chunkCards = (cards) => {
  //   console.log(cards);
  const chunks = [];
  for (let i = 0; i < cards.length; i += 7) {
    chunks.push(cards.slice(i, i + 7));
  }
  return chunks;
};

export default chunkCards;
