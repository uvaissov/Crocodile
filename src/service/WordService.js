import wordsData from '../data/Words.json'
import { WORD, PHRASE } from '../wordTypes'

class WordService {
  words = { 0: { WORD: [], PHRASE: []}, 1: { WORD: [], PHRASE: []}, 2: { WORD: [], PHRASE: []}}
  constructor() {
    console.log(this.words)
    for (let i = 0; i < wordsData.length; i++) {
      console.log(wordsData[i])
      if (wordsData[i].level === '1') {
        this.words[0][WORD] = [
          ...this.words[0][WORD],
          wordsData[i]
        ]
      } else if (wordsData[i].level === '1+') {
        this.words[0][PHRASE] = [
          ...this.words[0][PHRASE],
          wordsData[i]
        ]
      } else if (wordsData[i].level === '2') {
        this.words[1][WORD] = [
          ...this.words[1][WORD],
          wordsData[i]
        ]
      } else if (wordsData[i].level === '2+') {
        this.words[1][PHRASE] = [
          ...this.words[1][PHRASE],
          wordsData[i]
        ]
      } else if (wordsData[i].level === '3') {
        this.words[2][WORD] = [
          ...this.words[2][WORD],
          wordsData[i]
        ]
      } else if (wordsData[i].level === '3+') {
        this.words[2][PHRASE] = [
          ...this.words[2][PHRASE],
          wordsData[i]
        ]
      }
    }
  }

  async getWord(level, type) {
    const array = this.words[level][type]
    const max = array.length
    const min = 0
    const index = Math.floor(Math.random() * (max - min)) + min
    return array[index]
  }
}

export default WordService
