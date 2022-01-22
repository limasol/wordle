import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'

export const shareStatus = (guesses: string[]) => {
  let shareText = 'Wordle (BOS) ' +
                  solutionIndex +
                  ' ' +
                  guesses.length +
                  '/6\n\n' +
                  generateEmojiGrid(guesses);
  navigator.clipboard.writeText(shareText);

  const shareData = {
    // title: 'Wordle (BOS)',
    text: shareText,
    // url: 'https://elahmo.github.io/wordle'
  }
  navigator.share(shareData);
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
