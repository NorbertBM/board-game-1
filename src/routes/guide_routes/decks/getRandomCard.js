export function getRandomCard(cardArray, setIsLoading, setSelectedCard) {
  setIsLoading(true);

  const randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];
  setTimeout(() => {
    setSelectedCard(randomCard);
    setIsLoading(false);
  }, 2000);
}
